function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var contador=0;
  
for(var i=0;i<array.length-1;i++){
  if(array[i]==array[i+1]){
    contador=contador+1;
    if(contador==array.length-1){
      return true; 
      break;
    }
    continue;
  }
  else{return false; break;}
}
}
module.exports = todosIguales;
