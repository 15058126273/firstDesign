$(function(){
		//console.log("你们这帮喜欢F12小赤佬了给我小点动静！")
		var startDate = new Date("1994/08/09 00:00:00").getTime();//出生时间
		var lastDate = new Date("2074/08/09 00:00:00").getTime();//终老时间
		var oldDate = new Date("2016/05/01 00:00:00").getTime();//初始时间	
		var num = $(".css3").length,//九宫背景图数量
		runSpeed = 1000,//九宫图循环速度
		x = 0,//九宫图下标
		sign = 0,//九宫图速度变化方式 0：减慢   1：加快
		i = 0,//点击次数
		wh = 0;//爱心宽度/高度
		
		//九宫背景图滚动
		setTimeout(timeGoing,runSpeed);
		function timeGoing(){
			var obj = $(".now_border");
			x = parseInt($(obj[0]).attr("index")) + 1;
			x = x==num?0:x;
			$(".css3").removeClass("now_border");
			$(".css3[index="+x+"]").addClass("now_border");
			if(sign == 0){
				if(runSpeed > 40){
					runSpeed = runSpeed - 40;
				}else{
					sign = 1;
				}
			}else if(runSpeed <1000){
				runSpeed = runSpeed + 40;
			}else{
				sign = 0;
			}
			setTimeout(timeGoing,runSpeed);
		}
		
		//点击页面出现爱心
		document.onmousedown=function showLove(ev){
			i++;
			wh = Math.floor(Math.random()*80+20);
			var oEvent=ev||event||window.event;
			var oLeft=oEvent.clientX;
			var oTop=oEvent.clientY;
			if(oEvent.button == "2"){  
				$("#clickLove").append("<div class=\"css9\" id=\"showImg_"+i+"\" style=\"background:url('common/images/temp/love2.png');background-size:100% 100%; \"></div>");
	        } else if(oEvent.button == "0"){
				$("#clickLove").append("<div class=\"css9\" id=\"showImg_"+i+"\" style=\"background:url('common/images/temp/love.png');background-size:100% 100%; \"></div>");
	        } 
			$("#showImg_"+i).css({"top":(oTop-wh/2)+"px","left":(oLeft-wh/2)+"px","width":wh+"px","height":wh+"px","line-height":wh+"px","font-size":wh/5+"px"});
			$("#showImg_"+i).fadeIn(500,function(){
				$(this).fadeOut(2000,function(){
					$(this).remove();
				});
			});
		}
		
		//生命时间显示
		runTime();
		setInterval(runTime,1000);
		function runTime(){
			var time = new Date().getTime();
			$("#lifeTime").html("已呼吸："+parseInt((time - startDate)/1000)+" 秒 余生："+parseInt((lastDate - time)/1000)+" 秒");
			$("#heart_img").fadeOut(500,function(){
				$(this).fadeIn(500);
			});
		}
		
		
		//歌词时间
		var lrctime = [0 , 14.23 , 22 , 29.24 , 36.88 , 45.7 , 53 , 60.53 ,
		               68 , 75.16 , 83.52 , 90.49 , 98.64 , 118.11 , 125.16 ,
		               133.31 , 140.22 , 147.22 , 155.82 , 162.73 , 170.64];
		var audio = document.getElementById("bgm");
		var oriTop = 27;//初始定位 top
		var presentL = 0;//当前歌词行下标
		audio.ontimeupdate = function(e) {
		    //遍历所有歌词，看哪句歌词的时间与当前时间吻合
		    for (var i = 0; i < lrctime.length; i++) {
		         if ( this.currentTime < lrctime[i] || i == lrctime.length-1 && this.currentTime > lrctime[i]) {
		            //显示到页面
		            if(this.currentTime > lrctime[i]){
		            	i = lrctime.length;
		            }
		            if(presentL != i-1){
			            $(".lrcp").removeClass("lyric_now");
			            $("#lId"+(i-1)).addClass("lyric_now");
			            $("#llrcId").css("transform","rotateX("+17*(i-1)+"deg)");
		            	presentL = i - 1;
		            }
		            break;
		        };
		    };
		};
		//歌词界面浮动爱心
		waveFloat("lrctextId","float_img1");
		waveFloat("lrctextId","float_img2");
		waveFloat("lrctextId","float_img3");
		waveFloat("lrctextId","float_img4");
		waveFloat("lrctextId","float_img5");
		waveFloat("lrctextId","float_img6");
		
        //平台、设备和操作系统
        var system = {win: false,mac: false,xll: false,ipad:false};
        //检测平台
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.xll = (p == "X11") || (p.indexOf("Linux") == 0);
        system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false;
        //如果是手机访问就将歌词面板定位到手机上边
        if (!system.win && !system.mac && !system.xll && !system.ipad) {
 			$(".lyrTex").css({"top":"50px","left":"50%","margin-left":"-200px"});
        }
        var winH = window.screen.height;
        console.log(winH);
        var lrcH = $("#lrctextId").height();
        $("#lrctextId").css("top",(winH/2-lrcH)+"px");
	}) 
	
	
	//实现左右摆动   pId:父窗口id  本体id 
	function waveFloat(pId,id){
		var 
		pw = $("#"+pId).width(),
		w = $("#"+id).width(),
		x = left, //当前定位
		skew = pw/4 - w,//偏移范围
		left = skew + Math.random()*(pw-skew*2),//原始定位
		angle = 0,//角度
		achange = 1;//角度变化量
		setInterval(runwave,20);
		function runwave(){
			x = left + skew*Math.sin( Math.PI/180*angle);		
			angle += achange;
			$("#"+id).css("left" , x+"px");
		}
	 }