<?php
    header("Content-Type:text/html;charset=utf-8");
    error_reporting(E_ALL & ~E_DEPRECATED);
    $conn = mysql_connect("localhost","root","");//连接MySQL  
    mysql_select_db("pinglun",$conn);//选择数据库
    mysql_query("set names 'utf8' ");
    mysql_query("set character_set_client=utf8");
    mysql_query("set character_set_results=utf8");
    if(!$conn){
        echo "连接失败";
        exit;
    }
/*	$show_author = $_GET['author'];//GET方法为URL参数传递
    $show_text = $_GET['text'];
	$sql = "insert into pinglun_data(author,text) values ('$show_author','$show_text')";
	mysql_query($sql);//借SQL语句插入数据*/
    $sql2 = "SELECT * FROM pinglun_data";  //查询数据表pinglun_data 所有的行数内容
    $result = mysql_query($sql2);
    $results = array();
    while ($row = mysql_fetch_assoc($result)) {
     $results[] = $row;
    }
    echo json_encode($results);   //php将数组内容转换成json数据 并输出
	mysql_close($conn);//关闭MySQL连接

?>