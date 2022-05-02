<template>
  <div>
    <!--<button @click="test">test</button>-->
    <div>
      <div ref="preview" class="preview-area">
        <div v-if="!item.parentId" :id="item.info.id" v-for="(item,index) in components"></div>
      </div>
    </div>
  </div>
</template>

<script>
import mount from "./mount";
import Vue from "vue";
import scopedCss from "scopedcss";

export default {
  name: "share",
  data() {
    return {
      pic: '',
      reComp: [],
    }
  },
  mounted() {
    // let state = this.$store.state
    let store = JSON.parse(localStorage.store)
    this.$store.commit('setState', store)
    for (let i = 0; i < this.components.length; i++) {
      if (i !== 0 && this.components[i].func['type'] == 'router') {
        const list = {
          'path': '/share/' + this.components[i].func['param'],
          'name': this.components[i].func['param'],
          'component': () => import('@/components/share')
        }
        this.$router.options.routes.push(list)
        this.components[i].tempfunc = this.push
      } else {
        this.components[i].tempfunc = this.click
      }
    }
    console.log('router_init', this.$router)
    this.reComp = this.components
    this.mount_()
    this.addUserStyle()
  },
  methods: {
    carry(id) {
      let ok = 1
      for (let i = 0; i < this.reComp.length; i++) {
        if (this.reComp.info.id == id) {
          this.reComp[i].tempfunc()
        }
      }
      // this.reComp[id].tempfunc()
      ok = 1
    },
    click() {
      console.log('click!')
    },
    push(address) {
      console.log('router', this.$router)
      /*this.$router.addRoute({
        path:'/'+address,
        name: address,
        component: ()=>import('@/components/share')
      })*/
      console.log('in push')
      //this.$router.push('/share/' + address)
      let currentPage = this.pages.findIndex(page => page.name == address)
      this.components = this.pages[currentPage].components
      this.css = this.pages[currentPage].css

      for (let i = 0; i < this.components.length; i++) {
        if (i !== 0 && this.components[i].func['type'] == 'router') {
          const list = {
            'path': '/share/' + this.components[i].func['param'],
            'name': this.components[i].func['param'],
            'component': () => import('@/components/share')
          }
          this.$router.options.routes.push(list)
          this.components[i].tempfunc = this.push
        } else {
          this.components[i].tempfunc = this.click
        }
      }
      console.log('router_init', this.$router)
      this.reComp = this.components

      this.fresh()
    },
    fresh() {
      /*当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，
      它默认用 “就地复用” 策略。
      如果数据项的顺序被改变，
      Vue将不是移动 DOM 元素来匹配数据项的顺序，
       而是简单复用此处每个元素。
      出于此，每次components顺序变动后，只好使用清空再重新渲染的方式，否则不能成功渲染更新
       */
      let components = JSON.parse(JSON.stringify(this.components))
      this.components = []
      this.$refs.preview.innerHTML = ''

      //settimeout会等到dom重绘完成后在执行fn
      setTimeout(() => {
        this.components = components
        this.mount_()
      }, 0)


    },
    addUserStyle() {
      if (!this.css)
        return
      //添加用户编辑的css效果到预览视图
      // console.log('css is', this.css)
      let style = document.getElementById('custom-layout')
      if (!style) {
        style = document.createElement('style')
        style.id = 'custom-layout'
        style.setAttribute('scoped', '')
        style.type = 'text/css'
        this.$refs.preview.appendChild(style)
      }
      let cssText = document.createTextNode(this.css)
      style.innerHTML = ''
      style.appendChild(cssText)
      // let sysCssText=document.createTextNode(`\ndiv:last-child{margin-bottom:100px;}`)
      // style.appendChild(sysCssText)
      // 动态添加scoped style
      scopedCss.applyTo(this.$refs.preview)
    },
    mount_share(id, _component, root) {
      let template
      let components = this.$store.state.components
      let component = components.find(c => c.info.id === id)
      let start = _component.template.search('@click') + 8
      if (start !== 7) {
        let tmp1 = _component.template.substring(0, start - 1)
        let tmp2 = _component.template.substring(start + 1)
        let i
        for (i = start - 8; _component.template.substring(i - 4, i) != 'id="'; i--) ;
        let sonId = _component.template.substring(i, i + 13)
        template = tmp1 + '\"carry(\'' + sonId + '\')\"' + tmp2
      } else {
        template = _component.template
      }
      return new Promise((resolve, reject) => {
        //需要延迟才能取到document.getElementById(id)
        setTimeout(() => {
          let data = {}
          if (_component.attributes) {
            Object.keys(_component.attributes).forEach(key => {
              data[key] = _component.attributes[key].value
            })
          }
          // data = {'reComp', root}
          if (component.uid) { //销毁旧实例

          }
          let vm = new Vue({
            name: id.toString(),
            data() {
              return data
            },
            template: template,
            el: document.getElementById(id),
            methods: {
              carry(id) {
                let ok = 1
                console.log('in')
                for (let i = 0; i < root.reComp.length; i++) {
                  if (root.reComp[i].info.id == id) {
                    root.reComp[i].tempfunc(root.reComp[i].func['param'])
                  }
                }
                // this.reComp[id].tempfunc()
                ok = 1
              },
              click(params) {
                console.log('click!')
              },
              /*push(address){
                console.log('router', this.$router)
                this.$router.addRoute({
                  path:'/'+address,
                  name: address,
                  component: ()=>import('@/components/share')
                })
                this.$router.push('/share1')
                let currentPage = this.pages.findIndex(page => page.name = address)
                this.components = currentPage.components
                this.css = currentPage.css
                this.mount_()
              },*/
            },
            mounted() {
              this.$el.id = id
              if (component) {
                component.uid = this._uid
              }

              //添加选中效果
              let info = _Vue.$store.state.currentComponent.info
              if (!info)
                this.$el.click()

            }
          })
          // console.log('components:', components)
          resolve(vm)

        }, 200)
      })
    },
    mount_() {
      //挂载及更新视图中组件的位置信息
      let components = JSON.parse(JSON.stringify(this.$store.state.components))
      // console.log('components:', components)
      components.filter(component => !component.parentId).forEach(component => {
        this.mount_share(component.info.id, component, this).then(vm => {
          this.addUserStyle()
        })
      })
      setTimeout(() => {
        this.components = components
      }, 0)
    },
    test() {
      console.log('com is', this.$store.state)
      console.log('re', this.reComp)
    }
  },
  computed: {
    pages: {
      get() {
        return this.$store.state.pages
      },
      set(val) {
        this.$store.commit('setState', {
          pages: val
        })
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
    },
    components: { //组件树 ，预览视图中所有组件
      get() {
        return this.$store.state.components
      },
      set(components) {
        this.$store.commit('setState', {
          components
        })
      }
    },
  }
}
</script>

<style scoped>

</style>
