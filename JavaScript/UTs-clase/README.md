### Investigación de pruebas unitarias e implementación
La carpeta contiene el material correspondiente a la tarea "Investigación de pruebas unitarias e implementación" que tiene como objetivo repasar los conocimientos del uso base de las pruebas unitarias vistos en clase.

Sin embargo, existen otras maneras de cubrir dichas validaciones con la librería jest. Es por ello que está tarea también tiene como objetivo investigar sobre dichas formas y aprender a usarlas en algunos casos de uso. 

## Expect con librería jest
### .toEqual(valorEsperado)
Este método compara el contenido de objetos o de arrays, es decir, va comparando cada elemento de la estructura de manera recursiva. Es útil cuando .toBe() falla por comparar referencias. 

Ejemplo:
`expect({a:1}).toEqual({a:1});`

### .toBeTruthy()

### .toBeFalsy()

### .toBeNull()

### .toBeUndefined()

### .toThrow()

### .toStrictEqual()
