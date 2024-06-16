function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   var p1=str1.toLowerCase();
   var p2=str2.toLowerCase();
   var st1=[];
   st1=p1.split('');
   st1.sort();
   var st2=[];
   st2=p2.split('');
   st2.sort();
   if(st1.join('')==st2.join('')){
      return true;
   }else{return false;}
}

module.exports = esAnagrama;
