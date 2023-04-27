function mostrar()
{let mes = document.getElementById("txtMes").value;
    switch (mes) {
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert("falta para el invierno");
            break;       
            case "Julio":
            case "Agosto":
                alert("abrigate que hace frio")
                break;
                case "Septiembre":
                case "Octubre":
                case "Nobiembre":
                case "Diciembre":
                    alert("estamos en verano")
                    break;
            }




}