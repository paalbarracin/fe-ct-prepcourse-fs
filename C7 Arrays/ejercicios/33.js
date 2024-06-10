function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  var orden=[];
  orden=[str1.length,str2.length,str3.length];
  orden=orden.sort(function(a,b){return b-a;});
 var iter=orden[0];
 var st1=[];
 var st2=[];
 var st3=[];
 st1=str1.split('');
 st2=str2.split('');
 st3=str3.split('');
  var mezcla=[];
  var posicion=0
  for(var i=0;i<iter;i++){
    if(st1.length!=0 && i<st1.length){
      mezcla[posicion]=st1[i];
      posicion=posicion+1;
    }
    if(st2.length!=0 && i<st2.length){
      mezcla[posicion]=st2[i];
      posicion=posicion+1;
    }
    if(st3.length!=0 && i<st3.length){
      mezcla[posicion]=st3[i];
      posicion=posicion+1;
    }
    
  }
  if(mezcla.length!=0){return mezcla=mezcla.join('');}
  else{return "";}
  }



module.exports = combine;