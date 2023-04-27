function mostrar()
{
	let edad;
let estadoCivil;
	edad = parseInt(document.getElementById("txtEdad").value);
	
	estadoCivil= document.getElementById("estadoCivil").value;

if ( (edad< 18 && estadoCivil != "Soltero")){
	alert("es muy pequeño para NO ser soltero")
} 


}