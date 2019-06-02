/*
    axios({
        method : '',
        url : '',
        data : {
            name: 'hh',
            age: '19'
        }
    }).then(function(data){
        console.log(data);
    }).catch(function(info){
        console.log(info)
    })
*/

function axios(options){
    return new Promise(function(resolve,reject){

        // 对参数的拼接   name=han&pwd=432532
        var packData = " ";
        for(key in options.data){
            packData += '&' + key + '=' + options.data[key];
        }

        // 1.创建（右边为ie6兼容格式）
        var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");

        // 2.判断请求的类型 get post
        if(options.method == 'get'){
            xhr.open('get',options.url + '?' + packData.slice(1));
            xhr.send();
        }else{
            xhr.open('post',options.url);
            // 设置请求头
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
            xhr.send(packData.slice(1));
        }

        // 3.状态监测
        xhr.onreadystatechange = function(){
            // 如果请求成功，数据交给resolve(data)
            if(xhr.readyState == 4 && xhr.status == 200){
                resolve(JSON.parse(xhr.responseText));
                // 为什么不能直接写else，因为如果state==2，会直接跳到else，1234并没有完全跑完
            }    
                
            //如果数据请求失败
            setTimeout(function(){
                if(xhr.readyState != 4 || xhr.status != 200){
                    var objState = {
                        state : xhr.readyState,
                        status : xhr.status
                    };
                    reject(objState)
                }
            },3000)         
        }
    })
}