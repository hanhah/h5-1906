
function Login(){
    this.oBtn = document.querySelector('#info button');
    this.init();
}


Login.prototype = {
    init: function(){
        this.eventBind();
    },

    setCookie: function(cName,cVal,expires){
        var d = new Date();
        d.setDate(d.getDate() + expires);
        document.cookie = cName + '=' + cVal + ';path=/;expires=' + d.toGMTString();
    },

    getDate: function(){
        var uname = document.querySelector('#info .phone .phoneInput');
        var upwd = document.querySelector('#info .pwd .pwdInput');
        var _this = this;

        axios({
            method: 'get',
            url: 'http://localhost/han/suning/php/login.php',
            data: {
                uname: uname.value,
                upwd: upwd.value,
            }
        }).then(function(data){
            //('state' => '1', 'info' => '登陆成功');
            //('state' => '0','info' => '密码错误');
            //('state' => '0','info' => '用户名不存在');
            if(data.state == '1'){
                
                // document.cookie = "phone=" + uname.value;
                _this.setCookie('phone' , uname.value, 7);

                alert(data.info);
                location.href = 'http://localhost/han/suning/index.html';


                

                
            }else{
                alert(data.info);
            }
        }).catch(function(info){
            console.log(info);
        })  
    },

    eventBind: function(){
        var _this = this;
        this.oBtn.onclick = function(){
            _this.getDate();
        }
    }
}

new Login();