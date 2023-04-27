function mostrar() {
  let edad;

  edad = parseInt(document.getElementById("txtEdad").value);
  if (!(edad < 13 || edad > 17)) {
    alert("sos adolescente");
  }
} //operadores logicos
// |= pipe 2 pipe es o
// && significa y
// ! not
