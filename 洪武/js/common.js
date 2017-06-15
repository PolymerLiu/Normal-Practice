
/**
 * Created by ${刘家福} on ${2017.05.18}.
 */
var back_top=document.getElementById("back_top");
back_top.style.display="none";
var windowHeight =window.innerHeight || document.documentElement.clientHeight;
var index_banner=document.getElementById("index_banner");
//console.log(windowHeight);
var nav=document.getElementsByTagName("nav")[0];
console.log(windowHeight);
//var ul=document.getElementById("ul");
// var lis=ul.children;
if (windowHeight<=638)
{
    index_banner.style.height="100vh";
}

//  返回按钮
window.onscroll= function () {
    var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop);
    if (scrollTop>windowHeight/2)
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