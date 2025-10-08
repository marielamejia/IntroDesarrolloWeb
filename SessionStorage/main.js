// --------------------------------------
// ---------- Ejemplo de uso ------------
// --------------------------------------
import { ejemplo } from './ejemplo.js';

// Guardarmos datos
ejemplo.guardarDato("usuario", "Mariela");
ejemplo.guardarDato("tema", "oscuro");
ejemplo.guardarDato("visitas", "3");

// Consulta de datos
ejemplo.consultarDato("usuario");
ejemplo.consultarDato("tema");

// Verificamos la existencia de claves
ejemplo.existeClave("visitas");
ejemplo.existeClave("pais"); // no existe!

// Eliminar un dato
ejemplo.eliminarDato("visitas");

// Limpiar todo
ejemplo.limpiarTodo();