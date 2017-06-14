
/**
 * Created by ${刘家福} on ${2017.05.18}.
 */
var back_top=document.getElementById("back_top");
back_top.style.display="none";
var windowHeight =window.innerWidth || document.documentElement.clientWidth;

//var ul=document.getElementById("ul");
// var lis=ul.children;


//  返回按钮
window.onscroll= function () {
    var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop>windowHeight/2)
    {
        back_top.style.display="block";
    }else{
        back_top.style.display="none";
    }
};
back_top.addEventListener("click", function () {
    document.offsetTop=0;
});

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
