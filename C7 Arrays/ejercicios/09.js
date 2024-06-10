function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
 var elemento= array[Math.floor(Math.random() * array.length)];
 return elemento;
   
}

module.exports = obtenerElementoAleatorio;
