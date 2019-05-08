window.onload = function() {
	var t_body = document.getElementsByName("tbody");
	for (var i = 0; i < 5; i++) {
		var td1 = "<td class=\"ts0" + i + "\"><input type=\"checkbox\"/></td>";
		var td2 = "<td class=\"shap\">";
		td2 = "<div class=\"img\">";
		td2 = td2 + "<img src=\"img/0" + i + ".jpg\"/></div>";
		td2 = td2 + "<div class=\"img-text\">Sonyl/索尼 DSC-WX300</div></td>";
		var td3 = "<td class=\"price\">1428.50</td>";
		var td4 = "<td class=\"jihe\"><div class=\"sums\">";
		td4 = td4 + "<input type=\"button\" class=\"desc\" value=\"-\" />"
		td4 = td4 + "<input type=\"text\" class=\"text\" value=\"1\" />"
		td4 = td4 + "<input type=\"button\" class=\"add\" value=\"+\" /></div></td>"
		var td5 = "<td class=\"prices\">0</td>";
		td5 = td5 + "<td class=\"del\">删除</td></tr>";
		t_body.innerHTML = td1 + td2 + td3 + td4 + td5;
	}
}
