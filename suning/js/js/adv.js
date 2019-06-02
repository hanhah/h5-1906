
// 广告移出
var oBtn = document.querySelector('#adv .advCon .advBtn');
oBtn.onclick = function(e){
    e = e || window.event;
    var target = e.target || e.srcElement; 
    if(target.tagName == 'SPAN'){
        target.parentNode.remove();
    }
}
