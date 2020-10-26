<template>
<div class='test'>
<el-collapse accordion>
        <el-collapse-item>
            <template slot="title">
               <div style="text-align:left;">
                  <p style="font-size:20px;line-height:30px;margin:0;"><b> {{name[0]}}</b>   {{name[0]}}</p> 
                  <span style="font-size:30px;color:red;margin:0;"><b> {{stockdata[0]}}</b></span>
                  <span style="font-size:15px;color:red"><b>+- +-%</b></span>
                  <span style="margin-left:40px;font-size:12px;">{{iftrade}} {{time}}</span>
                  
               </div>
            </template>
        <div>
        <table style="height:100px;width:98%;text-align:left">
            <tr>
              <td>最高价: <span>{{stockdata[2]}}</span></td>
               <td>开盘价: <span>{{stockdata[0]}}</span></td>
             <td>成交量: <span>{{stockdata[4]}}</span></td>
            </tr>
            <tr>
              <td>最低价: <span>{{stockdata[3]}}</span></td>
              <td>昨收价: <span>{{stockdata[6]}}</span></td>
              <td>成交额: <span>{{stockdata[5]}}</span></td>
            </tr>
            <tr>
              <td>振幅: <span>-</span></td>
              <td>平均价: <span>-</span></td>
              <td>市盈率: <span>-</span></td>
            </tr>
            <tr>
              <td>换手率:<span>-</span></td>
              <td>市净率: <span>-</span></td>
              <td>量比: <span>-</span></td>
            </tr>
        </table>
        </div>
        </el-collapse-item>
    </el-collapse>
</div>
</template>
<script>
export default{
    data:{
        return:{
            stockdata:[],
            time:'',
            iftrade:'',
        }
    },
    props:['name'],
    mounted:function(){
        console.log('stockdetail')
        this.stockdata=['002475','名称',42.56,1.28,3.16];
        this.getDate();
        this.getstockdetail()
        this.$forceUpdate();
    },
    methods:{
      getDate(){
            var now = new Date();
            var month = now.getMonth()+1;
            var date = now.getDate();
            var day = now.getDay();//得到周几
            console.log(day+' '+month+' '+date)
            var hour = now.getHours();//得到小时
            var minu = now.getMinutes();//得到分钟
            var time=hour+minu*0.01;
            if(day==6||day==7||time<9.3||time>15||(time>11.3&&time<13))
            {
                this.iftrade="非交易中";
            }
            else{
                this.iftrade="交易中";
            }
            this.time=month.toString()+'/'+date.toString()+' '+hour.toString()+':'+minu.toString();
         },
    getstockdetail(){
        this.$http.get('http://127.0.0.1:8000/api/add_stockdetail?name='+this.name[0]+'&day='+this.name[1])
          .then((response) => {
          var res = JSON.parse(response.bodyText);
          console.log(res)
          this.stockdata=res;
          })
    }
    },
    watch:{
        name: function (newQuestion){
            this.getstockdetail()
        }
    }
}
</script>
<style scoped>
.test >>> .el-collapse-item__header
{
    background-color :rgba(0,0,0,0);
    height:90px;
    }
.test >>> .el-collapse-item__wrap
{
    background-color :rgba(0,0,0,0);}
tr{
    height: 15px;
}
</style >