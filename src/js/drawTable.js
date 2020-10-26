function drawTableL(res)
{
   let data=res;
    var td = document.getElementsByTagName('tbody');
    let lingzhang=data;
        let i1=0;
        let line=3;
        for(let i2=0;i2<2;i2++)
        {
            var tr1=document.createElement('tr');
            for(let i3=0;i3<3;i3++)
            {
                let td1=document.createElement('td');
                var tb1=document.createElement('table');
                td1.setAttribute('style','border-style:solid;border-width:1px;border-color:#95B7EC;height:90px');
                tb1.setAttribute('style','width:100%;height:100%;padding:5px');
                for(let i4=0;i4<line;i4++)
                {
                    if(i4==0)
                    {
                        var tr2=document.createElement('tr');
                        let td3=document.createElement('td');
                        let td4=document.createElement('td');
                        td3.innerText=lingzhang[i1][1][0];
                        td4.innerText=lingzhang[i1][1][1];
                        td3.setAttribute('style','height:10px;width:50%;font-size:20px;text-align:left;');
                        td4.setAttribute('style','height:10px;width:50%;font-size:20px;color:red;text-align:right;');
                        tr2.appendChild(td3);
                        tr2.appendChild(td4);
                        tb1.appendChild(tr2);
                    }
                    else if(i4==1)
                    {
                        var tr2=document.createElement('tr');
                        let td3=document.createElement('td');
                        // let td4=document.createElement('td');
                        // let td5=document.createElement('td');
                        let a=lingzhang[i1][0][0]*1;
                        let b=lingzhang[i1][0][1]*1;
                        let c=lingzhang[i1][0][2]*1;
                        let sum=a+b+c;
                        let width1=a/sum*170;
                        let width2=b/sum*170;
                        let width3=c/sum*170;
                        //td3.innerText=lingzhang[i1][0][0];
                        // td4.innerText=lingzhang[i1][0][1];
                        // td5.innerText=lingzhang[i1][0][2];
                        td3.setAttribute('style','height:10px;font-size:13px;text-align:center;width:100%;');
                        td3.setAttribute('colspan','2');
                        let p1=document.createElement('p');
                        let p2=document.createElement('p');
                        let p3=document.createElement('p');
                        p1.setAttribute("style","margin:0;background-color:red;display:inline-block;magin-left:5px;margin-right:5px;color:white");
                        p2.setAttribute("style","margin:0;background-color:gray;display:inline-block;magin-left:5px;margin-right:5px;color:white");
                        p3.setAttribute("style","margin:0;background-color:green;display:inline-block;magin-left:5px;margin-right:5px;color:white");
                        p1.style.width=width1+"px";
                        p2.style.width=width2+"px";
                        p3.style.width=width3+"px";
                        p1.innerText=lingzhang[i1][0][0];
                        p2.innerText=lingzhang[i1][0][1];
                        p3.innerText=lingzhang[i1][0][2];
                        if(width1!=0)
                        td3.appendChild(p1)
                        if(width2!=0)
                        td3.appendChild(p2)
                        if(width3!=0)
                        td3.appendChild(p3)
                        tr2.appendChild(td3);
                        tb1.appendChild(tr2);
                    }
                    else
                    {
                        var tr2=document.createElement('tr');
                        let td3=document.createElement('td');
                        let td4=document.createElement('td');
                        td3.innerText=lingzhang[i1][i4][0];
                        td4.innerText=lingzhang[i1][i4][1];
                        td3.setAttribute('style','height:9px;width:80px;font-size:14px;text-align:left;');
                        td4.setAttribute('style','height:9px;width:80px;font-size:14px;color:red;text-align:right;');
                        tr2.appendChild(td3);
                        tr2.appendChild(td4);
                        tb1.appendChild(tr2);
                    }
                    
                }i1++;
                td1.appendChild(tb1);
                tr1.appendChild(td1);
            }
            td[0].appendChild(tr1);
        }
}
function drawR(res)
{
    var td = document.getElementsByTagName('tbody');
    let data=res;
    for(let i=0;i<6;i++)
        data.push(['601628','中国人寿','27.57','4.00%','1','2','3'])
    console.log(data)
    let data2=[
        "今日涨幅排名",
        "今日跌幅排名",
        "今日振幅排名",
        "今日成交额排名",
        "今日量比排名",
        "今日委比排名"
    ]
    let data3=[
        '代码',
        '名称',
        '最新价',
        '涨跌幅',
        '涨跌幅',
        '振幅',
        '成交额',
        '量比',
        '委比'
    ]
    let i4=0;
    for(let i1=0;i1<3;i1++)
    {
        var tr1=document.createElement('tr');
        
        for(let i2=0;i2<2;i2++)
        {
            let td1=document.createElement('td');
            var tb1=document.createElement('table');
            td1.setAttribute('style','border-style:solid;border-width:1px;border-color:#95B7EC;');
            tb1.setAttribute('style','width:100%;height:100%;padding:5px;border-collapse:collapse;');
            tb1.setAttribute('border-collapse','collapse;');
            for(let i3=0;i3<5;i3++)
            {
                let tr2=document.createElement('tr');
                for(let i5=0;i5<4;i5++)
                {
                    if(i3==0)
                    {
                        let td2=document.createElement('td');
                        td2.setAttribute('style','height:9px;width:80px;font-size:12px;text-align:left;');
                        td2.setAttribute('colspan','4');
                        td2.innerText=data2[i2+i1*2];
                        tr2.appendChild(td2);
                        break;
                    }
                    else if(i3==1)
                    {
                        let td2=document.createElement('td');
                        let td3=document.createElement('td');
                        let td4=document.createElement('td');
                        let td5=document.createElement('td');
                        td2.setAttribute('style','height:9px;width:80px;font-size:12px;text-align:left;\
                        border-style:solid;border-width:1px;border-color:#95B7EC;border-left:0px;');
                        td3.setAttribute('style','height:9px;width:80px;font-size:12px;text-align:left;\
                        border-style:solid;border-width:1px;border-color:#95B7EC;');
                        td4.setAttribute('style','height:9px;width:80px;font-size:12px;text-align:right;\
                        border-style:solid;border-width:1px;border-color:#95B7EC;');
                        td5.setAttribute('style','height:9px;width:80px;font-size:12px;text-align:right;\
                        border-style:solid;border-width:1px;border-color:#95B7EC;border-right:0px;');
                        td2.innerText=data3[0];
                        td3.innerText=data3[1];
                        td4.innerText=data3[2];
                        td5.innerText=data3[3+i2+i1*2];
                        tr2.appendChild(td2);
                        tr2.appendChild(td3);
                        tr2.appendChild(td4);
                        tr2.appendChild(td5);
                        break;
                    }
                    else
                    {
                        let td2=document.createElement('td');
                        td2.setAttribute('style','height:9px;width:80px;font-size:9px;text-align:left;');
                        if(i5>=2)
                        {
                            td2.setAttribute('style','height:12.9px;width:80px;font-size:9px;text-align:right');
                        }
                        if(data[i4][4]==1&&(i5==2||i5==3))
                        td2.style.color='red'
                        else if(data[i4][4]==0&&(i5==2||i5==3))
                        td2.style.color='green'
                        td2.innerText=data[i4][i5];
                        tr2.appendChild(td2);
                    }
                }
                tb1.appendChild(tr2);
                if(i3>=2)
                    i4++;
            }
            td1.appendChild(tb1);
            tr1.appendChild(td1);
        }
        td[1].appendChild(tr1);
    }
}
function drawBig(place,mydata,test)
{
    var td = document.getElementsByTagName('tbody');
    td[place].innerText='';
    let data=[];
    
    for(let i1=0;i1<mydata.length;i1++)
    {let t=[];
        t[0]=i1+1;
        t[1]=mydata[i1].day_Code;
        t[2]=mydata[i1].day_Code;
        t[3]=mydata[i1].day_avg_vol;
        t[4]=mydata[i1].day_avg_amo;
        data[i1]=t;
    }
    
    let data2=[
        '序号',
        '代码',
        '名称',
        'VOL',
        'AMO',
    ]
    let a=24;
    if (data.length>24)
    {
        a=data.length
    }
    for(let i1=0;i1<a;i1++)
    {
        let tr1=document.createElement('tr');
        for(let i2=0;i2<5;i2++)
        {
            let td1=document.createElement('td');
            td1.setAttribute('style','border-style:solid;border-width:1px;border-color:#95B7EC;height:21.4px');
            td1.setAttribute('empty-cells','show')
            if(i1==0)
            {
                td1.innerText=data2[i2]
            }
            else if(i1-1<data.length)
            {
                td1.innerText=data[i1-1][i2]
                tr1.onclick= function(){getColumnDetail(this,data[i1-1][2],test)};
            }
            else
            {
                
            }
            tr1.appendChild(td1);
        }
        td[place].appendChild(tr1);
    }
}
function drawTShow(place,mydata)
{
    var td = document.getElementsByTagName('tbody');
    td[place].innerText='';
    let data=[];
    
    for(let i1=0;i1<mydata.length;i1++)
    {let t=[];
        t[0]=i1+1;
        t[1]=mydata[i1].Code_ID;
        t[2]=mydata[i1].Code_ID;
        t[3]=mydata[i1].open_start;
        t[4]=mydata[i1].pre_value;
        t[5]=mydata[i1].Difference;
        t[6]=mydata[i1].mse;
        data[i1]=t;
    }
    let data2=[
        '序号',
        '代码',
        '名称',
        '初值',
        '预测值',
        '差值',
        'MSE'
    ];
    let a=14;
    if (data.length>a)
    {
        a=data.length+1
    }
    for(let i1=0;i1<a;i1++)
    {
        let tr1=document.createElement('tr');
        for(let i2=0;i2<data2.length;i2++)
        {
            let td1=document.createElement('td');
            td1.setAttribute('style','border-style:solid;border-width:1px;border-color:#95B7EC;height:21.99px');
            td1.setAttribute('empty-cells','show')
            if(i1==0)
            {
                td1.innerText=data2[i2]
            }
            else if(i1-1<data.length)
            {
                td1.innerText=data[i1-1][i2]
            }
            else
            {
                
            }
            tr1.appendChild(td1);
        }
        td[place].appendChild(tr1);
    }
}

var index;
var oldColor;
function getColumnDetail(column,name,test){ 
    if(index==null)
   { 
    }//弹出被点单元格里的内容 
    else{
        index.style.background=oldColor;
    }
    index=column;
    test.splice(0,1,name);
    oldColor = column.style.backgroundColor;
    column.style.background = "lightblue"; //将被点击的单元格设置为蓝色 
    } 
export{
    drawTableL,
    drawR,
    drawBig,
    drawTShow
}