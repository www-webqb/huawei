$(function(){
var jdjd=jQuery.noConflict();
jdjd("img").lazyload({
      threshold:10,
      event:"scroll",
      effect:'fadeIn',
})
	//华为大轮播
	 var img=$(".sdsd");
	 var n1=0;
	 var t=setInterval(move,3000);
	 function move(){
	 	n1++;
	 	if(n1>img.length-1){
	 		n1=0;
	 	}
	 	for (var i=0;i<img.length;i++) {
	 		animate(img[i],{opacity:0},500)
	 	}
	 	animate(img[n1],{opacity:1},500)
	}







//下拉菜单
function xlcd(a,b){
      a.onmouseover=function(){
             b.style.display="block"        	
        }
        a.onmouseout=function(){
             b.style.display="none";
         }	
}
       var cd=$(".box1")[0];
       var xl=$(".hidden")[0];
       xlcd(cd,xl)

       var cd1=$(".box2")[0];
       // console.log(cd1);
       var xl1=$(".heidden")[0];
       // console.log(xl1)
       xlcd(cd1,xl1)

       var cd2=$(".box3")[0];
       var xl2=$(".heidden2")[0];
       xlcd(cd2,xl2)

       var cd3=$(".box4")[0];
       var xl3=$(".heidden3")[0];
       xlcd(cd3,xl3)

       var cd4=$(".box5")[0];
       var xl4=$(".heidden4")[0];
       xlcd(cd4,xl4) 

       var cd5=$(".box6")[0];
       var xl5=$(".heidden5")[0];
       xlcd(cd5,xl5)

       var cd6=$(".box7")[0];
       var xl6=$(".heidden6")[0];
       xlcd(cd1,xl6)


//侧边栏显示
       var cb1=$(".cb1")[0];
       var cbb1=$(".cbb1")[0];
       xlcd(cb1,cbb1)

       var cb2=$(".cb2")[0];
       var cbb2=$(".cbb2")[0];
       xlcd(cb2,cbb2) 

       var cb3=$(".cb3")[0];
       var cbb3=$(".cbb3")[0];
       xlcd(cb3,cbb3)       
 
})


