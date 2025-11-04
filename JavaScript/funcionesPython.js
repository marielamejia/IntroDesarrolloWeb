/**************************************************/
/************* Mariela Mejía Gutiérrez ************/
/**************************************************/

/*TAREA: pasar las funciones de Python a JavaScript*/

/* FUNCIÓN 01
def saludar_usuario(nombre: str) -> None:
    """
    Imprime un saludo personalizado.
    Ejemplo de concatenación y salida por consola.
    """
    print("Hola, " + nombre + "! Bienvenido al curso de programación.")
*/
function saludar_usuario(nombre){
    //notese que se usa console.log porque la funcion es void 
    console.log("Hola, " + nombre + "! Bienvenido al curso de programación."); //imprimimos  el texto del nombre
}

/* FUNCIÓN 02
def repetir_texto(texto: str, veces: int) -> str:
    """
    Devuelve una cadena repetida 'veces' veces, separada por espacios.
    Ejemplo de concatenación y multiplicación de strings.
    """
    return (texto + " ") * veces
*/
function repetir_texto(texto, veces){
    return(texto + " " ).repeat(veces);  //usamos la función repeat para multiplicar el texto 
}

/* FUNCIÓN 03
def invertir_palabra(palabra: str) -> str:
    """
    Invierte una palabra usando slicing.
    """
    return palabra[::-1]
*/
function invertir_palabra(palabra){
    let palabraInvertida="";
    for(let i=palabra.length-1; i>=0; i--){
        let letra = palabra [i]; 
        palabraInvertida+=letra; //concatenamos la palabra de manera inversa
    }
    return palabraInvertida
}

/* FUNCIÓN 04
def contar_vocales(texto: str) -> int:
    """
    Cuenta cuántas vocales (a, e, i, o, u) hay en un texto.
    Ejemplo de bucles y condicionales.
    """
    contador = 0
    for letra in texto.lower():
        if letra in "aeiou":
            contador += 1
    return contador
*/
function contar_vocales(texto){
    let contador = 0; //para poder reasignar su valor (por eso no usamos const)
    for(let letra of texto.toLowerCase()){ //convertimos el texto a minusculas para contar todas las vocales
        if("aeiou".includes(letra)){ //incluimos todas las letras que queremos contar en el texto
            contador++; //aumentamos contador 
        }
    }
    return contador; //regresamos cuantas vocales hay
}

/* FUNCIÓN 05
def mayusculas_y_minusculas(texto: str) -> tuple[str, str]:
    """
    Devuelve el texto en mayúsculas y minúsculas.
    Ejemplo de métodos de string.
    """
    return texto.upper(), texto.lower()
*/
function mayusculas_y_minusculas(texto){
    //usamos toUpperCase para convertir a mayusculas y usamos toLowerCase para devolver el texto en minusculas
    return [texto.toUpperCase(), texto.toLowerCase()]; 
}

/* FUNCIÓN 06
def promedio_lista(numeros: list[float]) -> float:
    """
    Calcula el promedio de una lista de números.
    Ejemplo de sumas y longitud de listas.
    """
    if len(numeros) == 0:
        return 0
    return sum(numeros) / len(numeros)
*/
function promedio_lista(numeros){
    if(numeros.length==0){
        return 0; 
    }
    let suma = 0; //iniciamos el valor de la suma en 0 
    for (let i = 0; i<numeros.length; i++){
        suma+=numeros[i]; //vamos iterando sobre numeros y sumamos a nuestra variable suma
    }
    let promedio = suma / numeros.length; 
    return promedio; 
}

/* FUNCIÓN 07
def maximo_y_minimo(numeros: list[int]) -> tuple[int, int]:
    """
    Devuelve el valor máximo y mínimo de una lista.
    Ejemplo de uso de funciones integradas.
    """
    return max(numeros), min(numeros)
*/
function maximo_y_minimo(numeros){
    //usamos los 3 puntos para mandar los elemetnso individuales del arreglo y no mandarlo completo
    return [Math.max(...numeros), Math.min(...numeros)]
}

/* FUNCIÓN 08
def filtrar_pares(numeros: list[int]) -> list[int]:
    """
    Filtra y devuelve solo los números pares de una lista.
    Ejemplo de comprensión de listas.
    """
    return [n for n in numeros if n % 2 == 0]
*/
function filtrar_pares(numeros){
    let numerosPares=[]; 
    for (let i=0; i<numeros.length; i++){
        let numeroActual = numeros[i]; 
        if (numeroActual % 2 === 0) {
            // Si el número es divisible entre 2 (usamos modulo), es par
            numerosPares.push(numeroActual); 
        }
    }
    return numerosPares
}

