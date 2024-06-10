function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var array2=array.filter(number =>number % 2 ===0);
  return array2;
}

module.exports = filtrarNumerosPares;
