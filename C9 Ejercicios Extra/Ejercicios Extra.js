/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var arregloPadre=[];
  var i=0;
  for(var prop in objeto){
    var arregloHijo=[];
    arregloHijo[0]=prop;
    arregloHijo[1]=objeto[prop];
    arregloPadre[i]=arregloHijo;
    i++;
  }
  return arregloPadre;
}



function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var st=[];
  st=string.split('');
  st2=[];
  var objeto={};
  var contador=1;
  for(var i=0;i<st.length;i++){
    if(st2.includes(st[i])){
      continue;
    }else{
      for(var x=i+1;x<st.length;x++){
        if(st[i]==st[x]){
          contador=contador+1;
        }
      }
      objeto[st[i]]=contador;
      contador=1;
      st2.push(st[i]);
    }
  }
  return objeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var palabra=[];
  var mayusculas=[];
  var minusculas=[];
  palabra=string.split('');
  for(var i=0;i<palabra.length;i++){
    var letra=palabra[i];
    if(letra==letra.toUpperCase()){
      mayusculas.push(letra);
    }else if(letra==letra.toLowerCase()){
      minusculas.push(letra);
    }
  }
  return mayusculas.join('')+minusculas.join('');
}


function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var arreglo=[];
  var nuevaFrase=[];
  for(var i=0;i<frase.length;i++){
    if(frase.charAt(i)!= ' '){
      arreglo.push(frase.charAt(i));
      if(i==frase.length-1){
        arreglo.reverse();
        nuevaFrase=nuevaFrase.concat(arreglo);
      }
    }
    else{
      arreglo.reverse();
      nuevaFrase=nuevaFrase.concat(arreglo);
      if(i<frase.length){
        nuevaFrase.push(' ');
      }
      arreglo=[];
    }
  }
  var fraseFinal='';
  for(var i=0;i<nuevaFrase.length;i++){
    fraseFinal=fraseFinal+nuevaFrase[i];
  }
 return fraseFinal;
  
}


function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var num=numero.toString();
  var arreglo=[];
  arreglo=num.split('');
  var arreglo2=[];
  arreglo2=num.split('');
  arreglo2=arreglo2.reverse();
  if(arreglo.join('')==arreglo2.join('')){
    console.log('es capicua');
    return 'Es capicua';
  }
  else{
    console.log('no es capicua')
    return 'No es capicua';
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var cadena=[];
  var cadenaFinal=[];
  cadena=string.split('');
  for(var i=0;i<cadena.length;i++){
    if(cadena[i]=='a'||cadena[i]=='b'||cadena[i]=='c'){
      continue;
    }else{
      cadenaFinal.push(cadena[i]);
    }
  }
  return cadenaFinal.join('');
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  arrayOfStrings.sort(function(a,b){return a.length-b.length;});
 return arrayOfStrings;

  
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  if(array1.length<array2.length){
   return nuevoArray(array1,array2);
  }
  else{
    return nuevoArray(array2,array1);
  }
  
  function nuevoArray(chico,grande){
    var array=[];
   for(var i=0;i<chico.length;i++){
    if(grande.includes(chico[i])){
      array.push(chico[i]);
    }
    
   }
   return array;
  }
}
//module.exports = buscoInterseccion([7, 23, 4], [23, 70]);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
