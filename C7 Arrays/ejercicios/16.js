function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var array2=[];
 for(var i=0;i<array.length;i++){
  array2.push(i*array[i]);
 }
return array2;
}

module.exports = multiplicarElementosPorIndice;
