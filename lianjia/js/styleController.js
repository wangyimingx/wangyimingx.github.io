/**
 * Created by CesyZhao on 2016/11/2.
 */
$(function(){
//   register message
//   改变距离可重发验证码的时间（默认为60秒）
    $('#msgButton').on('click', function () {
        var $btn = $(this).button('loading');
        var sec = 60;
        $('#msgButton').data('loading-text', '短信发送中...');
        var timer = setInterval(function(){
            $('#msgButton').text(sec+"s后可重发");
            sec-=1;
        },1000);
        setTimeout(function(){
            $btn.button("reset");
            clearInterval(timer);
        },60000);
    });
// login tabs
//登录的选项卡
    $(".tabs a").on("click",function(event){
        $(".border div").eq($(this).parent().index()).addClass("active").siblings().removeClass("active");
        $(".login-form").eq($(this).parent().index()).addClass("active").siblings().removeClass("active");
    });
//prevent dropdown menu from sliding up when click the checkbox
//阻止 点击下拉菜单中选项 时发生的菜单栏收回现象
    $(".checkLabel").on("click",function(event){
        event.stopPropagation();
    });
//show the black bg 显示下拉菜单时的黑色背景
    $(".choice a").on("click",function(e){
       if($(this).siblings().css("display") == "block"){
           $(this).find("span").addClass("caret");
           $(".bg").fadeOut();
       }else{
           $(".bg").fadeIn();
       }
    });
//当选择筛选条件时  更换当前条件
//有bug  在手机端下，选择条件多个的情况下，会发生变形,可以将其设置为默认选中第一个选中的条件，或者将固定其css宽度，
// 让其在超出的情况下显示(现在采用的方法)...
   $(".item-btn :button").on("click",function(){
       $(".bg").fadeOut();
       console.log($(this).parent().parent());
       //获取当前选中的条件的文字
       var text = $(this).parent().parent().find("input:checkbox:checked").parent().text();
       //当条件不为"不限"时进行更换
       if(text.indexOf("不限") ==-1){
       var a =  $(this).parent().parent().siblings();
       a.text(text);
       //添加向下箭头
       var span = $("<span></span>");
       span.addClass("caret");
           a.append(span);
           //添加样式
           a.addClass("current");
       }
   })
});