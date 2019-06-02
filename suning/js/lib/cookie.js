// 写入cookie
// 变量包括（cookie名称，值，存储的时间）
function setCookie(cName,cVal,expires){
    var d = new Date();
    d.setDate(d.getDate() + expires);
    // 'name=zhang;path=/;expires='+ d.toGMTString()
    document.cookie = cName + '=' + cVal + ';path=/;expires=' + d.toGMTString();
}


//读取cookie
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

// 删除cookie
function removeCookie(cName){
    setCookie(cName,null,-1);        // 设置成过期cookie
}
