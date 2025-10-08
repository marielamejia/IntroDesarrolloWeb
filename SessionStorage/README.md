# Session Storage 
<strong> Mariela Mejía Gutiérrez - 201373 </strong>

Esta carpeta contiene los archivos correspondientes a la tarea de Session Storage donde se pide una investigación y la compilación en un archivo de JavaScript

## ¿Qué es Session Storage? 
Al igual que localStorage, sessionStorage es una propiedad que accede al objeto "Storage" y tiene la función de guardar datos de manera local. De manera específica, definimos sessionStorage como un almacén clave–valor del navegador, con alcance por sesión.

Algunas características claves son: 
- Los datos se borran cuando la pestaña del navegador se cierra
- sessionStorage mantiene un área de almacenamiento separada para cada origen, aplicando la política del mismo origen
- Ofrece una capacidad de almacenamiento de alrededor de 5MB a 10MB por origen
- La información solo está disponible en la pestaña específica donde fue creada
- Los datos no se conservan entre sesiones de navegador ni en modo incógnito. 

## ¿Qué propiedades tiene? 
- `sessionStorage.length` → número de elementos guardados.
- `sessionStorage.setItem(clave, valor)` → inserta/actualiza.
- `sessionStorage.getItem(clave)` → obtiene (o `null` si no existe).
- `sessionStorage.removeItem(clave)` → elimina esa clave.
- `sessionStorage.clear()` → elimina todos los elementos.
- `sessionStorage.key(indice)` → devuelve la clave en la posición `indice` (0…length-1).

## Estructura

## Requerimientos

## ¿Cuáles son las diferencias que existen respecto de localStorage? 

## Referencias 
https://ed.team/blog/que-es-y-como-utilizar-localstorage-y-sessionstorage

https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage

https://lenguajejs.com/javascript/web-apis/localstorage 

