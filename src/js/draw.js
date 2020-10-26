function drawChart(judge,res)
{
    let data=[];
    
    for (let i=0;i<res.data1.length;i++)
    {   let t={}
        t['x']=res.data1[i][0]
        t['y']=res.data1[i][1]
        data.push(t)
    }
    let data2=[];
    for (let i=0;i<res.data3.length;i++)
    {   let t={}
        t['x']=res.data3[i][0]
        t['y']=res.data3[i][1]
        data2.push(t)
    }
    let data3=[];
    for (let i=0;i<res.data2.length;i++)
    {   let t={}
        t['x']=res.data2[i][0]
        t['y']=res.data2[i][1]
        data3.push(t)
    }
    console.log(data3)
    let min,max;
    if (res.data4[0]*1<res.data4[2]*1)
        min=res.data4[0].toFixed(1)*1;
    else
        min=res.data4[2].toFixed(1)*1;
    if (res.data4[3]*1>res.data4[5]*1)
        max=res.data4[3].toFixed(1)*1;
    else
        max=res.data4[5].toFixed(1)*1;
    console.log(min);
    console.log(max+'max')
    let max2=res.data4[4].toFixed(1)*1;
    let day="04/17";
    // for (let item of rawData) {
    //     data.push({ x:item.x, y:item.y, value:item.value })
    // }
    let canvas = document.getElementById('myCanvas'+String(judge));
    var zuobiao = document.getElementById('zuobiao'+String(judge));
    // 1. 创建画布对象
    let context = canvas.getContext("2d");
    // 2. 获取画布的宽度和高度
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    canvas.style.width=WIDTH;
    canvas.style.height=HEIGHT;
    canvas.height=HEIGHT*4;
    canvas.width=WIDTH*4;
    context.scale(4,4);
    // 3. 定义坐标轴相对画布的内边距
    var padding = 5;//初始化内边距
    var paddingLeft = 45;//至少大于绘制文字的宽度
    var paddingBottom = 15;//至少大于绘制文字的高度
    // 4. 定义绘制坐标轴的关键点的坐标值
    var axisYStart = {// y轴的终点坐标值
        x: paddingLeft,
        y: padding
    };
    var origin = {// 原点坐标值(x轴与y轴相交点)
        x: paddingLeft,
        y: HEIGHT - paddingBottom
    };
    var axisXStart = {// x轴的终点坐标值
        x: WIDTH,
        y: HEIGHT - paddingBottom
    };
    // 5. 绘制坐标轴
    context.beginPath();
    context.beginPath();
    context.moveTo(axisYStart.x, axisYStart.y);
    context.lineTo(origin.x, origin.y);
    context.lineTo(axisXStart.x, axisXStart.y);
    context.lineWidth = 1;
    context.strokeStyle = '#95B7EC';
    context.stroke();
    // 定义折点的x轴值
    var pointsX = [];

    // 7. 绘制坐标轴的刻度(x轴的月份和y轴的金额)
    // x轴刻度
    var month = {
        x: paddingLeft,
        y: HEIGHT - paddingBottom
    }
    //计算x轴刻度
    data.sort(function (a, b) { return a.x - b.x });
    // 设置字体
    context.font = "10px";
    // 设置垂直对齐
    context.textBaseline = "top";
    //标注x坐标刻度
    context.beginPath();
    let xStart = origin.x + 60;
    let interval = "10:30";
    context.fillText(interval, xStart, origin.y);
    context.lineWidth = 0.2;
    context.strokeStyle = '#95B7EC';
    context.moveTo(xStart,origin.y);
    context.lineTo(xStart,axisYStart.y);
    xStart += 60;
    interval="11:30";
    context.fillText(interval, xStart, origin.y);
    context.moveTo(xStart,origin.y);
    context.lineTo(xStart,axisYStart.y);
    xStart += 60;
    interval="14:00"
    context.fillText(interval, xStart, origin.y);
    context.moveTo(xStart,origin.y);
    context.lineTo(xStart,axisYStart.y);
    context.fillText(day, origin.x, origin.y);
    context.fillText("分时", origin.x-35, origin.y-1);
    context.stroke();
    //计算y轴刻度
    data.sort(function (a, b) { return a.y - b.y });
    // 设置垂直对齐
    context.textAlign = "right";
    //标注y坐标刻度
    let yStart = origin.y-50;
    let num=(max-min)/9;
    num=num.toFixed(1)*1;
    context.moveTo(origin.x, yStart+10);//第一条
    context.lineTo(axisXStart.x, yStart+10);
    context.moveTo(origin.x, padding);//最后一条
    context.lineTo(axisXStart.x, padding);
    context.moveTo(origin.x,origin.y-16);//下面两条
    context.lineTo(axisXStart.x,origin.y-16);
    context.moveTo(origin.x,origin.y-32);
    context.lineTo(axisXStart.x,origin.y-32);
    interval =(min+num)*1;
    for (let i = 1; i <=8; i++) {
        interval=interval.toFixed(1)*1;
        context.fillStyle="red";
        context.fillText(interval+"", origin.x-3, yStart-6);
        context.moveTo(origin.x, yStart);
        context.lineTo(axisXStart.x, yStart);
        yStart -= 10;
        interval +=num;
    }
    context.stroke();
    //8.绘制折线红
    context.beginPath();
    data.sort(function (a, b) { return a.x - b.x });
    context.textAlign ="left";
    context.textBaseline = "bottom";
    //context.translate(0.5,0.5);
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    let cirX;
    let cirY;
    for(let i=0;i<data.length;i++){
        
        let pointX=origin.x*1+data[i].x*1;
        let pointY=origin.y*1-(data[i].y*1-min*1)*(10/num)-40;
        if(i==0)
        {
            context.moveTo(pointX,pointY);
        }
        else{
            context.lineTo(pointX,pointY);
        }
        if(i==data.length-1)
        {
            cirX=pointX;
            cirY=pointY;
        }
    } 
    context.stroke();
    context.closePath();
    context.beginPath();//画圆
    if(judge*1==1)
        {context.fillStyle="red";}
    else
    {
        context.fillStyle="green";
        context.strokeStyle = 'green';
    }
    context.arc(cirX,cirY,2,Math.PI*2,0,true);
    context.fill();
    context.stroke();
    //蓝
    context.beginPath();
    data2.sort(function (a, b) { return a.x - b.x });
    context.textAlign ="left";
    context.textBaseline = "bottom";
    context.lineWidth = 1;
    context.strokeStyle = 'blue';
    for(let i=0;i<data2.length;i++){
        
        let pointX=origin.x*1+data2[i].x*1;
        let pointY=origin.y*1-(data2[i].y*1-min*1)*(10/num)-40;
        
        if(i==0)
        {
            context.moveTo(pointX,pointY);
        }
        else{
            context.lineTo(pointX,pointY);
        }
    }
    context.stroke();
    //柱状图
    context.beginPath();
    context.textAlign = "right";//刻度在左
    // context.lineWidth = 1;
    // context.strokeStyle = 'black';
    context.fillStyle="black";
    let zWidth=1;
    let half=max2/2;
    context.fillText(half.toFixed(1),origin.x-3,origin.y-12);
    context.fillText(max2,origin.x-3,origin.y-28);
    let zHeight=32/max2;
    for(let i=0;i<data3.length;i++)
    {
        if(i%3==0)
        {
            context.fillStyle="blue";
        }
        else
        {
            context.fillStyle="red";
        }
        context.fillRect(origin.x*1+i,origin.y*1-data3[i].y*1*zHeight,zWidth*1,data3[i].y*zHeight*1);//,data3[i]*1*zHeight/100+origin.y*1,zWidth*1,data3[i]*zHeight*1


    }
    context.stroke();
    if(judge*1<3)
    canvas.addEventListener('click', function(e)
    {
        zuobiao.innerText=e.offsetX-origin.x;
    })
}

