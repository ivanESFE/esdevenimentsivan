var botonElement = document.getElementById("botonClick");
var pElement = document.getElementById("areaContador");
var contador = 0;
var reiniciar = document.getElementById("reset")
var mierda = 0

botonElement.onclick = function () {
       contador++;
       pElement.textContent = contador;
}


reiniciar.onclick = function(){
       location.reload()
}