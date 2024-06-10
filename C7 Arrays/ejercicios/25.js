function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var numpares=0;
  if(numeros.length>0){
    for(var i=0;i<numeros.length;i++){
      if(numeros[i]%2==0){
        numpares=numpares+1;
      }else{
        continue;}
    }
    return numpares;
  }
  else{return 0;}
 
}

module.exports = contarParesConContinue;
