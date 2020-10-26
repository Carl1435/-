<template>
<el-container>
    <el-aside style="width:30%;height:618px;">
        <div id='select'>
          <!-- <el-button v-for="site in sites" style="width:210px;margin-top:15px" :key=site @click="select(site.strategy_name)">
            {{ site.strategy_name }}
          </el-button> -->
          <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      >
      </el-date-picker>
        </div>
    </el-aside>
    <el-main style="padding:0;height:618px">
        <div style="height:250px;width:98%;border-style:solid;border-width:1px;border-color:#95B7EC;margin-top:5px;padding:5px">
          <table style="height:200px;width:99%;text-align:left">
            <tr>
              <td>策略名: <p class="sty1">{{data1[0]}}</p></td>
               <td>平均AMO: <p class="sty1">{{data1[1]}}</p></td>
             <td>模型: <p class="sty1">{{data1[2]}}</p></td>
            </tr>
            <tr>
              <td>训练集范围: <p class="sty1">{{data1[3]}}</p></td>
              <td>平均VOL: <p class="sty1">{{data1[4]}}</p></td>
              <td>epoch次数: <p class="sty1">{{data1[5]}}</p></td>
            </tr>
            <tr>
              <td>验证集范围: <p class="sty1">{{data1[6]}}</p></td>
              <td>符合条件股票数: <p class="sty1">{{data1[7]}}</p></td>
              <td>训练状态: <p class="sty1">{{data1[8]}}</p></td>
            </tr>
          </table>
          <el-button @click="start" id='mybut' :disabled=flag>开始训练</el-button>
          <el-button @click="changeCL">修改策略</el-button>
        </div>
        <div style="overflow: auto;width:100%;height:350px;">
        <table style="width:100%;margin:0;border-collapse: collapse;border-style:solid;border-width:1px;border-color:#95B7EC;">
            <tbody><!-- border-style:solid;border-width:1px;border-color:#95B7EC; -->
              
            </tbody>
        </table></div>
    </el-main>
</el-container>
</template>
<script>
import {drawBut} from "../js/drawButton.js"
import {drawTShow} from '../js/drawTable.js'
  export default {
    data() {
      return {
        flag:false,
        sign:0,
        num:6,
        sites: [
        
        ],
        data1:[]
      }
    },
    mounted:function(){
     
     this.getBut();
       // drawBut(this.sign) ;console.log('ok')
    },
    methods:{
      getBut(){
        this.$http.get('http://127.0.0.1:8000/api/getBut')//获取按钮
          .then((response) => {
          var res = JSON.parse(response.bodyText);
          this.sites=res.data;
          })
      },
      select(e){
        console.log(e)
        this.$http.get('http://127.0.0.1:8000/api/add4?name='+e)//点击按钮获取数据
          .then((response) => {
          var res = JSON.parse(response.bodyText);
          this.data1[0]=res.data[0].strategy_name;
          this.data1[1]=res.data[0].strategy_amo_start+' 到 '+res.data[0].strategy_amo_end;
          this.data1[2]=res.data[0].strategy_Model_choose;
          this.data1[3]=res.data[0].strategy_train_start+' 到 '+res.data[0].strategy_train_end;
          this.data1[4]=res.data[0].strategy_vol_start+' 到 '+res.data[0].strategy_vol_end;
          this.data1[5]=res.data[0].strategy_epoch_num_choose;
          this.data1[6]=res.data[0].strategy_verify_start+' 到 '+res.data[0].strategy_verify_end;
          this.data1[7]=res.data[0].strategy_name;
          this.data1[8]=res.data[0].strategy_state;
          })
        this.$http.get('http://127.0.0.1:8000/api/get_result?name='+this.sign)//开始训练
          .then((response) => {
          var res = JSON.parse(response.bodyText);
          drawTShow(0,res.data)
          console.log(res.data)
          })
          this.$forceUpdate();
          
          this.sign=e;
          console.log(this.data1)
      },
        start(){
         this.flag=true;
          this.$http.get('http://127.0.0.1:8000/api/add5?name='+this.sign)//开始训练
          .then((response) => {
          var res = JSON.parse(response.bodyText);
          })
        },
        changeCL:function(){
          this.$emit('msg',this.sign)//修改
        }
    }
  }
</script>
<style scoped>
p.sty1{
  font-size:15px;display:inline-block;margin:0;font-family:宋体;
}
</style>