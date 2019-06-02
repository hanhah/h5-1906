// top  ------------------------------------------

// 左侧二级导航栏
var aList = document.querySelectorAll('#top .topCon .topLeft .topSec');
var aSecond = document.querySelectorAll('#top .topCon .topLeft .topSec div');
for(let i = 0; i < aList.length; i++){
    aList[i].onmouseover = function(e){
        e = e || window.event;
        aSecond[i].style.display = "block";
    }
    aList[i].onmouseout = function(e){
        e = e || window.event;
        aSecond[i].style.display = "none";
    }
}
//右侧二级导航栏
var arList = document.querySelectorAll('#top .topCon .topRight .topRigSec');
var arSecond = document.querySelectorAll('#top .topCon .topRight .topRigSec div');
for(let i = 0; i < arList.length; i++){
    arList[i].onmouseover = function(){
        arSecond[i].style.display = "block";
    }
    arList[i].onmouseout = function(){
        arSecond[i].style.display = "none";
    }
}


// nav  ------------------------------------------
// 二级菜单显示
var oList = document.querySelector('#nav .navLf');
var oSecList = document.querySelector('#nav .navLf .navSecond');
oList.onmouseover = function(){
    oSecList.style.display = "block";
}
oList.onmouseout = function(){
    oSecList.style.display = "none";
}
// 三级菜单显示
var aSecList = document.querySelectorAll('#nav .navLf .navSecond .navSecList');
var aThirdList = document.querySelectorAll('#nav .navLf .navSecond .navSecList div');
for(let i = 0; i < aSecList.length; i++){
    aSecList[i].onmouseover = function(){
        aThirdList[i].style.display = "block";
    }
    aSecList[i].onmouseout = function(){
        aThirdList[i].style.display = "none";
    }
}


// select  ------------------------------------------
// 收起筛选
var oSelBtn = document.querySelector('#select .selectType p');
var oSelNone = document.querySelector('#select .selectNone');

oSelBtn.onclick = function(){
    oSelNone.style.display =
        oSelNone.style.display == 'block' ? 'none' : 'block';
}
oSelBtn.onmouseover = function(){
    oSelBtn.style.cssText = "background:#ffe8d8;color:#ff6600;"
}
oSelBtn.onmouseout = function(){
    oSelBtn.style.cssText = "background:#fff;color:#333;"
}



// show   ---------------------------------------------------------
// 遍历推荐的数据
axios({
    method: 'get',
    url: '../json/list1.json',
    data: {}
}).then(function(data){
    var oShowLeft = document.querySelector('#show .showLeft ul');
    var str = '';
    for(var i = 0 ; i < data.length; i++){
        str += `
            <li>
                <a href="#" style="background:url('${data[i].bg}');background-size:100% 100%;"></a>
                <p class="showLfInfo">
                    <a href="#">${data[i].title}</a>
                    <span>${data[i].price}</span>
                </p>
            </li>
        `
    }
    oShowLeft.innerHTML = str;
})

// 遍历商品的数据
axios({
    method: 'get',
    url: '../json/list2.json',
    data: {}
}).then(function(data){
    var oShowRgt = document.querySelector('#show .showRgt ul');
    var oBtnList = document.querySelector('#show .showRgt .showBtn');
    var oFirst = document.querySelector('#show .showRgt .showBtn .first');
    var oLast = document.querySelector('#show .showRgt .showBtn .last');
    var count = 1;
    var pageNum = Math.ceil(data.length / 16);
    
    // 渲染页面数据
    function renderPage(n){
        var str = '';
        for(var i = (n - 1) * 16 ; i < Math.min(data.length,16 * n) ; i++){
            str += `
            <li  data-id = "${data[i].id}">
                <div class="showImg">
                    <img src="${data[i].img}">
                </div>
                <div class="showInfo">
                    <h2>${data[i].price}</h2>
                    <p>
                        <a href="#">${data[i].title}</a>
                    </p>
                    <h3>
                        <span><a href="#">已有700+人评价</a></span>
                        <em><a href="#">关注</a></em>
                    </h3>
                    <h4>
                        <b>苏宁国际</b>
                        <i><a href="#">${data[i].shop}</a></i>
                    </h4>
                    <h5>${data[i].count}</h5>         
                </div>
                <div class="showOpt">
                    <input type = "submit" class="showAdd" value = "加入购物车">
                    <input type = "submit" class="showCpa" value = "对比">
                </div>
            </li>
            `
        }
        oShowRgt.innerHTML = str; 
    }
    renderPage(1);

    //添加按钮
    for(var i = 0 ; i < pageNum ; i++){
        var createA = document.createElement('a');
        createA.innerHTML = i + 1;
        oBtnList.insertBefore(createA,oLast);
    }
    //按钮控制页面数据的变化
    var aA = document.querySelectorAll('.showBtn a'); 
    aA[1].className = "showbtnAct";
    for(var i = 1 ; i < aA.length - 1 ; i++){
        aA[i].onclick = function(){
            fn();
            renderPage(this.innerHTML);
            this.className = "showbtnAct";
            count = this.innerHTML;  
            console.log(count);
        }
    }
    //next
    oFirst.onclick = function(){
        if(count <= 1){
            count = 1;
        }else{
            count--;
        }
        fn();
        aBtn[count].className = "showbtnAct";
        renderPage(count);
    }
    // pre
    oLast.onclick = function(){
        if(count >= pageNum){
            count = pageNum;
        }else{
            count++;
        }
        fn();
        aBtn[count].className = "showbtnAct";
        renderPage(count);
    }
     // 清除类名
     var aBtn = document.querySelectorAll('#show .showRgt .showBtn a');
     function fn(){
        for(var p = 0; p < aBtn.length; p++){
           aBtn[p].className = ""; 
        }
    }

    // 鼠标滑过li产生阴影效果
    oShowRgt.onmouseover = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement; 
        if(target.tagName == 'LI'){
            target.style.cssText = "box-shadow: 5px 5px 5px #ccc;"
        }
    }
    oShowRgt.onmouseout = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement; 
        if(target.tagName == 'LI'){
            target.style.cssText = "none"
        }
    }

    // 记录点击次数（用来传输到购物车的商品数量）
    var productCount = {};
    var carNum = 0;
    var oCarNum = document.querySelector('#option .optCar span');
    oShowRgt.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "showAdd"){   
            // 记录购物车总的商品数量
            carNum ++;

            // 获取商品id target.parentNode.getAttribute('data-id')
            // 记录商品点击次数 count
            // 储存形式 {01:1, 02:4, 03:2}
            var id = target.parentNode.parentNode.getAttribute('data-id');
            var count = productCount[id];
            if(!count){
                count = 1;
            }else{
                count++;
            }
            productCount[id] = count;
            // console.log(productCount);    {01:1, 02:4, 03:2}

            //把{01:1, 02:4, 03:2}存入到cookie
            setCookie('goods',JSON.stringify(productCount),30);           
        }
        // 更改购物车的商品数量
        oCarNum.innerHTML = carNum;
    }

    
    
    

    // 登录成功用户名录入到首页中
    var strCookie = getCookie("phone");
    // console.log(strCookie)
    var nameChange = document.querySelector('#top .topRight .cookieChange a');
    var oLiNone = document.querySelector('#top .topRight li:nth-child(2)');
    if(strCookie){
        nameChange.innerHTML = strCookie;
        nameChange.style.cssText = "color:red";
        oLiNone.style.display = "none";
    }
})