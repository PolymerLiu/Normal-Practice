/**
 * Created by ${刘家福} on ${2017.05.18}.
 */

(function (){

    function $(id) {
        return document.getElementById(id);
    }

    var container1 = $('container1');
    var list1 = $('list1');
    var buttons1 = $('buttons1').getElementsByTagName('span');
    var prev1 = $('prev1');
    var next1 = $('next1');


    var index = 1;
    var animated = false;
    var timer;

    function showButton() {
        for (var i = 0; i < buttons1.length; i++) {
            if (buttons1[i].className == 'on') {
                buttons1[i].className = '';
                break;
            }
        }
        buttons1[index - 1].className = 'on';
    }

    function animate(offset) { //图片切换函数
        animated = true;
        var newLeft = parseInt(list1.style.left) + offset;
        var time = 300;//位移总时间
        var interval = 10;//位移间隔时间
        var speed = offset / (time / interval);//每次位移量

        function go() {
            if ((speed < 0 && parseInt(list1.style.left) > newLeft) || (speed > 0 && parseInt(list1.style.left) < newLeft)) {
                list1.style.left = parseInt(list1.style.left) + speed + 'px';
                setTimeout(go, interval);
            }
            else {
                animated = false;
                list1.style.left = newLeft + 'px';
                if (newLeft > -1214) {
                    list1.style.left = -3642 + 'px';
                }
                if (newLeft < -3642) {
                    list1.style.left = -1214 + 'px';
                }
            }
        }

        go();
    }

    function play() {
        timer = setInterval(function () {
            next1.onclick();
        }, 2000);
    }

    function stop() {
        clearInterval(timer);
    }


    next1.onclick = function () {
        if (index == 3) {
            index = 1
        } else {
            index += 1;
        }

        showButton();
        if (!animated) {
            animate(-1214);
        }
    }
    prev1.onclick = function () {
        if (index == 1) {
            index = 3
        } else {
            index -= 1;
        }

        showButton();
        if (!animated) {
            animate(1214);
        }
    }

    for (var i = 0; i < buttons1.length; i++) {
        buttons1[i].onclick = function () {
            if (this.className == 'on') {//如果将要显示的图片已经显示，通过return来阻断后边代码运行
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -1214 * (myIndex - index);
            if (!animated) {
                animate(offset);
                index = myIndex;
                showButton();
            }

        }
    }
    container1.onmouseover = stop;
    container1.onmouseout = play;
    play();


}) ();



(function (){

    function $(id) {return document.getElementById(id);}
    var container = $('container');
    var list = $('list');
    var buttons = $('buttons').getElementsByTagName('span');
    var prev = $('prev');
    var next = $('next');


    var container1 = $('container1');
    var list1 = $('list1');
    var buttons1 = $('buttons1').getElementsByTagName('span');
    var prev1 = $('prev1');
    var next1 = $('next1');


    var index = 1;
    var animated = false;
    var timer;

    function showButton(){
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function animate(offset){ //图片切换函数
        animated = true;
        var newLeft = parseInt(list.style.left) + offset;
        var time = 300;//位移总时间
        var interval = 10;//位移间隔时间
        var speed = offset/(time/interval);//每次位移量

        function go(){
            if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)) {
                list.style.left = parseInt(list.style.left) + speed +'px';
                setTimeout(go,interval);
            }
            else{
                animated = false;
                list.style.left = newLeft + 'px';
                if (newLeft > -1214) {
                    list.style.left = -3642 + 'px';
                }if (newLeft < -3642) {
                    list.style.left = -1214 + 'px';
                }
            }
        }
        go();
    }

    function play(){
        timer = setInterval(function(){
            next.onclick();
        },3000);
    }

    function stop(){
        clearInterval(timer);
    }


    next.onclick = function(){
        if (index == 3) {
            index = 1
        }else{
            index += 1;
        }

        showButton();
        if (!animated) {
            animate(-1214);
        }
    }
    prev.onclick = function(){
        if (index == 1) {
            index = 3
        }else{
            index -= 1;
        }

        showButton();
        if (!animated) {
            animate(1214);
        }
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function(){
            if (this.className == 'on') {//如果将要显示的图片已经显示，通过return来阻断后边代码运行
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -1214 * (myIndex-index);
            if (!animated) {
                animate(offset);
                index = myIndex;
                showButton();
            }

        }
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    play();






}) ();