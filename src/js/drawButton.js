
function drawBut(sign)
{ 
    let data=[
        '按钮一',
        '按钮一',
        '按钮一',
        '按钮一',
        '按钮一',
        '按钮一',
        '按钮一',
        '按钮一',
        '按钮一',
        '按钮一',
        '按钮一'
    ];
   
    let mydiv=document.getElementById('select');
    for (let i1=0;i1<data.length;i1++)
    {console.log('ok');
        let bu=document.createElement('BUTTON');
        bu.setAttribute('style','width:200px;height:50px;margin-top:10px')
        bu.innerText=data[i1];
        bu.onclick=function(){

        }
        mydiv.appendChild(bu);
    }
}
export{
    drawBut,
}