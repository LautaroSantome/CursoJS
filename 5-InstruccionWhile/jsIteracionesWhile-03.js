/*
al presionar el botón pedir la CLAVE (ayuda: es abc123)*/
function mostrar() {
  let pass_guardado = "abc123";
  let clave;

  clave = prompt("ingrese clave");
  while (clave != pass_guardado) {
  clave = prompt("clave invalida, ingresela nuevamente");
  }

  alert("bienvenido Sr. usuario");
}
