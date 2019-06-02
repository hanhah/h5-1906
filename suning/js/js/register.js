
// 正则验证，然后进行注册，数据录入到数据库中

function Register(){

    // 手机号节点
    this.oPhone = document.querySelector('#show .showForm .phoneInput');
    this.oIcon = document.querySelector('#show .showForm .phone i');
    this.oPhoneSpan = document.querySelector('#show .showForm .phone span');
    this.phoneReg = /^(13|15|17|18)\d{9}$/;

    // 验证码节点
    this.oCode = document.querySelector('#show .showForm .codeInput');
    this.oCodeBtn = document.querySelector('#show .showForm .code .codeBtn');
    this.oCodeNum = document.querySelector('#show .showForm .code b');
    this.oCodeSpan = document.querySelector('#show .showForm .code span');

    // 密码节点
    this.oPwd = document.querySelector('#show .showForm .pwdInput');
    this.oPwdSpan = document.querySelector('#show .showForm .pwd span');
    this.pwdReg = /^\w{6,20}$/;

    // 注册按钮
    this.oBtn = document.querySelector('#show button');

    // 三个板块的返回值
    this.prove1 = null;
    this.prove2 = null;
    this.prove3 = null;

    this.init();
}


Register.prototype = {

    init: function(){
        this.eventBind();
    },

    // 验证手机号板块 -----------------------------------------------------
    phoneOnblur: function(){
        if(this.phoneReg.test(this.oPhone.value)){
            this.oIcon.style.display = "block";
            console.log(111)
            this.prove1 = true;

        }else{
            this.oPhoneSpan.innerHTML = "格式不正确，请您输入正确的手机号"
        }
    },
    phoneOnfocus: function(){
        this.oIcon.style.display = "none";
        this.oPhoneSpan.innerHTML = " ";
    },


    // 验证码验证板块 ------------------------------------------------
    randomNum: function (m,n){
        var num = parseInt(Math.random() * (n - m + 1) + m);
        return num;
    },
    codeOnblur: function(){
        if(this.oCode.value == this.oCodeNum.innerHTML && this.oCode.value){
            this.oCodeNum.innerHTML = "√";
            this.oCodeNum.style.cssText = "background:green;"
            console.log(222);
            this.prove2 = true;
        }else{
            this.oCodeSpan.innerHTML = "验证错误，请您重新获取验证码"
            this.oCodeNum.innerHTML = "x";
            this.oCodeNum.style.cssText = "background:red;"
        }
    },


    // 密码验证板块  ------------------------------------------------
    pwdOnblur: function(){
        if(this.pwdReg.test(this.oPwd.value)){
            this.oPwdSpan.innerHTML = "";
            console.log(333);
            this.prove3 = true;
        }else{
            this.oPwdSpan.style.cssText = "color:red;"
        }
    },


    // 注册板块：与数据库中数据进行查重，然后录入
    getDate: function(){
        var _this = this;
        var uname = document.querySelector('#show .phone .phoneInput');
        var upwd = document.querySelector('#show .pwd .pwdInput');
        axios({
            method: 'get',
            url: 'http://localhost/han/suning/php/register.php',
            data: {
                uname : uname.value,
                upwd : upwd.value,
            }
        }).then(function(data){
            // 前端接收到的后端的返回值
            //('state' => '0', 'info' => '账号已存在，重新注册')
            //('state' => '1', 'info' => '注册成功')
            if(data.state == '0'){
                alert(data.info);
            }else{
                alert(data.info);
                location.href = "http://localhost/han/suning/html/login.html";
            }
        }).catch(function(info){
            console.log(info);
        })
    },



    // 绑定事件
    eventBind: function(){
        var _this = this;

        // 手机号验证 ----------------------------------------------------------
        this.oPhone.onblur = function(){ 
            _this.phoneOnblur()
        }
        this.oPhone.onfocus = function(){
            _this.phoneOnfocus();
        }

        // 验证码验证   ----------------------------------------------------------
        this.oCodeBtn.onclick = function(){
            _this.oCodeNum.innerHTML = _this.randomNum(1000,9999);
            _this.oCodeNum.style.cssText = "background:orange;"
            // 验证错误，清空输入框和提示栏
            _this.oCodeSpan.innerHTML = " ";    
            _this.oCode.value = "";
        }
        this.oCode.onblur = function(){ 
            _this.codeOnblur();
        }
        this.oCode.onfocus = function(){ 
            _this.oCodeSpan.innerHTML = " ";
        }

        //密码验证   ----------------------------------------------------------
        this.oPwd.onfocus = function(){
            _this.oPwdSpan.innerHTML = "6-20个字符，由字母、数字和符号组合";
            _this.oPwdSpan.style.cssText = "color:#ccc;"
        }
        this.oPwd.onblur = function(){
            _this.pwdOnblur();
        }

        // 当手机号、验证码、密码都验证成功的时候调用注册功能
        this.oBtn.onclick = function(){
            if(_this.prove1 == true && _this.prove2 == true && _this.prove3 == true){
                _this.getDate()
            }
        }
    }
}

new Register()