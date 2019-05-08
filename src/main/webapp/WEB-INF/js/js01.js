// 实现购物车清算功能
// 获取desc按钮和add按钮
var desc = document.getElementsByClassName('desc');
var add = document.getElementsByClassName('add');
// 获取总计total元素
var total = document.getElementById('total');
// 给desc按钮绑定事件
for (var i = 0; i < desc.length; i++) {
	desc[i].onclick = function() {
		// 1.改数量
		var num = this.nextElementSibling;
		if (parseInt(num.value) == 1) {
			return;
		}
		num.value = parseInt(num.value) - 1;
	};
	add[i].onclick = function() {
		// 1.改数量
		var num = this.previousElementSibling;
		num.value = parseInt(num.value) + 1;
	};
};
