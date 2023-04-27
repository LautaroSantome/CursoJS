function mostrar() {
  let mes = document.getElementById("txtMes").value;

  // alert(mes);
  switch (mes) {
    case "Enero":
      alert("que comiences bien el año!!!");
      break;
    case "Marzo":
      alert("a clase");
      break;
    case "Julio":
      alert("se vienen las vacaciones");
      break;
    case "Diciembre":
      alert("felices fiestas!!!");
      break;
    default:
      alert("este mes no tiene respuesta");
  }
}
