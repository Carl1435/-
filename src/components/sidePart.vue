<template>
    <el-aside width="5.5%" style="background-color: rgb(238, 241, 246);height:100%;overflow:hidden;">
    <el-row class="tac"  style="heigth=100%;
    overflow:hidden;
    top: 0px;
    bottom: 0px;
    left: 0px;">
  <el-col :span="2" :style="{'heigth':clientHeight,'width':'85px',}">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#305c88"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="height:800px;width:100%;"
      :height='clientHeight'
      router>
      <!--  myel-icon-kcgupiao-wodeel-radio_inner-->
      <p class="myel-icon-kcai" style="font-size:35px;color:yellow"></p>
      <el-menu-item index="/denlu">
        <i class="myel-icon-kcgupiao-wode" style="font-size:20px;vertical-align:middle;"></i>
        <span slot="title" style="font-size:15px;">我的</span>
      </el-menu-item>
      <el-menu-item index="/index" style="padding:0">
        <i class="myel-icon-kcgupiao"></i>
        <span slot="title" style="font-size:15px">行情</span>
      </el-menu-item>
      <el-menu-item index="3" style="padding:0">
        <i class="myel-icon-kcgupiao-hangqing"></i>
        <span slot="title" style="font-size20px">K线策略</span>
      </el-menu-item>
      <el-menu-item index="/celue" style="padding:0">
        <i class="myel-icon-kcstrategy"></i>
        <span slot="title" style="font-size20px">量化选股</span>
      </el-menu-item>
      <el-menu-item index="/lhK" style="padding:0">
        <i class="myel-icon-kcgupiao-zuhedianjitai"></i>
        <span slot="title" style="font-size20px">量化K线</span>
      </el-menu-item>
      <el-menu-item index="6" style="padding:0">
        <i class="myel-icon-kctubiaozhizuomoban-"></i>
        <span slot="title" style="font-size20px">历史数据</span>
      </el-menu-item>
      <el-menu-item index="7" style="padding:0">
        <i class="myel-icon-kccloud-information"></i>
        <span slot="title" style="font-size20px">模拟数据</span>
      </el-menu-item>
    <p class="myel-icon-kccaidan" style="margin-top:150px;font-size:55px;color:white"></p>
    </el-menu>
  </el-col>
</el-row>
  </el-aside>
</template>
 <script>
    export default {
      name: 'sidePart',
      data () {
        return {
          msg:"1",
          clientHeight: ''
        }
      },
      mounted() {
        // 获取浏览器可视区域高度
        this.clientHeight = document.documentElement.clientHeight; // document.body.clientWidth;
        window.onresize = function temp() { // 在窗口或框架被调整大小时触发
            this.clientHeight = document.documentElement.clientHeight+'px';
        };

    },
      methods:{
      
      },
    }
    </script>
<style scoped>
i{
  font-size:20px;vertical-align:middle;
}

</style>
