import Vue from 'vue'
import Router from 'vue-router'
import FirstScreen from '@/components/firstScreen/firstScreen'   //首屏组件
import Details1 from '@/components/playlist/details1'   //歌单详情组件 1.
import Details2 from '@/components/playlist/details2'   //歌单详情组件 2.
import Details3 from '@/components/playlist/details3'   //歌单详情组件 3.
import Details4 from '@/components/playlist/details4'   //歌单详情组件 4.
import Details5 from '@/components/playlist/details5'   //歌单详情组件 5.
import Details6 from '@/components/playlist/details6'   //歌单详情组件 6.

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstScreen',
      component: FirstScreen
    },
    {
      path: '/2063351734',
      name: 'details1',
      component: Details1
    },
    {
      path: '/605415618',
      name: 'details2',
      component: Details2
    },
    {
      path: '/2042006896',
      name: 'details3',
      component: Details3 
    }, 
    {
      path: '/2036883936',
      name: 'details4',
      component: Details4 
    }, 
    {
      path: '/2039073542',
      name: 'details5',
      component: Details5 
    },  
    {
      path: '/2048970456',
      name: 'details6',
      component: Details6 
    },          
  ]
})
