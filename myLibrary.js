// 数组去重
;-function(w){
	function distince(arr){
		var newArr=[],
			
			 obj={};
		for(var i=0;i<arr.length;i++){
			if(!(arr[i] in obj)){
				newArr.push(arr[i]);
				obj[[arr[i]]]='a';

			}
		}
		return newArr;
	}
	w.distince = distince;
}(window);

// 统计数组元素频次
;-function(w){
	function count(arr){
		var obj={},
			i,
			len=arr.length,
			n=0;
		for(i=0;i<len;i++){
			if(!obj.hasOwnProperty(arr[i])){
				
				obj[arr[i]]=1;
			}else{
				obj[arr[i]]+=1;
			}
		}
		return obj;
	}
	w.count=count;
}(window);

 //数组深拷贝
 ;-function(w){
 	function clone(arr){
		var newArr=[],
			i;
		for(i=0;i<arr.length;i++){
			if(Array.isArray(arr[i])){
				newArr.push(clone(arr[i]));
			}else{
				newArr.push(arr[i]);
			}
		}
		return newArr;
	}
 	w.clone = clone;
 }(window);

 // 递归--统计多维数组个数
 
 ;-(function(w){
	function getCount(arr){
		var num=0,i;
		for(i=0;i<arr.length;i++){
			if(Array.isArray(arr[i])){
				num+=getCount(arr[i])
			}else{
				num++;
			}
		}
		return num;
	}
	w.getCount=getCount;
})(window);
//闭包--允许函数执行次数
;(function(w){
	function counts(f,n=3){
		var num=0;
		return function(){
			if(num<n){
				f();
				num++;
			}else{
				console.info("please stop......");
			}
		}
	}
	w.counts=counts;
})(window);
// 闭包--节流函数
;(function(w){
	function buffer(f,t=3000){
		var now=Date.now();
		return function(){
			if(Date.now()-now>t){
				f();
				now=Date.now();
			}else{
				console.info("please stop......");
			}
		}
	}
	w.buffer=buffer;
})(window);