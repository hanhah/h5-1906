
// 购物车功能板块

function Car (){
    this.oGoodBox = document.querySelector('#show .showGood');
    this.init();
}

Car.prototype = {

    // 组装板块
    init: function(){  
        this.getDate();
        this.eventBind();
    },

    // 渲染选中商品的信息
    getDate: function(){
        var _this = this;
        axios({
            method: 'get',
            url: '../json/list2.json',
            data: {}
        }).then(function(data){ 
            var str1 = ' ';
            var strCookie = getCookie("goods");
            var objCookie = JSON.parse(strCookie);
            // console.log(objCookie);
            for(key in objCookie){
                for(var i = 0; i < data.length; i++ ){
                    if(key == data[i].id){
                        // console.log(key)
                        str1 += `
                            <section>
                                <div class="goodChoice"></div>
                                <div class="goodImg">
                                    <img src="${data[i].img}">
                                </div>
                                <div class="goodInfo">
                                    <a>${data[i].title}</a>
                                    <p>
                                        <span>苏宁国际</span>
                                        <span>直营</span>
                                    </p>
                                </div>
                                <div class="goodColor">
                                    <span>颜色：桀骜黑红</span>
                                </div>
                                <div class="goodPrice">
                                    <span>${data[i].price}</span>
                                </div>
                                <div class="goodNum">
                                    <p>
                                        <span class="btnCut">-</span>
                                        <em>${objCookie[key]}</em>
                                        <span class="btnAdd">+</span>
                                    </p>
                                </div>
                                <div class="goodTotal">
                                    <span>￥ ${data[i].price.substr(1) * objCookie[key]}.00</span>
                                    <span>税费：￥0.00</span>
                                </div>
                                <div class="goodOpt">
                                    <span>移入关注</span>
                                    <span class="btnRmv">删除</span>
                                </div>
                            </section>
                        `
                    }
                }
            }
            _this.oGoodBox.innerHTML = str1;
        })
    },

    // 商品累加
    addGoods: function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "btnAdd"){
            // 获取当前em里的商品数量
            var num = target.previousElementSibling.innerHTML;
            // 获取当前商品的单价
            var price = target.parentNode.parentNode.previousElementSibling.firstElementChild.innerHTML;
            price = price.substr(1);
            
            // 完成数量++
            num ++;
            target.previousElementSibling.innerHTML = num;
            // 完成总价计算
            target.parentNode.parentNode.nextElementSibling.firstElementChild.innerHTML = "￥" + num * price + ".00";
        }
    },

    // 商品累减
    cutGoods: function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "btnCut"){
            // 获取当前em里的商品数量
            var num = target.nextElementSibling.innerHTML;
            // 获取当前商品的单价
            var price = target.parentNode.parentNode.previousElementSibling.firstElementChild.innerHTML;
            price = price.substr(1);

            // 完成数量 --
            if(num > 1){
                num --;
                target.nextElementSibling.innerHTML = num;
            }else{
                num = 1               
            }
            // 完成总价计算
            target.parentNode.parentNode.nextElementSibling.firstElementChild.innerHTML = "￥" + num * price + ".00";
        }  
    },
    
    // 删除按钮 移除商品信息
    removeGoods: function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "btnRmv"){
            target.parentNode.parentNode.remove();    
        }
    },

   

    // 事件绑定
    eventBind: function(){
        var _this = this;
        this.oGoodBox.onclick = function(){
            _this.addGoods();
            _this.cutGoods();
            _this.removeGoods();
        } 
    }
}

new Car();



  // 登录成功用户名录入到首页中
     var strCookie = getCookie("phone");
     var nameChange = document.querySelector('#top .topRight .cookieChange a');
     var oLiNone = document.querySelector('#top .topRight li:nth-child(2)');
     if(strCookie){
         nameChange.innerHTML = strCookie;
         nameChange.style.cssText = "color:red";
         oLiNone.style.display = "none";
     }



