import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import SearchBar from './components/SearchInput'
import list from './components/list'
import { fabric } from 'fabric'

import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker)
//iView-UI
import iView from 'iview'
Vue.use(iView)

//Mint-UI
import { Toast, Indicator } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.prototype.$toast = Toast
Vue.prototype.$indicator = Indicator
import mint from 'mint-ui'
Vue.use(mint)
Vue.use(fabric);
Vue.use(ElementUI);
Vue.component("SearchBar", SearchBar)
Vue.component('list', list)


//Muse-UI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '@/assets/css/theme-dark.css'
Vue.use(MuseUI)

//为代码文本提供高亮、缩进
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
    //为代码文本格式化
import pretty from 'pretty'
Vue.prototype.$prettyDom = pretty

//云数据库
import lean from './utils/leancloud storage'
Vue.prototype.$lean=lean

import vuescroll from 'vuescroll';
Vue.use(vuescroll);


import VueTour from 'vue-tour'

require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)

Vue.config.productionTip = false
Vue.prototype.$compile = Vue.compile

window._Vue = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
