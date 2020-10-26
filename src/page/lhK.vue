<template>
<el-container>
    <sidePart>  </sidePart>
    <el-container >
        <el-header style="height:38px;line-height:33px;padding:0;"><top1></top1>
        </el-header>
        <el-container style="background:-webkit-linear-gradient(top,rgb(241, 244, 248),white);">
            <el-aside :style="{'width':main_width,'height':'1600px'}">
            <el-container>
                <el-tabs v-model="first" @tab-click="handleClick" style="width:99.5%;margin-left:0.3%;">
                    <el-tab-pane label="K线形态" name="first" >
                        <el-container >
                            <el-aside :style="{'width':'15%','height':'675px'}">
                                <div v-for="n in but" 
                                :key="n" >
                                <el-tooltip placement="right" effect="light">
                                    <div slot="content">
                                        <span style="color:blue;">{{butmsg.name}}</span>
                                        <div style="border-top: 1px solid lightblue;">
                                            <div style="float:left;border-right: 1px solid lightblue;">
                                                <div>
                                                    <span style="color:blue;width:70px;float:left">特征</span>
                                                    <span style="width:150px;float:right">{{butmsg.tz}}</span>
                                                    <div style="clear:both;"></div>
                                                </div>
                                                <br>
                                                <div>
                                                    <span style="color:blue;width:70px;float:left">技术含义</span>
                                                    <span style="width:150px;float:right">{{butmsg.js}}</span>
                                                    <div style="clear:both;"></div>
                                                </div>
                                                <br>
                                                <div>
                                                    <span style="color:blue;width:70px;float:left">备注</span>
                                                    <span style="width:150px;float:right">{{butmsg.bz}}</span>
                                                    <div style="clear:both;"></div>
                                                </div>
                                            </div>
                                            <div style="float:right;width:100px">
                                                <span style="color:blue;width:70px;">形态</span>
                                                <img src="../assets/hsb.png" style="width:100px;margin-top:20px">
                                            </div>
                                        </div>
                                    </div>
                                <el-button 
                                :style="{'margin':'0px','width':'100%','background':'rgba(0,0,0,0)','color':'blue'}" 
                                 
                                @click="explain()"
                                >{{n}}</el-button ></el-tooltip></div>
                            </el-aside>
                            <el-main :style="{'width':'300px','height':'675px','padding':'1px'}">
                                <div :style="{'width':table_width,'text-align':'left'}">
                                    <span style="color:blue;margin-left:5px">预测 &nbsp;&nbsp;&nbsp;</span>
                                    <span>日:</span>
                                    <el-select v-model="value1" clearable placeholder="请选择" style="width:90px"
                                        @change="change1" :disabled='choose[0]' @clear='myclear' size="mini">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <span>周:</span>
                                    <el-select v-model="value2" clearable placeholder="请选择" style="width:90px"
                                        @change="change2" :disabled='choose[1]' @clear='myclear' size="mini">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <span>月:</span>
                                    <el-select v-model="value3" clearable placeholder="请选择" style="width:90px"
                                        @change="change3" :disabled='choose[2]' @clear='myclear' size="mini"
                                         >
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <span>&nbsp;&nbsp;&nbsp;回测</span>
                                    <el-date-picker
                                    v-model="datevalue1"
                                    type="date"
                                    placeholder="开始日期"
                                    size="mini"
                                    style="width:140px"
                                    :picker-options="pickerOptions0">
                                    </el-date-picker>
                                    <el-date-picker
                                    v-model="datevalue2"
                                    type="date"
                                    placeholder="结束日期"
                                    size="mini"
                                    style="width:140px"
                                    :picker-options="pickerOptions0">
                                    </el-date-picker>
                                    <el-input
                                    placeholder="输入股票代码(可选)"
                                    v-model="stockcode"
                                    size="mini"
                                    style="width:150px"
                                    clearable>
                                    </el-input>
                                    <el-button type="primary" @click="ceshi">测试</el-button>
                                    <span v-if="onload">加载中</span>
                                </div>
                                <div :style="{'width':table_width}">
                               <table style="width:100%;border-collapse:collapse;">
                                   <tr>
                                       <td style="width:10%;height:43px">序号</td>
                                       <td style="width:10%">代码</td>
                                       <td style="width:10%;height:20px" v-if="showdate">日期</td>
                                       <td style="width:10%">名称</td>
                                       <td style="width:10%">个股平均收益</td>
                                       <td style="width:10%">1个周期收益率</td>
                                       <td style="width:10%">2个周期收益率</td>
                                       <td style="width:10%">3个周期收益率</td>
                                       <td style="width:10%">4个周期收益率</td>
                                       <td style="width:10%">5个周期收益率</td>
                                   </tr>
                                   <tr v-for='item in stocknum' :key="item" @click="choosestock">
                                       <td style="width:10%;height:20px">{{stock[item-1][2]}}</td>
                                       <td style="width:10%;height:20px">{{stock[item-1][0]}}</td>
                                       <td style="width:10%;height:20px" v-if="showdate">{{stock[item-1][10]}}</td>
                                       <td style="width:10%;height:20px">{{stock[item-1][1]}}</td>
                                       <td :style="{'width':'10%','height':'20px','color':(stock[item-1][9]<0)?'green':'red'}">{{stock[item-1][9]}}
                                           {{combfh(stock[item-1][9])}}
                                       </td>
                                       <td :style="{'width':'10%','height':'20px','color':(stock[item-1][3]<0)?'green':'red'}">{{stock[item-1][3]}}
                                           {{combfh(stock[item-1][3])}}
                                       </td>
                                       <td :style="{'width':'10%','height':'20px','color':(stock[item-1][4]<0)?'green':'red'}">{{stock[item-1][4]}}
                                           {{combfh(stock[item-1][4])}}
                                       </td>
                                       <td :style="{'width':'10%','height':'20px','color':(stock[item-1][5]<0)?'green':'red'}">{{stock[item-1][5]}}
                                           {{combfh(stock[item-1][5])}}
                                       </td>
                                       <td :style="{'width':'10%','height':'20px','color':(stock[item-1][6]<0)?'green':'red'}">{{stock[item-1][6]}}
                                           {{combfh(stock[item-1][6])}}
                                       </td>
                                       <td :style="{'width':'10%','height':'20px','color':(stock[item-1][7]<0)?'green':'red'}">{{stock[item-1][7]}}
                                           {{combfh(stock[item-1][7])}}
                                       </td>
                                   </tr>
                                </table> </div>
                            </el-main>
                        </el-container >
                    </el-tab-pane>
                </el-tabs>
            </el-container>
            </el-aside>
            <el-main v-if="seen" style="border-left:1px solid #95B7EC;"> 
                <el-button @click="hid" style="position:absolute;right:0px;background-color:rgba(0,0,0,0);border-width:0;pointer-evebts:none;width:60px;height:50px;margin-left:20px">
                <p class="myel-icon-kcguanbi" style="margin:0;margin-left:20px"></p>
                </el-button>
                <stockdata v-bind:name="name"></stockdata>
            </el-main>
        </el-container>
    </el-container >
