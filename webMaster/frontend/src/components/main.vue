<template>
  <div id="app">
    <mu-appbar>
      <div class="title">
        网页大师
        <mu-badge class="description" content="VUE代码生成器 " color="#00695c"/>
      </div>
      <mu-icon-button icon="share" slot="right" @click="share.open=true"/>
      <mu-icon-button icon="settings" slot="right" @click="setting.open=true"/>
    </mu-appbar>
    <mu-row class="main-content" v-if="isFinishLabel">
      <mu-col class="attributes" :width="width.attr" :tablet="width.attr" :desktop="width.attr">
        <mu-sub-header class="header">
          <mu-select-field class="select-field" autoWidth v-model="selectField.value">
            <mu-menu-item title="属性" value="属性">
            </mu-menu-item>
            <mu-menu-item title="组件树" value="组件树">
            </mu-menu-item>
          </mu-select-field>
          <span><a class="parent-component" v-if="parentComponent" @click="switchComponent">┡
              {{ parentComponent.info.name }}</a> {{ current.info ? ' - ' + current.info.name : '' }}</span>
        </mu-sub-header>
        <attributes v-if="selectField.value==='属性'" class="attributes-content"/>
        <component-tree v-if="selectField.value==='组件树'" class="component-tree"
                        :components="$store.state.components.filter(c=>!c.parentId)"/>
        <div class="attributes-bottom" v-if="current.info">
          <mu-flat-button label="UI文档" @click="openUiDocument"/>
          <mu-flat-button label="操作" @click="oprate"/>
        </div>
      </mu-col>
      <mu-col class="preview" :width="width.preview" :tablet="width.preview" :desktop="width.preview">
        <preview ref="preview"/>
      </mu-col>
      <mu-col class="components" :width="width.components" :tablet="width.components" :desktop="width.components">
        <components ref="components"/>
      </mu-col>
    </mu-row>
    <mu-row v-if="!isFinishLabel">
      <mu-col style="width: 15%; background-color: #e0f2f1; min-height: 500px">
        <div class="result-box">
          <div style="display: flex; flex-direction: column">
            <div style="display: flex; flex-direction: row; justify-content: space-around">
              <div class="edit_button" @click="edit">编辑</div>
              <div id="export" class="finish_button" @click="finish">完成</div>
            </div>
            <div class="result-tittle" style="">标注结果</div>
          </div>
          <div class="result-content">
            <div v-for="(item,key) in labelResult" :key="key" class="result-item">
              <b>{{ key }}</b>
              <div>
                <i>{{ key }}{{ item.shape }}</i>
              </div>
              <div class="result-sub-box-icon">
                <span title="编辑" @click="handleCommand('edit',item.id,key)" style="cursor: pointer"
                      class="el-icon-edit-outline"></span>
                <span style="padding-right: 10px"></span>
                <span title="删除" @click="handleCommand('delete',item.id,key)" style="cursor: pointer"
                      class="el-icon-delete"></span>
              </div>
            </div>
          </div>
        </div>
      </mu-col>
      <mu-col style="width: 85%;">
        <div style="display: flex; flex-direction:row;">
          <mu-col v-loading="loading" id="canvas-box" style="width: 85%;">
            <canvas id="label-canvas" style="display: block;width: 100%;height:100%"></canvas>
            <img id="img-test" v-if="activeIndex%3 === 0 " src="../assets/img/kotei_9628.png"
                 style="max-width: 100%;display: none;">
          </mu-col>
          <mu-col style="width: 15%;">
            <div class="controlPanel">
              <div style="margin-top: 0px; margin-bottom: 15px; color: #00695c; font-weight: bold">类型</div>
              <div v-for="item in shapes" :key="item.val"
                   :class="[shape.val === item.val ?'contro-item active': 'contro-item']" @click="handleShape(item)">
                <mu-icon :value="item.icon"/>
                {{ item.text }}
              </div>
            </div>
          </mu-col>
        </div>

      </mu-col>
    </mu-row>
    <mu-dialog :open="setting.open" @close="setting.open=false" title="设置" scrollable>
      <br>
      <mu-checkbox label="选中边框效果" v-model="setting.selectEffect" @change="setSelectEffect"/>
      <br/>
      <mu-flat-button primary label="关闭" @click="setting.open=false" slot="actions"/>
    </mu-dialog>
    <mu-dialog :open="share.open" @close="share.open=false" title="分享当前布局" scrollable>
      <br>
      <mu-flat-button label="点击生成" @click="createShare" v-if="!share.url"/>
      <br>
      <mu-text-field v-model="share.url" type="url" :disabled="true" hintText="分享地址" label="分享地址" fullWidth/>
      <mu-text-field v-model="share.experience" type="url" :disabled="true" label="体验地址" hintText="体验地址" fullWidth/>
      <br/>
      <mu-flat-button primary label="关闭" @click="share.open=false" slot="actions"/>
    </mu-dialog>
  </div>
