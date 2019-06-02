
// ps 联系方式

var oDiv = document.querySelector('#ps .psCon div');
var oP = document.querySelector('#ps .psCon div p');

oDiv.onmouseover = function(e){
    e = e || window.event;
    oP.style.display = "block";
}
oDiv.onmouseout = function(e){
    e = e || window.event;
    oP.style.display = "none";
}



