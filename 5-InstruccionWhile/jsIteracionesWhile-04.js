/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
let numero;
numero = parseInt(prompt("ingrese un numero entre 0 y 9 "))

while( numero < 0 || numero > 9 || isNaN(numero)){
  numero = parseInt(prompt("Numero invalido. ingrese un numero entre 0 y 9 "))
  
}
 
document.getElementById("txtNumero").value = numero;

}
