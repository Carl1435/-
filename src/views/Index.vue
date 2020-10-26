<template>
  <div id="app" style="heigth=100%">
    <router-view></router-view>
<el-container style="height: 100%; border: 1px solid #eee">
  
  <sidePart>  </sidePart>
  <el-container >
    <el-header style="height:100px;line-height:25px;padding:0;">
        <top1></top1>
        <div style="height:60px;border-bottom-style:solid;border-bottom-width:1px;padding-bottom:4px;">
          <el-menu :default-active="activeIndex" class="mymenu" mode="horizontal" style="padding:0;position: relative;right:-3px" @select="handleSelect" background-color='rgb(241, 244, 248)' text-color='black'>
            <el-menu-item index="1" @click.native="tz">
              <i class="myel-icon-kcaixin" style="color:red;"></i>
              <span slot="title">自选股</span>
            </el-menu-item>
            <el-menu-item index="3" >
                <i class="myel-icon-kcganggutong" style="color:red;"></i>
                <span slot="title">港股</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
              <i class="myel-icon-kcicon_hushen" style="color:red;"></i>
              <span slot="title">沪深</span>
              </template>
              <el-menu-item index="2-1" @click.native="add1">A股热点</el-menu-item>
              <el-menu-item index="2-2" @click.native="add2">全部A股</el-menu-item>
              <el-menu-item index="2-3" @click="add3">上证B股</el-menu-item>
              <el-menu-item index="2-4" @click="add4">上海主板</el-menu-item>
              <el-menu-item index="2-5" @click="add5">深证主板</el-menu-item>
              <el-menu-item index="2-6" @click="add6">中小企业</el-menu-item>
              <el-menu-item index="2-7" @click="add7">创业板</el-menu-item>
              <el-menu-item index="2-8" @click="add8">科创版</el-menu-item>
              <el-menu-item index="2-9" @click="add9">基金</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">
              <i class="myel-icon-kchushengangtong" style="color:blue;"></i>
              <span slot="title">沪深港通</span>
            </el-menu-item>
            <el-menu-item index="5" >
              <i class="myel-icon-kcqihuo-dianji" style="color:red;"></i>
              <span slot="title">港期</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="myel-icon-kcqihuo-zhengchang" style="color:blue;"></i>
              <span slot="title">美期</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="myel-icon-kcicon_meigu" style="color:red;"></i>
              <span slot="title">美股</span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="myel-icon-kchuanqiu" style="color:blue;"></i>
              <span slot="title">环球指数</span>
            </el-menu-item>
            <el-menu-item index="9">
              <i class="myel-icon-kcwaihuixitong" style="color:yellow;"></i>
              <span slot="title">外汇</span>
            </el-menu-item>
          </el-menu>
        </div>
    </el-header>
    
    <el-main style="padding:0">      

      
      <hsMain v-bind:message="msg" v-if="see[1]"></hsMain>
      <hsMain v-bind:message="msg" v-if="see[2]"></hsMain>
      <hsMain v-bind:message="msg" v-if="see[3]"></hsMain>
      <hsMain v-bind:message="msg" v-if="see[4]"></hsMain>
      <hsMain v-bind:message="msg" v-if="see[5]"></hsMain>
      <hsMain v-bind:message="msg" v-if="see[6]"></hsMain>
      <hsMain v-bind:message="msg" v-if="see[7]"></hsMain>
      <hsMain v-bind:message="msg" v-if="see[8]"></hsMain>
    </el-main>
  </el-container>
</el-container>


<router-view/>
  </div>
</template>

<script>
import hsMain from '../components/hsMain.vue'//引入组件
import sidePart from '../components/sidePart.vue'
import top1 from '../components/top1.vue'
  export default {
    name:'App',
    data () 
  {
    return {
      msg:'1',
      see:[false,false,true,false,false,false,false,false,false]
    }
  },
    methods: {
      add1(){
        this.msg="1";
      },
      add2(){
        this.msg='2';
      },
      add3(){
        this.msg='3';
      },
      add4(){
        this.msg='4';
      },
      add5(){
        this.msg='5';
      },
      add6(){
        this.msg='6';
      },
      add7(){
        this.msg='7';
      },
      add8(){
        this.msg='8';
      },
      add9(){
        this.msg='9';
      },
      tz(){
        console.log('ook')
        this.see[2]=false;
        this.see[0]=true;
        this.$forceUpdate();
      }
    },
    components:{hsMain,sidePart,top1},
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;

}
html,body,#app {
  height: 100%;

}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;

  }
  
  .el-aside {
    color: #333;

  }

div.one{
  text-align: center;
}
a{
  color: black;

}

</style>
