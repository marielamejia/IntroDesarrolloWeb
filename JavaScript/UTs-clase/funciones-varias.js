////////////////////////////////////////////////////////////
////////////// Mariela Mejía - funciones varias.js /////////
////////////////////////////////////////////////////////////

//Función 
function esNumeroPositivo(n) {
  return n > 0;
}

function obtenerUsuario(nombre) {
  return { nombre: nombre };
}

function obtenerLista() {
  return [1, 2, 3];
}

function regresaNull() {
  return null;
}

function regresaUndefined() {
  return undefined;
}

module.exports = {
  esNumeroPositivo,
  obtenerUsuario,
  obtenerLista,
  regresaNull,
  regresaUndefined,
};
