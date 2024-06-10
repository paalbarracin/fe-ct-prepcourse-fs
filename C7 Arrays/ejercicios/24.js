function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración. 
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
 var arreglo=[];
 var cinco=4;
 for(var i=0;i<9;i++){
  if(cinco==i){
    cinco=0;
    i--;
    continue;
  }
  else{
    num=num+2;
    arreglo[i]=num;
    //console.log(arreglo);
  }
 }
 //console.log(arreglo);
return arreglo;
  
}

module.exports = continueStatement;
