# sessionStorage 
<strong> Mariela Mejía Gutiérrez - 201373 </strong>

Esta carpeta contiene los archivos correspondientes a la tarea de sessionStorage donde se pide una investigación y la compilación en un archivo de JavaScript

## ¿Qué es sessionStorage? 
Al igual que localStorage, sessionStorage es una propiedad que accede al objeto "Storage" y tiene la función de guardar datos de manera local. De manera específica, definimos sessionStorage como un almacén clave–valor del navegador, con alcance por sesión.

Algunas características claves son: 
- Los datos se borran cuando la pestaña del navegador se cierra
- sessionStorage mantiene un área de almacenamiento separada para cada origen, aplicando la política del mismo origen
- Ofrece una capacidad de almacenamiento de alrededor de 5MB a 10MB por origen
- La información solo está disponible en la pestaña específica donde fue creada
- Los datos no se conservan entre sesiones de navegador ni en modo incógnito. 

## ¿Qué propiedades tiene? 
`sessionStorage.length` → número de elementos guardados.
`sessionStorage.setItem(clave, valor)` → inserta/actualiza.
`sessionStorage.getItem(clave)` → obtiene (o `null` si no existe).
`sessionStorage.removeItem(clave)` → elimina esa clave.
`sessionStorage.clear()` → elimina todos los elementos.
`sessionStorage.key(indice)` → devuelve la clave en la posición `indice` (0…length-1).

## Estructura

## Requerimientos

## ¿Cuáles son las diferencias que existen respecto de localStorage? 
<h3>Diferencias entre <code>sessionStorage</code> y <code>localStorage</code></h3>

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
      <td><b>Eventos <code>storage</code></b></td>
      <td>No se comparte entre pestañas</td>
      <td>Sí se propaga a otras pestañas del mismo origen</td>
    </tr>
  </tbody>
</table>

## Referencias 
https://ed.team/blog/que-es-y-como-utilizar-localstorage-y-sessionstorage

https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage

https://lenguajejs.com/javascript/web-apis/localstorage 

