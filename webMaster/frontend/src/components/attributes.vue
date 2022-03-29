<template>
  <mu-content-block>
    <div v-if="current.attributes" style="display: flex;flex-direction: column;">
      <subAttribute :attributes="current.attributes" style="margin-left:-10px;" @update="updateAttribute"/>
      <div v-if="current.attributes.class.value">
        <el-collapse>
          <el-collapse-item title="base">
            <div style="display: flex; flex-direction: column; margin-bottom: 15px; background-color: transparent">
              <div style="color: #757575; margin-bottom: 5px; margin-top: 5px">color:</div>
              <el-color-picker size="small" :value="getDefaultColor('color')" @change="handleChangeColor" class="selectColor"></el-color-picker>
            </div>
            <div style="display: flex; flex-direction: column; margin-bottom: 15px">
              <div style="color: #757575; margin-bottom: 5px">background-color:</div>
              <el-color-picker size="small" :value="getDefaultColor('background-color')" @change="handleChangeBGColor" class="selectColor"></el-color-picker>
            </div>
          </el-collapse-item>
          <el-collapse-item title="border">
            <div style="display: flex; flex-direction: column; margin-bottom: 15px">
              <div style="color: #757575; margin-bottom: 5px; margin-top: 5px">border-color:</div>
              <el-color-picker size="small" :value="getDefaultColor('border-color')" @change="handleChangeBDColor" class="selectColor"></el-color-picker>
            </div>
            <div style="display: flex; flex-direction: column; margin-bottom: 5px">
              <div style="color: #757575; margin-bottom: 0px">border-radius:</div>
              <el-slider :step="0.5" :max="20" style="width: 120px; margin-left: 10px"  v-model="borderRadius" @input="handleChangeBDRadius" ></el-slider>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </mu-content-block>
</template>
<script>
import mount from './mount'
import {
  getTemplate
} from './template'
import subAttribute from './subAttribute'
// 深度合并
import mergeDeep from '@/utils/mergeDeep'

export default {
  name: 'attributes',
  data() {
    return {
      danWei: {
        'width':'px',
        'height':'px',
        'margin-top': 'px',
        'margin-left': 'px',
        'margin-right': 'px',
        'margin-bottom': 'px',
        'border-radius': 'px',
        'color': '',

      },
      color: '',
      backgroundColor: '',
      borderColor: '',
      borderRadius: '',
    }
  },
  computed: {
    current: { //当前选中组件
      get(value) {
        return this.$store.state.currentComponent
      }
    },
    css: {
      get() {
        return this.$store.state.css
      },
      set(val) {
        this.$store.commit('setState', {
          css: val
        })
      }
    }
  },
  mounted() {
    this.hasCurrent()
  },
  methods: {
    getDefaultColor(name){
      if(this.current.style.hasOwnProperty(name)){
        return this.current.style[name]
      }
      else
        return ''
    },
    hasCurrent() {
      console.log('current is', this.current.attributes)
      if (JSON.stringify(this.current) == '{}')
        return false
      else
        return true
    },
    updateCss(name, val) {
      this.current.style[name] = val
      console.log('current is', this.current)
      let components = JSON.parse(JSON.stringify(this.$store.state.components))
      let index = components.findIndex(item => item.info.id === this.current['info']['id'])
      this.$store.state.components[index] = this.current
      this.rewritePartCss()
    },
    rewritePartCss() {
      let startPos = this.css.search(this.current.attributes.class.value)-1
      let temp = this.css.substring(startPos)
      let css1 = this.css.substring(0, startPos)
      let endPos = temp.search('}')+1+startPos
      let css2 = this.css.substring(endPos)
      let into = ''
      into += '.'
      into += this.current.attributes.class.value
      into += '{\n'
      for (let key in this.current.style){
        into += key
        into += ':'
        into += this.current.style[key]
        if (this.danWei.hasOwnProperty(key)){
          into += this.danWei[key]
        }
        into += ';\n'
      }
      into += '}\n'
      this.css = css1+into+css2
    },
    handleChangeColor(val) {
      this.updateCss('color', val)
    },
    handleChangeBGColor(val) {
      this.updateCss('background-color', val)
    },
    handleChangeBDColor(val) {
      this.updateCss('border-color', val)
    },
    handleChangeBDRadius(val) {
      this.updateCss('border-radius', val)
    },
    updateAttribute(attr) { //属性值输入事件
      console.log('attr is', attr)
      let components = JSON.parse(JSON.stringify(this.$store.state.components))
      let index = components.findIndex(component => component.info.id === this.current.info.id)
      let info = this.current.info

      attr = mergeDeep(this.current.attributes, attr)
      console.log('deep attr is', attr)
      if (components[index].slot) {
        //对于嵌入组件 需要传入slot 才会在模板上带上slot属性
        attr.slot = components[index].slot
      }
      let component = getTemplate(info, attr, components[index].slots), //更新模板
        attributes = component.attributes

      //getTemplate中可能修改了components，所以重新获取
      components = JSON.parse(JSON.stringify(this.$store.state.components))
      index = components.findIndex(component => component.info.id === this.current.info.id)

      Object.assign(components[index]['attributes'], attributes) //更新从getTemplate获取到的最新属性
      components[index]['slots'] = component.slots
      components[index].template = component.template
      this.$store.commit('setState', {
        components
      })
      this.$store.commit('setState', {
        currentComponent: components[index]
      })

      //更新数据到vuex完毕

      //下面触发视图层变化
      if (!components[index].parentId) {
        mount(component.info.id, component, this)
      } else {
        //对于嵌套组件，更新其顶级父组件
        let topComponent = this.getParentComponent(components[index])
        Object.assign(topComponent, getTemplate(topComponent.info, topComponent.attributes, topComponent.slots))
        let i = components.findIndex(c => c.info.id === topComponent.info.id)
        components[i] = topComponent
        this.$store.commit('setState', {
          components
        })

        mount(topComponent.info.id, topComponent, this)
      }

      //有数据更新操作，就删除之前被删除的备份。只提供撤销删除的撤销功能
      this.$store.commit('setState', {backupComponents: []})
    },
    getParentComponent(component) {
      let components = JSON.parse(JSON.stringify(this.$store.state.components))
      if (component.parentId) {
        return this.getParentComponent(components.find(c => c.info.id === component.parentId))
      } else {
        return component
      }
    }
  },
  components: {
    subAttribute
  }
}
</script>
<style scoped>
.selectColor {
  margin-top: 3px;
  cursor: pointer;
  margin-bottom: -5px;
}
.el-collapse /deep/ .el-collapse-item__header{
  background-color: transparent;
  color: #757575;
  border-bottom: 1px solid #757575;
}
.el-collapse{
  border: none;
}
.el-collapse /deep/ .el-collapse-item__content{
  padding-bottom: 5px;
  background-color: #333333;
}
.el-collapse /deep/ .el-collapse-item__header.is-active{
  color: #448aff;
}
.el-collapse-item /deep/ .el-collapse-item__wrap{
  border-bottom: 1px solid #757575;
}
</style>
