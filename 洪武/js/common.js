/**
 * Created by ${刘家福} on ${2017.05.28}.
 */
var windowHeight =window.innerHeight || document.documentElement.clientHeight;
var index_banner=document.getElementById("index_banner");
var nav=document.getElementsByTagName("nav")[0];
var ul=document.getElementById("ul");
var arrow=document.getElementById("arrow");


//  返回按钮
var back_top=document.getElementById("back_top");
back_top.style.display="none";
window.onscroll= function () {
    var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop>windowHeight)
    {
        back_top.style.display="block";
    }else{
        back_top.style.display="none";
    }

    //  固定导航栏
    if (scrollTop>nav.offsetTop)
    {
        nav.style.position='fixed';
        nav.style.top=0;
    }else
    {
        nav.style.position='absolute';
        nav.style.top="50px";
    }
};
/*back_top.addEventListener("click", function () {
    document.offsetTop=0;
});*/
back_top.onclick= function () {
    document.offsetTop=0;
};

// 判断首页是否满屏
//  目前无法解决banner图片大小随窗口而变化而变化，   但可以通过刷新窗口实现
(function (){
    window.onresize= function () {
        if (windowHeight<=700)
        {
            index_banner.style.height="100vh";
        }else
        {
            index_banner.style.height="520px";
        }
    } ();


}) ();











//轮播图
/*console.log(arrow.children.length);


arrow.children[0].onclick= function () {
    alert(1);

    animate(ul,{left:320})
};

arrow.children[1].onclick= function () {
    //alert(2);
    animate(ul,{left:-320})
};*/
/*for (var i = 0; i < arrow.length; i++) {
    if (arrow.children[i].className==="prev")
    {
        animate(ul,{"left":320}, function () {

        })
    }else
    {
        animate(ul,{"left":-320}, function () {

        })
    }
}*/

/*function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //开始遍历 JSON
        var flag = true;   //用来判断是否停止定时器    一定要写到遍历的外面
        for (var attr in json) {  // var 属性 in 对象  。json[attr]得到的是属性的目标值
            //得到属性当前的值
            ///   用 for   in   来遍历 json对象
            var current = parseInt(getStyle(obj, attr));
            var step = (json[attr] - current) / 10;    //   步长=（目标位置-现在位置）/10
            step = step > 0 ? Math.ceil(step) : Math.floor(step);  //  步长如何取整

            //添加透明度
            if (attr == "opacity")  //判断用户有没有输入opacity
            {
                if ("opacity" in obj.style)  //判断浏览器是否支持opacity
                {
                    obj.style.opacity=json[attr];
                }
                else
                {
                    obj.style.filter="alpha(opacity="+json[attr]*100+")";  //ie678写法
                }
            }

            //  添加zIndex
            else if (attr == "zIndex")
            {
                obj.style.zIndex=json[attr];
            }
            else
            {
                obj.style[attr] = current + step + "px";
            }

            //   判断所有的属性都实现之后才清空定时器
            if (current != json[attr])  //只要有某一个不满足条件  就不能停止定时器，此句一定写在遍历里面，  让其遍历里边所有的目标值
            {
                flag = false;
            }
        }

        if (flag)
        {
            clearInterval(obj.timer);
            //alert("在某一条语句后面加一个语句，可以用来判断函数是否执行到此处")
            if (fn) //如何判断动画函数执行完毕呢？   当函数清除定时器时，表明动画执行完毕
            {
                fn();
            }
        }
    }, 30)
}*/




/*
function animate(obj, json) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //开始遍历 JSON
        var flag = true;   //用来判断是否停止定时器    一定要写到遍历的外面
        for (var attr in json) {  // var 属性 in 对象  。json[attr]得到的是属性的目标值
            //得到属性当前的值
            ///   用 for   in   来遍历 json对象
            var current = (getStyle(obj,attr));
            console.log(attr);
            console.log(current);
            var step = (json[attr] - current) / 10;    //   步长=（目标位置-现在位置）/10
            step = step > 0 ? Math.ceil(step) : Math.floor(step);  //  步长如何取整

            obj.style[attr]=current+step+"px";
        }


    }, 30)
}


/!**封装返回当前样式的函数*!/
function getStyle(obj,attr) {   //  (谁的，哪一个样式)
    if (obj.currentStyle)
    {
        return obj.currentStyle[attr]; // ie的写法
        //  这里不能通过'.'来获取属性---------必须通过[]来获取
        //  因为传进来的参数是一个字符串------通过'.'将获取不到属性
    }
    else
    {
        return window.getComputedStyle(obj,null)[attr];   // w3c写法
    }
}*/
