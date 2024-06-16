const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  var lista=[];
  lista=Object.keys(objeto);
  return lista;
};

module.exports = listarPropiedades;
