// 1.轮播图

var aImg = document.querySelectorAll('#banner .berCon .berImg img');
var aSpan = document.querySelectorAll('#banner .berCon .berSpan span')
var oRadiusBox = document.querySelector('#banner .berCon .berRadius');
var oShow = document.querySelector('#banner .berBg');
aImg[0].style.opacity = '1';
aImg[0].style.filter = 'alpha(opacity=100)';
var count = 0;
var timer = null;

// 图片切换
function imgShow(img){
    for(var i = 0; i < aImg.length; i++){
        aImg[i].style.opacity = 0;
        aImg[i].style.filter = 'alpha(opacity=0)';
    }
    move(img,{'opacity':100});
}

//nextImg
function nextImg(){
    if(count >= aImg.length - 1){
        count = 0;
    }else{
        count++;
    }
    imgShow(aImg[count]);
    clearActive();              //清除白点的类名
    aRadius[count].className = 'active';    //用count作为百点的下标，添加类名
}

//preImg
function preImg(){
    if(count <= 0){
        count = aImg.length - 1;
    }else{
        count--;
    }
    imgShow(aImg[count]);
    clearActive();              //清除白点的类名
    aRadius[count].className = 'active';    //用count作为百点的下标，添加类名
}

//自动播放
function autoPlay(){
    timer = setInterval(()=>{
        nextImg()
    },3000)
}
autoPlay();

//点击右侧按钮控制图片滚动（下一张）
aSpan[1].onclick = function(){
    nextImg()
}

//点击左侧按钮控制图片滚动（上一张）
aSpan[0].onclick = function(){
    preImg();
}


//鼠标移入定时器关闭
oShow.onmouseover = function(){
    clearInterval(timer);
}
oShow.onmouseout = function(){
    autoPlay();
}

//添加圆点（圆点的个数 和 图片的length）;
var fragment = document.createDocumentFragment();
for(var i = 0,k = aImg.length ; i < k ; i++){
    //创建圆点
    var createLi = document.createElement('li');
    fragment.appendChild(createLi);
}
oRadiusBox.appendChild(fragment);


//给圆点绑定鼠标滑过事件(更改自身样式)
var aRadius = oRadiusBox.querySelectorAll('li');
aRadius[0].className = 'active';
for(let i = 0,j = aRadius.length ; i < j ; i++){
    aRadius[i].onmouseover = function(){
        clearActive();
        this.className = 'active';
        count = i;       //更改count的值  等于每次滑过圆点的下标。
        console.log(count);
        imgShow(aImg[count]);     //控制图片的轮播
    }
}

 //清除白点的类名
 function clearActive(){
    for(var k = 0,l = aRadius.length ; k < l ; k++){
        aRadius[k].className = '';
    }
}








// 2.鼠标滑入按钮出现
oShow.onmouseover = function(e){
    e = e || window.event;
    aSpan[0].style.display = "block";
    aSpan[1].style.display = "block";
}
oShow.onmouseout = function(e){
    e = e || window.event;
    aSpan[0].style.display = "none";
    aSpan[1].style.display = "none";
}






// banner 左侧二级导航栏
var aList = document.querySelectorAll('#banner .berCon .berBg .berTop .berNavList');
var aSecond = document.querySelectorAll('#banner .berCon .berBg .berTop .berNavList div')
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