</template>
<script>
import attributes from './attributes'
import components from './components'
import preview from './preview'
import componentTree from './componentTree.vue'
import {saveAs} from 'file-saver'

export default {
  name: 'app',
  data() {
    return {
      id: 0,
      loading: true,
      fabricObj: null,
      fabricJson: {},
      drawingObject: null, //绘制对象
      moveCount: 1,
      mouseFrom: {},
      mouseTo: {},
      doDrawing: false,
      activeIndex: 0,
      imgW: 0,
      imgH: 0,
      dialog: false,
      imgDialog: false,
      exportBaseData: '',
      ableEdit: false,
      scale: 1,
      shape: {
        text: '文本',
        val: 'text',
        fill: 'rgba(85, 239, 196,0.1)',
        stroke: '#00b894',
        icon: 'text_fields'
      },
      shapeP: {'text': 0, 'link': 1, 'image': 2, 'button': 3, 'list': 4, 'searchInput': 5, 'input': 6},
      shapes: [{
        text: '文本',
        val: 'text',
        fill: 'rgba(85, 239, 196,0.1)',
        stroke: '#00b894',
        icon: 'text_fields'
      },
        {
          text: '链接',
          val: 'link',
          fill: 'rgba(129, 236, 236,0.1)',
          stroke: '#81ecec',
          icon: 'link'
        },
        {
          text: '图片',
          val: 'image',
          fill: 'rgba(9, 132, 227,0.1)',
          stroke: '#0984e3',
          icon: 'image'
        },
        {
          text: '按钮',
          val: 'button',
          fill: 'rgba(232, 67, 147,0.1)',
          stroke: '#e84393',
          icon: 'panorama_fish_eye'
        },
        {
          text: '列表',
          val: 'list',
          fill: 'rgba(178, 190, 195,0.1)',
          stroke: '#b2bec3',
          icon: 'dehaze'
        },
        {
          text: '搜索框',
          val: 'searchInput',
          fill: 'rgba(255, 234, 167,0.1)',
          stroke: '#ffeaa7',
          icon: 'search'
        },
        {
          text: '输入框',
          val: 'input',
          fill: 'rgba(250, 177, 160,0.1)',
          stroke: '#fab1a0',
          icon: 'input'
        },
      ],
      labelResult: [],
      setting: {
        open: false,
        selectEffect: true
      },
      share: {
        open: false,
        url: '',
        experience: ''
      },
      selectField: {
        value: '属性'
      },
      isFinishLabel: false,
      xml: '<object>\n' +
        '<name>link</name>\n' +
        '<xmin>493</xmin>\n' +
        '<ymin>22</ymin>\n' +
        '<xmax>561</xmax>\n' +
        '<ymax>44</ymax>\n' +
        '</object>\n' +
        '<object>\n' +
        '<name>link</name>\n' +
        '<xmin>583</xmin>\n' +
        '<ymin>22</ymin>\n' +
        '<xmax>673</xmax>\n' +
        '<ymax>44</ymax>\n' +
        '</object>\n' +
        '<object>\n' +
        '<name>image</name>\n' +
        '<xmin>246</xmin>\n' +
        '<ymin>673</ymin>\n' +
        '<xmax>381</xmax>\n' +
        '<ymax>808</ymax>\n' +
        '</object>\n' +
        '<object>\n' +
        '<name>image</name>\n' +
        '<xmin>1190</xmin>\n' +
        '<ymin>651</ymin>\n' +
        '<xmax>1347</xmax>\n' +
        '<ymax>785</ymax>\n' +
        '</object>\n' +
        '<object>\n' +
        '<name>image</name>\n' +
        '<xmin>718</xmin>\n' +
        '<ymin>651</ymin>\n' +
        '<xmax>853</xmax>\n' +
        '<ymax>785</ymax>\n' +
        '</object>\n' +
        '<object>\n' +
        '<name>image</name>\n' +
        '<xmin>22</xmin>\n' +
        '<ymin>0</ymin>\n' +
        '<xmax>202</xmax>\n' +
        '<ymax>67</ymax>\n' +
        '</object>\n' +
        '<object>\n' +
        '<name>image</name>\n' +
        '<xmin>1661</xmin>\n' +
        '<ymin>673</ymin>\n' +
        '<xmax>1796</xmax>\n' +
        '<ymax>808</ymax>\n' +
        '</object>\n' +
        '<object>\n' +
        '<name>image</name>\n' +
        '<xmin>1010</xmin>\n' +
        '<ymin>651</ymin>\n' +
        '<xmax>1167</xmax>\n' +
        '<ymax>718</ymax>\n' +
        '</object>\n' +
        '<object>\n' +
        '<name>image</name>\n' +
        '<xmin>0</xmin>\n' +
        '<ymin>67</ymin>\n' +
        '<xmax>1661</xmax>\n' +
        '<ymax>628</ymax>\n' +
        '</object>\n' +
        '<object>\n' +
        '<name>image</name>\n' +
        '<xmin>67</xmin>\n' +
        '<ymin>651</ymin>\n' +
        '<xmax>224</xmax>\n' +
        '<ymax>718</ymax>\n' +
        '</object>\n' +
        '<object>\n' +
        '<name>image</name>\n' +
        '<xmin>538</xmin>\n' +
        '<ymin>673</ymin>\n' +
        '<xmax>696</xmax>\n' +
        '<ymax>740</ymax>\n' +
        '</object>\n' +
        '<object>\n' +
        '<name>image</name>\n' +
        '<xmin>67</xmin>\n' +
        '<ymin>673</ymin>\n' +
        '<xmax>224</xmax>\n' +
        '<ymax>740</ymax>\n' +
        '</object>\n' +
        '<object>\n' +
        '<name>image</name>\n' +
        '<xmin>224</xmin>\n' +
        '<ymin>179</ymin>\n' +
        '<xmax>1212</xmax>\n' +
        '<ymax>606</ymax>\n' +
        '</object>\n'
    }
  },
  mounted() {
    this.setSelectEffect(this.setting.selectEffect)
    let button = document.getElementById("export");
    button.addEventListener("click", this.finish, false);
    this.$nextTick(() => {
      setTimeout(() => {
        this.loading = false;
        this.fabricCanvas();
        this.fabricObjEvent();
      }, 500)
    });
  },
  computed: {
    current: { //预览视图中选中的组件
      get() {
        return this.$store.state.currentComponent
      }
    },
    width: { //三栏的宽度设置
      get() {
        return this.$store.state.width[0]
      }
    },
    parentComponent: {
      get() {
        let component
        if (this.current.parentId)
          component = this.$store.state.components.find(c => c.info.id === this.current.parentId)
        else
          component = null
        return component
      }
    },
    components: {
      get() {
        return this.$store.state.components
      }
    }
  },
  beforeCreate() {
    this.loading = true;
  },
  watch: {
    components: {
      deep: true,
      handler(val, oldVal) {
        //布局修改后将分享的url设为空
        this.share.url = ''
        this.share.experience = ''
      }
    },
    shape(val) {
      // this.fabricObj.isDrawingMode = true;
    }
  },
  methods: {
    finish() {
      let ih = window.screen.height
      let iw = window.screen.width
      let scale = 1
      if (this.imgW / this.imgH > iw / ih) {
        scale = iw / this.imgW;
      } else {
        scale = ih / this.imgH
      }
      scale = Math.floor(scale * 100) / 100
      let objs = this.fabricObj.getObjects()
      let data = ''
      data += `<scale>${scale}</scale>\n`
      for (let i = 1; i < objs.length; i++) {
        let item = objs[i]
        // console.log(item)
        data += '<object>\n'
        // console.log('class', item.shape)
        // console.log('postion', item.position)
        data += `<name>${item.shape}</name>`
        data += '\n'
        data += `<xmin>${Math.round(item.position[0] / this.scale)}</xmin>`
        data += '\n'
        data += `<ymin>${Math.round(item.position[1] / this.scale)}</ymin>`
        data += '\n'
        data += `<xmax>${Math.round(item.position[2] / this.scale)}</xmax>`
        data += '\n'
        data += `<ymax>${Math.round(item.position[3] / this.scale)}</ymax>`
        data += '\n'
        data += '</object>'
        data += '\n'
      }
      let content = JSON.stringify(data);
      let blob = new Blob([content], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "preview.txt");

      this.isFinishLabel = true
    },
    switchComponent() {
      let el = document.getElementById(this.parentComponent.info.id)
      el.click()
    },
    oprate(e) {
      // let components = await this.$store.dispatch('delComponent', this.current.info.id)
      // this.$refs.preview.fresh()
      this.$refs.preview.rightClick(e)

    },
    openUiDocument() {
      switch (this.current.info.ui) {
        case 'Muse-UI':
          return window.open('http://www.muse-ui.org/#/' + this.current.info.name.replace(' ', ''))
        case 'Mint-UI':
          return window.open('https://mint-ui.github.io/docs/#/zh-cn/' + this.current.info.name.replace(' ', '-'))
        case 'iView-UI':
          return window.open('https://www.iviewui.com/components/' + this.current.info.name)
        default:
          return this.$toast('无文档页')
      }
    },
    setSelectEffect(val) {
      let head = document.head
      let style = document.getElementById('vue-layout-style')
      if (!style) {
        style = document.createElement('style')
        style.id = 'vue-layout-style'
        style.type = 'text/css'
        head.appendChild(style)
      }

      let cssText
      if (val) {
        cssText = `[data-component-active="true"] {
                              box-shadow: inset 0px 0px 0px 1px pink!important;
                          }
                          [data-component-active]:hover {
                              box-shadow: inset 0px 0px 0px 1px pink!important;
                          }
                          [data-component-active]:focus {
                              box-shadow: inset 0px 0px 0px 1px pink!important;
                          }`
      } else {
        cssText = `[data-component-active="true"] {
                              box-shadow: none;
                              outline:none;
                          }
                          [data-component-active]:hover {
                              box-shadow: none;
                          }
                          [data-component-active]:focus {
                              box-shadow: none;
                          }`
      }
      let textNode = document.createTextNode(cssText)
      style.innerHTML = ''
      style.appendChild(textNode)
    },
    createShare() {
      let share = new this.$lean.Object('Share')
      share.set('store', this.$store.state)
      share.save().then(res => {
        this.share.url = location.origin + location.pathname + '#/share/' + res.id
        this.share.experience = location.origin + location.pathname + '#/preview/pc/' + res.id
      })
    },
    /**
     * @desc 初始化fabric，添加图待标注图片到画布中。
     * */
    fabricCanvas() {
      let canvasBox = document.getElementById('canvas-box');
      let canvasWidth = canvasBox.clientWidth || canvasBox.offsetWidth;
      let canvasHeight = canvasBox.clientHeight || canvasBox.offsetHeight;
      document.getElementById('label-canvas').width = canvasWidth;
      document.getElementById('label-canvas').height = canvasHeight;

      this.fabricObj = new fabric.Canvas('label-canvas');
      this.fabricObj.selectable = false;
      this.fabricObj.selection = false;
      this.fabricObj.skipTargetFind = true;

      let imgElement = document.getElementById('img-test');
      let imgWidth = imgElement.naturalWidth;
      let imgHeight = imgElement.naturalHeight;
      let scale;
      this.imgH = imgHeight
      this.imgW = imgWidth
      // this.fabricObj.freeDrawingBrush.color = '#E34F51';
      // this.fabricObj.freeDrawingBrush.width = 2;

      if (imgWidth / imgHeight > canvasWidth / canvasHeight) {
        scale = canvasWidth / imgWidth;
        this.scale = scale
      } else {
        scale = canvasHeight / imgHeight
        this.scale = scale
      }

      let img = new fabric.Image(imgElement, {
        scaleX: scale,
        scaleY: scale,
        zIndex: 0,
        selectable: false,
      });

      this.fabricObj.add(
        img,
      );
      this.inintialRects()
    },
    /**
     * @desc事件监听
     * */
    fabricObjEvent() {
      // this.fabricObj.isDrawingMode = true;
      this.fabricObj.on({
        'mouse:down': (e) => {
          if (this.ableEdit) {
            return
          }
          this.doDrawing = true;
          // e.preventDefault();
          //鼠标按下
          console.log('mouse down')
          this.mouseFrom.x = e.pointer.x;
          this.mouseFrom.y = e.pointer.y;
          // this.doDrawing = true;
        },
        'mouse:move': (e) => {
          //鼠标移动
          if (this.moveCount % 2 && !this.doDrawing) {
            //减少绘制频率
            return;
          }
          this.moveCount++;
          this.mouseTo.x = e.pointer.x;
          this.mouseTo.y = e.pointer.y;
          this.drawing();
        },
        'mouse:up': (e) => {
          //鼠标抬起
          this.moveCount = 1;
          this.mouseTo.x = e.pointer.x;
          this.mouseTo.y = e.pointer.y;
          if (this.drawingObject && !this.ableEdit) {
            this.drawingObject.set('id', this.id);
            this.id++
            this.labelResult.push(this.drawingObject)
          }
          console.log('labelResult is ', this.labelResult)
          this.drawingObject = null;
          this.doDrawing = false;
        },
        'object:moving': (e) => {
          //对象移动
          // console.log( 'object:moving')
          // console.log(e)
          // e.target.opacity = 0.5;
        },
        'object:added': (e) => {
          //增加对象

        },
        'object:modified': (e) => {
          //修改对象
          console.log('object:modified')
          this.labelResult.forEach(item => {
            if (item.id === e.target.id) {
              item = e.target
              console.log(e.target);
              console.log(item);
            }
          });
          console.log(this.labelResult)
        },
        'selection:created': (e) => {
          console.log('selection created')

          e.target.set({
            transparentCorners: false,
            cornerColor: '#ff7a55',
            cornerStrokeColor: '#ff7a55',
            borderColor: 'red',
            cornerSize: 12,
            padding: 10,
            cornerStyle: 'circle',
            borderDashArray: [3, 3]
          });
        }

      })
    },
    /**
     * @desc 点击图形开始画图
     * @param {String} shape 要绘制的形状
     * */
    handleShape(shape) {
      this.shape = shape;
      this.ableEdit = false;
      this.fabricObj.isDrawingMode = false;
      this.fabricObj.selectable = false;
      this.fabricObj.selection = false;
      this.fabricObj.skipTargetFind = true;
    },
    getRectfromXml() {
      let xml = this.xml
      let res = []
      while (xml.search('<object>') !== -1) {
        let startPos = xml.search('<object>') + 8
        let endPos = xml.search('</object>')
        let xml_ = xml.substring(startPos, endPos)
        let start, end, type, nub
        let obj = {}
        // type
        start = xml_.search('<name>') + 6
        end = xml_.search('</name>')
        type = xml_.substring(start, end)
        obj['shape'] = type
        //xmin
        start = xml_.search('<xmin>') + 6
        end = xml_.search('</xmin>')
        nub = xml_.substring(start, end)
        obj['xmin'] = Math.floor(parseInt(nub) * this.scale)
        //ymin
        start = xml_.search('<ymin>') + 6
        end = xml_.search('</ymin>')
        nub = xml_.substring(start, end)
        obj['ymin'] = Math.floor(parseInt(nub) * this.scale)
        //xmax
        start = xml_.search('<xmax>') + 6
        end = xml_.search('</xmax>')
        nub = xml_.substring(start, end)
        obj['xmax'] = Math.floor(parseInt(nub) * this.scale)
        //ymax
        start = xml_.search('<ymax>') + 6
        end = xml_.search('</ymax>')
        nub = xml_.substring(start, end)
        obj['ymax'] = Math.floor(parseInt(nub) * this.scale)
        res.push(obj)
        xml = xml.substring(endPos + 9)
      }
      return res
    },
    inintialRects() {
      let rects = this.getRectfromXml()
      let fabricNew = null
      rects.forEach((rect, i) => {
        let path =
          "M " + rect['xmin'] + " " + rect['ymin'] +
          " L " + rect['xmax'] + " " + rect['ymin'] +
          " L " + rect['xmax'] + " " + rect['ymax'] +
          " L " + rect['xmin'] + " " + rect['ymax'] +
          " z";
        // console.log('shape is', this.shape)
        fabricNew = new fabric.Path(path, {
          left: rect['xmin'],
          top: rect['ymin'],
          stroke: this.shapes[this.shapeP[rect['shape']]].stroke,
          strokeWidth: 2,
          fill: this.shapes[this.shapeP[rect['shape']]].fill
        });
        if (fabricNew) {
          fabricNew.set('shape', rect['shape']);
          fabricNew.set('position', [rect['xmin'], rect['ymin'], rect['xmax'], rect['ymax']])
          this.fabricObj.add(fabricNew);
          this.drawingObject = fabricNew;
        }
        this.drawingObject.set('id', this.id);
        this.id++
        this.labelResult.push(this.drawingObject)
        this.drawingObject = null;
      })
    },
    drawing() {
      if (this.drawingObject) {
        this.fabricObj.remove(this.drawingObject)
      }
      let fabricNew = null;
      let path = "M " +
        this.mouseFrom.x + " " +
        this.mouseFrom.y + " L " +
        this.mouseTo.x + " " +
        this.mouseFrom.y + " L " +
        this.mouseTo.x + " " +
        this.mouseTo.y + " L " +
        this.mouseFrom.x + " " +
        this.mouseTo.y + " L " +
        this.mouseFrom.x + " " +
        this.mouseFrom.y + " z";
      // console.log('shape is', this.shape)
      fabricNew = new fabric.Path(path, {
        left: this.mouseFrom.x,
        top: this.mouseFrom.y,
        stroke: this.shape.stroke,
        strokeWidth: 2,
        fill: this.shape.fill
      });
      if (fabricNew) {
        fabricNew.set('shape', this.shape.val);
        fabricNew.set('position', [this.mouseFrom.x, this.mouseFrom.y, this.mouseTo.x, this.mouseTo.y])
        this.fabricObj.add(fabricNew);
        this.drawingObject = fabricNew;
      }
    },
    /**
     * @desc 导出已标注图片成base64格式
     * */
    exportImg() {
      let base64URl = this.fabricObj.toDataURL({
        formart: 'png',
        multiplier: 2
      });
      this.exportBaseData = base64URl;
      this.imgDialog = true;
      console.log(base64URl)
      console.log(this.fabricObj.toJSON())
    },
    /**
     * @desc 编辑事件
     * */
    edit() {
      this.ableEdit = true;
      this.doDrawing = false;
      this.shape = '';
      this.fabricObj.isDrawingMode = false;
      this.fabricObj.selectable = true;
      this.fabricObj.selection = true;
      this.fabricObj.skipTargetFind = false;
    },
    /*
     * @desc 获取当前图片信息
     * */
    getImgInfo(i) {
      this.activeIndex = i;
      // this.fabricJson[i-1] = JSON.stringify(this.fabricObj);
      this.fabricObj.clear().renderAll();
      this.fabricCanvas();
      if (this.fabricJson.hasOwnProperty(i + '') && this.fabricJson[i + ''] !== '') {
        // console.log(this.fabricJson[i+'']);
        this.fabricObj.loadFromJSON(this.fabricJson[i + ''])
        this.fabricObj.renderAll();
      }
    },

    /**
     * @desc 编辑或删除当前图形
     * @param  {String} command 编辑或删除命令
     * @param  {Number} id 编辑或删除图形的id
     * @param  {String} category 当前类型
     * */
    handleCommand(command, id, category) {
      let currentFabric, currentIndex;
      this.labelResult.forEach((item, index) => {
        if (item.id === id) {
          currentFabric = item;
          currentIndex = index;
        }
      });
      if (command === 'edit') {
        //编辑操作
        this.shape = '';
        this.ableEdit = true;
        this.fabricObj.selectable = true;
        this.fabricObj.selection = true;
        this.fabricObj.skipTargetFind = false;
        console.log(currentFabric);
        this.fabricObj.bringToFront(currentFabric);
        this.fabricObj.setActiveObject(currentFabric)

      } else if (command === 'delete') {
        //删除操作
        this.fabricObj.remove(currentFabric);
        this.labelResult.splice(currentIndex, 1);
        this.$forceUpdate();
      }

    },
    out() {
      console.log('fabric objs', this.fabricObj.getObjects())
      let objs = this.fabricObj.getObjects()
      for (let i = 1; i < objs.length; i++) {
        let item = objs[i]
        console.log(item)
        console.log('postion', item.position)
        console.log('class', item.shape)
      }
    }

  },
  components: {
    components,
    preview,
    attributes,
    componentTree
  }
}

