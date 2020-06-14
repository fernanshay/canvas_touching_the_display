var canvas= document.getElementById("canvas_cito");
var lienzo= canvas.getContext("2d");

lienzo.fillStyle= "black";
lienzo.fillRect(0, 0, canvas.width, canvas.height);

function puntosDibujo(color, xi, yi, xf, yf){
  lienzo.beginPath();
  lienzo.strokeStyle= color;
  lienzo.lineWidth= 1;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

document.addEventListener("mousemove", move);

function move(event){
  puntosDibujo("white", event.clientX, event.clientY, event.offsetX, event.offsetY);
  console.log(event);
}
