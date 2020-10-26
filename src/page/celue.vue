<template>
<el-container>
    <sidePart>  </sidePart>
    <el-container >
        <el-header style="height:38px;line-height:33px;padding:0;"><top1></top1>
        </el-header>
        <el-container style="background:-webkit-linear-gradient(top,rgb(241, 244, 248),white);">
            <el-aside style="width:70%;height:1600px">
            <el-container>
                <el-tabs v-model="first" @tab-click="handleClick" style="width:99.5%;margin-left:0.3%;">
                    <el-tab-pane label="策略精选" name="first" ><dataCelue1 v-on:msg='change'></dataCelue1></el-tab-pane>
                    <el-tab-pane label="制定策略" name="third"><dataCelue2 v-bind:value5="msg" v-on:name='stockdt'></dataCelue2></el-tab-pane>
                    <el-tab-pane label="我的策略" name="sixth"></el-tab-pane>
                </el-tabs>
            </el-container>
            </el-aside>
            <el-main style="border-left:1px solid #95B7EC;">
                <stockdata v-bind:name="name"></stockdata>
            </el-main>
        </el-container>
    </el-container >
</el-container>
</template>
<script>
import sidePart from '../components/sidePart.vue'
import top1 from '../components/top1.vue'
import dataCelue1 from '../components/dataCelue1.vue'
import dataCelue2 from '../components/dataCelue2.vue'
import stockdata from '../components/stockdata.vue'
export default {
    data(){
        return{
            msg:'',
            first:'first',
            name:''
        }
    },
    methods:{
        change(data){
            this.first="third";
            this.msg=data;
        },
        stockdt(data){
            this.name=data;
        }
    },
   components:{sidePart,top1,dataCelue1,dataCelue2,stockdata}, 
}
</script>
<style>
.el-tabs__header {
  /**/
  margin: 0;
}
</style>