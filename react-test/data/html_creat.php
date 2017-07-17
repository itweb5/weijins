<?php
    header("Content-Type:text/html;charset=utf-8");
    error_reporting(E_ALL & ~E_DEPRECATED);
    $page = $_GET['c'];
    $htmlfile = fopen("effectshow_sub_$page.html", "w");
    $htmlcontext ="<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <title>效果展示</title>
    <link rel='stylesheet' type='text/css' href='../css/reset.css'>
    <link rel='stylesheet' type='text/css' href='../css/effectshow_sub_main.css'>
    <link rel='stylesheet' type='text/css' href='../css/footer.css'>
    <script src='../js/jquery.1.9.1.min.js'></script>
    <script src='../js/effectshow_sub.js'></script>
</head>
<body>
    <div class='mask_div show_num_id_div_anim'></div>
    <div class='sub_header'>
        <div class='header_logo_bg'>
            <div class='header_logo'>
                <a href='#' class='nav_img'><img src='../images/logo.png' alt='logo'></a>
                <div class='nav_add'><span>当前位置：</span><a href='../index.html' class='nav_a'>首页</a><span>></span><a href='#'>装修效果</a></div>
            </div>
        <div class='sub_header_nav'>
            <h1>案例展示</h1>
            <h2>Results show</h2>
        </div>
    </div>
    <div class='wrap_context'>
        <div class='effect_context'>
            <div class='big_img_show'>
                <ul class='show_img'>
                    <li><a href='#'><img id='hjccc' src='../images/effect_img_01.jpg' alt=''></a></li>
                    <li><a href='#'><img src='../images/effect_img_01.jpg' alt=''></a></li>
                    <li><a href='#'><img src='../images/effect_img_01.jpg' alt=''></a></li>
                    <li><a href='#'><img src='../images/effect_img_01.jpg' alt=''></a></li>
                </ul>
                <ul class='show_num' id='show_num_id'>
                    <!--底部数字栏-->
                </ul>
                <div class='show_left show_btn show_num_id_div_anim'><</div>
                <div class='show_right show_btn show_num_id_div_anim'>></div>
            </div>
        </div>
    </div>
            <!--  底部 -->
        <div class='footer'>
            <div class='footer_callme'>
                <div class='footer_logo'>
                    <img src='../images/logo.png' alt='logo'>
                </div>
                <div class='about_me'>
                    <h2>关于 我们</h2>
                    <p class='me_introduce'>新皖南工长俱乐部是一家优秀的装修公司，感谢你的选择。新皖南工长俱乐部是一家优秀的装修公司，感谢你的选择。新皖南工长俱乐部是一家优秀的装修公司，感谢你的选择。</p>
                    <hr class='about_me_hr'>
                    <p class='me_email'>549008556@qq.com</p>
                    <hr class='about_me_hr'>
                    <p class='me_phone'>P:542871241</p>
                    <hr class='about_me_hr'>
                    <p class='me_add'>新皖南工长俱乐部位于北京市朝阳区北沙滩123号</p>
                </div>
            </div>
            <div class='footer_nav'> 
                <div class='footer_text_con'>
                    <div class='footer_nav_con'>
                        <ul>
                            <li><a href='#'>首页</a></li>
                            <li><a href='#'>产品展示</a></li>
                            <li><a href='#'>装修流程</a></li>
                            <li><a href='#'>设计报价</a></li>
                            <li><a href='#'>售后服务</a></li>
                            <li><a href='#'>联系我们</a></li>
                        </ul>
                    </div>
                    <div class='footer_nav_text'>
                        <span><span class='footer_club_name'>新皖南工长俱乐部 </span>  版权所有</span>
                    </div>
                </div>
            </div>
        </div>
    
</body>
</html>";
    fwrite($htmlfile, $htmlcontext);
?>