/* FUNCIÓN 09
def sumar_elementos_texto(lista_textos: list[str]) -> str:
    """
    Une todos los elementos de una lista de cadenas en una sola frase.
    Ejemplo de concatenación con 'join'.
    """
    return " ".join(lista_textos)
*/
function sumar_elementos_texto(lista_textos){
    return lista_textos.join(" ");
}

/* FUNCIÓN 10
def buscar_elemento(lista: list, elemento) -> bool:
    """
    Verifica si un elemento está dentro de una lista.
    Ejemplo de uso del operador 'in'.
    """
    return elemento in lista
*/
function buscar_elemento(lista, elemento){
    return lista.includes(elemento); //verificamos que el elemento este en la lista 
}

/* FUNCIÓN 11
def contar_palabras(frase: str) -> int:
    """
    Cuenta cuántas palabras hay en una frase.
    Usa split() para separar por espacios.
    """
    palabras = frase.split()
    return len(palabras)
*/
function contar_palabras(frase){
    //usamos trim() --> elimina espacios del inicio y del final
    //usamos split(/\s+/) --> dividimos la frase en partes  y usamos (/\s+/) para no contar espacios extras
    //usamos length --> nos regresa el numero de elementos del arreglo
    return frase.trim().split(/\s+/).length; 
}

/* FUNCIÓN 12
def duplicar_elementos(lista: list[int]) -> list[int]:
    """
    Duplica cada número de una lista.
    Ejemplo de transformación con comprensión de listas.
    """
    return [x * 2 for x in lista]
*/
function duplicar_elementos(lista){
    let nuevaLista = [];
    for (let i = 0; i < lista.length; i++) {
        let elementoActual = lista[i];
        //multiplicamos por dos el elemento actual
        let elementoDuplicado = elementoActual * 2;
        //agregamos el elemento a la nueva lista
        nuevaLista.push(elementoDuplicado);
    }
    //regresamos la lista con los elementos multiplicados por dos
    return nuevaLista;
} 

/* FUNCIÓN 13
def capitalizar_palabras(frase: str) -> str:
    """
    Convierte la primera letra de cada palabra en mayúscula.
    Similar a 'title()'.
    """
    return frase.title()
*/
function capitalizar_palabras(frase){
    return frase
        .split(" ")
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
        .join(" ");
}

/* FUNCIÓN 14
def mezclar_listas(lista1: list, lista2: list) -> list:
    """
    Combina dos listas alternando sus elementos.
    Ejemplo de zip() y bucles.
    """
    combinada = []
    for a, b in zip(lista1, lista2):
        combinada.append(a)
        combinada.append(b)
    return combinada
*/
function mezclar_listas(lista1, lista2){
    // obtenemos la longitud mínima en caso de que tengan distintas longitudes
    let longitudMinima = Math.min(lista1.length, lista2.length);
    let listaCombinada = [];
    //iteramos sobre lista mas chica
    for (let i = 0; i < longitudMinima; i++) {
        let elemento1 = lista1[i]; //elemento de primera lista
        let elemento2 = lista2[i]; //elemento de segunda lista

        listaCombinada.push(elemento1); // agregamos a lista combinada primer elemento
        listaCombinada.push(elemento2); // agregamos a lista combinada segundo elemento
    }
    return listaCombinada; 
}

/* FUNCIÓN 15
def contar_frecuencia(lista: list) -> dict:
    """
    Devuelve un diccionario con la frecuencia de cada elemento.
    Ejemplo de diccionarios y conteo.
    """
    conteo = {}
    for item in lista:
        if item in conteo:
            conteo[item] += 1
        else:
            conteo[item] = 1
    return conteo
*/
function contar_frecuencia(lista){
    //como vamos acumulando la frecuencia de los elementos, usamos let 
    let diccionario = {}
    for (let i = 0; i < lista.length; i++) {
        const item = lista[i]; //obtenemos el elemento actual
        if (diccionario[item] === undefined) {
            // casso: si no existe en el objeto, lo inicializamos
            diccionario[item] = 1;
        } else {
            // caso: si ya existe, incrementamos su valor
            diccionario[item] = diccionario[item] + 1;
        }
    }
    return diccionario; 
}