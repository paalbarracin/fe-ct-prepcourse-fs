function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if(String(letra)== 'a'){
    return "Es vocal";
  }
  else if(String(letra)== 'e'){
    return "Es vocal";
  }
  else if(String(letra)== 'i'){
    return "Es vocal";
  }
  else if(String(letra)== 'o'){
    return "Es vocal";
  }
  else if(String(letra)== 'u'){
    return "Es vocal";
  }
  else{
    return "Dato incorrecto";
  }
}

module.exports = esVocal;
