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
	$page = $_GET['p'];//GET方法为URL参数传递

	$sql = "SELECT * FROM show_img_text_4 LIMIT " . ($page-1) * 4 . " ,4";
	$result = mysql_query($sql);//借SQL语句插入数据
    while($row = mysql_fetch_assoc($result)){
        echo $row["effect_con_box"];
    }
    mysql_free_result($result);
	mysql_close($conn);//关闭MySQL连接
    /*$page_banner = "<a href='#'>上一页</a>";
    $page_banner .= "<a href='#'>下一页</a>";
    echo $page_banner;*/
?>