function drawChart2(mydata)
{
    let canvas = document.getElementById('myCanvas3');
    let data =[];
    let max=0;
    for(let i=4;i<15;i++)
    {
        data[i-4]=mydata[i]
    }
    max=mydata[0];
    let up=mydata[1];
    let down=mydata[2];
    let context = canvas.getContext("2d");
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    canvas.style.width=WIDTH;
    canvas.style.height=HEIGHT;
    canvas.height=HEIGHT*4;
    canvas.width=WIDTH*4;
    context.scale(4,4);
    var axisYStart = {// y轴的终点坐标值
        x: 10,
        y: 30
    };
    var origin = {// 原点坐标值(x轴与y轴相交点)
        x: 10,
        y: HEIGHT - 50
    };
    var axisXStart = {// x轴的终点坐标值
        x: WIDTH - 10,
        y: HEIGHT - 50
    };
    let zHeight=(HEIGHT-80)/max;
    let zWidth=10;
    for(let i=0;i<data.length;i++)
    {
        if(i==0)
        {
            context.fillStyle="green";
        }
        else if(i==5)
        {
            context.fillStyle="gray";
        }
        else if(i==6)
        {
            context.fillStyle="red";
        }
        context.fillRect(origin.x*1+i*27,origin.y*1-data[i]*1*zHeight,zWidth*1,data[i]*zHeight*1);
        context.fillText(data[i],origin.x*1+i*27,origin.y*1-data[i]*1*zHeight-5,10);
    }
    let name=["跌停","≤-7","-7~-5","-5~-3","-3~0","0","0~3","3~5","5~7","≥7","涨停"];
    for(let i=0;i<name.length;i++)
    {
        context.fillStyle="black";
        context.fillText(name[i],origin.x*1+i*27,origin.y*1+12,10);
    }
    context.fillStyle="green"
    context.fillRect(5,origin.y*1+20,130,5);
    context.fillText("下跌"+String(down),5,origin.y*1+45,40);
    context.fillStyle="gray";
    context.fillRect(140,origin.y*1+20,20,5);
    context.fillStyle="red";
    context.fillRect(165,origin.y*1+20,130,5);
    context.fillText("上涨"+String(up),250,origin.y*1+45,40);
    context.stroke();
}
function drawChart3(){
    var echarts = require('echarts');
    var myChart = echarts.init(document.getElementById('yibiao'));
    var dataArr = [{
        value: 100,
        name: '股票仪表盘'
    }];
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#5CF9FE' // 0% 处的颜色
        },
        {
            offset: 0.17,
            color: '#468EFD' // 100% 处的颜色
        },
        {
            offset: 0.9,
            color: '#468EFD' // 100% 处的颜色
        },
        {
            offset: 1,
            color: '#5CF9FE' // 100% 处的颜色
        }
    ]);
    var colorSet = [
        [1, color],
        // [0.91, color],
        // [1, '#FFF']
    ];
    var rich = {
        white: {
            fontSize: 15,
            color: '#fff',
            fontWeight: '500',
            padding: [-150, 0, 0, 0]
        },
        bule: {
            fontSize: 15,
            fontFamily: 'DINBold',
            color: 'black',
            fontWeight: '700',
            padding: [50, 0, 0, 0],
        },
        radius: {
            width: 350,
            height: 200,
            // lineHeight:80,
            borderWidth: 1,
            borderColor: '#0092F2',
            fontSize: 50,
            color: '#fff',
            backgroundColor: '#1B215B',
            borderRadius: 20,
            textAlign: 'center',
        },
        size: {
            height: 300,
            padding: [0, 0, 0, 0]
        }
    }
    var option = {
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
            show:false,
            formatter: "{a} <br/>{b} : {c}%"
        },
    
        series: [
            {
                type: 'gauge',
                name: '外层辅助',
                radius: '100%',//74
                startAngle: '180',
                endAngle: '0',
                splitNumber: '120',
                pointer: {
                    show: false
                },
                detail: {
                    show: false,
                },
                data: [{
                    value: 1
                }],
                // data: [{value: 1, name: 90}],
                title: {
                    show: true,
                    offsetCenter: [0, 30],
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 20,
                    }
                },
                grid:{
                    x:15,
                    y:45,
                    x2:5,
                    y2:20,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [1, '#00FFFF']
                        ],
                        width: 2,
                        opacity: 1
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        color: '#051932',
                        width: 0,
                        type: 'solid',
                    },
                },
                axisLabel: {
                    show: false
                }
            },
            {
                type: 'gauge',
                radius:'100%', //'70%',
                startAngle: '180',
                endAngle: '0',
                pointer: {
                    show: true
                },
                detail: {
                    formatter: function(value) {
                        var num = Math.round(value);
                        return '{bule|无明显信号}{white|}' + '{size|' + '}';////////////
                    },
                    rich: rich,
                    "offsetCenter": ['0%', "55%"],
                },
                data: dataArr,
                title: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colorSet,
                        width: 25,
                        // shadowBlur: 15,
                        // shadowColor: '#B0C4DE',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: 1
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false,
                    length: 25,
                    lineStyle: {
                        color: '#00377a',
                        width: 2,
                        type: 'solid',
                    },
                },
                axisLabel: {
                    show: false
                },
                animationDuration: 4000,
            },
            {
                name: '灰色内圈', //刻度背景
                type: 'gauge',
                z: 2,
                radius:'100%',// '60%',
                startAngle: '180',
                endAngle: '0',
                //center: ["50%", "75%"], //整体的位置设置
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [1, '#018DFF']
                        ],
                        fontSize: 20,
                        width: 2,
                        opacity: 1, //刻度背景宽度
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                detail: {
                    show: 0
                }
            },
            {
                name: "白色圈刻度",
                type: "gauge",
                radius: '100%',//"60%",
                startAngle: 180, //刻度起始
                endAngle: 0, //刻度结束
                min: 0,
                max: 100,
                splitNumber: 4,
                z: 4,
                axisTick: {
                    show: false
                },
                splitLine: {
                    length: 16, //刻度节点线长度
                    lineStyle: {
                        width: 2,
                        color: '#018DFF'
                    } //刻度节点线
                },
                axisLabel: {
                    formatter: function(e) {
                    switch (e + "") {
                    case "0":
                    return "严重超买";
                    case "25":
                    return "超买";
                    case "50":
                    return "中性";
                    case "75":
                    return "超卖";
                    case "100":
                    return "严重超卖";
                    default:
                    return "";
                    }
                    },textStyle: {fontSize: 10,color: "black",}}, //刻度节点文字颜色
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        opacity: 0
                    }
                },
                detail: {
                    show: false
                },
                data: [{
                    value: 0,
                    name: ""
                }]
            },
            { //内圆
                type: 'pie',
                radius:'100%',// '40%',
                center: ['50%', '50%'],
                z: 1,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
                                offset: 0,
                                color: 'rgba(0,0,0,0)'
                            },
                            {
                                offset: .5,
                                color: 'rgba(0,0,0,0)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,0,0,0)'
                            }
                        ], false),
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                },
                hoverAnimation: false,
                label: {
                    show: false,
                },
                tooltip: {
                    show: false
                },
                data: [100],
                animationType: "scale"
            },
            { //外圆
                type: 'pie',
                radius: '100%',//'85%',
                center: ['50%', '50%'],
                z: 0,
                itemStyle: {
                    color: 'rgba(0,0,0,0)',
                },
                hoverAnimation: false,
                label: {
                    show: false,
                },
                tooltip: {
                    show: false
                },
                data: [120],
                animationType: "scale"
            }
        ]
    };
    myChart.setOption(option);
}
function drawChart4()
{
    var echarts = require('echarts');
    var myChart = echarts.init(document.getElementById('mycharatzx'));
    var option={
        //标题
        title:{
          text:' '
        },
        grid:{

            left:40,// 调整这个属性

        },
        //工具箱
        //保存图片
        //图例-每一条数据的名字叫销量
        legend:{
            name:['收盘价','比例']
        },
        //x轴
        xAxis:{
            data:["","","","",""]
        },
        //y轴没有显式设置，根据值自动生成y轴
        yAxis: [
                    {
                        type: 'value',
                        name: '',
                        min: 0,
                        max: 100,
                        show:true,
                       interval: 10,
                        axisLabel: {
                            formatter: '{value}%'
                        }
                    },
                    {
                        type: 'value',
                        name: '',
                        min: 0,
                        max: 100,
                        interval: 10,
                    }
                ],
        //数据-data是最终要显示的数据
        series:[{
            name:'收盘价',
            type:'line',
            data:[40,20,35,60,55,10]
        },{
            name:'收比例',
            type:'line',
            data:[10,0,15,30,25,10]
        }]
    };
    //使用刚刚指定的配置项和数据项显示图表
    myChart.setOption(option);
}
function drawChart5()
{
    var echarts = require('echarts');
    var myChart = echarts.init(document.getElementById('mycharatzz'));
    var option = {
        title:{
            text:'净买卖股数'
          },
        backgroundColor: 'rgba(0,0,0,0)',
        grid: {
            left: '2.5%',
            top: '19.5%',
            right: '2.8%',
            bottom: '22%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            borderColor: '#43845D',
            borderWidth: 1,
            backgroundColor: 'rgba(11,42,89,0.3)',
            borderRadius: 20,
            padding: 0,
            textStyle: {
                color: '#fff',
                fontSize: 10
            },
            axisPointer: {
                lineStyle: {
                    color: '#fef018',
                    width: '3'
                }
            }
        },
        xAxis: [{
            type: 'category',
            //name: '个数',
            nameLocation: 'center',
            nameGap: 35,
            nameTextStyle: {
                color: '#8796AD',
                fontSize: '16',
            },
            axisLabel: {
                interval: 10,
                textStyle: {
                    color: '#8796AD',
                    fontSize: '14',
                }
            },
            data: [1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                46,
                47,
                48,
                49,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                59,
                60,
                61,
                62,
                63,
                64,
                65,
                66,
                67,
                68,
                69,
                70,
                71,
                72,
                73,
                74,
                75,
                76,
                77,
                78,
                79,
                80,
                81,
                82,
                83,
                84,
                85,
            ],
            axisLine: {
                lineStyle: {
                    width: 2,
                    color: 'rgba(63,92,122,1)'
                }
            },
            axisTick: {
                show: false
            },
        }],
        dataZoom: [{
            start: 80,
            type: "inside",
            disabled: false
          }, {
            start: 80
          }],
        yAxis: [{
            type: 'value',
            name: '',
            nameLocation: 'middle',
            nameGap: 45,
            nameTextStyle: {
                color: '#8796AD',
                fontSize: '16',
            },
            axisLabel: {
                textStyle: {
                    color: '#8796AD',
                    fontSize: '14',
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    width: 2,
                    color: 'rgba(160,160,160,0.3)',
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(160,160,160,0.3)',
                }
            },
        }, ],
        series: [{
            type: 'bar',
            name: '净买卖股数',
            barWidth: '40%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#de682e'
                    }, {
                        offset: 1,
                        color: '#ecc232'
                    }]),
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            data: [-0.0216435185185184,
                0.00145061728395052, -0.0225771604938273, -0.0280246913580248, -0.020162037037037, -0.0144135802469136, -0.0186111111111112, -0.0316203703703708, -0.00981481481481491, -0.00981481481481491, -0.0132330246913581, -0.0144984567901235, -0.0186111111111112,
                0.0130478395061728, -0.0206327160493828, -0.0264043209876546,
                0.00143518518518534,
                0.00597222222222239, -0.00436728395061755,
                0.00629629629629665,
                0.00955246913580267, -0.0264043209876546,
                0.000169753086419706, -0.00760802469135807,
                0.0011342592592592, -0.00516975308641988,
                0.00246141975308636,
                0.0011342592592592, -0.0208101851851853,
                0.00312499999999998, -0.0130324074074076, -0.00436728395061755, -0.00911265432098761, -0.00479938271604931,
                0.00726851851851871, -0.0098842592592593,
                0.00743827160493822, -0.00734567901234559, -0.0205709876543212,
                0.00211419753086415, -0.00501543209876529, -0.0229706790123456, -0.0260802469135803, -0.00147376543209876,
                0.00564043209876543, -0.00929783950617285, -0.0117052469135804, -0.00307098765432125, -0.00981481481481491, -0.00958333333333351, -0.0105864197530865, -0.00583333333333344, -0.0157484567901235, -0.0189506172839508, -0.0152160493827162, -0.0149614197530864, -0.0132330246913581, -0.0238117283950618, -0.020162037037037, -0.00371913580246903, -0.021219135802469, -0.028348765432099, -0.0146913580246914, -0.0238117283950618, -0.00209876543209882,
                0.00308641975308658, -0.0086342592592593, -0.00736882716049386, -0.0205709876543212, -0.00697530864197535,
                0.0011342592592592, -0.0104783950617285, -0.00981481481481491, -0.0182793209876544, -0.0149614197530864, -0.0140895061728395, -0.0168595679012346, -0.0063117283950618, -0.00371913580246919, -0.00436728395061735,
                0.00341049382716047, -0.0100308641975306,
                0.000169753086419706, -0.0146064814814816,
                0.000169753086419706,
            ],
            itemStyle: {
                normal: {
                    color: function (params) {
                        var index_color = params.value;
                        if (index_color >0) {
                            return 'red';
                        } else if(index_color<0) {
                            return 'green';
                        }
                    }
                }
            }
   
        }]
    };

