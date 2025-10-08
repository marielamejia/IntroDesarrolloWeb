# sessionStorage 
<strong> Mariela Mejía Gutiérrez - 201373 </strong>

Esta carpeta contiene los archivos correspondientes a la tarea de sessionStorage donde se pide una investigación y la compilación en un archivo de JavaScript

## ¿Qué es sessionStorage? 
Al igual que localStorage, sessionStorage es una propiedad que accede al objeto "Storage" y tiene la función de guardar datos de manera local. De manera específica, definimos sessionStorage como un almacén clave–valor del navegador, con alcance por sesión.

Algunas características claves son: 
- Los datos se borran cuando la pestaña del navegador se cierra
- sessionStorage mantiene un área de almacenamiento separada para cada origen, es decir, solo puede ser accedido desde páginas que compartan el mismo dominio, protocolo y puerto
- Ofrece una capacidad de almacenamiento de alrededor de 5MB a 10MB por origen
- La información solo está disponible en la pestaña específica donde fue creada
- Los datos no se conservan entre sesiones de navegador ni en modo incógnito

## ¿Qué propiedades tiene? 
`sessionStorage.length` → número de elementos guardados.

`sessionStorage.setItem(clave, valor)` → inserta/actualiza.

`sessionStorage.getItem(clave)` → obtiene (o `null` si no existe).

`sessionStorage.removeItem(clave)` → elimina esa clave.

`sessionStorage.clear()` → elimina todos los elementos.

`sessionStorage.key(indice)` → devuelve la clave en la posición `indice` (0…length-1).

## Estructura
Como vimos anteriormente, sessionStorage funciona como un diccionario (usa clave-valor) en el que cada dato se guarda como un String. Esto significa que tanto las claves como los valores deben ser cadenas. Si se desea guardar información más compleja, como objetos o arreglos, se deben convertir a texto con `JSON.stringify()` y, al recuperarlos, volver a su formato original con `JSON.parse()`.

Ejemplo:
```js
{
  "usuario": "Mariela",
  "tema": "oscuro",
  "contadorVisitas": "3"
}
```

## Requerimientos
Para utilizar sessionStorage de manera correcta, se deben cumplir los siguientes requerimientos: 
- Ejecutarse en un navegador 
- Respetar la política del mismo origen (cada dominio tiene su propio espacio de almacenamiento)
- Guardar únicamente texto (Strings). Si se necesita guardar objetos, deben serializarse con JSON.`stringify()`
- No almacenar información sensible, ya que los datos son accesibles mediante JavaScript desde el mismo origen.
- No propaga eventos storage entre pestañas, a diferencia de localStorage.

## ¿Cuáles son las diferencias que existen respecto de localStorage? 
<table>
  <thead>
    <tr>
      <th>Aspecto</th>
      <th>sessionStorage</th>
      <th>localStorage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Vida útil</b></td>
      <td>Dura <b>hasta cerrar</b> pestaña/ventana</td>
      <td><b>Persiste</b> tras cerrar navegador</td>
    </tr>
    <tr>
      <td><b>Ámbito</b></td>
      <td><b>Aislado por pestaña/ventana</b></td>
      <td>Compartido entre pestañas del mismo origen</td>
    </tr>
    <tr>
      <td><b>Uso típico</b></td>
      <td>Datos transitorios de flujo (wizards, filtros de una sola sesión)</td>
      <td>Preferencias del usuario, carritos, configuraciones persistentes</td>
    </tr>
    <tr>
      <td><b>Eventos storage</b></td>
      <td>No se comparte entre pestañas</td>
      <td>Sí se propaga a otras pestañas del mismo origen</td>
    </tr>
  </tbody>
</table>

## Referencias 
https://ed.team/blog/que-es-y-como-utilizar-localstorage-y-sessionstorage

https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage

https://lenguajejs.com/javascript/web-apis/localstorage 