</el-container>
</template>
<script>
import sidePart from '../components/sidePart.vue'
import top1 from '../components/top1.vue'
import stockdata from '../components/stockdata.vue'
export default {
    data(){
        return{
            pickerOptions0: {
                disabledDate(time) {
                return time.getTime() < Date.parse('2010/1/1')||time.getTime()>Date.parse('2015/12/31');
                } 
            },
            onload:false,
            showdate:false,
            seen:false,
            first:'first',
            main_width:'100%',
            table_width:'100%',
            but:[],
            butmsg:{},
            stock:[],
            stocknum:0,
            stocknum_true:0,
            oldcol:'',
            index:'',
            options: [{
            value: '1',
            label: '1'
            }, {
            value: '2',
            label: '2'
            }, {
            value: '3',
            label: '3'
            }, {
            value: '4',
            label: '4'
            }, {
            value: '5',
            label: '5'
            }],
            value1:'',
            value2:'',
            value3:'',
            choose:[false,false,false],
            datevalue1:'',
            datevalue2:'',
            name:[],
            stockcode:'',
        }
    },
    
    computed: {
        // 控制显示的内容
        combfh() {
            return function(value) {
            return (value=='')?'':'%'
            }
        }
    },
    mounted(){//来一个butmsg 对象列表就行，上面还得改一下
        this.but=['红三兵']
        this.butmsg={'name':'红三兵',
        'tz':'（1）出现在上涨行情初期\
                （2）由3根连续创新高的小阳线组成',
        'js':'见底信号，后市看涨',
        'bz':'当3根小阳线收于最高或接近最高点时，称为3个白色武士，3个白色武士拉升股价的作用要强于普通的红三兵，投资者应引起足够重视'}
        
        
    },
    methods:{
        hid(){
            this.seen=false;
            this.main_width="100%"
            this.$forceUpdate();
        },
        ceshi()
        {   this.onload=true;
            this.stock=[];
            this.$forceUpdate();
            var zq_kind,zq_long;
            if(this.choose[0]==false)
            {
                zq_kind='1'
                zq_long=this.value1;
            }
            else if(this.choose[1]==false)
            {
                zq_kind='7'
                zq_long=this.value2
            }
            else if(this.choose[3]==false)
            {
                zq_kind='30'
                zq_long=this.value3
            }
            var date1=this.format(this.datevalue1.toLocaleDateString(),'yyyy-MM-dd');
            var date2=this.format(this.datevalue2.toLocaleDateString(),'yyyy-MM-dd');
            if(this.stockcode==''){
            this.showdate=false;
            this.$http.get('http://127.0.0.1:8000/api/js_hsb?zq_kind='+zq_kind+'&zq_long='+zq_long+
            "&start="+date1+"&fin="+date2)
            .then((response) => {
            var res = JSON.parse(response.bodyText);
            //this.stock=res;
            for (let i=0;i<res.length;i++)
            {
                this.$set(this.stock,i,res[i])
            }
            this.onload=false;
            })
            }
            else{
                this.showdate=true
                this.$http.get('http://127.0.0.1:8000/api/js_hsb_code?zq_kind='+zq_kind+'&zq_long='+zq_long+
            "&start="+date1+"&fin="+date2+"&stock="+this.stockcode)
            .then((response) => {
            var res = JSON.parse(response.bodyText);
            //this.stock=res;
            for (let i=0;i<res.length;i++)
            {
                this.$set(this.stock,i,res[i])
            }
            this.onload=false;
            })
            }
            this.stocknum_true=this.stock.length;
            if(this.stock.length>50)
            this.stocknum=this.stock.length;
            else
            {
                for (let i=0;i<(50-this.stock.length);i++)
                {
                    this.stock.push(['','','','','','','','','','','','',''])
                }
                this.stocknum=this.stock.length;
            }
            this.$forceUpdate();
        },
        format(time, format) {
            var t = new Date(time);
            var tf = function (i) {
            return (i < 10 ? '0' : '') + i
            };
            return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
            switch (a) {
                case 'yyyy':
                return tf(t.getFullYear());
                break;
                case 'MM':
                return tf(t.getMonth() + 1);
                break;
                case 'mm':
                return tf(t.getMinutes());
                break;
                case 'dd':
                return tf(t.getDate());
                break;
                case 'HH':
                return tf(t.getHours());
                break;
                case 'ss':
                return tf(t.getSeconds());
                break;
            }
            })
            },
        choosestock(mytr){
            let code;
            if(this.stockcode=='')
            code=mytr.srcElement.innerHTML
            else
            code="day"+this.stockcode
            console.log(code)
            this.name=[code,this.format(this.datevalue1.toLocaleDateString(),'yyyy-MM-dd'),this.format(this.datevalue2.toLocaleDateString(),'yyyy-MM-dd')];
            this.seen=true
            this.main_width='70%'
            if(this.index=='')
            { 
                }//弹出被点单元格里的内容 
                else{
                    this.index.style.background=this.oldColor;
                }
                this.index=mytr.currentTarget;
                this.oldColor =mytr.currentTarget.style.backgroundColor;
                mytr.currentTarget.style.background = "lightblue";
                this.$forceUpdate();
                 //将被点击的单元格设置为蓝色 
                    },
        change1(x)
        {
            this.choose[1]=true;
            this.choose[2]=true;
        },
        change2(x)
        {
            this.choose[0]=true;
            this.choose[2]=true;
        },
        change3(x)
        {
            this.choose[1]=true;
            this.choose[0]=true;
        },
        myclear()
        {console.log("clear")
            this.choose[1]=false;
            this.choose[2]=false;
            this.choose[0]=false;
        }
    },
   components:{sidePart,top1,stockdata}, 
}
</script>
<style scoped>
td{border:solid#95B7EC 1px;}
</style>>
