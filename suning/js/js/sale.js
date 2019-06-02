
axios({
    method: 'get',
    url: 'json/sale.json',
    data: {}
}).then(function(data){
    var oBox = document.querySelector('#sale .saleCon .saleTab .saleTabShow');

    function renderPage(n){
        var str = '';
        for(var i = (n - 1) * 7 ; i < 7 * n; i++){
            if(i % 7 == 0 || i % 7 == 1){
                // 第一个和第二个
                if(i % 7 == 1){
                    str += `
                        <section class="saleTabOn" style="float:right;margin-right:0;">
                            <div class="saleTabLeft" style="background:url('${data[i].bg}') no-repeat;background-size:100%">
                                <img src="${data[i].img}" class="saleImg">
                            </div>
                            <div class="saleTabRgt">
                                <img src="${data[i].coutry}">
                                <em>${data[i].area}</em>
                                <h3>${data[i].detail}</h3>
                                <h5>${data[i].title}</h5>
                                <h2>${data[i].price}</h2>
                            </div>
                        </section>
                    `
                }else{
                    str += `
                        <section class="saleTabOn">
                            <div class="saleTabLeft" style="background:url('${data[i].bg}') no-repeat;background-size:100%">
                                <img src="${data[i].img}" class="saleImg">
                            </div>
                            <div class="saleTabRgt">
                                <img src="${data[i].coutry}">
                                <em>${data[i].area}</em>
                                <h3>${data[i].detail}</h3>
                                <h5>${data[i].title}</h5>
                                <h2>${data[i].price}</h2>
                            </div>
                        </section>
                    `
                }
                
            }else{
                // 取消最后一个的右边距
                if((i + 1) % 7 == 0){
                    str += `
                        <section style="margin-right:0;width:234px;">
                            <img src="${data[i].img}" class="saleImg">
                            <div>
                                <h4>
                                    <span>苏宁国际</span>
                                    <b>直营</b>
                                </h4>
                                <img src="${data[i].coutry}">
                                <em>${data[i].area}</em>
                                <h3 class="saleTabWord">${data[i].detail}</h3>
                                <h2>${data[i].price}</h2>
                            </div>
                        </section>
                    `
                }else{
                    str += `
                        <section>
                            <img src="${data[i].img}" class="saleImg">
                            <div>
                                <h4>
                                    <span>苏宁国际</span>
                                    <b>直营</b>
                                </h4>
                                <img src="${data[i].coutry}">
                                <em>${data[i].area}</em>
                                <h3 class="saleTabWord">${data[i].detail}</h3>
                                <h2>${data[i].price}</h2>
                            </div>
                        </section>
                    `
                }      
            }
        }
        oBox.innerHTML = str;
    }
    renderPage(1);


    // 鼠标滑过tab切换
    var aBtn = document.querySelectorAll("#sale .saleCon .saleTab .saleTabBtn span");
    for(let i = 0 ; i < aBtn.length ; i++){
        aBtn[i].onmouseover = function(e){
            e = e || window.event; 
            fn();
            renderPage(i + 1);
            this.className = "saleTabBtnAct";
        }
    }


    // 清除类名
     function fn(){
        for(var p=0;p<aBtn.length;p++){
           aBtn[p].className = ""; 
        }
    }

    // 鼠标滑入晃动
    oBox.onmouseover = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement; 
        if(target.className == 'saleImg'){
            target.style.cssText="transform:translate(-15px,0);transition:0.5s";
        }
    }
    oBox.onmouseout = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement; 
        if(target.className == 'saleImg'){
            target.style.cssText="transform:translate(0,0);transition:0.5s";
        }
    }

})
  



















// 选项卡效果
// $('#sale .saleCon .saleTab .saleTabBtn span').mouseover(function(){
//     $(this).addClass('saleTabBtnAct').siblings().removeClass('saleTabBtnAct')
//     $('#sale .saleCon .saleTab .saleTabShow section').eq($(this).index()).addClass('saleTabShowAct').siblings().removeClass('saleTabShowAct');
// })


// axios({
//     method: 'get',
//     url: 'js/js/sale.json',
//     data: {}
// }).then(function(data){
//     var oS = document.querySelector('#sale .saleCon .saleTab .saleTabShow section');
//     var aBtn = document.querySelectorAll("#sale .saleCon .saleTab .saleTabBtn span");
    
//     function renderPage(){
//         var str = '';
//         for(var i = 0 ; i < 6; i++){
//             str += `
//                 <div class="saleTabOn">
//                     <div>
//                         <p class="TabOnL"></p>
//                         <p class="TabOnR"></p>
//                     </div>        
//                     <div>
//                         <p class="TabOnL"></p>
//                         <p class="TabOnR"></p>
//                     </div>
//                 </div>
//                 <div class="saleTabDown">
//                     <div><img src="${data[i].img5}"></div>
//                     <div><img src="${data[i].img6}"></div>
//                     <div><img src="${data[i].img7}"></div>
//                     <div><img src="${data[i].img8}"></div>
//                     <div><img src="${data[i].img9}"></div>
//                 </div>
//             `
//         }
//         oS.innerHTML = str;
//     }
//     renderPage();
    
//     for(let i = 0; i<aBtn.length; i++){
//         aBtn[i].onmouseover = function(){
//             console.log(this.innerHTML);
//             renderPage(this.innerHTML);
//         }
//     }
// })


