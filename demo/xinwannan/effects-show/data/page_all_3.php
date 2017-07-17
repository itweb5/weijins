<?php
    header("Content-Type:text/html;charset=utf-8");
    error_reporting(E_ALL & ~E_DEPRECATED);
    $conn = mysql_connect("localhost","root","");//连接MySQL  
    mysql_select_db("effectshow_context",$conn);//选择数据库
    mysql_query("set names 'utf8' ");
    if(!$conn){
        echo "连接失败";
        exit;
    }
    $total_spl = "SELECT COUNT(*) FROM show_img_text_3";
    $total_result = mysql_fetch_array(mysql_query($total_spl));
    echo $total_result[0];
	mysql_close($conn);//关闭MySQL连接

?>