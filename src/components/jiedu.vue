<template>
<div style="text-align:left;" class='test'>
指标解读
<div style='height:200px;width:400px' id='yibiao'></div>
<el-collapse accordion>
  <el-collapse-item>
    <template slot="title" id='ok'>
      <span style="float:left">指标详情</span><span style="float:right">收起</span>
    </template>
    <div><el-button v-for="n in but" 
    :key="n" 
    :style="{'background':n.col,'margin':'3px'}" 
    round size="mini" 
    @click="explain(n.text)">{{n.text}}</el-button >
    <div v-if="seen"><p><b>{{butch}}.近一年历史回测</b></p>
      <br>
    <div style="float:left;width:30%;height:70px">
      下跌概率
      <p style="font-size:30px;margin:0">{{huice[0]}}</p>
    </div>
    <div style="float:right;width:69%;height:70px">
    <table style="width:100%">
      <tr>
        <td>出现次数</td>
        <td>{{huice[1]}}</td>
        <td>平均涨跌</td>
        <td>{{huice[1]}}</td>
      </tr>
      <tr>
        <td>次日上涨</td>
        <td>{{huice[1]}}</td>
        <td>最大涨幅</td>
        <td>{{huice[1]}}</td>
      </tr>
      <tr>
        <td>次日下跌</td>
        <td>{{huice[1]}}</td>
        <td>最大跌幅</td>
        <td>{{huice[1]}}</td>
      </tr>
    </table>
    </div><br>
    <span>以上数据仅供参考，不构成投资建议</span>
    </div></div>
  </el-collapse-item>
  <div style="width:100%;hight:80px">
    <p>深股通持股比例
    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
        <el-button style="background:rgba(0,0,0,0);padding:0"><i class="el-icon-question" style="color:lightblue;"></i></el-button>
    </el-tooltip></p><br>
    <span style="float:left">持仓成本{{}}</span>
    <span style="float:right">持仓盈亏比例{{}}</span><br>
    <p style="margin-top:5px;font-size:15px">更新时间 {{time}}</p>
    <div style="width:350px;height:250px;" id='mycharatzx'></div>
    <div style="width:350px;height:200px;" id='mycharatzz'>
    </div>
    <div>
      <span>累计资金净流向</span>
      <span style="float:right"><a href="" style="color:blue;text-decoration: none;">更多成分股> </a></span>
      <div style="clear:both;"></div>
    </div>
    <div style="width:100%;height:200px;">
      <table style="width:100%">
      <tr>
        <td style="width:25%">时间</td>
        <td style="width:25%">净买卖股数</td>
        <td style="width:25%">资金净流向</td>
        <td style="width:25%">金额排名</td>
      </tr>
      <tr v-for='item in sites' :key="item">
        <td style="width:25%">{{item[0]}}</td>
        <td :style="{'width':'25%','color':(item[1]<0)?'green':'red'}">{{item[1]}}</td>
        <td :style="{'width':'25%','color':(item[2]<0)?'green':'red'}">{{item[2]}}万</td>
        <td style="width:25%">{{item[3]}}</td>
      </tr>
      </table>
    </div>
  </div>
</el-collapse>
</div>
</template>
<script>
import {drawChart3} from "../js/draw.js"
import {drawChart4} from "../js/draw.js"
import {drawChart5} from "../js/draw.js"
export default{
    data:{
        return:{
          seen:false,
          but:[0],
          butch:'',
          huice:[],
          time:'',
          sites:[],
        }
    },
    props:['name'],
    mounted(){
      this.sites=[['最近一日',-190103,-794.31,'624/61'],
      ['最近一日',-190103,-794.31,'624/61'],
      ['最近一日',-190103,794.31,'624/61'],
      ['最近一日',190103,-794.31,'624/61'],]
      var now = new Date();
      drawChart3();
      this.but=[{text:'ocs严重超买',col:'lightblue'},
      {text:'ocs严重超买',col:'lightblue'},{text:'ocs严重超买',col:'lightblue'},{text:'ocs严重超买',col:'lightblue'}];
      this.time=(now.getMonth()+1).toString()+'/'+(now.getDate()).toString()+' '+(now.getHours()).toString()+':'+(now.getMinutes()).toString();
      drawChart4();
      drawChart5();
      this.$forceUpdate();
    },
    methods:{
    explain(e){
      this.seen=true;
      this.butch=e;
      this.huice=['47%',1,1,1,1,1,1]
      this.$forceUpdate();
    }
    }
}
</script>
<style scoped>
p{
  margin: 0px;
}
.test >>> .el-collapse-item__header
{
    background-color :rgba(0,0,0,0);
    height:50px;
    }
.test >>> .el-collapse-item__wrap
{
    background-color :rgba(0,0,0,0);}
</style>