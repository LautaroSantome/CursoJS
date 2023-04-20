function mostrar() {
  let edad;

  edad = parseInt(document.getElementById("txtEdad").value);
  if (edad >= 18) {
    alert("es mayor de edad");
  } else{
   alert("sos menor, anda a tu casa"); }
