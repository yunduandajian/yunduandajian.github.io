/*
 * @Author: Fox Blue
 * @Date: 2021-01-26 23:00:31
 * @LastEditTime: 2021-09-26 09:13:23
 * @Description: Forward, no stop
 */
layui.config({version: false}).use(['layer', 'form','carousel','element', 'jquery', 'util'], function(){
    var layer = layui.layer
    ,form = layui.form
    ,carousel = layui.carousel
    ,element = layui.element
    ,util = layui.util
    ,$ = layui.jquery;
    carousel.render({
      elem: '#banner'
      ,width: '100%' 
      //,anim: 'updown' //切换动画方式
      //,autoplay:"flase"
    });
    //layer.msg('Hello World');
    //监听
    $("#memuright").click(function(){
        layer.open({
            type: 1,
            offset: ['0px', '100%'],
            skin: 'layui-anim layui-anim-rl layui-layer-adminRight',
            area : ['240px', '100%'],
            title: false,
            closeBtn: 0,
            shadeClose: true,
            content: $('#memubox'),
        });
    });
    
     //监听
     $("#menuleft").click(function(){
        layer.open({
            type: 1,
            id: "LAY_userPopupL",
			anim: -1,
			title: !1,
			closeBtn: !1,
			offset: "l",
			shade: .1,
			shadeClose: !0,
			skin: "layui-anim layui-anim-lr layui-layer-adminLeft",
			area: "60%",
            content: $('#menupro'),
        });
    });
    //选择语言
    window.selectLang = function(obj){
        layer.closeAll();
        var win = layer.open({
            type: 1 
            ,title: false //标题
            ,skin:"" //layui-layer-lan:蓝色，layui-layer-molv：墨绿色，默认灰色
            ,area: ['0px', '0px'] //宽度、高度
            ,shade: 0.8
            ,closeBtn: 0
            ,offset: 'lt'
            ,anim:5 //弹出动画
            ,shadeClose: true //弹框出现后，允许点击其它地方关闭
            ,maxmin: false //允许最大化
            ,content: $(".down-menu")  //内容
       });
        // $(".down-menu").slideToggle();
    }
    window.changelang = function(lang){
        $.get(langSec,{lang:lang},function(res){
            if(res.code == 1){
                window.location.reload()
            }
        })
    }

    // //固定Bar
    // util.fixbar({
    //     bar1: WHATFLAG
    //     ,click: function(type){
    //     // console.log(type);
    //         if(type === 'bar1'){
    //             window.location.href = WHATAPP;
    //         }
    //     }
    //     ,showHeight: 60
    //     ,css: function(){
    //         return {bottom: 75}
    //     }()
    // });
});

function chatapp(){
    if(WHATFLAG){
        window.location.href = WHATAPP;
    }
}