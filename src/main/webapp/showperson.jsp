<%@ page language="java" contentType="text/html; charset=utf-8"
     pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTR-8">
		<script src="js/jquery.min.js" />
		<title>person list</title>
	</head>

	<body>
		<table style="border-bottom-width: 1px;">
			<tr>
				<th>姓名</th>
				<th>年龄</th>
			</tr>
		</table>
		<script type="text/javascript">
			$(document).ready(function() {
				for(var i = 0, i < 3, i++) {
					$("table").add("<td>${person[1].name}</td><td>${person[1].age}</td></tr>");
				}
			});
		</script>
	</body>

</html>