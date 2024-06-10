function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var array2=array.map((x)=> x*2);
  return array2;
}

module.exports = duplicarElementos;
