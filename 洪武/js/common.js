
/**
 * Created by ${刘家福} on ${2017.05.18}.
 */
var windowHeight =window.innerHeight || document.documentElement.clientHeight;
var index_banner=document.getElementById("index_banner");
var nav=document.getElementsByTagName("nav")[0];


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
            console.log(11);
        }else
        {
            index_banner.style.height="520px";
        }
    } ();


}) ();
console.log(index_banner.offsetHeight);
console.log(windowHeight);

//  导航栏高亮当前页

/*for (var i = 0,len=lis.length; i < len; i++) {
 lis[i].onclick= function () {
 /!*for (var j = 0,len=lis.length; j < len; j++) {
 //lis[j].removeAttribute("class","current");
 }*!/
 //this.setAttribute("class","current");
 this.className="current";
 }
 }*/