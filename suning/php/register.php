<?php
    header("content-type:text/html;charset=utf8");
    // 连接数据库
    include('common/public.php');


    //接收前端传来的数据
    $Uname = $_GET['uname'];
    $Upwd = $_GET['upwd'];

    // 前端传来的数据与数据库中数据作比对，如果有相同的，则返回注册失败
    $sql = "select * from suning where phone = '$Uname'";

    $res = mysqli_query($connect,$sql);

    $arr = mysqli_fetch_assoc($res);

    if($arr){
        echo json_encode(array(
            'state' => '0',
            'info' => '账号已存在，重新注册'
        ));
    }else{
        // 网数据库添加数据
        $insert = "insert into suning (phone,pwd) values ('$Uname','$Upwd')";
        mysqli_query ($connect,$insert);
        echo json_encode(array(
            'state' => '1',
            'info' => '注册成功'
        ));
    }
?>