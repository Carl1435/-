<template>
<div>
    <el-container>
        <el-container>
            <el-aside width='50%'>
                <div style="height:315px;text-align:left;">
                    <div style="height:30px;width:100%;">
                        <p style="margin:0;margin-left:2%;font-size:13px;margin-top:6px">大盘指数</p>
                    </div>
                    <div style="height:285px;">
                        <div style="height:285px;width:48%;float:left;margin-left:2%;border-style:solid;
                        border-width:1px;border-color:#95B7EC;">
                            <p style="font-size:10px;margin:0;margin-left:3%;color:blue;display:inline-block">上证指数  </p>
                            <p id="zuobiao1" style="font-size:10px;display:inline-block;margin:0;"></p>
                            <canvas id="myCanvas1" style="height:275px;width:100%;"></canvas>
                        </div>
                        <div style="height:285px;width:48%;float:right;margin-right:1%;border-style:solid;
                        border-width:1px;border-color:#95B7EC;">
                            <p style="font-size:10px;margin:0;margin-left:3%;color:blue;display:inline-block">深证指数  </p>
                            <p id="zuobiao2" style="font-size:10px;display:inline-block;margin:0;"></p>
                            <canvas id="myCanvas2" style="height:275px;width:100%;"></canvas>
                        </div>
                    </div>
                </div>
                <div style="height:245px;width:100%;">
                    <p style="margin:0;margin-left:2%;text-align:left;font-size:13px;margin-top:6px">领涨板块</p>
                    <table style="height:200px;width:97%;margin:1%;margin-left:2%;border-collapse: collapse;">
                        <tbody><!-- border-style:solid;border-width:1px;border-color:#95B7EC; -->

                        </tbody>
                    </table>
                </div>
            </el-aside>
            <el-main style="padding:0">
                <div style="height:250px;width:100%;">
                    <div style="height:30px;width:100%;text-align:left;margin-bottom:6px">
                        <p style="margin:0;margin-left:2%;display:inline-block;font-size:13px;margin-top:6px;">涨跌分布</p>
                        <p style="margin:0;margin-left:2%;margin-left:350px;display:inline-block">更新时间</p>
                        <p style="margin:0;margin-left:2%;display:inline-block">{{mytime}}</p>
                    </div>
                    <div style="height:220px;width:99%;border-style:solid;
                        border-width:1px;border-color:#95B7EC;">
                        <canvas id="myCanvas3" style="height:220px;width:100%;"></canvas>
                    </div>
                    <div style="height:300px;width:100%;">
                        <el-tabs v-model="msg1" width="500px" >
                            <el-tab-pane label="富途热门" name="first"><table style="width:100%;border-collapse:collapse;cellspacing:0"><tbody class="r"></tbody></table></el-tab-pane>
                            <el-tab-pane label="综合排名" name="2"><table><tbody class='r'></tbody></table></el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </el-main>
        </el-container>
        <el-footer height="40px" style="text-align:left">沪深市场  >  A股热点</el-footer>
    </el-container>
    </div>
</template>

<script>
import {drawChart} from "../js/draw.js"
import {drawChart2} from "../js/draw.js"
import {drawTableL} from "../js/drawTable.js"
import {drawR} from "../js/drawTable.js"
	export default{
        name:'dataMain',
        data(){
            return{
                msg1:'1',
                msg2:'',
                mytime:'',
                
            };
        },
        mounted:function(){
            this.msg1='first';
             this.mydrawChart2();
             this.mydrawTableL();
            this.addBook();
        },
        methods:{
        mydrawTableL(){
            this.$http.get('http://127.0.0.1:8000/api/add_business')
            .then((response) => {
            var res = JSON.parse(response.bodyText);
            drawTableL(res);
            })
            
        },
        mydrawChart2(){
            this.$http.get('http://127.0.0.1:8000/api/add_datamain')
            .then((response) => {
            var res = JSON.parse(response.bodyText);
            drawChart2(res.data);
            drawR(res.data2);
            })
        },
        addBook(){//add1?msg='+this.msg1
            
             this.$http.get('http://127.0.0.1:8000/api/add_zxzs?kind=1')
            .then((response) => {
            var res = JSON.parse(response.bodyText);
            drawChart("1",res);
            })
            this.$http.get('http://127.0.0.1:8000/api/add_zxzs?kind=0')
            .then((response) => {
            var res = JSON.parse(response.bodyText);
            drawChart("2",res);
            })
        },
        },
        }
    
</script>
<style scoped>

</style>