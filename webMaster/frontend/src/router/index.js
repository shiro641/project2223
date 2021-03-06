import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: require('@/components/main')
    },{
    	path:'/share',//布局分享
    	name:'share',
        component: require('@/components/share')
    },
    ]
})
