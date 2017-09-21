$(document).ready(() => {
	var out = "";
	var list = ["Apple", "Strawberry", "Orange", "Grape", "Banana", "Cherry", "Peach"];
	list.sort();
	while (list.length > 0) {
		var r = Math.floor(Math.random() * (list.length));
		out += "<li>" + list[r] + "</li>";
		delete list[r];
		list.sort();
		list.pop();
	}
	$("#nolistorder").html(out);
});