</script>
<style lang="less" scoped>
@import '~muse-ui/src/styles/colors.less';

@previewBG: @teal50;

* {
  -webkit-user-select: none;
}

::-webkit-scrollbar {
  display: none;
}

.mu-appbar {
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
  color: #fff;
  background-color: @tealA700;
  height: 56px;
  padding: 0 8px;
  width: 100%;
  z-index: 3;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.title {
  font-family: Consolas, Liberation Mono, Menlo, Courier, monospace;

  .description {
    vertical-align: super;
  }
}

.main-content > div {
  transition: all .5s;
}

.client-height {
  height: 100vh;
  overflow: auto;
}

.attributes {
  .client-height;
  background-color: @previewBG;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-item: center;

  .header {
    white-space: nowrap;
  }

  .select-field {
    width: 70px;
    vertical-align: top;
    text-align: center;
  }
}

.attributes-content {
  flex: 1;
}

.component-tree {
  flex: 1;
}

.attributes-bottom {
  position: relative;
  text-align: center;
  color: @grey500;
}

.preview {
  .client-height;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.components {
  .client-height;
  background-color: @previewBG;
  overflow-y: scroll;
}

.parent-component {
  cursor: pointer;
}

.pre-text {
  padding-right: 5px
}

.more-a {
  color: #0097dd;
  cursor: pointer;
  text-decoration: underline;
}

.img-box {
  border: 1px solid #dddeea;
  margin-bottom: 10px;
  cursor: pointer;
}

.img-box:hover {
  box-shadow: 0 0 5px 5px #ccc;
}

.img-box-active {
  border-color: #0097dd;
}

.controlPanel {
  width: 100%;
  height: 100%;
  background: @teal50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /*margin-bottom: 15px;*/
  border-bottom: 1px solid #dad7d9;
}

.controlPanel .contro-item {
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.contro-item.active {
  background: @teal200;
  color: #fff;
}

.controlPanel .contro-item i {
  font-size: 18px;
  line-height: 62px;
}

.controlPanel .contro-item.active i {
  background: @teal200;
  color: #fff;
  border-radius: 3px;

}

#canvas-box {
  border: 1px solid #dddeea;
  min-height: 500px;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /*margin: 0 20px;*/
}

.result-tittle {
  text-align: center;
  width: 100%;
  color: #00695c;
  font-weight: bold;
}

.edit_button {
  color: @teal500;
  padding: 10px;
  font-weight: bold;
}

.finish_button {
  color: @teal500;
  padding: 10px;
  font-weight: bold;
}

.edit_button:hover {
  cursor: pointer;
  color: @cyanA700;
}

.finish_button:hover {
  cursor: pointer;
  color: @cyanA700;
}

.result-content {
  padding: 10px;
}

.result-item {
  margin-bottom: 10px;
}

.result-sub-box {
  padding-left: 10px;
  display: flex;
  justify-content: space-between
}

.result-sub-box:hover {
  color: #409EFF;
}

.result-sub-box:hover .result-sub-box-icon {
}

</style>
