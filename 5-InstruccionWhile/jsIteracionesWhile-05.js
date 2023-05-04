/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino*/
function mostrar() {
  let sexo;
sexo = prompt("ingrese su sexo: F o M  ").toLocaleLowerCase();

while( sexo != "f" && sexo != "m"){
  
  sexo = prompt("sexo invalido. ingrese sexo F/M").toLocaleLowerCase();
  
}
 
document.getElementById("txtSexo").value = sexo;
}
