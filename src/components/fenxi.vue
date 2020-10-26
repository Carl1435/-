<template>
<div style="overflow: auto;height:635px">
<stockdetail v-bind:name="name"></stockdetail>
<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="解读" name="first"><jiedu v-bind:name="name"></jiedu></el-tab-pane>
    <el-tab-pane label="简况" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="财报" name="third">角色管理</el-tab-pane>
</el-tabs>
</div>
</template>
<script>
import stockdetail from './stockdetail.vue'
import jiedu from './jiedu.vue'
export default{
    data:{
        return:{
            activeName: 'first',
        }
    },
    props:['name'],
    mounted:function(){
        this.activeName='first'
        this.$forceUpdate();
    },
    methods:{},
    components:{stockdetail,jiedu},
}
</script>
