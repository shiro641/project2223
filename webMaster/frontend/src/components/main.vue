<template>
  <div id="app" >
    <button @click="test">test</button>
    <mu-appbar>
      <div class="title">
        WebMaster
      </div>
      <mu-icon style="margin-right: 20px; cursor: pointer" :size="20" value="share" slot="right"
               @click="share.open=true"/>
    </mu-appbar>
    <div class="main-content" style="display: flex; flex-direction: row;" v-if="isFinishLabel">
      <div class="attributes" style="width: 15%">
        <mu-sub-header class="header">
          <mu-select-field class="select-field" autoWidth v-model="selectField.value">
            <mu-menu-item title="属性" value="属性">
            </mu-menu-item>
            <mu-menu-item title="组件树" value="组件树">
            </mu-menu-item>
          </mu-select-field>
          <span style="color:rgb(83, 208, 254);"><a class="parent-component" v-if="parentComponent"
                                                    @click="switchComponent">┡
              {{ parentComponent.info.name }}</a> {{ current.info ? ' - ' + current.info.name : '' }}</span>
        </mu-sub-header>
        <vue-scroll :ops="ops">
          <attributes v-if="selectField.value==='属性'" class="attributes-content"/>
          <component-tree v-if="selectField.value==='组件树'" class="component-tree"
                          :components="$store.state.components.filter(c=>!c.parentId)"/>
        </vue-scroll>
      </div>
      <div class="preview" style="width: 70%">
        <preview ref="preview"/>
      </div>
      <div class="components" style="width: 15%">
        <components ref="components"/>
      </div>
    </div>
    <mu-row v-if="!isFinishLabel">
      <mu-col style="width: 15%; background-color: #333333; height: 92vh">
        <div style="display: flex; flex-direction: column; height: 15%">
          <div
            style="display: flex; flex-direction: row; justify-content: space-around; margin-top: 5px">
            <div class="edit_button" @click="edit">编辑</div>
            <div id="export" class="finish_button" @click="finish">完成</div>
          </div>
          <div style="display: flex; justify-content: center">
            <div class="result-tittle" style="">标注结果</div>
          </div>
        </div>
        <div style="height: 85%">
          <vue-scroll :ops="ops">
          <div class="result-box">
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
        </vue-scroll>
        </div>
      </mu-col>
      <mu-col style="width: 85%;">
        <div style="display: flex; flex-direction:row;">
          <mu-col v-if="havePicture" v-loading="loading" id="canvas-box" style="width: 85%;">
            <div>
              <canvas id="label-canvas" style="display: block;width: 100%;height:100%"></canvas>
              <img id="img-test" :src="pic"
                   style="max-width: 100%;display: none;">
            </div>
          </mu-col>
          <mu-col v-if="!havePicture" style="width: 85%;">
            <el-upload
              v-loading="vloading"
              element-loading-text="AI正在拼命识别中"
              element-loading-spinner="el-icon-loading"
              element-loading-background="rgba(0, 0, 0, 0.8)"
              style="display: flex; justify-content: center;align-items: center; height: 100%"
              class="upload-demo"
              action="http://localhost:8000/api/picture"
              :show-file-list="false"
              multiple
              :limit="3"
              :on-progress="handelProgress"
              :on-success="handelSuccess"
              :file-list="fileList">
              <el-link :underline="false" class="upload_pic" size="small">点击上传图片</el-link>
            </el-upload>
          </mu-col>
          <mu-col style="width: 15%; height: 92vh">
            <div class="controlPanel">
              <div id="step2" style="margin-top: 18px; margin-bottom: 18px; color: #3c8cfd; font-weight: bold">类型</div>
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
    <v-tour name="myTour" :steps="steps"></v-tour>
    <v-tour name="pre" :steps="steps1"></v-tour>
  </div>
</template>
<script>
import attributes from './attributes'
import components from './components'
import preview from './preview'
import componentTree from './componentTree.vue'
import {saveAs} from 'file-saver'
import {postAndGetCode} from "../api/api";
import { Loading } from 'element-ui';

