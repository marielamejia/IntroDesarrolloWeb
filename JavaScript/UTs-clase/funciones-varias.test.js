////////////////////////////////////////////////////////////
////////////// Mariela Mejía - funciones varias.js /////////
////////////////////////////////////////////////////////////

const {esNumeroPositivo,
  obtenerUsuario,
  obtenerLista,
  regresaNull,
  regresaUndefined} = require("./funciones-varias.js");


test(".toEqual() - Prueba", () => {
    expect(obtenerLista()).toEqual([1,2,3]); 
}); 


test(".toStrictEqual() - Prueba", () => {
    expect(obtenerUsuario("Mariela")).toStrictEqual({nombre: "Mariela"});
}); 


test(".toBeTruthy() - Prueba", () => {
    expect(esNumeroPositivo(5)).toBeTruthy(); 
}); 


test(".toBeFalsy() - Prueba", () => {
    expect(esNumeroPositivo(-5)).toBeFalsy();   
}); 

test(".toBeNull() - Prueba ", () => {
    expect(regresaNull()).toBeNull(); 
}); 


test(".toBeUndefined() - Prueba", () => {
    expect(regresaUndefined()).toBeUndefined(); 
}); 

//NOTA: la prueba para .toThrow() está en la función-varias.test.js