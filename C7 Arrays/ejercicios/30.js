function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var arraycopia=numeros;
  for(var i=0;i<numeros.length;i++){
    for(var x=i+1;x<arraycopia.length;x++){
      if(numeros[i]==arraycopia[x]){
        return numeros[i];
        break;
      }
    }
  }
}

module.exports = encontrarElementoRepetido;