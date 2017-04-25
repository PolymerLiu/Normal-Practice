window.onload = function(){
	if (!document.getElementsByClassName) {//如果不支持getElementsByClassName,则调用如下自定义函数
		document.getElementsByClassName = function (cls) {
			var ret = [];
			var els = document.getElementsByTagName('*');
			for (var i = 0; i < els.length; i++) {
				if (els[i].className === cls
					|| els[i].className.indexOf(cls + '') >= 0
					|| els[i].className.indexOf('' + cls) >= 0
					|| els[i].className.indexOf('' + cls + '') >= 0) {
					ret.push(els[i]);
				}
			}
			return ret;
		}
	}  

	var cartTable = document.getElementById('cartTable');
	var tr = cartTable.children[1].rows;//获取cartTable 下第二个子元素（即tbody）下所以的行
										//.rows为表格所特有的属性
	var checkInputs = document.getElementsByClassName('check');
	var checkAllInputs = document.getElementsByClassName('check-all');
	var seleltedTotal = document.getElementById('seleltedTotal');
	var priceTotal = document.getElementById('priceTotal');
	var selected = document.getElementById('selected');
	var foot = document.getElementById('foot');
	var selectedViewList = document.getElementById('selectedViewList');
	var deleteAll = document.getElementById('deleteAll');

	//计算
	function getTotal() {
		var selected = 0;
		var price = 0;
		var HTMLstr = '';
		for (var i = 0; i < tr.length; i++) {
			if (tr[i].getElementsByTagName('input')[0].checked) {//如果被选中，则进行计算
				selected += parseInt(tr[i].getElementsByTagName('input')[1].value);
				price += parseFloat(tr[i].cells[4].innerHTML);//.cells为表格所特有属性
				HTMLstr += '<div><img src="' + tr[i].getElementsByTagName('img')[0].src +'"><span class = "del" index = "'+ i +'">取消选择</span></div>'
			}
		}
		selectedTotal.innerHTML = selected;
		priceTotal.innerHTML = price.toFixed(2);
		selectedViewList.innerHTML = HTMLstr;
		if (selected == 0) {
			foot.className = 'foot';
		}
	}
	
	// 小计 
 	function getSubTotal(tr){
		var tds = tr.cells;
		var price = parseFloat(tds[2].innerHTML);
		var count = parseInt(tr.getElementsByTagName('input')[1].value);
		var subTotal = parseFloat(price*count).toFixed(2);
		tds[4].innerHTML = subTotal;
	}

	//全选按钮
	for (var i = 0; i < checkInputs.length; i++) {
		checkInputs[i].onclick = function () {
			if (this.className === 'check-all check') {
				for (var j = 0; j < checkInputs.length; j++) {
					checkInputs[j].checked = this.checked;
				}
			}
			if (this.checked == false) {
				for (var k = 0; k < checkAllInputs.length; k++) {
					checkAllInputs[k].checked = false;
				}
			}
			getTotal();
		}
	}

	//已选商品预览
	selected.onclick = function () {
		if (foot.className == "foot") {
			if (selectedTotal.innerHTML != 0) {
				foot.className = "foot show";
			}
		}
		else{
			foot.className = "foot";
		}
	}

	//从预览窗口取消商品
	selectedViewList.onclick = function (e) {
		e = e || window.event;
		var el = e.srcElement;
		if (el.className == 'del') {
			var index = el.getAttribute('index');
			var input = tr[index].getElementsByTagName('input')[0];
			input.checked = false;
			input.onclick();
		}
	}

	//通过+  - 号来改变商品数量
	for (var i = 0; i < tr.length; i++) {
		tr[i].onclick = function (e) {
			e = e || window.event;
			var el = e.srcElement;
			var cls = el.className;
			var input = this.getElementsByTagName('input')[1];
			var val = parseInt(input.value);
			var reduce = this.getElementsByTagName('span')[1];
			switch(cls){
				case 'add':
					input.value = val + 1;
					reduce.innerHTML = '-';
					getSubTotal(this);
					break;
				case 'reduce':
					if (val>1) {
						input.value = val - 1;
					}
					if (input.value <= 1) {
						reduce.innerHTML = '';
					}
					getSubTotal(this);
					break;
				case 'delete':
					var conf = confirm('确认删除吗？');
					if (conf) {
						this.parentNode.removeChild(this);
					}
					break;
				default:
					break;
			}
			getTotal();
		}

		//通过输入框来改变商品数量
		tr[i].getElementsByTagName('input')[1].onkeyup = function(){
			var val = parseInt(this.value);
			var tr = this.parentNode.parentNode;
			var reduce = tr.getElementsByTagName('input')[1];
			if (isNaN(val) || val < 1) {
				val = 1;
			}
			this.value = val;//把非法字符强制替换 为1
			if (val <= 1) {
				reduce.innerHTML = '';
			}
			else{
				reduce.innerHTML = '-';
			}
			getSubTotal(tr);

		} 
	}


	deleteAll.onclick = function () {
		if (selectedTotal.innerHTML != '0') {
			var conf = confirm('确认删除吗？');
			if (conf) {
				for (var i = 0; i < tr.length; i++) {
					var input = tr[i].getElementsByTagName('input')[0];
					if (input.checked) {
						tr[i].parentNode.removeChild(tr[i]);
						i--;
					}
				}
			}
		}	
	}

	//默认实现全选
	checkAllInputs[0].checked = true;
	checkAllInputs[0].onclick();
}