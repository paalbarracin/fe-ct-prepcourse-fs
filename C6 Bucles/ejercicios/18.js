function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var producto=1;
  
  if(a<b){
    for(var i=a;i<=b;i++){
      if(producto==0 || producto==-0){return 0; break;}
      producto*=i;
    }
    return producto;
  }
  else{
    for(var i=b;i<=a;i++){
      if(producto==0 || producto==-0){return 0; break;}
      producto*=i; 
    }
    return producto;
  }
}


module.exports = productoEntreNúmeros;