export default {
  name: 'my-tour',
  data() {
    return {
      steps1:[
        {
        target: '.components',  // We're using document.querySelector() under the hood
        header: {
          title: '下一步',
        },
        content: `从这里可以拖拽组件`,
        params: {
          placement: 'left' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
        }
      },
        {
          target: '.select-field',  // We're using document.querySelector() under the hood
          header: {
            title: '下一步',
          },
          content: `从这里可以选择编辑属性或查看组件树`,
        },],
      steps: [
        {
          target: '.upload_pic',  // We're using document.querySelector() under the hood
          header: {
            title: '开始',
          },
          content: `点击这里上传一张网页图片!`
        },
        {
          target: '#step2',  // We're using document.querySelector() under the hood
          header: {
            title: '下一步',
          },
          content: `在这里选择标注框类型对图片进行标注`
        },
        {
          target: '.result-tittle',  // We're using document.querySelector() under the hood
          header: {
            title: '下一步',
          },
          content: `标注结果会在这里显示`
        },
        {
          target: '.edit_button',  // We're using document.querySelector() under the hood
          header: {
            title: '下一步',
          },
          content: `如果发现标注框有问题，可以点击这里进入修改模式`
        },
        {
          target: '.finish_button',  // We're using document.querySelector() under the hood
          header: {
            title: '下一步',
          },
          content: `标注完成后，点击这里即可生成预览视图`
        },
      ],
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {
          keepShow: true,
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
          background: '#F5F5F5', //滚动条颜色
          opacity: 0.5, //滚动条透明度
          'overflow-x': 'hidden',
        },
        videoData: [],
      },
      vloading:false,
      fileList: [],
      id: 0,
      // '../../../static/assets/inputimage/tianmao.png'
      pic: '',
      page_id:1,
      PicName: '',
      loading: true,
      fabricObj: null,
      fabricJson: {},
      havePicture: false,
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
      shapes: [
        {
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
      // isFinishLabel: true,
      xml: ''
    }
  },
  mounted() {
    this.setSelectEffect(this.setting.selectEffect)
    this.$tours['myTour'].start()
    /*let button = document.getElementById("export");
    button.addEventListener("click", this.finish, false);
    this.$nextTick(() => {
      setTimeout(() => {
        this.loading = false;
        this.fabricCanvas();
        this.fabricObjEvent();
      }, 500)
    });*/
  },
  computed: {
    currentPage:{
      get() {
        return this.$store.state.currentPage
      },
    },
    refresh:{
      get(){
        return this.$store.state.refresh
      }
    },
    pages:{
      get(){
        return this.$store.state.pages
      }
    },
    isFinishLabel:{
      get() {
        return this.$store.state.isFinishLabel
      },
      set(isFinishLabel) {
        this.$store.commit('setState', {
          isFinishLabel: isFinishLabel
        })
      }
    },
    filenames:{
      get() {
        return this.$store.state.filenames
      },
      set(names) {
        this.$store.commit('setState', {
          filenames: names
        })
      }
    },
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
    refresh:{
      deep: true,
      handler(val, oldVal) {
        // window.reload()
        this.havePicture = false
        this.labelResult = []
      }
    },
    shape(val) {
      // this.fabricObj.isDrawingMode = true;
    }
  },
  methods: {
    test(){
      console.log('pages', this.pages)
      // console.log('havepicture', this.havePicture)
      console.log('components', this.$store.state)
      console.log('current', this.currentPage)
    },
    finish() {
      const loading = this.$loading({
        lock: true,//lock的修改符--默认是false
        text: '正在努力生成预览视图',//显示在加载图标下方的加载文案
        spinner: 'el-icon-loading',//自定义加载图标类名
        background: 'rgba(0, 0, 0, 0.7)',//遮罩层颜色
        target: document.querySelector('#app')//loading覆盖的dom元素节点
      });
      let ih = window.screen.height
      let iw = window.screen.width
      let scale = 1
      if (this.imgW / this.imgH > iw / ih) {
        scale = iw / this.imgW;
      } else {
        scale = ih / this.imgH
      }
      scale = Math.ceil(scale * 100) / 100
      let objs = this.fabricObj.getObjects()
      let data = ''
      data += `<scale>${scale}</scale>\n`
      // data += `<scale>1</scale>\n`
      for (let i = 1; i < objs.length; i++) {
        let item = objs[i]
        // console.log(item)
        data += '<object>\n'
        // console.log('class', item.shape)
        // console.log('postion', item.position)
        data += `<name>${item.shape}</name>`
        data += '\n'
        data += `<xmin>${Math.round(item.left / this.scale)}</xmin>`
        data += '\n'
        data += `<ymin>${Math.round(item.top / this.scale)}</ymin>`
        data += '\n'
        data += `<xmax>${Math.round((item.left+item.width*item.scaleX) / this.scale)}</xmax>`
        data += '\n'
        data += `<ymax>${Math.round((item.top+item.height*item.scaleY) / this.scale)}</ymax>`
        data += '\n'
        data += '</object>'
        data += '\n'
      }
      // let content = JSON.stringify(data);
      // let blob = new Blob([content], {type: "text/plain;charset=utf-8"});
      // saveAs(blob, "preview.txt");
      //console.log('data is', data)
      this.page_id += 1
      postAndGetCode(data, this.PicName, this.page_id).then(
        res => {
          // console.log('res is', res)
          // console.log('cssArray is', res['data']['style'])
          // console.log('code is', res['data']['code'])
          this.$store.commit('setState', {
            filenames: res['data']['images']
          })
          let code = res['data']['code']
          let templateStart = 0
          let templateEnd = code.search('</template>') + 11
          let cssStart = code.search('<style scoped>') + 14
          let cssEnd = code.search('</style>')
          let VueCode = code.substring(templateStart, templateEnd)
          // console.log('vuecode is', VueCode)
          // let test = this.$store.state
          this.$store.commit('setState', {
            VueCode: VueCode
          })
          // let cssCode = code.substring(cssStart, cssEnd)
          // console.log('csscode is', cssCode)
          this.$store.commit('setState', {
            cssStyle: res['data']['style']
          })
          this.isFinishLabel = true
          // this.isFinishLabel = true
            // this.$refs.preview.exitEdit();
        }
      )
      setTimeout(()=>{
        loading.close()
        this.$tours['pre'].start()
      },2000)
      // this.$refs.preview.Edit();
      // this.$refs.preview.exitEdit();
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
                              box-shadow: inset 0px 0px 0px 1px #2962ff!important;
                          }
                          [data-component-active]:hover {
                              box-shadow: inset 0px 0px 0px 1px #2962ff!important;
                          }
                          [data-component-active]:focus {
                              box-shadow: inset 0px 0px 0px 1px #2962ff!important;
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
    handelProgress(event, file, fileList){
      this.vloading=true
    },
    handelSuccess(response, file, fileList) {
      // console.log('response', response['info'])
      let info = response['info']
      let name = info[0]['name']
      let xml = info[0]['xml']
      this.pic = '../../static/assets/inputimage/' + name
      this.PicName = name
      // console.log('this.pic', this.pic)
      this.xml = xml
      let button = document.getElementById("export");
      button.addEventListener("click", this.finish, false);
      this.havePicture = true
      this.$nextTick(() => {
        setTimeout(() => {
          this.loading = false;
          this.vloading = false
          this.fabricCanvas();
          this.fabricObjEvent();

        }, 500)
      });
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
          console.log('object:modified', this.labelResult)
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
  background: radial-gradient(#2b2b2b 80%, #241f72);
  height: 46px;
  padding: 0 8px;
  width: 100%;
  z-index: 3;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2695ff;

}

.title {
  font-family: Verdana;
  font-size: 20px;
  color: #e6e6e6;
  margin-left: 10px;
}

.main-content > div {
  transition: all .5s;
}

.client-height {
  height: 92vh;
  overflow: auto;
}

.attribute_st {

}
/deep/.mu-appbar{
  height: 8vh;
}
.attributes {
  .client-height;
  background-color: #333333;
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
    text-align: center;;
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
  background-color: #333333;
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
  background: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*margin-bottom: 15px;*/
  border-bottom: 1px solid #dad7d9;
}

.upload_pic {
  margin-left: -10px;
  margin-top: -60px;
  font-size: 19px;
  letter-spacing: 3px
}

.upload_pic:hover {
  color: #2962ff;
}

.controlPanel .contro-item {
  text-align: center;
  cursor: pointer;
  width: 100%;
  color: #757575;
}

.contro-item.active {
  background: #1e88e5;
  color: #fff;
}

.controlPanel .contro-item i {
  font-size: 18px;
  line-height: 62px;
}

.controlPanel .contro-item.active i {
  background: #1e88e5;
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
  width: 70%;
  color: #3f51b5;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: solid 1px #757575;
}

.edit_button {
  color: #3c8cfd;
  padding: 10px;
  font-weight: bold;
}

.finish_button {
  color: #3c8cfd;
  padding: 10px;
  font-weight: bold;
}

.edit_button:hover {
  cursor: pointer;
  color: #2962ff;
}

.finish_button:hover {
  cursor: pointer;
  color: #2962ff;
}

.result-content {
  padding: 10px;
}

.result-item {
  margin-bottom: 10px;
  margin-left: 10px;
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

/deep/ .mu-select-field {
  .mu-dropDown-menu {
    display: block;
    width: 100%;
    height: 32px;
    color: #3c8cfd;
  }

  .mu-dropDown-menu-text {
    line-height: 32px;
    height: 32px;
    padding-left: 0px;
    padding-right: 24px;
    word-wrap: break-word;
    overflow: hidden;
    color: #3c8cfd;
  }

  .mu-dropDown-menu-line {
    color: #3c8cfd;
  }

  .mu-dropDown-menu-icon {
    right: 0;
    top: 6px;
    color: #3c8cfd;
  }
}

.test {
  color: #3c8cfd;
}

</style>
