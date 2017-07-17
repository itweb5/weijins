<?php
    header("Content-Type:text/html;charset=utf-8");
    error_reporting(E_ALL & ~E_DEPRECATED);
    $conn = mysql_connect("localhost","root","");//连接MySQL  
    mysql_select_db("effectshow_context",$conn);//选择数据库
    mysql_query("set names 'utf8' ");
    mysql_query("set character_set_client=utf8");
    mysql_query("set character_set_results=utf8");
    if(!$conn){
        echo "连接失败";
        exit;
    }
	$show_context = $_GET['s'];//GET方法为URL参数传递

	$sql = "insert into show_img_text_2(effect_con_box) values ('$show_context')";
	mysql_query($sql);//借SQL语句插入数据
	mysql_close($conn);//关闭MySQL连接
	echo "成功录入数据";

?>