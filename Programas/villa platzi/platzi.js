// declarar variables primero.

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";
//variable para dibujar el mapa del dibujo
var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);
// hacer que los animales aparezcan en el lienzo del canvas
var vaca = new Image();
vaca.src = "vaca.png"
  vaca.addEventListener("load", dibujarvacas);

var pollo = new Image();
pollo.src = "pollo.png"
  pollo.addEventListener("load", dibujarpollos);

var cerdo = new Image();
cerdo.src = "cerdo.png"
  cerdo.addEventListener("load", dibujarcerdos);

//funcion para dibujar los animales
function dibujar(){
  papel.drawImage(fondo, 0, 0)
}
function dibujarvacas(){
  papel.drawImage(vaca, 10, 10)
}
function dibujarpollos(){
  papel.drawImage(pollo, 10, 300)
}
function dibujarcerdos(){
  papel.drawImage(cerdo, 300, 150)
}

// ciclo for para disparar numeros aleatorios
for (var i = 0; i < 10; i++) {
  var z = aleatorio(0,5);
  document.write(z + ", ");
}

// funcion para dibujar numeros aleatorios
function aleatorio(min, maxi){

var resultado;
resultado = Math.floor(Math.random() * (maxi - min + 1));
return resultado;
}
