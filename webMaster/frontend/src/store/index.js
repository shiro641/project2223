import Vue from 'vue'
import Vuex from 'vuex'
import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
// 深度合并
import mergeDeep from '@/utils/mergeDeep'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        width: [{
            attr: '15',
            preview: '70',
            components: '15'
        }, {
            attr: '20',
            preview: '70',
            components: '10'
        }, {
            attr: '25',
            preview: '50',
            components: '25'
        }],
        Cloading:false,
        css: '', //用户编辑的自定义css字符串
        activeUI:'Common',
        currentComponent: {}, //预览视图的选中组件
        components: [], //预览视图的组件树
        backupComponents: [],//删除组件时备份的
        copiedComponents: [], //复制的组件
        VueCode: '', // Vue代码
        /*cssStyle: [
          {
            "name": "image0",
            "content": {
              "width": 113,
              "height": 33,
              "margin-left": 0,
              "margin-top": 0
            }
          },
          {
            "name": "link1",
            "content": {
              "width": 33,
              "height": 17,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "link2",
            "content": {
              "width": 47,
              "height": 16,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "link3",
            "content": {
              "width": 27,
              "height": 16,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "link4",
            "content": {
              "width": 65,
              "height": 17,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "link5",
            "content": {
              "width": 66,
              "height": 17,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "link6",
            "content": {
              "width": 27,
              "height": 17,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "link7",
            "content": {
              "width": 66,
              "height": 17,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "link8",
            "content": {
              "width": 66,
              "height": 17,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "link9",
            "content": {
              "width": 32,
              "height": 16,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "image10",
            "content": {
              "width": 1138,
              "height": 407,
              "margin-left": 0,
              "margin-top": 0
            }
          },
          {
            "name": "text11",
            "content": {
              "text-align": "center",
              "width": 106,
              "height": 27,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "link12",
            "content": {
              "width": 89,
              "height": 18,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "image13",
            "content": {
              "width": 97,
              "height": 82,
              "margin-left": 0,
              "margin-top": 0
            }
          },
          {
            "name": "text14",
            "content": {
              "text-align": "center",
              "width": 115,
              "height": 33,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "link15",
            "content": {
              "width": 76,
              "height": 15,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "image16",
            "content": {
              "width": 98,
              "height": 82,
              "margin-left": 0,
              "margin-top": 0
            }
          },
          {
            "name": "text17",
            "content": {
              "text-align": "center",
              "width": 109,
              "height": 29,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "link18",
            "content": {
              "width": 89,
              "height": 16,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "image19",
            "content": {
              "width": 97,
              "height": 82,
              "margin-left": 0,
              "margin-top": 0
            }
          },
          {
            "name": "text20",
            "content": {
              "text-align": "center",
              "width": 104,
              "height": 35,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "link21",
            "content": {
              "width": 80,
              "height": 11,
              "margin-left": 0,
              "margin-top": 0,
              "background-color": "rgb(255, 255, 255)"
            }
          },
          {
            "name": "image22",
            "content": {
              "width": 82,
              "height": 90,
              "margin-left": 0,
              "margin-top": 0
            }
          },
          {
            "name": "div23",
            "content": {
              "display": "flex",
              "width": 1187,
              "height": 33,
              "margin-top": 14,
              "margin-left": 0
            }
          },
          {
            "name": "div24",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 113,
              "height": 33,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div25",
            "content": {
              "display": "flex",
              "width": 113,
              "height": 33,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div26",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 113,
              "height": 33,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div27",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 33,
              "height": 33,
              "margin-top": 0,
              "margin-left": 227
            }
          },
          {
            "name": "div28",
            "content": {
              "display": "flex",
              "width": 33,
              "height": 17,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div29",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 33,
              "height": 17,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div30",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 47,
              "height": 33,
              "margin-top": 0,
              "margin-left": 24
            }
          },
          {
            "name": "div31",
            "content": {
              "display": "flex",
              "width": 47,
              "height": 16,
              "margin-top": 2,
              "margin-left": 0
            }
          },
          {
            "name": "div32",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 47,
              "height": 16,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div33",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 27,
              "height": 33,
              "margin-top": 0,
              "margin-left": 24
            }
          },
          {
            "name": "div34",
            "content": {
              "display": "flex",
              "width": 27,
              "height": 16,
              "margin-top": 5,
              "margin-left": 0
            }
          },
          {
            "name": "div35",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 27,
              "height": 16,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div36",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 65,
              "height": 33,
              "margin-top": 0,
              "margin-left": 24
            }
          },
          {
            "name": "div37",
            "content": {
              "display": "flex",
              "width": 65,
              "height": 17,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div38",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 65,
              "height": 17,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div39",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 66,
              "height": 33,
              "margin-top": 0,
              "margin-left": 17
            }
          },
          {
            "name": "div40",
            "content": {
              "display": "flex",
              "width": 66,
              "height": 17,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div41",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 66,
              "height": 17,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div42",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 27,
              "height": 33,
              "margin-top": 0,
              "margin-left": 20
            }
          },
          {
            "name": "div43",
            "content": {
              "display": "flex",
              "width": 27,
              "height": 17,
              "margin-top": 5,
              "margin-left": 0
            }
          },
          {
            "name": "div44",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 27,
              "height": 17,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div45",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 66,
              "height": 33,
              "margin-top": 0,
              "margin-left": 16
            }
          },
          {
            "name": "div46",
            "content": {
              "display": "flex",
              "width": 66,
              "height": 17,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div47",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 66,
              "height": 17,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div48",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 66,
              "height": 33,
              "margin-top": 0,
              "margin-left": 260
            }
          },
          {
            "name": "div49",
            "content": {
              "display": "flex",
              "width": 66,
              "height": 17,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div50",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 66,
              "height": 17,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div51",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 32,
              "height": 33,
              "margin-top": 0,
              "margin-left": 33
            }
          },
          {
            "name": "div52",
            "content": {
              "display": "flex",
              "width": 32,
              "height": 16,
              "margin-top": 2,
              "margin-left": 0
            }
          },
          {
            "name": "div53",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 32,
              "height": 16,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div54",
            "content": {
              "display": "flex",
              "width": 1138,
              "height": 407,
              "margin-top": 17,
              "margin-left": 0
            }
          },
          {
            "name": "div55",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 1138,
              "height": 407,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div56",
            "content": {
              "display": "flex",
              "width": 1138,
              "height": 407,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div57",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 1138,
              "height": 407,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div58",
            "content": {
              "display": "flex",
              "width": 1141,
              "height": 92,
              "margin-top": 46,
              "margin-left": 46
            }
          },
          {
            "name": "div59",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 106,
              "height": 92,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div60",
            "content": {
              "display": "flex",
              "width": 106,
              "height": 27,
              "margin-top": 6,
              "margin-left": 0
            }
          },
          {
            "name": "div61",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 106,
              "height": 27,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div62",
            "content": {
              "display": "flex",
              "width": 89,
              "height": 18,
              "margin-top": 16,
              "margin-left": 1
            }
          },
          {
            "name": "div63",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 89,
              "height": 18,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div64",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 97,
              "height": 92,
              "margin-top": 0,
              "margin-left": 25
            }
          },
          {
            "name": "div65",
            "content": {
              "display": "flex",
              "width": 97,
              "height": 82,
              "margin-top": 2,
              "margin-left": 0
            }
          },
          {
            "name": "div66",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 97,
              "height": 82,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div67",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 115,
              "height": 92,
              "margin-top": 0,
              "margin-left": 82
            }
          },
          {
            "name": "div68",
            "content": {
              "display": "flex",
              "width": 115,
              "height": 33,
              "margin-top": 2,
              "margin-left": 0
            }
          },
          {
            "name": "div69",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 115,
              "height": 33,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div70",
            "content": {
              "display": "flex",
              "width": 76,
              "height": 15,
              "margin-top": 15,
              "margin-left": 9
            }
          },
          {
            "name": "div71",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 76,
              "height": 15,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div72",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 98,
              "height": 92,
              "margin-top": 0,
              "margin-left": 15
            }
          },
          {
            "name": "div73",
            "content": {
              "display": "flex",
              "width": 98,
              "height": 82,
              "margin-top": 2,
              "margin-left": 0
            }
          },
          {
            "name": "div74",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 98,
              "height": 82,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div75",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 110,
              "height": 92,
              "margin-top": 0,
              "margin-left": 81
            }
          },
          {
            "name": "div76",
            "content": {
              "display": "flex",
              "width": 109,
              "height": 29,
              "margin-top": 6,
              "margin-left": 1
            }
          },
          {
            "name": "div77",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 109,
              "height": 29,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div78",
            "content": {
              "display": "flex",
              "width": 89,
              "height": 16,
              "margin-top": 16,
              "margin-left": 0
            }
          },
          {
            "name": "div79",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 89,
              "height": 16,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div80",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 97,
              "height": 92,
              "margin-top": 0,
              "margin-left": 21
            }
          },
          {
            "name": "div81",
            "content": {
              "display": "flex",
              "width": 97,
              "height": 82,
              "margin-top": 2,
              "margin-left": 0
            }
          },
          {
            "name": "div82",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 97,
              "height": 82,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div83",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 104,
              "height": 92,
              "margin-top": 0,
              "margin-left": 91
            }
          },
          {
            "name": "div84",
            "content": {
              "display": "flex",
              "width": 104,
              "height": 35,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div85",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 104,
              "height": 35,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div86",
            "content": {
              "display": "flex",
              "width": 80,
              "height": 11,
              "margin-top": 20,
              "margin-left": 0
            }
          },
          {
            "name": "div87",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 80,
              "height": 11,
              "margin-top": 0,
              "margin-left": 0
            }
          },
          {
            "name": "div88",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 82,
              "height": 92,
              "margin-top": 0,
              "margin-left": 17
            }
          },
          {
            "name": "div89",
            "content": {
              "display": "flex",
              "width": 82,
              "height": 90,
              "margin-top": 2,
              "margin-left": 0
            }
          },
          {
            "name": "div90",
            "content": {
              "display": "flex",
              "flex-direction": "column",
              "width": 82,
              "height": 90,
              "margin-top": 0,
              "margin-left": 0
            }
          }
        ],*/
        cssStyle:[],
    },
    mutations: {
        setState(state, obj) {
            // obj = mergeDeep(JSON.parse(JSON.stringify(state)), obj)
            Object.assign(state, obj)

            //保存本地
            localStorage.store = JSON.stringify(state)


        }
    },
    actions: {
        delComponent(context, id) {
            //删除前备份一份
            context.commit('setState', { backupComponents: JSON.parse(JSON.stringify(context.state.components)) })

            let components = context.state.components
            let index = components.findIndex(c => c.info.id === id)
            let component = components[index]
                //从父组件的slots中删除
            if (component.parentId) {
                let parent = components.find(c => c.info.id === component.parentId)
                let slot = parent.slots[component.slot || component.attributes.slot || 'default']
                let i = slot.findIndex(item => item.id === component.info.id)
                    //删除
                slot.splice(i, 1)

                //递归获取最父级组件
                let getTop = function(_component) {
                    if (_component.parentId) {
                        let c = components.find(c => c.info.id === _component.parentId)
                        return getTop(c)
                    } else {
                        return _component
                    }
                }

                //更新模板
                let top = getTop(parent)
                top.template = getTemplate(top.info, top.attributes, top.slots).template
            }
            //删除当前组件所有子组件
            function delChildren(component) {
                let slots = component.slots
                Object.keys(slots).forEach(slot => {
                    if (component.slots[slot].length) {
                        component.slots[slot].forEach(val => {
                            let childIndex = components.findIndex(c => c.info.id === val.id)
                            let hasChild
                            if (childIndex >= 0)
                                hasChild = Object.keys(components[childIndex].slots).every(slot => {
                                    return components[childIndex].slots[slot].length > 0
                                })
                            if (hasChild)
                                delChildren(components[childIndex])
                            components.splice(childIndex, 1)

                        })
                    }
                })
            }
            delChildren(component)

            //删除自身
            index = components.findIndex(c => c.info.id === id) //components已被更新 重新获取索引
            components.splice(index, 1)

            //更新
            context.commit('setState', { currentComponent: {}, components })

            return Promise.resolve(components)
        }
    }
})

export default store
