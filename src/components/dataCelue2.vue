<template>
<el-container>
<el-aside style="width:30%;text-align:left;padding-left:2px;height:618px">
  <el-form ref="form" :model="form" label-width="80px">
<p style="display: inline-block;font-size:15px;margin:0;margin-top:5px">所属市场:
<el-radio-group v-model="radio1" style="margin:0">
    <el-radio :label="1" style="margin:0">备选项</el-radio>
    <el-radio :label="2" style="margin:0">备选项</el-radio>
    <el-radio :label="3" style="margin:0">备选项</el-radio>
  </el-radio-group></p>
  <p style="display:inline-block;font-size:15px;">选择策略:</p>
  <el-select v-model="value5" placeholder="新建策略" style="background-color:rgba(255,255,255,1);width:200px;" size="mini" @change="mychange">
    <el-option
      v-for="item in options1"
      :key="item.strategy_name"
      :label="item.strategy_name"
      :value="item.strategy_name">
    </el-option>
  </el-select>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="open" style="margin:0"></el-checkbox>
    <el-checkbox label="high" style="margin:0"></el-checkbox>
    <el-checkbox label="low" style="margin:0"></el-checkbox>
    <el-checkbox label="vol" style="margin:0"></el-checkbox>
    <el-checkbox label="amo" style="margin:0"></el-checkbox>
  </el-checkbox-group>
  <p style="display:inline-block;font-size:15px;">策略名称:</p>
  <el-input v-model="input1" placeholder="请输入名称" size="mini" style="width:200px"></el-input>
  <p style="display:inline-block;font-size:15px;">训练集范围:</p>
  <el-date-picker
      v-model="value1"
      type="date"
      placeholder="开始日期"
      size="mini"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="结束日期"
      size="mini"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <p style="display:inline-block;font-size:15px;">验证集范围:</p>
  <el-date-picker
      v-model="value3"
      type="date"
      placeholder="开始日期"
      size="mini"
      :picker-options="pickerOptions1">
    </el-date-picker>
    <el-date-picker
      v-model="value4"
      type="date"
      placeholder="结束日期"
      size="mini"
      :picker-options="pickerOptions1">
    </el-date-picker>
    <p style="display:inline-block;font-size:15px;">平均VOL:</p>
    <el-input v-model="input2" size="mini" @change="myinput2" style="width:85px"></el-input>
    <p style="display:inline-block;font-size:15px;">-</p>
    <el-input v-model="input3"  size="mini" style="width:85px" @change="myinput3"></el-input><!-- placeholder="请输入名称" -->
    <p style="display:inline-block;font-size:15px;">平均AMO:</p>
    <el-input v-model="input4"  size="mini" style="width:85px" @change="myinput4"></el-input>
    <p style="display:inline-block;font-size:15px;">-</p>
    <el-input v-model="input5"  size="mini" style="width:85px" @change="myinput5"></el-input>
    <p style="display:inline-block;font-size:15px;">模型:</p>
    <el-radio-group v-model="radio2" style="margin:0">
      <el-radio :label="1" style="margin:0">cnn模型</el-radio>
      <el-radio :label="2" style="margin:0">bp模型</el-radio>
  </el-radio-group>
  <p style="display:inline-block;font-size:15px;">epoch训练次数:</p>
    <el-radio-group v-model="radio3" style="margin:0">
      <el-radio :label="1" style="margin:0">500</el-radio>
      <el-radio :label="2" style="margin:0">750</el-radio>
      <el-radio :label="3" style="margin:0">1000</el-radio>
  </el-radio-group>
  <p>第一层卷积+池化</p>
  <p class='tap'>卷积核:</p>
  <el-radio-group v-model="radio4" style="margin:0">
    <el-radio :label="1" style="margin:0">2*2</el-radio>
    <el-radio :label="2" style="margin:0">3*3</el-radio>
  </el-radio-group><br>
  <p class='tap'>通道倍数:</p>
  <el-radio-group v-model="radio5" style="margin:0">
    <el-radio :label="1" style="margin:0">4</el-radio>
    <el-radio :label="2" style="margin:0">6</el-radio>
  </el-radio-group><br>
  <p class='tap'>池化方式:</p>
  <el-radio-group v-model="radio6" style="margin:0">
    <el-radio :label="1" style="margin:0">平均</el-radio>
    <el-radio :label="2" style="margin:0">最大</el-radio>
  </el-radio-group><br>
  <p class='tap'>激活函数:</p>
  <el-radio-group v-model="radio7" style="margin:0">
    <el-radio :label="1" style="margin:0">sigmoid</el-radio>
    <el-radio :label="2" style="margin:0">relu</el-radio>
  </el-radio-group><br>
  <p>第二层卷积+池化</p>
  <p class='tap'>卷积核:</p>
  <el-radio-group v-model="radio8" style="margin:0">
    <el-radio :label="1" style="margin:0">2*2</el-radio>
    <el-radio :label="2" style="margin:0">3*3</el-radio>
  </el-radio-group><br>
  <p class='tap'>通道倍数:</p>
  <el-radio-group v-model="radio9" style="margin:0">
    <el-radio :label="1" style="margin:0">4</el-radio>
    <el-radio :label="2" style="margin:0">6</el-radio>
  </el-radio-group><br>
  <p class='tap'>池化方式:</p>
  <el-radio-group v-model="radio10" style="margin:0">
    <el-radio :label="1" style="margin:0">平均</el-radio>
    <el-radio :label="2" style="margin:0">最大</el-radio>
  </el-radio-group><br>
  <p class='tap'>激活函数:</p>
  <el-radio-group v-model="radio11" style="margin:0">
    <el-radio :label="1" style="margin:0">sigmoid</el-radio>
    <el-radio :label="2" style="margin:0">relu</el-radio>
  </el-radio-group><br>
  <p>两层全连接层</p>
  <p class='tap'>中间参数:</p>
  <el-input v-model="input6"  size="mini" style="width:85px"></el-input><br>
  <p> </p>
  <el-button size="small" @click="save">保存为策略</el-button>
  <el-button size="small" @click="clear">重置</el-button>
  <el-button size="small" @click="watch">查看</el-button>
 </el-form >
