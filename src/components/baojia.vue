<template>
<div style="overflow: auto;height:635px">
    <stockdetail v-bind:name="name"></stockdetail>
        <el-tabs v-model="second" @tab-click="handleClick" style="width:99.5%;margin-left:0.3%;">
            <el-tab-pane label="盘口" name="1" >
            写一些内容
            </el-tab-pane>
            <el-tab-pane label="资金" name="2" >
                
            </el-tab-pane>
        </el-tabs>
        <el-tabs v-model="first" @tab-click="handleClick" style="width:99.5%;margin-left:0.3%;">
        <el-tab-pane label="分时" name="1" >
            <div>
            <stockzs v-bind:name="'3'"></stockzs>
            </div>
        </el-tab-pane>
       <el-tab-pane label="多日" name="2" >
            <stockzs v-bind:name="'4'"></stockzs>
        </el-tab-pane>
         <el-tab-pane label="日K" name="3" >
            <div id='dayK' style="height:270px;width:380px"></div>
        </el-tab-pane>
        <el-tab-pane label="周K" name="4" >
            <div id='weekK' style="height:270px;width:380px"></div>
        </el-tab-pane>
        <el-tab-pane label="月K" name="5" >
            <div id='monK' style="height:270px;width:380px"></div>
        </el-tab-pane>
        <el-tab-pane label="季K" name="6" >
            <div id='jiK' style="height:270px;width:380px"></div>
        </el-tab-pane>
        <el-tab-pane label="年K" name="7" >
            <div id='yearK' style="height:270px;width:380px"></div>
        </el-tab-pane>
        </el-tabs>
    <div style="text-align:left; border-bottom: 1px solid lightblue;">
    <span style="width:50%;float:left">
        分笔成交
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
            <el-button style="background:rgba(0,0,0,0);padding:0"><i class="el-icon-question" style="color:lightblue;"></i></el-button>
        </el-tooltip>
    </span>
    <span style="width:50%;">成交统计
    </span>
    <span style="float:right">
        <i class="el-icon-more" style="color:lightblue;"></i>
        <i class="el-icon-menu" style="color:lightblue;"></i> 
    </span>
    </div>
    <div style="height:150px;overflow: auto;">
        <table style="width:100%;text-align:left;">
            <tr v-for='item in sites' :key="item">
                <td style="width:15%">{{item[0]}}</td>
                <td style="color:red;width:15%">{{item[1]}}</td>
                <td :style="{'color':item[3],'width':'20%'}">{{item[0]}}
                    <i class="el-icon-caret-bottom" style="color:green" v-if="item[3]=='green'"></i>
                    <i class="el-icon-caret-top" style="color:red;" v-if="item[3]=='red'"></i>
                </td>
                <td style="color:red">{{item[4]}}</td>
                <td>
                    <p :style="{'width':'15px','background-color':'red','display':'inline-block'}">&nbsp;</p><p :style="{'width':'15px','background-color':'green','display':'inline-block'}">&nbsp;</p>
                </td>
                <td style="">{{item[5]}}</td>
            </tr>
        </table>
    </div>
     <span style="width:49%;float:left">
        买盘十档
    </span>
    <span style="width:49%;float:right">
        卖盘十档
    </span>
    <p :style="{'width':'15%','height':'10px','background-color':'blue','display':'inline-block'}">&nbsp;</p><p :style="{'width':'74%','height':'10px','background-color':'yellow','display':'inline-block'}">&nbsp;</p>
</div>
</template>
<script>
import stockdetail from './stockdetail.vue'
import stockzs from './stockzs.vue'
import {drawChart6} from "../js/draw.js"
export default {
    data:{
        return:{
            first:1,
            msg1:'1',
            sites: [],
            chart:['分时']
        }
    },
    props:['name'],
     mounted:function(){
         this.first='1'
         this.sites=[
            ['11:9',18.32,'2K','green',18.6,'10%'],
            ['11:9',18.32,'2K','green',18.6,'10%'],
            ['11:9',18.32,'2K','green',18.6,'10%'],
            ['11:9',18.32,'2K','green',18.6,'10%'],
            ['11:9',18.32,'2K','green',18.6,'10%']
            ]
        this.chart=['分时'];
        this.getstockDayK()
         this.$forceUpdate();
     },
     methods:{
         getstockDayK(){
            let kind=[1,7,30,91,365];
            let name=['dayK','weekK','monK','jiK','yearK']
            for(let i=0;i<5;i++)
           this.$http.get('http://127.0.0.1:8000/api/add_stockdayK?name='+this.name[0]+'&start='+this.name[1]+'&fin='+this.name[2]+'&kind='+kind[i])
          .then((response) => {
          var res = JSON.parse(response.bodyText);
          drawChart6(res,name[i])
          })
         },

     },
     watch:{
    name: function(a,b){     //a是value5的新值，b是旧值
        this.getstockDayK()
    },
    },
    components:{stockdetail,stockzs},
}
</script>
<style scoped>
tr{
    height: 15px;
}
</style >