function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var nuevoArreglo=[];
   for(var i=0;i<arrayOfStrings.length;i++){
      if(String(arrayOfStrings[i]).startsWith('a')){
         nuevoArreglo.push(arrayOfStrings[i]);
      }
   }
   return nuevoArreglo;
}

module.exports = filter;