</el-aside>
<el-main style="padding:0;height:618px;">
    <p style="margin:0;padding-left:2%;padding-top:10px;text-align:left;border-left:1px solid #95B7EC;">共有{{num}}支股票符合本次选股条件</p>
    <div style="overflow: auto;">
    <table style="width:100%;margin:0;border-collapse: collapse;border-style:solid;border-width:1px;border-color:#95B7EC;">
        <tbody><!-- border-style:solid;border-width:1px;border-color:#95B7EC; -->

        </tbody>
    </table></div>
</el-main>
</el-container>
</template>
<script>
import {drawBig} from "../js/drawTable.js"
  export default {
    data() {
       return {//多选框内容
        options1: [],
        //value5:'',//多选框选项
        num:0,//符合的股票数
        radio1: 1,//单选1内容
        radio2: 1,
        radio3: 1,
        radio4:1,
        radio5: 1,
        radio6: 1,
        radio7:1,
        radio8: 1,
        radio9: 1,
        radio10:1,
        radio11:1,
        value1:'',//日期1
        value2:'',//riqi2
        value3:'',
        value4:'',
        input1:'',//策略名称
        input2:'',
        input3:'',
        input4:'',
        input5:'',
        input6:'',
        checkList:[],
        test:[],
        data:[],
        data1:[],
        pickerOptions0: {
            disabledDate(time) {
            return time.getTime() < Date.parse('2010/1/1')||time.getTime()>Date.parse('2015/12/31');
            } 
          },  
        pickerOptions1: {
            disabledDate(time) {
            return time.getTime() < Date.parse('2016/1/1')||time.getTime()>Date.parse('2016/12/31');
            } 
          }, 
      }
    },
    props:['value5'],
    mounted:function(){
        
        this.getBut()
    },
    methods:{

      getBut(){
        this.$http.get('http://127.0.0.1:8000/api/getBut')//获取按钮
          .then((response) => {
          var res = JSON.parse(response.bodyText);
          this.options1=res.data;
          })
      },
        myinput2(value){
          this.input2 =parseFloat(this.input2)
        },
        myinput3(value){
          this.input3 =parseFloat(this.input3)
        },
        myinput4(value){
          this.input4 =parseFloat(this.input4)
        },
        myinput5(value){
          this.input5 =parseFloat(this.input5)
        },
        clear(){
          this.value5='';//多选框选项
          this.num=6;//符合的股票数
          this.radio1= 1;//单选1内容
          this.radio2=1;
          this.radio3= 1;
          this.radio4=1;
          this.radio3= 1;
          this.radio4=1;
          this.radio5= 1;
          this.radio6=1;
          this.radio7= 1;
          this.radio8=1;
          this.radio9= 1;
          this.radio10=1;
          this.radio11= 1;
          this.value1='';//日期1
          this.value2='';//riqi2
          this.value3='';
          this.value4='';
          this.input1='';//策略名称
          this.input2='';
          this.input3='';
          this.input4='';
          this.input5='';
        },
        watch(){
          var td = document.getElementsByTagName('tbody');
          td[1].innerText='';
          this.$http.get('http://127.0.0.1:8000/api/return_Code?strategy_amo_start='+this.input4+'&strategy_amo_end='+this.input5
          +'&strategy_vol_end='+this.input3+'&strategy_vol_start='+this.input2)
          .then((response) => {
          var res = JSON.parse(response.bodyText);
          drawBig(1,res.data,this.test);
          this.num=res.data.length;
          })
          
          this.$forceUpdate();
        },
        save(){
            this.data=new Array;
            this.data[0]=this.radio1;
            this.data[1]=this.value5;
            this.data[2]=this.input1;
            this.data[3]=this.value1.toLocaleDateString();
            this.data[4]=this.value2.toLocaleDateString();
            this.data[5]=this.value3.toLocaleDateString();
            this.data[6]=this.value4.toLocaleDateString();
            this.data[7]=this.input2;
            this.data[8]=this.input3;
            this.data[9]=this.input4;
            this.data[10]=this.input5;
            this.data[11]=this.radio2;
            this.data[12]=this.radio3;
            this.data[13]=0;
            this.data[14]=0;
            this.data[15]=0;
            this.data[16]=0;
            this.data[17]=0;
            this.data[18]=this.radio4;
            this.data[19]=this.radio5;
            this.data[20]=this.radio6;
            this.data[21]=this.radio7;
            this.data[22]=this.radio8;
            this.data[23]=this.radio9;
            this.data[24]=this.radio10;
            this.data[25]=this.radio11;
            this.data[26]=this.input6;
            let i;
            for (i in this.checkList)
            {
                if(this.checkList[i]=='open')
                this.data[13]=1;
                else if(this.checkList[i]=='high')
                this.data[14]=1
                else if(this.checkList[i]=='low')
                this.data[15]=1
                else if(this.checkList[i]=='vol')
                this.data[16]=1
                else if(this.checkList[i]=='amo')
                this.data[17]=1
            }
              
            this.myselect();
        },
        myselect(){//add1?msg='+this.msg1
             this.$http.get('http://127.0.0.1:8000/api/add2?msg='+this.data)
            .then((response) => {
            var res = JSON.parse(response.bodyText);
            })
        },
        getselect(){
          this.$http.get('http://127.0.0.1:8000/api/return_Code?strategy_amo_start='+this.input4+'&strategy_amo_end='+this.input5
          +'&strategy_vol_end='+this.input3+'&strategy_vol_start='+this.input2)
          .then((response) => {
          var res = JSON.parse(response.bodyText);
          })
        },
        mychange(value){
          console.log('ok2')
          this.$http.get('http://127.0.0.1:8000/api/add4?name='+value)//点击按钮获取数据
          .then((response) => {
          var res = JSON.parse(response.bodyText);
          this.input1=res.data[0].strategy_name;
          this.input4=res.data[0].strategy_amo_start;
          this.input5=res.data[0].strategy_amo_end;
          if(res.data[0].strategy_Model_choose=='cnn模型')
          this.radio2=1;
          else
          this.radio2=2;
          this.value1=res.data[0].strategy_train_start;
          this.value2=res.data[0].strategy_train_end;
          this.input2=res.data[0].strategy_vol_start;
          this.input3=res.data[0].strategy_vol_end;

          if(res.data[0].strategy_epoch_num_choose=='500次')
          this.radio3=1;
          else if(res.data[0].strategy_epoch_num_choose=='750次')
          this.radio3=2;
          else
          this.radio3=3;
          this.value3=res.data[0].strategy_verify_start;
          this.value4=res.data[0].strategy_verify_end;
          })
          this.$forceUpdate();
        }
    },
    watch:{     //监听value5的变化，进行相应的操作即可
    value5: function(a,b){     //a是value5的新值，b是旧值
      this.mychange(a)
    },
    test:{
      handler(newValue, oldValue) {
        console.log(newValue)
　　　　　　this.$emit('name',newValue[0])
　　　　},
　　　　deep: true
    }
  }
  }
</script>
<style>
.tap{
  display:inline-block;
  font-size:15px;
  margin:4px;
}
</style>