// -------------------------------------------------------
// --------------Ejemplo de sessionStorage  --------------
// -------------------------------------------------------
function guardarDato(clave, valor) {
  sessionStorage.setItem(clave, valor);
  console.log(`Dato guardado: ${clave} = ${valor}`);
}

function consultarDato(clave) {
  const valor = sessionStorage.getItem(clave);
  if (valor) {
    console.log(`Valor obtenido: ${clave} = ${valor}`);
  } else {
    console.log(`No existe la clave "${clave}" en sessionStorage.`);
  }
  return valor;
}

function existeClave(clave) {
  const existe = sessionStorage.getItem(clave) !== null;
  console.log(`¿Existe "${clave}"? → ${existe}`);
  return existe;
}

function eliminarDato(clave) {
  if (sessionStorage.getItem(clave)) {
    sessionStorage.removeItem(clave);
    console.log(`"${clave}" fue eliminado.`);
  } else {
    console.log(`No se encontró la clave "${clave}" para eliminar.`);
  }
}

function limpiarTodo() {
  sessionStorage.clear();
  console.log("sessionStorage ha sido vaciado por completo.");
}

export const ejemplo = {
  guardarDato,
  consultarDato,
  existeClave,
  eliminarDato,
  limpiarTodo,
};
