const botonCambio = document.querySelector(".botonCambio");
const botonInicio = document.querySelector(".botonInicio");
const botonCrear = document.querySelector(".botonCrear");
const botonCopiar = document.querySelector(".botonCopiar");
const colorActual = document.querySelector(".valorActual");
const colorRojo = document.querySelector(".colorRojo");
const colorVerde = document.querySelector(".colorVerde");
const colorAzul = document.querySelector(".colorAzul");
const contenedor = document.querySelector(".body");


botonCambio.addEventListener('click', function() {
  console.log("Boton presionado");

  let rojo = Math.floor(Math.random()*256);
  let verde = Math.floor(Math.random()*256);
  let azul = Math.floor(Math.random()*256);

  colorActual.removeAttribute('hidden');


  contenedor.style.backgroundColor = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
  cadena = '(' + rojo + ',' + verde + ',' + azul + ')';
  limpiarYMostrar(cadena);
});

botonInicio.addEventListener("click",function(){
  contenedor.style.backgroundColor = '#f5f5f5';
  cadena = '(245,245,245)';
  limpiarYMostrar(cadena);
  
});

botonCrear.addEventListener('click', function() {
  console.log("Boton presionado");
  console.log(colorRojo.value);

  contenedor.style.backgroundColor = 'rgb(' + colorRojo.value + ',' + colorVerde.value + ',' + colorAzul.value + ')';
  cadena = '('+ colorRojo.value +', '+ colorVerde.value +', '+ colorAzul.value + ')';
  limpiarYMostrar(cadena);
});

botonCopiar.addEventListener("click", function(){
  navigator.clipboard.writeText(colorActual.textContent.slice(23).replace(/[()]/g, ""));
  alert("Color Copiado! " + colorActual.textContent.slice(23));
});

function limpiarYMostrar(cadena){
  colorActual.innerHTML = "El valor actual es rgb " + cadena;
}

