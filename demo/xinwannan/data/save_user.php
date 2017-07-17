<?php
    header("Content-Type:text/html;charset=utf-8");
    $con = mysql_connect("localhost","root","");//连接MySQL
    
    mysql_select_db("user_message",$con);//选择数据库
    mysql_query("set names 'utf8' ");
    mysql_query("set character_set_client=utf8");
    mysql_query("set character_set_results=utf8");
    if($con == false){
    	echo "连接数据库失败";
    }
    else{
    	echo "连接数据库成功";
    }
	$name = $_GET['n'];//GET方法为URL参数传递
	$phone = $_GET['p'];
	$home_name = $_GET['hn'];
	$home_model = $_GET['hm'];
	$home_style = $_GET['hs'];
    $home_grade = $_GET['hg'];
	$home_size = $_GET['hsi'];
	$sql = "insert into user(name,phone,home_name,home_model,home_style,home_grade,home_size) values ('$name','$phone','$home_name','$home_model','$home_style','$home_grade','$home_size')";
	mysql_query($sql);//借SQL语句插入数据
	mysql_close($con);//关闭MySQL连接
	echo "成功录入数据";
?>