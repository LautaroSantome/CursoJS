function mostrar() {
  
  let i=0; 
  let suma;
  let promedio;
  let total = 0
  while(i < 5 ){
  
     total  += parseInt(prompt("ingrese un numero")); 


    i ++;
  }     
    document.getElementById("txtSuma").value = total ;

    document.getElementById("txtPromedio").value = total/5;
  

}
