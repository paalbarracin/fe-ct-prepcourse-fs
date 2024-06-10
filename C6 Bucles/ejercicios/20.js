function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var resultado=0;
   for(var i=1;i<=n;i++){
      if(resultado<=100){
         resultado=resultado+i;
      }
      else{break;}
   }
   return resultado;
}

module.exports = sumarHastaNConBreak;
