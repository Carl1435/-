<template>
<el-container>
<table style="width:100%;border-collapse:collapse;">
    <tbody>
        <tr>
            <td>序号</td>
            <td>代码</td>
            <td>名称</td>
            <td>最新价</td>
            <td>涨跌额</td>
            <td>涨跌幅</td>
            <td>5分钟涨跌幅</td>
            <td>60日涨跌幅</td>
            <td>年初至今涨跌</td>
            <td>买入价</td>
        </tr>
        <tr v-for='item in stockdata' :key="item" @click="choosestock">
            <td></td>
            <td>{{item[0]}}</td>
            <td>{{item[1]}}</td>
            <td :style="{'color':colorsty(item[3])}">{{item[2]}}</td>
            <td :style="{'color':colorsty(item[3])}">{{addsign(item[3])}}{{item[3]}}</td>
            <td :style="{'color':colorsty(item[3])}">{{item[4]}}</td>
            <td :style="{'color':colorsty(item[5])}">{{item[5]}}%</td>
            <td :style="{'color':colorsty(item[6])}">{{item[6]}}%</td>
            <td :style="{'color':colorsty(item[7])}">{{item[7]}}%</td>
            <td>{{item[9]}}</td>
        </tr>
    </tbody>
</table>
</el-container>
</template>
<script>

export default {
    data(){
        return{
            stockdata:[],
        }
    },
    mounted:function(){
    this.getdata()
    },
    methods:{
        getdata(){
            console.log('http://127.0.0.1:8000/api/bk_stockdata?kind='+this.kind+'&bk_name='+this.bk+'&kind2='+this.kind2)
            this.$http.get('http://127.0.0.1:8000/api/bk_stockdata?kind='+this.kind+'&bk_name='+this.bk+'&kind2='+this.kind2)
            .then((response) => {
            var res = JSON.parse(response.bodyText);
            //this.stock=res;
            this.stockdata=res;
            })
        }
    },
    watch:{     //监听value5的变化，进行相应的操作即可
    bk: function(a,b){     //a是value5的新值，b是旧值
      this.getdata()
    },
  },
  computed:{
      colorsty(){
          return  function(index)
          {
              index=index*1;
              if(index>0)
              return 'red'
              else if(index<0)
              return 'green'
              else
              return 'balck'
          }
      },
      addsign(){
          return  function(index)
          {
              index=index*1;
              if(index>0)
              return '+'
              else
              return ''
          }
      }
  },
props:['kind',"bk",'kind2']
}
</script>
<style scoped>
td{
    border:solid#95B7EC 1px;
    
    }
</style>