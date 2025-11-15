# Investigación de pruebas unitarias e implementación
La carpeta contiene el material correspondiente a la tarea "Investigación de pruebas unitarias e implementación" que tiene como objetivo repasar los conocimientos del uso base de las pruebas unitarias vistos en clase.

Sin embargo, existen otras maneras de cubrir dichas validaciones con la librería jest. Es por ello que está tarea también tiene como objetivo investigar sobre dichas formas y aprender a usarlas en algunos casos de uso. 

## Expect con librería jest
### .toEqual(valorEsperado)
Este método compara el contenido de objetos o de arrays, es decir, va comparando cada elemento de la estructura de manera recursiva. Es útil cuando .toBe() falla por comparar referencias, esto quiere decir que este método compara contenidos y no referencias e ignora propiedades no enumerables y prototipos.

Ejemplo:

`expect({a:1}).toEqual({a:1});`

### .toBeTruthy()
Regresa "truthy" en un contexto booleano, es decir, cualquier valor que no sea `false`, `0`, `""`, `null`, `undefined` o `NaN`

Ejemplo:

`expect("Hola").toBeTruthy();` 

### .toBeFalsy()
Regresa "falsy" en un contexto booleano, es decir, `false`, `0`, `""`, `null`, `undefined` o `NaN`.

Ejemplo:

`expect(0).toBeFalsy();`

### .toBeNull()
Verifica que el valor sea `null`. 

Ejemplo:

`expect(null).toBeNull();`

### .toBeUndefined()
Verifica que el valor sea exactamente `undefined`. 

Ejemplo:

`````js
let x;
expect(x).toBeUndefined();
`````

### .toThrow()
Verifica que una función lanza una excepción, puede validar el tipo de error o el mensaje. Usamos este método cuando queremos evitar el uso de `try/catch` en las pruebas. 

Ejemplo:

`````js
function dividir(a, b) {
  if (b === 0) throw new Error("División por cero");
  return a / b;
}

expect(() => dividir(4, 0)).toThrow("División por cero");
`````

### .toStrictEqual(valorEsperado)
Mismo funcionamiento que el método .toEqual(), pero como su nombre lo dice, más estricto. Se compara también el prototipo del objeto. Este método lo usamos cuando queremos validar objetos con precisión absoluta. 

Ejemplo:

`expect(new Usuario("Mariela")).toStrictEqual({ nombre: "Mariela" });`

Nótese que en este caso falla porque a pesar de ser el mismo nombre, falla por prototipo. 

## Evidencias de pruebas unitarias
### Añadir una prueba unitaria al archivo que completaron con las pruebas unitarias, pero ahora usen un .toThrow() para probar el caso de la división entre cero (no deben usar try catch) y una fotografía del test pasando
En el archivo operaciones-arirmeticas.test.js se hizo el test con .toThrow() para la operación dividir usando el siguiente método: 

`````js
test('.toThrow() --> Dividir entre 0 lanza un error', () => {
  expect(() => dividir(10, 0)).toThrow(); 
});
`````

A continuación, se presenta la evidencia de que se pasó la prueba: 

<p align="center">
    <img src="JavaScript/UTs-clase/imagenes/operacionesAritmeticasEvidencia1.png" width="500" alt="Evidencia operación dividir con .toThrow()">
</p>

### Otro archivo en el que prueben sus funciones varias (llamenlo funciones-varias.test.js) y una imagen que sustente que sus pruebas pasaron
Como primer punto, se hicieron unas funciones en el archivo funciones-varias.js, entre ellas:

- esNumeroPositivo
- obtenerUsuario
- obtenerLista
- regresaNull
- regresaUndefined   

Estas funciones se hicieron con el objetivo de probar los métodos mencionados anteriormente.
A continuación, se muestra la evidencia de las pruebas:

<p align="center">
    <img src="JavaScript/UTs-clase/imagenes/evidenciaFuncionesVarias2.png" width="500" alt="Evidencia pruebas pasadas con funciones varias">
</p>