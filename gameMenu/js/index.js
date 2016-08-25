var lf = 0;
//实现左右摆动   pId:父窗口id  本体id
function waveFloat(pId, id) {
    var pw = $("#" + pId).width(),
        w = $("#" + id).width(),
        skew = pw / 3 - w,//偏移范围
        left = skew + Math.random() * (pw - skew * 2),//原始定位
        x = left, //当前定位
        achange = 1,//角度变化量
        angle = lf?180: 0;//角度
        lf = lf?0: 1;
    setInterval(runwave, 20);
    function runwave() {
        x = left + skew * Math.sin(Math.PI / 180 * angle);
        angle += achange;
        $("#" + id).css("left", x + "px");
    }
}



function flushLi() {
    var windowH = document.documentElement.clientHeight,
        windowW = document.documentElement.clientWidth,
        needHeight = windowH - $(".topDiv").height() - $(".descDiv").height() - 50,
        listLi = $(".listLi"),
        liW;
    $("#listDiv").css("height", needHeight + 'px');
    $(".blankLi").css("height", (needHeight-(windowW * 0.6*0.2*3/2)) + 'px');
    setInterval(flushWH , 40);
    function flushWH() {
        for(var i= 0,l=listLi.length; i < l;i++) {
            if ($(listLi[i]).offset().top >= 100 && $(listLi[i]).offset().top < 100 + windowW * 0.6*0.2) {
                liW = windowW * 0.6;
            } else {
                liW = windowW * 0.5;
            }
            if( $(listLi[i]).hasClass('blankLi')){
                continue;
            }
            var r = g = Math.round(Math.abs($(listLi[i]).offset().top - 100)/needHeight*255);
            $(listLi[i]).css({
                "width": liW + 'px',
                "height": liW * 0.2 + 'px',
                "font-size": (liW * 0.2 * 0.6 > 5 ? (liW * 0.2 * 0.6) : 5) + 'px',
                "line-height": (liW * 0.2 > 15 ? liW * 0.2 : 15) + 'px',

            })
            $(listLi[i]).find('a').css({
                "color": 'rgb('+r+','+g+',200)'
            })

        }
    }
}



$(function () {
    //刷新列表
    flushLi();
    //歌词界面浮动爱心
    waveFloat("listDiv", "float_img1");
    waveFloat("listDiv", "float_img2");
    waveFloat("listDiv", "float_img3");
    waveFloat("listDiv", "float_img4");
    waveFloat("listDiv", "float_img5");
    waveFloat("listDiv", "float_img6");


})


