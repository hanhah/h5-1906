//渲染页面
axios({
    method: 'get',
    url: 'json/beauty.json',
    data: {}
}).then(function(data){
    var oBoxBut = document.querySelector('#beauty .butCon .CenCon .CenPdt');
    var str = '';
    for(var i = 0; i < data.length; i++){
        str += `
            <section>
                <img src="${data[i].img}" class="butImg">
                <div>
                    <p>${data[i].count}</p>
                    <h3>${data[i].detail}</h3>
                    <h4>${data[i].title}</h4>
                    <h2>${data[i].price}</h2>
                </div>  
            </section>
        `
    }
    oBoxBut.innerHTML+= str;

    //选项卡
    $('#beauty .CenTabBtn span').click(function(){
        $(this).addClass('CenTabBtnAct').siblings().removeClass('CenTabBtnAct')
        $('#beauty .CenTabShow p').eq($(this).index()).addClass('CenTabShowAct').siblings().removeClass('CenTabShowAct');
    })



    // 鼠标滑入晃动
    oBoxBut.onmouseover = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement; 
        if(target.className == 'butImg'){
            target.style.cssText="transform:translate(-15px,0);transition:0.5s";
        }
    }
    oBoxBut.onmouseout = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement; 
        if(target.className == 'butImg'){
            target.style.cssText="transform:translate(0,0);transition:0.5s";
        }
    }
})














// 选项卡
// function TabCard(){
//     this.aSpan = document.querySelectorAll('#beauty .CenTabBtn span');
//     this.aDiv = document.querySelectorAll('#beauty .CenTabShow p');
//     this.init();
// }
// TabCard.prototype = {
//    init : function(){
//        //组装板块
//        this.spanClick();
//    },
//    spanClick : function(){
//        for(var i = 0,k = this.aSpan.length ; i < k ; i++){
//            this.aSpan[i].index = i;
//            var _this = this;
//            //绑定单击事件
//            this.aSpan[i].addEventListener("click",function(){
//                 _this.clearActive();  
//                 this.className = 'CenTabBtnAct'; 
//                 _this.clearShow()       
//                 _this.changeDiv(this.index);  
//            })    
//         }
//     },
//    clearActive : function(){
//         for(var j = 0 ; j < this.aSpan.length ; j++){
//             this.aSpan[j].className = '';
//         }
//    },
//    changeDiv : function(index){
//         this.aDiv[index].className = 'CenTabShowAct';
//    },
//    clearShow : function(){
//        for(var l = 0 ; l < this.aDiv.length ; l++){
//             this.aDiv[l].className = '';
//        }
//    }
// }
// new TabCard();



