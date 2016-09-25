/**
 * 刷新li样式
 */
function flushLi() {
    var windowH = document.documentElement.clientHeight,
        windowW = document.documentElement.clientWidth,
        needHeight = windowH - $(".topDiv").height() - $(".descDiv").height() - 50,
        listLi = $(".listLi"),
        liW, first = true;
    $("#listDiv").css("height", needHeight + 'px');
    $(".blankLi").css("height", (needHeight-(windowW * 0.6*0.2*3/2)) + 'px');
    setInterval(flushWH , 20);
    function flushWH() {
        var li, r , g, top;
        for(var i= 0,l=listLi.length; i < l;i++) {
            li = $(listLi[i]) , top = li.offset().top;
            if (!first && ( top < 0 || top > windowH || li.hasClass('blankLi'))) {
                continue;
            }else if (top >= 100 && top < 100 + windowW * 0.12) {
                liW = windowW * 0.7;
            } else {
                liW = windowW * 0.6;
            }
            r = g = Math.round(Math.abs(top - 100)/needHeight*255);
            li.css({
                "font-size": (liW * 0.2 * 0.4 > 5 ? (liW * 0.2 * 0.4) : 5) + 'px',
                "line-height": (liW * 0.2 > 15 ? liW * 0.2 : 15) + 'px',
                "color": 'rgb('+r+','+g+',200)'
            })
            li.parent('a').css({
                "width": liW + 'px',
                "height": liW * 0.2 + 'px',
            })
        }
        first = false;
    }
}



$(function () {
    //刷新列表
    flushLi();
})


