<template>
<div>
<el-tabs v-model="first" style="width:99.5%;margin-left:0.3%;">
                    <el-tab-pane label="报价" name="first" ><baojia v-bind:name="name"></baojia></el-tab-pane>
                    <el-tab-pane label="分析" name="second"><fenxi v-bind:name="name"></fenxi></el-tab-pane>
                    <el-tab-pane label="资讯" name="third"></el-tab-pane>
                    <el-tab-pane label="评论" name="fourth"></el-tab-pane>
                </el-tabs>
</div>
</template>
<script>
import baojia from './baojia.vue'
import fenxi from './fenxi.vue'
export default {
    data:{
        return:{
            first:'first',
            seen:true,
        }
    },
     props:['name'],
     mounted:function(){
         this.first='first';
         this.seen=true;
         this.getData()
         this.$forceUpdate();
     },
     methods:{
         getData(){
           
         },
     },
     watch:{
    name: function(a,b){     //a是value5的新值，b是旧值
        
    },
    },
    components:{baojia,fenxi}
}
</script>