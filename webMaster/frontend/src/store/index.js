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
        pages:[
          {
            "name": "abcd",
            "components": [
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"root\"\n>\n                        <div id=\"5f3d84d4-33d0\" data-component-active tabIndex=\"0\" class=\"div22\"\n>\n                        <div id=\"4d184d82-bb31\" data-component-active tabIndex=\"0\" class=\"div23\"\n>\n                        <div id=\"4fd29c9e-beaf\" data-component-active tabIndex=\"0\" class=\"div24\"\n>\n                        <div id=\"f6a98ab0-0955\" data-component-active tabIndex=\"0\" class=\"div25\"\n>\n                        <img id=\"1d20487e-4fc4\" data-component-active tabIndex=\"0\" src=\"./static/assets/1/image0.png\"\nclass=\"image0\"\n></img>\n\n                    </div>\n                    </div>\n                    </div><div id=\"2f4f0cef-a47f\" data-component-active tabIndex=\"0\" class=\"div26\"\n>\n                        <div id=\"41c91fc6-1d7f\" data-component-active tabIndex=\"0\" class=\"div27\"\n>\n                        <div id=\"4a6d0327-4814\" data-component-active tabIndex=\"0\" class=\"div28\"\n>\n                        <el-link id=\"42e9c94b-7bc0\" data-component-active tabIndex=\"0\" class=\"link1\"\n>link</el-link>\n\n                    </div>\n                    </div>\n                    </div><div id=\"113dac08-5362\" data-component-active tabIndex=\"0\" class=\"div29\"\n>\n                        <div id=\"3540324b-a5ab\" data-component-active tabIndex=\"0\" class=\"div30\"\n>\n                        <div id=\"2829259f-86a2\" data-component-active tabIndex=\"0\" class=\"div31\"\n>\n                        <el-link id=\"89790aa0-c74f\" data-component-active tabIndex=\"0\" class=\"link3\"\n>link</el-link>\n\n                    </div>\n                    </div>\n                    </div><div id=\"ed992395-4c45\" data-component-active tabIndex=\"0\" class=\"div32\"\n>\n                        <div id=\"c24d299c-cda8\" data-component-active tabIndex=\"0\" class=\"div33\"\n>\n                        <div id=\"29c5b400-a8aa\" data-component-active tabIndex=\"0\" class=\"div34\"\n>\n                        <el-link id=\"e9c3ae57-fefb\" data-component-active tabIndex=\"0\" class=\"link5\"\n>link</el-link>\n\n                    </div>\n                    </div>\n                    </div><div id=\"92fda01b-7eda\" data-component-active tabIndex=\"0\" class=\"div35\"\n>\n                        <div id=\"e56be2ea-848c\" data-component-active tabIndex=\"0\" class=\"div36\"\n>\n                        <div id=\"d760b039-dab3\" data-component-active tabIndex=\"0\" class=\"div37\"\n>\n                        <el-link id=\"fb7990a3-b8f3\" data-component-active tabIndex=\"0\" class=\"link7\"\n>link</el-link>\n\n                    </div>\n                    </div>\n                    </div><div id=\"862192c6-7695\" data-component-active tabIndex=\"0\" class=\"div38\"\n>\n                        <div id=\"2f42c117-4c29\" data-component-active tabIndex=\"0\" class=\"div39\"\n>\n                        <div id=\"5c7c6c52-f90b\" data-component-active tabIndex=\"0\" class=\"div40\"\n>\n                        <el-link id=\"fe37e2eb-babf\" data-component-active tabIndex=\"0\" class=\"link9\"\n>link</el-link>\n\n                    </div>\n                    </div>\n                    </div>\n                    </div><div id=\"074e64e0-80c1\" data-component-active tabIndex=\"0\" class=\"div41\"\n>\n                        <div id=\"9d7a31b4-e470\" data-component-active tabIndex=\"0\" class=\"div42\"\n>\n                        <div id=\"7ef875d6-059e\" data-component-active tabIndex=\"0\" class=\"div43\"\n>\n                        <div id=\"374d19e9-8149\" data-component-active tabIndex=\"0\" class=\"div44\"\n>\n                        <img id=\"f466e32c-ef56\" data-component-active tabIndex=\"0\" src=\"./static/assets/1/image11.png\"\nclass=\"image11\"\n></img>\n\n                    </div>\n                    </div>\n                    </div>\n                    </div><div id=\"080d9365-4dad\" data-component-active tabIndex=\"0\" class=\"div45\"\n>\n                        <div id=\"cbdca26a-4fb5\" data-component-active tabIndex=\"0\" class=\"div46\"\n>\n                        <div id=\"3d2140ce-7522\" data-component-active tabIndex=\"0\" class=\"div47\"\n>\n                        <div id=\"85c993fe-f8b0\" data-component-active tabIndex=\"0\" class=\"div48\"\n>\n                        <img id=\"2ad6d08b-862b\" data-component-active tabIndex=\"0\" src=\"./static/assets/1/image13.png\"\nclass=\"image13\"\n></img>\n\n                    </div>\n                    </div>\n                    </div><div id=\"3b2ced15-2851\" data-component-active tabIndex=\"0\" class=\"div49\"\n>\n                        <div id=\"c16ddbc1-6c05\" data-component-active tabIndex=\"0\" class=\"div50\"\n>\n                        <div id=\"1ebb5b63-43f2\" data-component-active tabIndex=\"0\" class=\"div51\"\n>\n                        <span id=\"26167c87-f6ad\" data-component-active tabIndex=\"0\" class=\"text15\"\n>Text</span>\n\n                    </div>\n                    </div>\n                    </div><div id=\"9e92f4f1-283c\" data-component-active tabIndex=\"0\" class=\"div52\"\n>\n                        <div id=\"23e62daf-4563\" data-component-active tabIndex=\"0\" class=\"div53\"\n>\n                        <div id=\"e019f9d1-35b4\" data-component-active tabIndex=\"0\" class=\"div54\"\n>\n                        <img id=\"89547f96-9cd5\" data-component-active tabIndex=\"0\" src=\"./static/assets/1/image17.png\"\nclass=\"image17\"\n></img>\n\n                    </div>\n                    </div>\n                    </div><div id=\"c1d92b8c-f608\" data-component-active tabIndex=\"0\" class=\"div55\"\n>\n                        <div id=\"933b64a2-a49f\" data-component-active tabIndex=\"0\" class=\"div56\"\n>\n                        <div id=\"edfb13ed-cd4d\" data-component-active tabIndex=\"0\" class=\"div57\"\n>\n                        <img id=\"b3468c93-380b\" data-component-active tabIndex=\"0\" src=\"./static/assets/1/image18.png\"\nclass=\"image18\"\n></img>\n\n                    </div>\n                    </div>\n                    </div><div id=\"ed0fcca1-4136\" data-component-active tabIndex=\"0\" class=\"div58\"\n>\n                        <div id=\"6edc83b3-8264\" data-component-active tabIndex=\"0\" class=\"div59\"\n>\n                        <div id=\"08857445-9bd2\" data-component-active tabIndex=\"0\" class=\"div60\"\n>\n                        <img id=\"d72fe894-e22d\" data-component-active tabIndex=\"0\" src=\"./static/assets/1/image20.png\"\nclass=\"image20\"\n></img>\n\n                    </div>\n                    </div>\n                    </div>\n                    </div>\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "root"
                  }
                },
                "slots": {
                  "default": [
                    {
                      "id": "5f3d84d4-33d0"
                    },
                    {
                      "id": "074e64e0-80c1"
                    },
                    {
                      "id": "080d9365-4dad"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "a3e7da00-fab6"
                },
                "style": {
                  "width": 1277,
                  "height": 618,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": ""
                },
                "uid": 650
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div22\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div22"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "4d184d82-bb31"
                    },
                    {
                      "id": "2f4f0cef-a47f"
                    },
                    {
                      "id": "113dac08-5362"
                    },
                    {
                      "id": "ed992395-4c45"
                    },
                    {
                      "id": "92fda01b-7eda"
                    },
                    {
                      "id": "862192c6-7695"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "5f3d84d4-33d0"
                },
                "parentId": "a3e7da00-fab6",
                "style": {
                  "display": "flex",
                  "width": 1139,
                  "height": 34,
                  "margin-top": 14,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div23\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div23"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "4fd29c9e-beaf"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "4d184d82-bb31"
                },
                "parentId": "5f3d84d4-33d0",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 114,
                  "height": 34,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div24\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div24"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "f6a98ab0-0955"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "4fd29c9e-beaf"
                },
                "parentId": "4d184d82-bb31",
                "style": {
                  "display": "flex",
                  "width": 114,
                  "height": 34,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div25\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div25"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "1d20487e-4fc4"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "f6a98ab0-0955"
                },
                "parentId": "4fd29c9e-beaf",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 114,
                  "height": 34,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/1/image0.png\"\nclass=\"image0\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/1/image0.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image0"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "1d20487e-4fc4"
                },
                "parentId": "f6a98ab0-0955",
                "style": {
                  "width": 114,
                  "height": 34,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div26\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div26"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "41c91fc6-1d7f"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "2f4f0cef-a47f"
                },
                "parentId": "5f3d84d4-33d0",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 33,
                  "height": 34,
                  "margin-top": 0,
                  "margin-left": 231
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div27\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div27"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "4a6d0327-4814"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "41c91fc6-1d7f"
                },
                "parentId": "2f4f0cef-a47f",
                "style": {
                  "display": "flex",
                  "width": 33,
                  "height": 17,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div28\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div28"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "42e9c94b-7bc0"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "4a6d0327-4814"
                },
                "parentId": "41c91fc6-1d7f",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 33,
                  "height": 17,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<el-link data-component-active tabIndex=\"0\" class=\"link1\"\n>link</el-link>\n",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "link1"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "link",
                  "id": "42e9c94b-7bc0"
                },
                "parentId": "4a6d0327-4814",
                "style": {
                  "width": 33,
                  "height": 17,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 255, 255)"
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div29\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div29"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "3540324b-a5ab"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "113dac08-5362"
                },
                "parentId": "5f3d84d4-33d0",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 66,
                  "height": 34,
                  "margin-top": 0,
                  "margin-left": 149
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div30\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div30"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "2829259f-86a2"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "3540324b-a5ab"
                },
                "parentId": "113dac08-5362",
                "style": {
                  "display": "flex",
                  "width": 66,
                  "height": 17,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div31\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div31"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "89790aa0-c74f"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "2829259f-86a2"
                },
                "parentId": "3540324b-a5ab",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 66,
                  "height": 17,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<el-link data-component-active tabIndex=\"0\" class=\"link3\"\n>link</el-link>\n",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "link3"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "link",
                  "id": "89790aa0-c74f"
                },
                "parentId": "2829259f-86a2",
                "style": {
                  "width": 66,
                  "height": 17,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 255, 255)"
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div32\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div32"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "c24d299c-cda8"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "ed992395-4c45"
                },
                "parentId": "5f3d84d4-33d0",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 67,
                  "height": 34,
                  "margin-top": 0,
                  "margin-left": 17
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div33\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div33"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "29c5b400-a8aa"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "c24d299c-cda8"
                },
                "parentId": "ed992395-4c45",
                "style": {
                  "display": "flex",
                  "width": 67,
                  "height": 17,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div34\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div34"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "e9c3ae57-fefb"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "29c5b400-a8aa"
                },
                "parentId": "c24d299c-cda8",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 67,
                  "height": 17,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<el-link data-component-active tabIndex=\"0\" class=\"link5\"\n>link</el-link>\n",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "link5"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "link",
                  "id": "e9c3ae57-fefb"
                },
                "parentId": "29c5b400-a8aa",
                "style": {
                  "width": 67,
                  "height": 17,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 255, 255)"
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div35\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div35"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "e56be2ea-848c"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "92fda01b-7eda"
                },
                "parentId": "5f3d84d4-33d0",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 67,
                  "height": 34,
                  "margin-top": 0,
                  "margin-left": 64
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div36\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div36"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "d760b039-dab3"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "e56be2ea-848c"
                },
                "parentId": "92fda01b-7eda",
                "style": {
                  "display": "flex",
                  "width": 67,
                  "height": 17,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div37\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div37"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "fb7990a3-b8f3"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "d760b039-dab3"
                },
                "parentId": "e56be2ea-848c",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 67,
                  "height": 17,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<el-link data-component-active tabIndex=\"0\" class=\"link7\"\n>link</el-link>\n",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "link7"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "link",
                  "id": "fb7990a3-b8f3"
                },
                "parentId": "d760b039-dab3",
                "style": {
                  "width": 67,
                  "height": 17,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 255, 255)"
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div38\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div38"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "2f42c117-4c29"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "862192c6-7695"
                },
                "parentId": "5f3d84d4-33d0",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 67,
                  "height": 34,
                  "margin-top": 0,
                  "margin-left": 264
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div39\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div39"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "5c7c6c52-f90b"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "2f42c117-4c29"
                },
                "parentId": "862192c6-7695",
                "style": {
                  "display": "flex",
                  "width": 67,
                  "height": 17,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div40\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div40"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "fe37e2eb-babf"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "5c7c6c52-f90b"
                },
                "parentId": "2f42c117-4c29",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 67,
                  "height": 17,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<el-link data-component-active tabIndex=\"0\" class=\"link9\"\n>link</el-link>\n",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "link9"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "link",
                  "id": "fe37e2eb-babf"
                },
                "parentId": "5c7c6c52-f90b",
                "style": {
                  "width": 67,
                  "height": 17,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 255, 255)"
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div41\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div41"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "9d7a31b4-e470"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "074e64e0-80c1"
                },
                "parentId": "a3e7da00-fab6",
                "style": {
                  "display": "flex",
                  "width": 1277,
                  "height": 445,
                  "margin-top": 9,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div42\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div42"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "7ef875d6-059e"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "9d7a31b4-e470"
                },
                "parentId": "074e64e0-80c1",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 1277,
                  "height": 445,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div43\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div43"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "374d19e9-8149"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "7ef875d6-059e"
                },
                "parentId": "9d7a31b4-e470",
                "style": {
                  "display": "flex",
                  "width": 1277,
                  "height": 445,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div44\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div44"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "f466e32c-ef56"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "374d19e9-8149"
                },
                "parentId": "7ef875d6-059e",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 1277,
                  "height": 445,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/1/image11.png\"\nclass=\"image11\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/1/image11.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image11"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "f466e32c-ef56"
                },
                "parentId": "374d19e9-8149",
                "style": {
                  "width": 1277,
                  "height": 445,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div45\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div45"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "cbdca26a-4fb5"
                    },
                    {
                      "id": "3b2ced15-2851"
                    },
                    {
                      "id": "9e92f4f1-283c"
                    },
                    {
                      "id": "c1d92b8c-f608"
                    },
                    {
                      "id": "ed0fcca1-4136"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "080d9365-4dad"
                },
                "parentId": "a3e7da00-fab6",
                "style": {
                  "display": "flex",
                  "width": 1025,
                  "height": 91,
                  "margin-top": 25,
                  "margin-left": 180
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div46\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div46"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "3d2140ce-7522"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "cbdca26a-4fb5"
                },
                "parentId": "080d9365-4dad",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 98,
                  "height": 91,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div47\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div47"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "85c993fe-f8b0"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "3d2140ce-7522"
                },
                "parentId": "cbdca26a-4fb5",
                "style": {
                  "display": "flex",
                  "width": 98,
                  "height": 83,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div48\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div48"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "2ad6d08b-862b"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "85c993fe-f8b0"
                },
                "parentId": "3d2140ce-7522",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 98,
                  "height": 83,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/1/image13.png\"\nclass=\"image13\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/1/image13.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image13"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "2ad6d08b-862b"
                },
                "parentId": "85c993fe-f8b0",
                "style": {
                  "width": 98,
                  "height": 83,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div49\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div49"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "c16ddbc1-6c05"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "3b2ced15-2851"
                },
                "parentId": "080d9365-4dad",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 117,
                  "height": 91,
                  "margin-top": 0,
                  "margin-left": 83
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div50\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div50"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "1ebb5b63-43f2"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "c16ddbc1-6c05"
                },
                "parentId": "3b2ced15-2851",
                "style": {
                  "display": "flex",
                  "width": 117,
                  "height": 33,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div51\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div51"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "26167c87-f6ad"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "1ebb5b63-43f2"
                },
                "parentId": "c16ddbc1-6c05",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 117,
                  "height": 33,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<span data-component-active tabIndex=\"0\" class=\"text15\"\n>Text</span>\n",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "text15"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Text",
                  "id": "26167c87-f6ad"
                },
                "parentId": "1ebb5b63-43f2",
                "style": {
                  "text-align": "center",
                  "width": 117,
                  "height": 33,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 255, 255)"
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div52\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div52"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "23e62daf-4563"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "9e92f4f1-283c"
                },
                "parentId": "080d9365-4dad",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 100,
                  "height": 91,
                  "margin-top": 0,
                  "margin-left": 15
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div53\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div53"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "e019f9d1-35b4"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "23e62daf-4563"
                },
                "parentId": "9e92f4f1-283c",
                "style": {
                  "display": "flex",
                  "width": 100,
                  "height": 83,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div54\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div54"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "89547f96-9cd5"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "e019f9d1-35b4"
                },
                "parentId": "23e62daf-4563",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 100,
                  "height": 83,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/1/image17.png\"\nclass=\"image17\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/1/image17.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image17"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "89547f96-9cd5"
                },
                "parentId": "e019f9d1-35b4",
                "style": {
                  "width": 100,
                  "height": 83,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div55\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div55"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "933b64a2-a49f"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "c1d92b8c-f608"
                },
                "parentId": "080d9365-4dad",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 99,
                  "height": 91,
                  "margin-top": 0,
                  "margin-left": 215
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div56\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div56"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "edfb13ed-cd4d"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "933b64a2-a49f"
                },
                "parentId": "c1d92b8c-f608",
                "style": {
                  "display": "flex",
                  "width": 99,
                  "height": 83,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div57\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div57"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "b3468c93-380b"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "edfb13ed-cd4d"
                },
                "parentId": "933b64a2-a49f",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 99,
                  "height": 83,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/1/image18.png\"\nclass=\"image18\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/1/image18.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image18"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "b3468c93-380b"
                },
                "parentId": "edfb13ed-cd4d",
                "style": {
                  "width": 99,
                  "height": 83,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div58\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div58"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "6edc83b3-8264"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "ed0fcca1-4136"
                },
                "parentId": "080d9365-4dad",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 83,
                  "height": 91,
                  "margin-top": 0,
                  "margin-left": 215
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div59\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div59"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "08857445-9bd2"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "6edc83b3-8264"
                },
                "parentId": "ed0fcca1-4136",
                "style": {
                  "display": "flex",
                  "width": 83,
                  "height": 91,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div60\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div60"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "d72fe894-e22d"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "08857445-9bd2"
                },
                "parentId": "6edc83b3-8264",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 83,
                  "height": 91,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/1/image20.png\"\nclass=\"image20\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/1/image20.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image20"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "d72fe894-e22d"
                },
                "parentId": "08857445-9bd2",
                "style": {
                  "width": 83,
                  "height": 91,
                  "margin-left": 0,
                  "margin-top": 0,
                  "border-radius": 0
                },
                "func": {
                  "type": ""
                }
              }
            ],
            "css": '.root{\n' +
              'width:1277px;\n' +
              'height:618px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div22{\n' +
              'display:flex;\n' +
              'width:1139px;\n' +
              'height:34px;\n' +
              'margin-top:14px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div23{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:114px;\n' +
              'height:34px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div24{\n' +
              'display:flex;\n' +
              'width:114px;\n' +
              'height:34px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div25{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:114px;\n' +
              'height:34px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image0{\n' +
              'width:114px;\n' +
              'height:34px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div26{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:33px;\n' +
              'height:34px;\n' +
              'margin-top:0px;\n' +
              'margin-left:231px;\n' +
              '}\n' +
              '.div27{\n' +
              'display:flex;\n' +
              'width:33px;\n' +
              'height:17px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div28{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:33px;\n' +
              'height:17px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.link1{\n' +
              'width:33px;\n' +
              'height:17px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 255, 255);\n' +
              '}\n' +
              '.div29{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:66px;\n' +
              'height:34px;\n' +
              'margin-top:0px;\n' +
              'margin-left:149px;\n' +
              '}\n' +
              '.div30{\n' +
              'display:flex;\n' +
              'width:66px;\n' +
              'height:17px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div31{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:66px;\n' +
              'height:17px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.link3{\n' +
              'width:66px;\n' +
              'height:17px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 255, 255);\n' +
              '}\n' +
              '.div32{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:67px;\n' +
              'height:34px;\n' +
              'margin-top:0px;\n' +
              'margin-left:17px;\n' +
              '}\n' +
              '.div33{\n' +
              'display:flex;\n' +
              'width:67px;\n' +
              'height:17px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div34{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:67px;\n' +
              'height:17px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.link5{\n' +
              'width:67px;\n' +
              'height:17px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 255, 255);\n' +
              '}\n' +
              '.div35{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:67px;\n' +
              'height:34px;\n' +
              'margin-top:0px;\n' +
              'margin-left:64px;\n' +
              '}\n' +
              '.div36{\n' +
              'display:flex;\n' +
              'width:67px;\n' +
              'height:17px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div37{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:67px;\n' +
              'height:17px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.link7{\n' +
              'width:67px;\n' +
              'height:17px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 255, 255);\n' +
              '}\n' +
              '.div38{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:67px;\n' +
              'height:34px;\n' +
              'margin-top:0px;\n' +
              'margin-left:264px;\n' +
              '}\n' +
              '.div39{\n' +
              'display:flex;\n' +
              'width:67px;\n' +
              'height:17px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div40{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:67px;\n' +
              'height:17px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.link9{\n' +
              'width:67px;\n' +
              'height:17px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 255, 255);\n' +
              '}\n' +
              '.div41{\n' +
              'display:flex;\n' +
              'width:1277px;\n' +
              'height:445px;\n' +
              'margin-top:9px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div42{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:1277px;\n' +
              'height:445px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div43{\n' +
              'display:flex;\n' +
              'width:1277px;\n' +
              'height:445px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div44{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:1277px;\n' +
              'height:445px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image11{\n' +
              'width:1277px;\n' +
              'height:445px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div45{\n' +
              'display:flex;\n' +
              'width:1025px;\n' +
              'height:91px;\n' +
              'margin-top:25px;\n' +
              'margin-left:180px;\n' +
              '}\n' +
              '.div46{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:98px;\n' +
              'height:91px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div47{\n' +
              'display:flex;\n' +
              'width:98px;\n' +
              'height:83px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div48{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:98px;\n' +
              'height:83px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image13{\n' +
              'width:98px;\n' +
              'height:83px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div49{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:117px;\n' +
              'height:91px;\n' +
              'margin-top:0px;\n' +
              'margin-left:83px;\n' +
              '}\n' +
              '.div50{\n' +
              'display:flex;\n' +
              'width:117px;\n' +
              'height:33px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div51{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:117px;\n' +
              'height:33px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.text15{\n' +
              'text-align:center;\n' +
              'width:117px;\n' +
              'height:33px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 255, 255);\n' +
              '}\n' +
              '.div52{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:100px;\n' +
              'height:91px;\n' +
              'margin-top:0px;\n' +
              'margin-left:15px;\n' +
              '}\n' +
              '.div53{\n' +
              'display:flex;\n' +
              'width:100px;\n' +
              'height:83px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div54{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:100px;\n' +
              'height:83px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image17{\n' +
              'width:100px;\n' +
              'height:83px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div55{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:99px;\n' +
              'height:91px;\n' +
              'margin-top:0px;\n' +
              'margin-left:215px;\n' +
              '}\n' +
              '.div56{\n' +
              'display:flex;\n' +
              'width:99px;\n' +
              'height:83px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div57{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:99px;\n' +
              'height:83px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image18{\n' +
              'width:99px;\n' +
              'height:83px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div58{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:83px;\n' +
              'height:91px;\n' +
              'margin-top:0px;\n' +
              'margin-left:215px;\n' +
              '}\n' +
              '.div59{\n' +
              'display:flex;\n' +
              'width:83px;\n' +
              'height:91px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div60{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:83px;\n' +
              'height:91px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image20{\n' +
              'width:83px;\n' +
              'height:91px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.image20{\n' +
              'width:83px;\n' +
              'height:91px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'border-radius:0px;\n' +
              '}\n',
            "filenames": []
          },
          {
            "filenames": [],
            "name": "taobao1",
            "components":[
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"root\"\n>\n                        <div id=\"f3b523af-4797\" data-component-active tabIndex=\"0\" class=\"div11\"\n>\n                        <div id=\"77fa8fdc-356c\" data-component-active tabIndex=\"0\" class=\"div12\"\n>\n                        <div id=\"1de4904c-9453\" data-component-active tabIndex=\"0\" class=\"div13\"\n>\n                        <div id=\"e2fc63c3-7603\" data-component-active tabIndex=\"0\" class=\"div14\"\n>\n                        <img id=\"a0bf063e-8ee8\" data-component-active tabIndex=\"0\" src=\"./static/assets/3/image0.png\"\nclass=\"image0\"\n></img>\n\n                    </div>\n                    </div>\n                    </div><div id=\"8fe32aba-e1a9\" data-component-active tabIndex=\"0\" class=\"div15\"\n>\n                        <div id=\"cbdfdf87-f041\" data-component-active tabIndex=\"0\" class=\"div16\"\n>\n                        <div id=\"7fd6a0cb-c56e\" data-component-active tabIndex=\"0\" class=\"div17\"\n>\n                        <img id=\"74710368-e8f5\" data-component-active tabIndex=\"0\" src=\"./static/assets/3/image1.png\"\nclass=\"image1\"\n></img>\n\n                    </div>\n                    </div>\n                    </div><div id=\"c94ab707-33ff\" data-component-active tabIndex=\"0\" class=\"div18\"\n>\n                        <div id=\"0945fc7e-ef54\" data-component-active tabIndex=\"0\" class=\"div19\"\n>\n                        <div id=\"5fa9f697-799d\" data-component-active tabIndex=\"0\" class=\"div20\"\n>\n                        <img id=\"507aec1f-d612\" data-component-active tabIndex=\"0\" src=\"./static/assets/3/image2.png\"\nclass=\"image2\"\n></img>\n\n                    </div>\n                    </div>\n                    </div><div id=\"b5f6ff4d-cb24\" data-component-active tabIndex=\"0\" class=\"div21\"\n>\n                        <div id=\"362e513b-c4ba\" data-component-active tabIndex=\"0\" class=\"div22\"\n>\n                        <div id=\"85671d19-8c1c\" data-component-active tabIndex=\"0\" class=\"div23\"\n>\n                        <img id=\"bc5857a6-e4f8\" data-component-active tabIndex=\"0\" src=\"./static/assets/3/image3.png\"\nclass=\"image3\"\n></img>\n\n                    </div>\n                    </div>\n                    </div><div id=\"5543cc74-d701\" data-component-active tabIndex=\"0\" class=\"div24\"\n>\n                        <div id=\"bc17531a-8250\" data-component-active tabIndex=\"0\" class=\"div25\"\n>\n                        <div id=\"d948fa5a-cac2\" data-component-active tabIndex=\"0\" class=\"div26\"\n>\n                        <img id=\"001eafca-adc7\" data-component-active tabIndex=\"0\" src=\"./static/assets/3/image4.png\"\nclass=\"image4\"\n></img>\n\n                    </div>\n                    </div>\n                    </div>\n                    </div><div id=\"7c62ed6c-a886\" data-component-active tabIndex=\"0\" class=\"div27\"\n>\n                        <div id=\"711d7144-7bb7\" data-component-active tabIndex=\"0\" class=\"div28\"\n>\n                        <div id=\"52b1bfd9-4e53\" data-component-active tabIndex=\"0\" class=\"div29\"\n>\n                        <div id=\"aff65563-affa\" data-component-active tabIndex=\"0\" class=\"div30\"\n>\n                        <span id=\"ccc68184-ad87\" data-component-active tabIndex=\"0\" class=\"text5\"\n>Text</span>\n\n                    </div>\n                    </div>\n                    </div><div id=\"f32bd7fa-f349\" data-component-active tabIndex=\"0\" class=\"div31\"\n>\n                        <div id=\"7222bac0-2d71\" data-component-active tabIndex=\"0\" class=\"div32\"\n>\n                        <div id=\"c65a9428-d0c9\" data-component-active tabIndex=\"0\" class=\"div33\"\n>\n                        <span id=\"2f0d7504-fae3\" data-component-active tabIndex=\"0\" class=\"text6\"\n>Text</span>\n\n                    </div>\n                    </div>\n                    </div><div id=\"a01c9d17-2733\" data-component-active tabIndex=\"0\" class=\"div34\"\n>\n                        <div id=\"456a2b2c-c0fb\" data-component-active tabIndex=\"0\" class=\"div35\"\n>\n                        <div id=\"930884f2-a21f\" data-component-active tabIndex=\"0\" class=\"div36\"\n>\n                        <span id=\"6ec46b02-64ad\" data-component-active tabIndex=\"0\" class=\"text7\"\n>Text</span>\n\n                    </div>\n                    </div>\n                    </div><div id=\"a7cf9888-4c2c\" data-component-active tabIndex=\"0\" class=\"div37\"\n>\n                        <div id=\"de29391b-4fc2\" data-component-active tabIndex=\"0\" class=\"div38\"\n>\n                        <div id=\"a423326b-fe16\" data-component-active tabIndex=\"0\" class=\"div39\"\n>\n                        <span id=\"541cfb37-81ec\" data-component-active tabIndex=\"0\" class=\"text8\"\n>Text</span>\n\n                    </div>\n                    </div>\n                    </div><div id=\"0a0c45ee-d89a\" data-component-active tabIndex=\"0\" class=\"div40\"\n>\n                        <div id=\"a5033741-0e3a\" data-component-active tabIndex=\"0\" class=\"div41\"\n>\n                        <div id=\"a03f7e37-3cae\" data-component-active tabIndex=\"0\" class=\"div42\"\n>\n                        <span id=\"19987acb-47ef\" data-component-active tabIndex=\"0\" class=\"text9\"\n>Text</span>\n\n                    </div>\n                    </div>\n                    </div>\n                    </div><div id=\"f0fc0570-aa99\" data-component-active tabIndex=\"0\" class=\"div43\"\n>\n                        <div id=\"73cbe624-7264\" data-component-active tabIndex=\"0\" class=\"div44\"\n>\n                        <div id=\"ea09638e-6605\" data-component-active tabIndex=\"0\" class=\"div45\"\n>\n                        <div id=\"d161802f-dd80\" data-component-active tabIndex=\"0\" class=\"div46\"\n>\n                        <button id=\"7130f612-4d83\" data-component-active tabIndex=\"0\" @click=\"\" class=\"button10\"\n>按钮</button>\n                    </div>\n                    </div>\n                    </div>\n                    </div>\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "root"
                  }
                },
                "slots": {
                  "default": [
                    {
                      "id": "f3b523af-4797"
                    },
                    {
                      "id": "7c62ed6c-a886"
                    },
                    {
                      "id": "f0fc0570-aa99"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "b82a6a31-f87f"
                },
                "style": {
                  "width": 1155,
                  "height": 270,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                },
                "uid": 395
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div11\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div11"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "77fa8fdc-356c"
                    },
                    {
                      "id": "8fe32aba-e1a9"
                    },
                    {
                      "id": "c94ab707-33ff"
                    },
                    {
                      "id": "b5f6ff4d-cb24"
                    },
                    {
                      "id": "5543cc74-d701"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "f3b523af-4797"
                },
                "parentId": "b82a6a31-f87f",
                "style": {
                  "display": "flex",
                  "width": 980,
                  "height": 177,
                  "margin-top": 26,
                  "margin-left": 175
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div12\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div12"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "1de4904c-9453"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "77fa8fdc-356c"
                },
                "parentId": "f3b523af-4797",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 168,
                  "height": 177,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div13\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div13"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "e2fc63c3-7603"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "1de4904c-9453"
                },
                "parentId": "77fa8fdc-356c",
                "style": {
                  "display": "flex",
                  "width": 168,
                  "height": 164,
                  "margin-top": 5,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div14\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div14"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "a0bf063e-8ee8"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "e2fc63c3-7603"
                },
                "parentId": "1de4904c-9453",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 168,
                  "height": 164,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/3/image0.png\"\nclass=\"image0\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/3/image0.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image0"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "a0bf063e-8ee8"
                },
                "parentId": "e2fc63c3-7603",
                "style": {
                  "width": 168,
                  "height": 164,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div15\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div15"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "cbdfdf87-f041"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "8fe32aba-e1a9"
                },
                "parentId": "f3b523af-4797",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 179,
                  "height": 177,
                  "margin-top": 0,
                  "margin-left": 28
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div16\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div16"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "7fd6a0cb-c56e"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "cbdfdf87-f041"
                },
                "parentId": "8fe32aba-e1a9",
                "style": {
                  "display": "flex",
                  "width": 179,
                  "height": 174,
                  "margin-top": 3,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div17\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div17"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "74710368-e8f5"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "7fd6a0cb-c56e"
                },
                "parentId": "cbdfdf87-f041",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 179,
                  "height": 174,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/3/image1.png\"\nclass=\"image1\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/3/image1.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image1"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "74710368-e8f5"
                },
                "parentId": "7fd6a0cb-c56e",
                "style": {
                  "width": 179,
                  "height": 174,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div18\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div18"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "0945fc7e-ef54"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "c94ab707-33ff"
                },
                "parentId": "f3b523af-4797",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 168,
                  "height": 177,
                  "margin-top": 0,
                  "margin-left": 32
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div19\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div19"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "5fa9f697-799d"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "0945fc7e-ef54"
                },
                "parentId": "c94ab707-33ff",
                "style": {
                  "display": "flex",
                  "width": 168,
                  "height": 165,
                  "margin-top": 5,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div20\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div20"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "507aec1f-d612"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "5fa9f697-799d"
                },
                "parentId": "0945fc7e-ef54",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 168,
                  "height": 165,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/3/image2.png\"\nclass=\"image2\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/3/image2.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image2"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "507aec1f-d612"
                },
                "parentId": "5fa9f697-799d",
                "style": {
                  "width": 168,
                  "height": 165,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div21\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div21"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "362e513b-c4ba"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "b5f6ff4d-cb24"
                },
                "parentId": "f3b523af-4797",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 173,
                  "height": 177,
                  "margin-top": 0,
                  "margin-left": 31
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div22\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div22"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "85671d19-8c1c"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "362e513b-c4ba"
                },
                "parentId": "b5f6ff4d-cb24",
                "style": {
                  "display": "flex",
                  "width": 173,
                  "height": 174,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div23\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div23"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "bc5857a6-e4f8"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "85671d19-8c1c"
                },
                "parentId": "362e513b-c4ba",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 173,
                  "height": 174,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/3/image3.png\"\nclass=\"image3\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/3/image3.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image3"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "bc5857a6-e4f8"
                },
                "parentId": "85671d19-8c1c",
                "style": {
                  "width": 173,
                  "height": 174,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div24\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div24"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "bc17531a-8250"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "5543cc74-d701"
                },
                "parentId": "f3b523af-4797",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 163,
                  "height": 177,
                  "margin-top": 0,
                  "margin-left": 38
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div25\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div25"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "d948fa5a-cac2"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "bc17531a-8250"
                },
                "parentId": "5543cc74-d701",
                "style": {
                  "display": "flex",
                  "width": 163,
                  "height": 174,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div26\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div26"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "001eafca-adc7"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "d948fa5a-cac2"
                },
                "parentId": "bc17531a-8250",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 163,
                  "height": 174,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/3/image4.png\"\nclass=\"image4\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/3/image4.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image4"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "001eafca-adc7"
                },
                "parentId": "d948fa5a-cac2",
                "style": {
                  "width": 163,
                  "height": 174,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div27\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div27"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "711d7144-7bb7"
                    },
                    {
                      "id": "f32bd7fa-f349"
                    },
                    {
                      "id": "a01c9d17-2733"
                    },
                    {
                      "id": "a7cf9888-4c2c"
                    },
                    {
                      "id": "0a0c45ee-d89a"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "7c62ed6c-a886"
                },
                "parentId": "b82a6a31-f87f",
                "style": {
                  "display": "flex",
                  "width": 985,
                  "height": 37,
                  "margin-top": 5,
                  "margin-left": 169
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div28\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div28"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "52b1bfd9-4e53"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "711d7144-7bb7"
                },
                "parentId": "7c62ed6c-a886",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 167,
                  "height": 37,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div29\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div29"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "aff65563-affa"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "52b1bfd9-4e53"
                },
                "parentId": "711d7144-7bb7",
                "style": {
                  "display": "flex",
                  "width": 167,
                  "height": 28,
                  "margin-top": 5,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div30\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div30"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "ccc68184-ad87"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "aff65563-affa"
                },
                "parentId": "52b1bfd9-4e53",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 167,
                  "height": 28,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<span data-component-active tabIndex=\"0\" class=\"text5\"\n>Text</span>\n",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "text5"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Text",
                  "id": "ccc68184-ad87"
                },
                "parentId": "aff65563-affa",
                "style": {
                  "text-align": "center",
                  "width": 167,
                  "height": 28,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 255, 255)"
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div31\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div31"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "7222bac0-2d71"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "f32bd7fa-f349"
                },
                "parentId": "7c62ed6c-a886",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 174,
                  "height": 37,
                  "margin-top": 0,
                  "margin-left": 38
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div32\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div32"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "c65a9428-d0c9"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "7222bac0-2d71"
                },
                "parentId": "f32bd7fa-f349",
                "style": {
                  "display": "flex",
                  "width": 174,
                  "height": 28,
                  "margin-top": 9,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div33\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div33"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "2f0d7504-fae3"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "c65a9428-d0c9"
                },
                "parentId": "7222bac0-2d71",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 174,
                  "height": 28,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<span data-component-active tabIndex=\"0\" class=\"text6\"\n>Text</span>\n",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "text6"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Text",
                  "id": "2f0d7504-fae3"
                },
                "parentId": "c65a9428-d0c9",
                "style": {
                  "text-align": "center",
                  "width": 174,
                  "height": 28,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 255, 255)"
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div34\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div34"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "456a2b2c-c0fb"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "a01c9d17-2733"
                },
                "parentId": "7c62ed6c-a886",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 163,
                  "height": 37,
                  "margin-top": 0,
                  "margin-left": 34
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div35\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div35"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "930884f2-a21f"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "456a2b2c-c0fb"
                },
                "parentId": "a01c9d17-2733",
                "style": {
                  "display": "flex",
                  "width": 163,
                  "height": 29,
                  "margin-top": 5,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div36\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div36"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "6ec46b02-64ad"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "930884f2-a21f"
                },
                "parentId": "456a2b2c-c0fb",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 163,
                  "height": 29,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<span data-component-active tabIndex=\"0\" class=\"text7\"\n>Text</span>\n",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "text7"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Text",
                  "id": "6ec46b02-64ad"
                },
                "parentId": "930884f2-a21f",
                "style": {
                  "text-align": "center",
                  "width": 163,
                  "height": 29,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 255, 255)"
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div37\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div37"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "de29391b-4fc2"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "a7cf9888-4c2c"
                },
                "parentId": "7c62ed6c-a886",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 164,
                  "height": 37,
                  "margin-top": 0,
                  "margin-left": 37
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div38\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div38"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "a423326b-fe16"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "de29391b-4fc2"
                },
                "parentId": "a7cf9888-4c2c",
                "style": {
                  "display": "flex",
                  "width": 164,
                  "height": 36,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div39\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div39"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "541cfb37-81ec"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "a423326b-fe16"
                },
                "parentId": "de29391b-4fc2",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 164,
                  "height": 36,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<span data-component-active tabIndex=\"0\" class=\"text8\"\n>Text</span>\n",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "text8"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Text",
                  "id": "541cfb37-81ec"
                },
                "parentId": "a423326b-fe16",
                "style": {
                  "text-align": "center",
                  "width": 164,
                  "height": 36,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 255, 255)"
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div40\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div40"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "a5033741-0e3a"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "0a0c45ee-d89a"
                },
                "parentId": "7c62ed6c-a886",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 164,
                  "height": 37,
                  "margin-top": 0,
                  "margin-left": 44
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div41\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div41"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "a03f7e37-3cae"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "a5033741-0e3a"
                },
                "parentId": "0a0c45ee-d89a",
                "style": {
                  "display": "flex",
                  "width": 164,
                  "height": 34,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div42\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div42"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "19987acb-47ef"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "a03f7e37-3cae"
                },
                "parentId": "a5033741-0e3a",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 164,
                  "height": 34,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<span data-component-active tabIndex=\"0\" class=\"text9\"\n>Text</span>\n",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "text9"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Text",
                  "id": "19987acb-47ef"
                },
                "parentId": "a03f7e37-3cae",
                "style": {
                  "text-align": "center",
                  "width": 164,
                  "height": 34,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 255, 255)"
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div43\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div43"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "73cbe624-7264"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "f0fc0570-aa99"
                },
                "parentId": "b82a6a31-f87f",
                "style": {
                  "display": "flex",
                  "width": 132,
                  "height": 21,
                  "margin-top": 4,
                  "margin-left": 162
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div44\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div44"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "ea09638e-6605"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "73cbe624-7264"
                },
                "parentId": "f0fc0570-aa99",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 132,
                  "height": 21,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div45\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div45"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "d161802f-dd80"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "ea09638e-6605"
                },
                "parentId": "73cbe624-7264",
                "style": {
                  "display": "flex",
                  "width": 132,
                  "height": 21,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div46\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div46"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "7130f612-4d83"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "d161802f-dd80"
                },
                "parentId": "ea09638e-6605",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 132,
                  "height": 21,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<button data-component-active tabIndex=\"0\" @click=\"\" class=\"button10\"\n>按钮</button>",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "button10"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "button",
                  "id": "7130f612-4d83"
                },
                "parentId": "d161802f-dd80",
                "style": {
                  "width": 132,
                  "height": 21,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 255, 255)"
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              }
            ],
            "css":'.root{\n' +
              'width:1155px;\n' +
              'height:270px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div11{\n' +
              'display:flex;\n' +
              'width:980px;\n' +
              'height:177px;\n' +
              'margin-top:26px;\n' +
              'margin-left:175px;\n' +
              '}\n' +
              '.div12{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:168px;\n' +
              'height:177px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div13{\n' +
              'display:flex;\n' +
              'width:168px;\n' +
              'height:164px;\n' +
              'margin-top:5px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div14{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:168px;\n' +
              'height:164px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image0{\n' +
              'width:168px;\n' +
              'height:164px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div15{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:179px;\n' +
              'height:177px;\n' +
              'margin-top:0px;\n' +
              'margin-left:28px;\n' +
              '}\n' +
              '.div16{\n' +
              'display:flex;\n' +
              'width:179px;\n' +
              'height:174px;\n' +
              'margin-top:3px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div17{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:179px;\n' +
              'height:174px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image1{\n' +
              'width:179px;\n' +
              'height:174px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div18{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:168px;\n' +
              'height:177px;\n' +
              'margin-top:0px;\n' +
              'margin-left:32px;\n' +
              '}\n' +
              '.div19{\n' +
              'display:flex;\n' +
              'width:168px;\n' +
              'height:165px;\n' +
              'margin-top:5px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div20{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:168px;\n' +
              'height:165px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image2{\n' +
              'width:168px;\n' +
              'height:165px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div21{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:173px;\n' +
              'height:177px;\n' +
              'margin-top:0px;\n' +
              'margin-left:31px;\n' +
              '}\n' +
              '.div22{\n' +
              'display:flex;\n' +
              'width:173px;\n' +
              'height:174px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div23{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:173px;\n' +
              'height:174px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image3{\n' +
              'width:173px;\n' +
              'height:174px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div24{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:163px;\n' +
              'height:177px;\n' +
              'margin-top:0px;\n' +
              'margin-left:38px;\n' +
              '}\n' +
              '.div25{\n' +
              'display:flex;\n' +
              'width:163px;\n' +
              'height:174px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div26{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:163px;\n' +
              'height:174px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image4{\n' +
              'width:163px;\n' +
              'height:174px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div27{\n' +
              'display:flex;\n' +
              'width:985px;\n' +
              'height:37px;\n' +
              'margin-top:5px;\n' +
              'margin-left:169px;\n' +
              '}\n' +
              '.div28{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:167px;\n' +
              'height:37px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div29{\n' +
              'display:flex;\n' +
              'width:167px;\n' +
              'height:28px;\n' +
              'margin-top:5px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div30{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:167px;\n' +
              'height:28px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.text5{\n' +
              'text-align:center;\n' +
              'width:167px;\n' +
              'height:28px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 255, 255);\n' +
              '}\n' +
              '.div31{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:174px;\n' +
              'height:37px;\n' +
              'margin-top:0px;\n' +
              'margin-left:38px;\n' +
              '}\n' +
              '.div32{\n' +
              'display:flex;\n' +
              'width:174px;\n' +
              'height:28px;\n' +
              'margin-top:9px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div33{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:174px;\n' +
              'height:28px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.text6{\n' +
              'text-align:center;\n' +
              'width:174px;\n' +
              'height:28px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 255, 255);\n' +
              '}\n' +
              '.div34{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:163px;\n' +
              'height:37px;\n' +
              'margin-top:0px;\n' +
              'margin-left:34px;\n' +
              '}\n' +
              '.div35{\n' +
              'display:flex;\n' +
              'width:163px;\n' +
              'height:29px;\n' +
              'margin-top:5px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div36{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:163px;\n' +
              'height:29px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.text7{\n' +
              'text-align:center;\n' +
              'width:163px;\n' +
              'height:29px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 255, 255);\n' +
              '}\n' +
              '.div37{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:164px;\n' +
              'height:37px;\n' +
              'margin-top:0px;\n' +
              'margin-left:37px;\n' +
              '}\n' +
              '.div38{\n' +
              'display:flex;\n' +
              'width:164px;\n' +
              'height:36px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div39{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:164px;\n' +
              'height:36px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.text8{\n' +
              'text-align:center;\n' +
              'width:164px;\n' +
              'height:36px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 255, 255);\n' +
              '}\n' +
              '.div40{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:164px;\n' +
              'height:37px;\n' +
              'margin-top:0px;\n' +
              'margin-left:44px;\n' +
              '}\n' +
              '.div41{\n' +
              'display:flex;\n' +
              'width:164px;\n' +
              'height:34px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div42{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:164px;\n' +
              'height:34px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.text9{\n' +
              'text-align:center;\n' +
              'width:164px;\n' +
              'height:34px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 255, 255);\n' +
              '}\n' +
              '.div43{\n' +
              'display:flex;\n' +
              'width:132px;\n' +
              'height:21px;\n' +
              'margin-top:4px;\n' +
              'margin-left:162px;\n' +
              '}\n' +
              '.div44{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:132px;\n' +
              'height:21px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div45{\n' +
              'display:flex;\n' +
              'width:132px;\n' +
              'height:21px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div46{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:132px;\n' +
              'height:21px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.button10{\n' +
              'width:132px;\n' +
              'height:21px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 255, 255);\n' +
              '}\n' +
              '.root{\n' +
              'width:1155px;\n' +
              'height:270px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'border-radius:0px;\n' +
              '}\n'
          },
          {
            "filenames":[],
            "name": "taobao2",
            "components":[
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"root\"\n>\n                        <div id=\"19162a67-ee40\" data-component-active tabIndex=\"0\" class=\"div15\"\n>\n                        <div id=\"7fc08b1c-7b90\" data-component-active tabIndex=\"0\" class=\"div16\"\n>\n                        <div id=\"486cabea-fd0d\" data-component-active tabIndex=\"0\" class=\"div17\"\n>\n                        <div id=\"113f01f0-31f6\" data-component-active tabIndex=\"0\" class=\"div18\"\n>\n                        <img id=\"6321d86f-c364\" data-component-active tabIndex=\"0\" src=\"./static/assets/4/image0.png\"\nclass=\"image0\"\n></img>\n\n                    </div>\n                    </div><div id=\"3d026cbc-44d5\" data-component-active tabIndex=\"0\" class=\"div19\"\n>\n                        <div id=\"610ce68c-2c1a\" data-component-active tabIndex=\"0\" class=\"div20\"\n>\n                        <img id=\"f178ba78-8de0\" data-component-active tabIndex=\"0\" src=\"./static/assets/4/image1.png\"\nclass=\"image1\"\n></img>\n\n                    </div>\n                    </div>\n                    </div><div id=\"fb3d018b-5f85\" data-component-active tabIndex=\"0\" class=\"div21\"\n>\n                        <div id=\"d89ccee9-b487\" data-component-active tabIndex=\"0\" class=\"div22\"\n>\n                        <div id=\"1297b891-e7ac\" data-component-active tabIndex=\"0\" class=\"div23\"\n>\n                        <img id=\"82905898-3394\" data-component-active tabIndex=\"0\" src=\"./static/assets/4/image3.png\"\nclass=\"image3\"\n></img>\n\n                    </div>\n                    </div><div id=\"814b065d-b2c6\" data-component-active tabIndex=\"0\" class=\"div24\"\n>\n                        <div id=\"0484cea4-d3ac\" data-component-active tabIndex=\"0\" class=\"div25\"\n>\n                        <img id=\"a1387e4e-cb80\" data-component-active tabIndex=\"0\" src=\"./static/assets/4/image5.png\"\nclass=\"image5\"\n></img>\n\n                    </div>\n                    </div><div id=\"f0d83a85-b813\" data-component-active tabIndex=\"0\" class=\"div26\"\n>\n                        <div id=\"dd352cff-ff1b\" data-component-active tabIndex=\"0\" class=\"div27\"\n>\n                        <img id=\"af34b5e5-3c14\" data-component-active tabIndex=\"0\" src=\"./static/assets/4/image7.png\"\nclass=\"image7\"\n></img>\n\n                    </div>\n                    </div><div id=\"4d733375-fdf7\" data-component-active tabIndex=\"0\" class=\"div28\"\n>\n                        <div id=\"e995c88d-2f53\" data-component-active tabIndex=\"0\" class=\"div29\"\n>\n                        <button id=\"e5214208-fce2\" data-component-active tabIndex=\"0\" @click=\"\" class=\"button9\"\n>按钮</button>\n                    </div><div id=\"c17554f3-ff40\" data-component-active tabIndex=\"0\" class=\"div30\"\n>\n                        <button id=\"a4c2ddc3-91f0\" data-component-active tabIndex=\"0\" @click=\"\" class=\"button11\"\n>按钮</button>\n                    </div>\n                    </div>\n                    </div><div id=\"ec0f0af4-52c0\" data-component-active tabIndex=\"0\" class=\"div31\"\n>\n                        <div id=\"0a881bda-c736\" data-component-active tabIndex=\"0\" class=\"div32\"\n>\n                        <div id=\"dd9b27e3-468c\" data-component-active tabIndex=\"0\" class=\"div33\"\n>\n                        <img id=\"2216e47c-556b\" data-component-active tabIndex=\"0\" src=\"./static/assets/4/image13.png\"\nclass=\"image13\"\n></img>\n\n                    </div>\n                    </div>\n                    </div>\n                    </div>\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "root"
                  }
                },
                "slots": {
                  "default": [
                    {
                      "id": "19162a67-ee40"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "f57f3fde-bc12"
                },
                "style": {
                  "width": 1212,
                  "height": 621,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                },
                "uid": 705
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div15\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div15"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "7fc08b1c-7b90"
                    },
                    {
                      "id": "fb3d018b-5f85"
                    },
                    {
                      "id": "ec0f0af4-52c0"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "19162a67-ee40"
                },
                "parentId": "f57f3fde-bc12",
                "style": {
                  "display": "flex",
                  "width": 1138,
                  "height": 615,
                  "margin-top": 6,
                  "margin-left": 74
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div16\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div16"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "486cabea-fd0d"
                    },
                    {
                      "id": "3d026cbc-44d5"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "7fc08b1c-7b90"
                },
                "parentId": "19162a67-ee40",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 416,
                  "height": 615,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div17\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div17"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "113f01f0-31f6"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "486cabea-fd0d"
                },
                "parentId": "7fc08b1c-7b90",
                "style": {
                  "display": "flex",
                  "width": 410,
                  "height": 421,
                  "margin-top": 0,
                  "margin-left": 6
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div18\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div18"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "6321d86f-c364"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "113f01f0-31f6"
                },
                "parentId": "486cabea-fd0d",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 410,
                  "height": 421,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/4/image0.png\"\nclass=\"image0\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/4/image0.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image0"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "6321d86f-c364"
                },
                "parentId": "113f01f0-31f6",
                "style": {
                  "width": 410,
                  "height": 421,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div19\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div19"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "610ce68c-2c1a"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "3d026cbc-44d5"
                },
                "parentId": "7fc08b1c-7b90",
                "style": {
                  "display": "flex",
                  "width": 409,
                  "height": 86,
                  "margin-top": 14,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div20\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div20"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "f178ba78-8de0"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "610ce68c-2c1a"
                },
                "parentId": "3d026cbc-44d5",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 409,
                  "height": 86,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/4/image1.png\"\nclass=\"image1\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/4/image1.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image1"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "f178ba78-8de0"
                },
                "parentId": "610ce68c-2c1a",
                "style": {
                  "width": 409,
                  "height": 86,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div21\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div21"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "d89ccee9-b487"
                    },
                    {
                      "id": "814b065d-b2c6"
                    },
                    {
                      "id": "f0d83a85-b813"
                    },
                    {
                      "id": "4d733375-fdf7"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "fb3d018b-5f85"
                },
                "parentId": "19162a67-ee40",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 528,
                  "height": 615,
                  "margin-top": 0,
                  "margin-left": 14
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div22\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div22"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "1297b891-e7ac"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "d89ccee9-b487"
                },
                "parentId": "fb3d018b-5f85",
                "style": {
                  "display": "flex",
                  "width": 510,
                  "height": 100,
                  "margin-top": 29,
                  "margin-left": 4
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div23\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div23"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "82905898-3394"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "1297b891-e7ac"
                },
                "parentId": "d89ccee9-b487",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 510,
                  "height": 100,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/4/image3.png\"\nclass=\"image3\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/4/image3.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image3"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "82905898-3394"
                },
                "parentId": "1297b891-e7ac",
                "style": {
                  "width": 510,
                  "height": 100,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div24\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div24"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "0484cea4-d3ac"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "814b065d-b2c6"
                },
                "parentId": "fb3d018b-5f85",
                "style": {
                  "display": "flex",
                  "width": 525,
                  "height": 40,
                  "margin-top": 43,
                  "margin-left": 3
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div25\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div25"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "a1387e4e-cb80"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "0484cea4-d3ac"
                },
                "parentId": "814b065d-b2c6",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 525,
                  "height": 40,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/4/image5.png\"\nclass=\"image5\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/4/image5.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image5"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "a1387e4e-cb80"
                },
                "parentId": "0484cea4-d3ac",
                "style": {
                  "width": 525,
                  "height": 40,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div26\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div26"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "dd352cff-ff1b"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "f0d83a85-b813"
                },
                "parentId": "fb3d018b-5f85",
                "style": {
                  "display": "flex",
                  "width": 528,
                  "height": 145,
                  "margin-top": 9,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div27\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div27"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "af34b5e5-3c14"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "dd352cff-ff1b"
                },
                "parentId": "f0d83a85-b813",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 528,
                  "height": 145,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/4/image7.png\"\nclass=\"image7\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/4/image7.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image7"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "af34b5e5-3c14"
                },
                "parentId": "dd352cff-ff1b",
                "style": {
                  "width": 528,
                  "height": 145,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div28\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div28"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "e995c88d-2f53"
                    },
                    {
                      "id": "c17554f3-ff40"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "4d733375-fdf7"
                },
                "parentId": "fb3d018b-5f85",
                "style": {
                  "display": "flex",
                  "width": 381,
                  "height": 45,
                  "margin-top": 8,
                  "margin-left": 70
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div29\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div29"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "e5214208-fce2"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "e995c88d-2f53"
                },
                "parentId": "4d733375-fdf7",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 195,
                  "height": 45,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<button data-component-active tabIndex=\"0\" @click=\"\" class=\"button9\"\n>按钮</button>",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "button9"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "button",
                  "id": "e5214208-fce2"
                },
                "parentId": "e995c88d-2f53",
                "style": {
                  "width": 195,
                  "height": 40,
                  "margin-left": 0,
                  "margin-top": 2,
                  "background-color": "rgb(255, 237, 237)"
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div30\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div30"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "a4c2ddc3-91f0"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "c17554f3-ff40"
                },
                "parentId": "4d733375-fdf7",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 178,
                  "height": 45,
                  "margin-top": 0,
                  "margin-left": 8
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<button data-component-active tabIndex=\"0\" @click=\"\" class=\"button11\"\n>按钮</button>",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "button11"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "button",
                  "id": "a4c2ddc3-91f0"
                },
                "parentId": "c17554f3-ff40",
                "style": {
                  "width": 178,
                  "height": 45,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 0, 54)"
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div31\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div31"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "0a881bda-c736"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "ec0f0af4-52c0"
                },
                "parentId": "19162a67-ee40",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 144,
                  "height": 615,
                  "margin-top": 0,
                  "margin-left": 36
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div32\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div32"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "dd9b27e3-468c"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "0a881bda-c736"
                },
                "parentId": "ec0f0af4-52c0",
                "style": {
                  "display": "flex",
                  "width": 144,
                  "height": 601,
                  "margin-top": 14,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div33\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div33"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "2216e47c-556b"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "dd9b27e3-468c"
                },
                "parentId": "0a881bda-c736",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 144,
                  "height": 601,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/4/image13.png\"\nclass=\"image13\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/4/image13.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image13"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "2216e47c-556b"
                },
                "parentId": "dd9b27e3-468c",
                "style": {
                  "width": 144,
                  "height": 601,
                  "margin-left": 0,
                  "margin-top": 0,
                  "border-radius": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              }
            ],
            "css":'.root{\n' +
              'width:1212px;\n' +
              'height:621px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div15{\n' +
              'display:flex;\n' +
              'width:1138px;\n' +
              'height:615px;\n' +
              'margin-top:6px;\n' +
              'margin-left:74px;\n' +
              '}\n' +
              '.div16{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:416px;\n' +
              'height:615px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div17{\n' +
              'display:flex;\n' +
              'width:410px;\n' +
              'height:421px;\n' +
              'margin-top:0px;\n' +
              'margin-left:6px;\n' +
              '}\n' +
              '.div18{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:410px;\n' +
              'height:421px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image0{\n' +
              'width:410px;\n' +
              'height:421px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div19{\n' +
              'display:flex;\n' +
              'width:409px;\n' +
              'height:86px;\n' +
              'margin-top:14px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div20{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:409px;\n' +
              'height:86px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image1{\n' +
              'width:409px;\n' +
              'height:86px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div21{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:528px;\n' +
              'height:615px;\n' +
              'margin-top:0px;\n' +
              'margin-left:14px;\n' +
              '}\n' +
              '.div22{\n' +
              'display:flex;\n' +
              'width:510px;\n' +
              'height:100px;\n' +
              'margin-top:29px;\n' +
              'margin-left:4px;\n' +
              '}\n' +
              '.div23{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:510px;\n' +
              'height:100px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image3{\n' +
              'width:510px;\n' +
              'height:100px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div24{\n' +
              'display:flex;\n' +
              'width:525px;\n' +
              'height:40px;\n' +
              'margin-top:43px;\n' +
              'margin-left:3px;\n' +
              '}\n' +
              '.div25{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:525px;\n' +
              'height:40px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image5{\n' +
              'width:525px;\n' +
              'height:40px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div26{\n' +
              'display:flex;\n' +
              'width:528px;\n' +
              'height:145px;\n' +
              'margin-top:9px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div27{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:528px;\n' +
              'height:145px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image7{\n' +
              'width:528px;\n' +
              'height:145px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div28{\n' +
              'display:flex;\n' +
              'width:381px;\n' +
              'height:45px;\n' +
              'margin-top:8px;\n' +
              'margin-left:70px;\n' +
              '}\n' +
              '.div29{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:195px;\n' +
              'height:45px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.button9{\n' +
              'width:195px;\n' +
              'height:40px;\n' +
              'margin-left:0px;\n' +
              'margin-top:2px;\n' +
              'background-color:rgb(255, 237, 237);\n' +
              '}\n' +
              '.div30{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:178px;\n' +
              'height:45px;\n' +
              'margin-top:0px;\n' +
              'margin-left:8px;\n' +
              '}\n' +
              '.button11{\n' +
              'width:178px;\n' +
              'height:45px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 0, 54);\n' +
              '}\n' +
              '.div31{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:144px;\n' +
              'height:615px;\n' +
              'margin-top:0px;\n' +
              'margin-left:36px;\n' +
              '}\n' +
              '.div32{\n' +
              'display:flex;\n' +
              'width:144px;\n' +
              'height:601px;\n' +
              'margin-top:14px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div33{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:144px;\n' +
              'height:601px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image13{\n' +
              'width:144px;\n' +
              'height:601px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.root{\n' +
              'width:1212px;\n' +
              'height:621px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'border-radius:0px;\n' +
              '}\n',
          },
          {
            "filenames":[],
            "name": "taobao3",
            "components":[
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"root\"\n>\n                        <div id=\"0414a457-af6e\" data-component-active tabIndex=\"0\" class=\"div7\"\n>\n                        <div id=\"bbbb9c53-8ebc\" data-component-active tabIndex=\"0\" class=\"div8\"\n>\n                        <div id=\"4058d93b-0cd7\" data-component-active tabIndex=\"0\" class=\"div9\"\n>\n                        <div id=\"d18ae005-bd04\" data-component-active tabIndex=\"0\" class=\"div10\"\n>\n                        <img id=\"e9992090-fb46\" data-component-active tabIndex=\"0\" src=\"./static/assets/6/image0.png\"\nclass=\"image0\"\n></img>\n\n                    </div>\n                    </div>\n                    </div>\n                    </div><div id=\"1802efae-636f\" data-component-active tabIndex=\"0\" class=\"div11\"\n>\n                        <div id=\"2d110ac2-da52\" data-component-active tabIndex=\"0\" class=\"div12\"\n>\n                        <div id=\"f474f6d9-89f0\" data-component-active tabIndex=\"0\" class=\"div13\"\n>\n                        <div id=\"e3cfc021-a120\" data-component-active tabIndex=\"0\" class=\"div14\"\n>\n                        <img id=\"7c4377f3-ebb9\" data-component-active tabIndex=\"0\" src=\"./static/assets/6/image1.png\"\nclass=\"image1\"\n></img>\n\n                    </div>\n                    </div>\n                    </div>\n                    </div><div id=\"be793934-3914\" data-component-active tabIndex=\"0\" class=\"div15\"\n>\n                        <div id=\"954eb11b-bf97\" data-component-active tabIndex=\"0\" class=\"div16\"\n>\n                        <div id=\"11ef46b8-53b8\" data-component-active tabIndex=\"0\" class=\"div17\"\n>\n                        <div id=\"59970278-2c7c\" data-component-active tabIndex=\"0\" class=\"div18\"\n>\n                        <img id=\"942d3f2a-4c92\" data-component-active tabIndex=\"0\" src=\"./static/assets/6/image3.png\"\nclass=\"image3\"\n></img>\n\n                    </div>\n                    </div>\n                    </div>\n                    </div><div id=\"203ea988-81fc\" data-component-active tabIndex=\"0\" class=\"div19\"\n>\n                        <div id=\"d5d5496a-c81e\" data-component-active tabIndex=\"0\" class=\"div20\"\n>\n                        <div id=\"33bc0cde-528d\" data-component-active tabIndex=\"0\" class=\"div21\"\n>\n                        <div id=\"f2294884-d801\" data-component-active tabIndex=\"0\" class=\"div22\"\n>\n                        <button id=\"a04770ef-6e6a\" data-component-active tabIndex=\"0\" @click=\"\" class=\"button5\"\n>按钮</button>\n                    </div>\n                    </div>\n                    </div>\n                    </div>\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "root"
                  }
                },
                "slots": {
                  "default": [
                    {
                      "id": "0414a457-af6e"
                    },
                    {
                      "id": "1802efae-636f"
                    },
                    {
                      "id": "be793934-3914"
                    },
                    {
                      "id": "203ea988-81fc"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "6eb79b65-5a73"
                },
                "style": {
                  "width": 1140,
                  "height": 509,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                },
                "uid": 986
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div7\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div7"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "bbbb9c53-8ebc"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "0414a457-af6e"
                },
                "parentId": "6eb79b65-5a73",
                "style": {
                  "display": "flex",
                  "width": 193,
                  "height": 24,
                  "margin-top": 9,
                  "margin-left": 138
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div8\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div8"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "4058d93b-0cd7"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "bbbb9c53-8ebc"
                },
                "parentId": "0414a457-af6e",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 193,
                  "height": 24,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div9\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div9"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "d18ae005-bd04"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "4058d93b-0cd7"
                },
                "parentId": "bbbb9c53-8ebc",
                "style": {
                  "display": "flex",
                  "width": 193,
                  "height": 24,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div10\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div10"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "e9992090-fb46"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "d18ae005-bd04"
                },
                "parentId": "4058d93b-0cd7",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 193,
                  "height": 24,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/6/image0.png\"\nclass=\"image0\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/6/image0.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image0"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "e9992090-fb46"
                },
                "parentId": "d18ae005-bd04",
                "style": {
                  "width": 193,
                  "height": 24,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div11\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div11"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "2d110ac2-da52"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "1802efae-636f"
                },
                "parentId": "6eb79b65-5a73",
                "style": {
                  "display": "flex",
                  "width": 995,
                  "height": 240,
                  "margin-top": 7,
                  "margin-left": 145
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div12\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div12"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "f474f6d9-89f0"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "2d110ac2-da52"
                },
                "parentId": "1802efae-636f",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 995,
                  "height": 240,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div13\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div13"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "e3cfc021-a120"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "f474f6d9-89f0"
                },
                "parentId": "2d110ac2-da52",
                "style": {
                  "display": "flex",
                  "width": 995,
                  "height": 240,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div14\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div14"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "7c4377f3-ebb9"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "e3cfc021-a120"
                },
                "parentId": "f474f6d9-89f0",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 995,
                  "height": 240,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/6/image1.png\"\nclass=\"image1\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/6/image1.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image1"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "7c4377f3-ebb9"
                },
                "parentId": "e3cfc021-a120",
                "style": {
                  "width": 995,
                  "height": 240,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div15\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div15"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "954eb11b-bf97"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "be793934-3914"
                },
                "parentId": "6eb79b65-5a73",
                "style": {
                  "display": "flex",
                  "width": 382,
                  "height": 125,
                  "margin-top": 62,
                  "margin-left": 758
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div16\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div16"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "11ef46b8-53b8"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "954eb11b-bf97"
                },
                "parentId": "be793934-3914",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 382,
                  "height": 125,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div17\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div17"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "59970278-2c7c"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "11ef46b8-53b8"
                },
                "parentId": "954eb11b-bf97",
                "style": {
                  "display": "flex",
                  "width": 382,
                  "height": 125,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div18\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div18"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "942d3f2a-4c92"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "59970278-2c7c"
                },
                "parentId": "11ef46b8-53b8",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 382,
                  "height": 125,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<img data-component-active tabIndex=\"0\" src=\"./static/assets/6/image3.png\"\nclass=\"image3\"\n></img>\n",
                "attributes": {
                  "src": {
                    "type": "text",
                    "value": "./static/assets/6/image3.png"
                  },
                  "alt": {
                    "type": "text",
                    "value": ""
                  },
                  "width": {
                    "type": "text",
                    "value": ""
                  },
                  "height": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "image3"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Img",
                  "id": "942d3f2a-4c92"
                },
                "parentId": "59970278-2c7c",
                "style": {
                  "width": 382,
                  "height": 125,
                  "margin-left": 0,
                  "margin-top": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div19\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div19"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "d5d5496a-c81e"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "203ea988-81fc"
                },
                "parentId": "6eb79b65-5a73",
                "style": {
                  "display": "flex",
                  "width": 192,
                  "height": 35,
                  "margin-top": 7,
                  "margin-left": 947
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div20\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div20"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "33bc0cde-528d"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "d5d5496a-c81e"
                },
                "parentId": "203ea988-81fc",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 192,
                  "height": 35,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div21\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div21"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "f2294884-d801"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "33bc0cde-528d"
                },
                "parentId": "d5d5496a-c81e",
                "style": {
                  "display": "flex",
                  "width": 192,
                  "height": 35,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<div data-component-active tabIndex=\"0\" class=\"div22\"\n>\n                        &nbsp;\n                    </div>",
                "attributes": {
                  "class": {
                    "type": "text",
                    "value": "div22"
                  },
                  "slot": "default"
                },
                "slots": {
                  "default": [
                    {
                      "id": "a04770ef-6e6a"
                    }
                  ]
                },
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "Div",
                  "id": "f2294884-d801"
                },
                "parentId": "33bc0cde-528d",
                "style": {
                  "display": "flex",
                  "flex-direction": "column",
                  "width": 192,
                  "height": 35,
                  "margin-top": 0,
                  "margin-left": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              },
              {
                "template": "<button data-component-active tabIndex=\"0\" @click=\"\" class=\"button5\"\n>按钮</button>",
                "attributes": {
                  "text": {
                    "type": "text",
                    "value": ""
                  },
                  "class": {
                    "type": "text",
                    "value": "button5"
                  },
                  "slot": "default"
                },
                "slots": {},
                "slot": "",
                "info": {
                  "ui": "Component",
                  "name": "button",
                  "id": "a04770ef-6e6a"
                },
                "parentId": "f2294884-d801",
                "style": {
                  "width": 192,
                  "height": 35,
                  "margin-left": 0,
                  "margin-top": 0,
                  "background-color": "rgb(255, 0, 54)",
                  "border-radius": 0
                },
                "func": {
                  "type": "",
                  "param": ""
                }
              }
            ],
            "css":'.root{\n' +
              'width:1140px;\n' +
              'height:509px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div7{\n' +
              'display:flex;\n' +
              'width:193px;\n' +
              'height:24px;\n' +
              'margin-top:9px;\n' +
              'margin-left:138px;\n' +
              '}\n' +
              '.div8{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:193px;\n' +
              'height:24px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div9{\n' +
              'display:flex;\n' +
              'width:193px;\n' +
              'height:24px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div10{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:193px;\n' +
              'height:24px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image0{\n' +
              'width:193px;\n' +
              'height:24px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div11{\n' +
              'display:flex;\n' +
              'width:995px;\n' +
              'height:240px;\n' +
              'margin-top:7px;\n' +
              'margin-left:145px;\n' +
              '}\n' +
              '.div12{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:995px;\n' +
              'height:240px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div13{\n' +
              'display:flex;\n' +
              'width:995px;\n' +
              'height:240px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div14{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:995px;\n' +
              'height:240px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image1{\n' +
              'width:995px;\n' +
              'height:240px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div15{\n' +
              'display:flex;\n' +
              'width:382px;\n' +
              'height:125px;\n' +
              'margin-top:62px;\n' +
              'margin-left:758px;\n' +
              '}\n' +
              '.div16{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:382px;\n' +
              'height:125px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div17{\n' +
              'display:flex;\n' +
              'width:382px;\n' +
              'height:125px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div18{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:382px;\n' +
              'height:125px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.image3{\n' +
              'width:382px;\n' +
              'height:125px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              '}\n' +
              '.div19{\n' +
              'display:flex;\n' +
              'width:192px;\n' +
              'height:35px;\n' +
              'margin-top:7px;\n' +
              'margin-left:947px;\n' +
              '}\n' +
              '.div20{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:192px;\n' +
              'height:35px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div21{\n' +
              'display:flex;\n' +
              'width:192px;\n' +
              'height:35px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.div22{\n' +
              'display:flex;\n' +
              'flex-direction:column;\n' +
              'width:192px;\n' +
              'height:35px;\n' +
              'margin-top:0px;\n' +
              'margin-left:0px;\n' +
              '}\n' +
              '.button5{\n' +
              'width:192px;\n' +
              'height:35px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'background-color:rgb(255, 0, 54);\n' +
              '}\n' +
              '.root{\n' +
              'width:1140px;\n' +
              'height:509px;\n' +
              'margin-left:0px;\n' +
              'margin-top:0px;\n' +
              'border-radius:0px;\n' +
              '}\n'
          }
        ],
        // base64s:[],
        Cloading:false,
        css: '', //用户编辑的自定义css字符串
        activeUI:'Component',
        currentComponent: {}, //预览视图的选中组件
        components: [], //预览视图的组件树
        backupComponents: [],//删除组件时备份的
        copiedComponents: [], //复制的组件
        VueCode: '', // Vue代码
        filenames:[],
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
        refresh: true,
        isFinishLabel:true,
        currentPage:null,
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
