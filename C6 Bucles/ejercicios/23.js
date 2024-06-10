function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  var divisor=2;
  var resultado=0;
 if(numero!=1 && numero!=2){
  do{
  resultado=numero%divisor;
  divisor++;
  if(resultado==0){return false; break;}
}while(divisor<numero);
return true;
}
else{return true;}
}


module.exports = esNumeroPrimo;
