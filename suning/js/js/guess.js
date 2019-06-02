
axios({
    method: 'get',
    url: 'json/guess.json',
    data: {}
}).then(function(data){
    var oBoxGuess = document.querySelector('#guess .guessCon .gesPdt');
    var str = '';
    for(var i = 0; i < data.length; i++){
        if((i + 1 ) % 5 == 0){
            str += `
                <section style="margin-right:0">
                    <img src="${data[i].img}">
                    <div>
                        <h3>${data[i].detail}</h3>
                        <p>${data[i].title}</p>
                        <h4>${data[i].price}</h4>
                    </div>
                </section>
            `
        }else{
            str += `
                <section>
                    <img src="${data[i].img}">
                    <div>
                        <h3>${data[i].detail}</h3>
                        <p>${data[i].title}</p>
                        <h4>${data[i].price}</h4>
                    </div>
                </section>
            `
        }
    }
    oBoxGuess.innerHTML = str;


     // 鼠标滑入晃动
    oBoxGuess.onmouseover = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement; 
        if(target.tagName == 'IMG'){
            target.style.cssText="transform:translate(-15px,0);transition:0.5s";
        }
    }
    oBoxGuess.onmouseout = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement; 
        if(target.tagName == 'IMG'){
            target.style.cssText="transform:translate(0,0);transition:0.5s";
        }
    }
})
