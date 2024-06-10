function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var palabra=texto.split('');
  var invertida=[];
  for(var i=0;i<palabra.length;i++){
    invertida.unshift(palabra[i]);
  }
  return invertida.join('');
}

module.exports = invertirTexto;