var emphasisStyle = {
    itemStyle: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};



//myChart.on('brushSelected', renderBrushed);
myChart.setOption(option)


}
function drawChart6(data,name)
{
    var myname;
    if(name=='dayK')
    myname='日K'
    else if(name=='weekK')
    myname='周K'
    else if(name=='monK')
    myname='月K'
    else if(name=='jiK')
    myname='季K'
    else if(name=='yearK')
    myname='年K'
    var echarts = require('echarts');
    var myChart = echarts.init(document.getElementById(name));
    var rawData = data;
   
   
    var dates = rawData.map(function(item) {
        return item[0];
    });
   
    var data = rawData.map(function(item) {
        return [+item[1], +item[2], +item[3], +item[4]];
    });
    var option = {
        legend: {
            data: [myname],
            inactiveColor: 'black',
            textStyle: {
                color: 'black'
            }
        },
        tooltip: {
            position: [20, 20],
            trigger: 'axis',
            axisPointer: {
                animation: false,
                type: 'cross',
                lineStyle: {
                    color: '#376df4',
                    width: 2,
                    opacity: 1
                }
            }
        },
        xAxis: {
            type: 'category',
            data: dates,
            axisLine: {
                lineStyle: {
                    color: '#8392A5'
                }
            }
        },
        yAxis: {
            scale: true,
            axisLine: {
                lineStyle: {
                    color: '#8392A5'
                }
            },
            splitLine: {
                show: false
            }
        },
        grid: {
            bottom: 80,
            right: 30
        },
        dataZoom: [{
            textStyle: {
                color: '#8392A5'
            },
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            dataBackground: {
                areaStyle: {
                    color: '#8392A5'
                },
                lineStyle: {
                    opacity: 0.8,
                    color: '#8392A5'
                }
            },
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }, {
            type: 'inside'
        }],
        animation: false,
        series: [{
                type: 'candlestick',
                name: myname,
                data: data,
                itemStyle: {
                    normal: {
                        color: '#FD1050',
                        color0: '#0CF49B',
                        borderColor: '#FD1050',
                        borderColor0: '#0CF49B'
                    }
                }
            },
            
        ]
    };
    myChart.setOption(option)
}
export{
    drawChart,
    drawChart2,
    drawChart3,
    drawChart4,
    drawChart5,
    drawChart6,

}
