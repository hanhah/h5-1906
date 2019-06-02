<?php
    header("content-type:text/html;charset=utf8");
    // 连接数据库
    include('common/public.php');


    //接收前端传来的数据
    $Uname = $_GET['uname'];
    $Upwd = $_GET['upwd'];

    // 查找数据库中是否有对应的用户名
    $sql = "select * from suning where phone = '$Uname'";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);

    // 数据库中有对应的用户名
    if($arr){
        // 判断密码是否正确
        if($Upwd == $arr['pwd']){
            echo json_encode(array(
                'state' => '1',
                'info' => '登陆成功'
            ));
        }else{
            echo json_encode(array(
                'state' => '0',
                'info' => '密码错误'
            ));
        }
    }else{
        // 数据库中没有对应的用户名
        echo json_encode(array(
            'state' => '0',
            'info' => '用户名不存在'
        ));
    }
?>