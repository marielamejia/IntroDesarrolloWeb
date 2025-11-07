//DEFINIMOS NUESTRAS VARIABLES PARA HACER NUESTRAS PRUEBAS
const { sumar, restar, dividir, multiplicar, modulo, operar } = require("./operaciones-aritmeticas.js");

// PRUEBA DE OPERACIÓN SUMA
test("Debe sumar dos números correctamente", () => {
  expect(sumar(2, 3)).toBe(5);
});

//PRUEBA DE OPERACIÓN RESTA
test("Debe restar dos números correctamente", () => {
  expect(restar(2, 3)).toBe(-1);
  expect(restar(10, 7)).toBe(3);
});

//PRUEBA PARA DIVISION ---> NO SE PUEDE DIVIDIR ENTRE 0
test("Debe lanzar un error al dividir entre cero", () => {
  try {
    dividir(10, 0);
  } catch (e) {
    expect(e.message).toBe("No se puede dividir entre cero :(");
  }
});

//PRUEBA PARA OPERACION MULTIPLICACION 
test("Debe multiplicar dos números correctamente", () => {
    expect(multiplicar(2,3)).toBe(6);
    expect(multiplicar(2,5)).toBe(10);
});

//PRUEBA PARA OPERACION MODULO
test("Debe obtener el modulo", () =>{
    expect(modulo(8,2)).toBe(0); 
    expect(modulo(9,2)).toBe(1); 
});

//PRUEBA PARA FUNCION OPERAR --> CASO SUMAR
test("Debe sumar correctamente desde funcion operar", () => {
    expect(operar(8,2,"sumar")).toBe(10); 
});

//PRUEBA PARA FUNCION OPERAR --> CASO RESTAR
test("Debe restar correctamente desde funcion operar", () => {
    expect(operar(8,2,"restar")).toBe(6); 
});

//PRUEBA PARA FUNCION OPERAR --> CASO MULTIPLICAR
test("Debe multiplicar correctamente desde funcion operar", () => {
    expect(operar(8,2,"multiplicar")).toBe(16); 
});

//PRUEBA PARA FUNCION OPERAR --> CASO DIVIDIR
test("Debe dividir correctamente desde funcion operar", () => {
    expect(operar(8,2,"dividir")).toBe(4); 
});

//PRUEBA PARA FUNCION OPERAR --> CASO MODULO
test("Debe obtener el modulo correctamente desde funcion operar", () => {
    expect(operar(8,2,"modulo")).toBe(0); 
});

//PRUEBA PARA FUNCION OPERAR --> CASO DEFAULT
test("Debe sumar correctamente desde funcion operar", () => {
    try {
    operar(10, 0);
    } catch (e) {
        expect(e.message).toBe("Operación no válida");
    }
});