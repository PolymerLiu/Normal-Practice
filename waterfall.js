window.onload=function(){
	waterfall('main','box');
	var dataInt={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'}]};

	window.onscroll = function(){
		if (checkScrollSlide()) {
			var oParent=document.getElementById('main');
			for (var i = 0; i < dataInt.data.length; i++) {  //把获取到的图片添加到现有图片的后边
				var oBox=document.createElement('div');
				oBox.className='box';
				oParent.appendChild(oBox);

				var oPic=document.createElement('div');
				oPic.className='pic';
				oBox.appendChild(oPic);

				var oImg=document.createElement('img');
				oImg.src="./images/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
				
			}
			waterfall('main','box');
		}
	}
}

function waterfall(parent,box){
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);//将main下所有class为box的元素取出来
	var oBoxW=oBoxs[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/oBoxW);// 计算整个页面显示的列数（页面宽/box的宽）
	oParent.style.cssText='width:'+oBoxW*cols+'px; margin:0 auto';// 设置main 的宽度


	var hArr=[];//存放每一列高度的数组
	for (var i = 0; i < oBoxs.length; i++) {
		if (i<cols) {
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
			var index=getMinhIndex(hArr,minH);

			oBoxs[i].style.position='absolute';  
			oBoxs[i].style.top=minH+'px';
			oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
			hArr[index]+=oBoxs[i].offsetHeight;
		}
	}

}

function getByClass(parent,clsName){
	var boxArr=[],//用来存储获取到的所有class为box 的元素
	    oElements=parent.getElementsByTagName('*');//获取父元素下所有的子元素
	for (var i = 0; i < oElements.length; i++) {
		if (oElements[i].className==clsName) {
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}
function getMinhIndex(arr,val){
	for(var i in arr){
			if (arr[i]==val) {
			return i;
		}
	}
}


// 检测是否具备滚动加载数据的条件
function checkScrollSlide(){
	var oParent=document.getElementById('main');
	var oBoxs=getByClass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);//最后一个图片离页面顶端的高度
	var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;  //页面顶端离窗口顶部的高度，即滚动条滚动的距离
	var height=document.body.clientHeight || document.documentElement.clientHeight;  //窗口高度
	return(lastBoxH<scrollTop+height)?true:false;
}
