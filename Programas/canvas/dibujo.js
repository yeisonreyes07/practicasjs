var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "#FAA";
    var espacio = ancho / lineas;


while(l < lineas)
{
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    l = l + 1;
}

dibujarLinea("colorcito", 1, 1, 1, 299);
dibujarLinea("colorcito", 1, 299, 299, 299);

}