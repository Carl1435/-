import index from '../views/Index.vue'
import celue from '../page/celue.vue'
import lhK from '../page/lhK.vue'
import denlu from '../page/denlu.vue'
import mine from '../page/mine.vue'
let routes = [
    {
        path:'/', // 指定url
        component:index, // 指定哪个视图
        name:'首页', // 页面标题
        hidden:true
    },
    {
      path:'/index', // 指定url
      component:index, // 指定哪个视图
      name:'首页', // 页面标题
      hidden:true
  },
    {
      path:'/celue',
      component:celue,
      name:'celue'
    },
    {
      path:'/lhK',
      component:lhK,
      name:'lhK'
    },
    {
      path:'/denlu',
      component:denlu,
      name:'denlu'
    },
    {
      path:'/mine',
      component:mine,
      name:'mine'
    }
];

export default routes;
