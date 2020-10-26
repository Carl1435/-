<template>
<div style="height:270px;width:100%;">
<canvas :id="'myCanvas'+name" style="height:270px;width:100%;"></canvas>
</div>
</template>
<script>
import {drawChart} from "../js/draw.js"
export default{
    data:{
        return:{
            msg1:'1',
        }
    },
    mounted:function(){
        this.msg1=this.name
        
        
        this.$forceUpdate();
        this.addBook();
    },
    props:['name'],
    methods:{
        addBook(){//add1?msg='+this.msg1
             this.$http.get('http://127.0.0.1:8000/api/add_zxzs')
            .then((response) => {
            var res = JSON.parse(response.bodyText);
            console.log('stocks')
            drawChart(this.msg1,res);
            })
        }
    }
}
</script>