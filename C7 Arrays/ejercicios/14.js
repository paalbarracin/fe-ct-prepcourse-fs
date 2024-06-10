function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var cantidad=0;
  if(array.length>0){
  for(var i=0;i<array.length;i++){
    if(array[i]>10){
      cantidad=cantidad+1;
    }
  }
  return cantidad;
}
else{return 0}
}

module.exports = contarElementosMayoresA10;
