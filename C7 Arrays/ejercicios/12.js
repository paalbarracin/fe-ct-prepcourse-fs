function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var array2= array.map((x)=>x.toUpperCase());
  return array2;
}

module.exports = convertirStringAMayusculas;
