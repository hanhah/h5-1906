// 渲染页面
axios({
    method: 'get',
    url: 'json/brand.json',
    data: {}
}).then(function(data){
    var oBoxBrand = document.querySelector('#sale .brand section');
    var str = '';
    for(var i = 0; i < data.length; i++){
        str += `
            <div>
                <img src="${data[i].img}">
                <p>
                    <span>${data[i].name}</span>
                </p>
            </div>
        `
    }
    oBoxBrand.innerHTML = str;
})



// 划入显示
var oBoxBrand = document.querySelector('#sale .brand section');
oBoxBrand.onmouseover = function(e){
    e = e || window.event;
    var target = e.target || e.srcElement; 
    if(target.tagName == 'P'){
        target.style.cssText = "opacity:1;"
    }
}
oBoxBrand.onmouseout = function(e){
    e = e || window.event;
    var target = e.target || e.srcElement; 
    if(target.tagName == 'P'){
        target.style.cssText = "opacity:0;"
    }
}


