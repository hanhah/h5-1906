<?php
    // 更改php当前编码
    header("content-type:text/html;charset=utf8");

    // 服务器地址
    $db_hostName = 'localhost';

    // 数据库登录账户
    $db_userName = 'root';

    // 密码
    $db_pwd = 'root';

    // 数据库名称
    $db_name = 'han';

    // 数据库的连接
    $connect = new mysqli($db_hostName,$db_userName,$db_pwd,$db_name);

    // 判断是否连接成功
    if($connect -> connect_error){
        // die 就是一个输出语句 不过执行完该句后，后面的语句不再执行
        die("数据库连接失败".$connect -> connect_error);
    }

    // 设置数据库的字符编码
    $connect -> query('set names utf8');
?>