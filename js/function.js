//兼容性的获取文本内容
function getText(obj,val){
  if(val!=undefined){	
  		if(obj.textContent!=undefined){	
  			obj.textContent=val;
  		}else{	  
  			obj.innerText=val;
  		}
  }else{	
  		if(obj.textContent!=undefined){	
  			return obj.textContent;
  		}else{	  
  			return obj.innerText;
  		}
  }
}

//1兼容性的通过类名获取元素
function getClass(selector,obj){
  obj=obj||document;
  if (document.getElementsByClassName) {
    return obj.getElementsByClassName(selector)
  }else{
    var all=obj.getElementsByTagName("*");
    var newarr=[];
    for (var i = 0; i < all.length; i++) {
      if (check(arr[i].className,selector)) {
        newarr.push(all[i])
      };
    };
    return newarr;
  }
}

//获取通用样式的兼容函数
function getStyle (obj,attr) {
  if(window.getComputedStyle){
    return getComputedStyle(obj,null)[attr]
  }else{
    return obj.currentStyle[attr]
  }
}


//调用document对象方法的函数
function $(s,obj){
  if (typeof s=="string") {
    obj=obj||document;
    if (s.charAt(0)==".") {
      return getClass(s.slice(1),obj)
    }else if (s.charAt(0)=="#") {
      return document.getElementById(s.slice(1))
    }else if (/^[a-z]+[a-z1-6]?/g.test(s)) {
      return odj.getElementsByTagName(s)
    };
  }else if (typeof s=="function") {
    window.onload=function(){
      s()
    }
  }
}

//获得一个元素的所有的元素子节点
function getFirst(obj){
     return getChild(obj)[0];
}
//获得一个元素第一个元素子节点
function getLast(obj){
  var arr=getChild(obj);
     return arr[arr.length-1]
}
//获取下一个元素的兄弟节点
function getNext(obj){
     var next=obj.nextSibling;
     if (next==null) {
          return;
     }
     while(next.nodeType!=1){
      next=next.nextSibling;
      if (next==null) {
        return;
      }
    }
    return next;
}
//追加到某一个元素后面的函数
   function insertAfter(obj,newobj){
     var next=getNext(obj);
     var parent=obj.parentNode;
     if (next) {
         parent.insertBefore(newobj,next);
     }else{
      parent.appendChild(newobj);
     }
   }
