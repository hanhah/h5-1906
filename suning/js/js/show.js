// 数据渲染到页面
var product = [
    {
        "id" : "01",
        "title" : "TOP排行榜",
        "content" : "剁手必备的海外尖货",
        "bg" : "images/show1.jpg"
    },
    {
        "id" : "02",
        "title" : "海淘头条",
        "content" : "教你如何分辨真假脱发",
        "bg" : "images/show2.jpg"
    },
    {
        "id" : "03",
        "title" : "国际直营",
        "content" : "假一赔十 100%正品",
        "bg" : "images/show3.jpg"
    },
    {
        "id" : "04",
        "title" : "数码家电",
        "content" : "领券最高减100",
        "bg" : "images/show4.jpg"
    }
]

var oShow = document.querySelector('#show .showCon .showUl');
var proStr = '';
for(var i = 0; i< product.length; i++){
    if(i % 3 == 0 && i != 0){
        proStr += `
            <li style="background:url(${product[i].bg}) no-repeat;background-size:cover;margin-right:0;">
                <a href="http://localhost/han/suning/html/list.html">    
                    <h2>${product[i].title}</h2>
                    <span>${product[i].content}</span>
                    <em></em>
                </a>
            </li>
        `
    }
    else{
        proStr += `
            <li style="background:url(${product[i].bg}) no-repeat;background-size:cover;">
                <a href="http://localhost/han/suning/html/list.html">    
                    <h2>${product[i].title}</h2>
                    <span>${product[i].content}</span>
                    <em></em>
                </a>
            </li>
        `
    }
    
}
oShow.innerHTML += proStr;




// 交互动效（延时）
// var aLi = document.querySelectorAll('#show .showCon .showUl li');
// for(let i = 0; i<aLi.length; i++){
//     aLi[i].onmouseover = function(){
//         aLi[i].style.backgroundPosition = "-10px";
//     }
//     aLi[i].onmouseout = function(){
//         aLi[i].style.backgroundPosition = "0";
//     }
// }


// 交互动效(引用move封装函数)
var aLi = document.querySelectorAll('#show .showCon .showUl li');

for(let i = 0; i<aLi.length; i++){
    aLi[i].onmouseover = function(e){
        e = e || window.event;
        move(aLi[i],{'background-position':'-10'})
    }
    aLi[i].onmouseout = function(e){
        e = e || window.event;
        move(aLi[i],{'background-position':'0'})
    }
}