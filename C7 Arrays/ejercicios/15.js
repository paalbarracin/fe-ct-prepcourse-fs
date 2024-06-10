function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
 var indice=0;
 var numero=array[0];
  for(var x=1;x<array.length;x++){
    if(numero<array[x]){
      numero=array[x];
      indice=x; 
    }
  }
  return indice;
 
  
}

module.exports = encontrarIndiceMayor;
