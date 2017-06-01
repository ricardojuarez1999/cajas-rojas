btnadd = document.getElementById("add");
color = document.getElementById("color");
number = document.getElementById("number");
btnlimpiar = document.getElementById('limpiar');

btnadd.onclick = function() {
	var n = parseInt(number.value);
	for(var i= 0; i<n ;i++) {
		var sq = document.createElement("div");
		sq.setAttribute("class", "square "+ color.value);
		document.getElementById("cub").appendChild(sq);
	}
}
btnlimpiar.onclick = function(){
	document.getElementById('cub').innerHTML='';
}