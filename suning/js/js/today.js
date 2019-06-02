
axios({
    method: 'get',
    url: 'json/today.json',
    data: {}
}).then(function(data){
    var oBox = document.querySelector('#today .tdyCon .tdyBner .tdySec');
    var oPre = document.querySelector('#today .tdyCon .tdySpan .tdyPre');
    var oNxt = document.querySelector('#today .tdyCon .tdySpan .tdyNxt');
    var count = 1;

    // 数据渲染
    function renderPage(n){
        var str = '';
        for(var i = (n - 1) * 5 ; i < 5 * n; i++){     
            if(i % 5 == 4 || i == 4){
                str += `
                    <section style="margin-right:0;">
                        <img src="${data[i].images}">
                        <p>${data[i].ps}</p>
                        <h3>${data[i].title}</h3>
                        <h4>${data[i].detail}</h4>
                        <h2>${data[i].price}</h2>
                    </section>
                `
            }else{
                str += `
                    <section>
                        <img src="${data[i].images}">
                        <p>${data[i].ps}</p>
                        <h3>${data[i].title}</h3>
                        <h4>${data[i].detail}</h4>
                        <h2>${data[i].price}</h2>
                    </section>
                `
            }
        }
        oBox.innerHTML = str;
    }
    renderPage(1);


    //按钮控制页面数据的变化
    var aBtn = document.querySelectorAll("#today .tdyCon .tdyBtn li");
    for(let i = 0 ; i < aBtn.length ; i++){
        aBtn[i].onmouseover = function(e){
            e = e || window.event;
            fn();
            renderPage(i + 1);
            this.className = "tdyBtnAct";
        }
    }


    // 下一页
    oNxt.onclick = function(){
        if(count >= 4){
            count = 1;
        }else{
            count++;      
        }
        // console.log(count);
        fn();
        aBtn[count -1].className = "tdyBtnAct";
        renderPage(count);
    }


    // 上一页
    oPre.onclick = function(){
        if(count <= 1){
            count = 4;
        }else{
            count--;
        }
        fn();
        aBtn[count -1].className = "tdyBtnAct";
        renderPage(count);
    }

    // 清除类名
    function fn(){
        for(var p=0;p<aBtn.length;p++){
           aBtn[p].className = ""; 
        }
    }


    // 箭头划入显示
    var oTdySpan = document.querySelector('#today .tdyCon .tdyBner .tdySpan');
    oBox.onmouseover = function(e){
        e = e || window.event;
        oTdySpan.style.display = "block";
    }
    // oBox.onmouseout = function(e){
    //     e = e || window.event;
    //     oTdySpan.style.display = "none";
    // }

  
  
  
    // 交互动效（延时）
    var oDiv = document.querySelector('#today .tdyCon .tdyBner .tdySec');
    oDiv.onmouseover = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement; 
        if(target.tagName == 'IMG'){
            target.style.cssText="transform:translate(-15px,0);transition:0.5s";
        }
    }
    oDiv.onmouseout = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement; 
        if(target.tagName == 'IMG'){
            target.style.cssText="transform:translate(0,0);transition:0.5s";
        }
    }

})


