// top 左侧二级导航栏
var aLi = document.querySelectorAll('#top .topCon .topLeft .topSec');
var aDiv = document.querySelectorAll('#top .topCon .topLeft .topSec div');
for(let i = 0; i < aLi.length; i++){
    aLi[i].onmouseover = function(e){
        e = e || window.event;
        aDiv[i].style.display = "block";
        var target = e.target || e.srcElement; 
        if(target.tagName == 'A'){
            target.style.cssText = "color:red";
        }
    }
    aLi[i].onmouseout = function(e){
        e = e || window.event;
        aDiv[i].style.display = "none";
        var target = e.target || e.srcElement; 
        if(target.tagName == 'A'){
            target.style.cssText = "color:#666";
        }
    }
}




// top 右侧二级导航栏
var arLi = document.querySelectorAll('#top .topCon .topRight .topRigSec');
var arDiv = document.querySelectorAll('#top .topCon .topRight .topRigSec div')
for(let i = 0; i < arLi.length; i++){
    arLi[i].onmouseover = function(e){
        e = e || window.event;
        arDiv[i].style.display = "block";
    }
    arLi[i].onmouseout = function(e){
        e = e || window.event;
        arDiv[i].style.display = "none";
    }
}


function getCookie(cName){
    // 1.读取所有cookie
    var cookieStr = document.cookie;
    // 2.通过分隔符把字符串转成数组 split（分隔符）
    var cookieArr = cookieStr.split('; ');
    // 3.遍历数组,取出相应的键值对
    for(var i = 0, k = cookieArr.length; i < k; i++){
        var items = cookieArr[i].split('=');
        if(items[0] == cName){
            return items[1];
        }
    }
}


// 登录成功用户名录入到首页中
var strCookie = getCookie("phone");
var nameChange = document.querySelector('#top .topRight .cookieChange a');
var oLiNone = document.querySelector('#top .topRight li:nth-child(2)');
if(strCookie){
    nameChange.innerHTML = strCookie;
    nameChange.style.cssText = "color:red";
    oLiNone.style.display = "none";
}


// 锚点滚动出现
var oRoll = document.querySelector('#roll');
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop >= 500){
        oRoll.style.cssText ="display:block";
    };
    if(scrollTop <= 500){
        oRoll.style.cssText ="display:none";
    }
}

var aRoll = document.querySelectorAll('#roll section a');
for(let i = 0; i < aRoll.length; i++){
    aRoll[i].onclick = function(){
        fn();
        this.className = "rollAct";
    }
}

// 清除类名
function fn(){
    for(var p = 0;p < aRoll.length; p++){
        aRoll[p].className = ""; 
    }
}