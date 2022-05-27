//Método multiplicar arreglo

let multiplicarArreglo = (
  v1: number[],
  v2: number[],
  longitud: number
): number[] => {
  let indice: number;
  let arregloMultiplicacion: number[] = new Array(longitud);

  for (indice = 0; indice < longitud; indice++) {
    arregloMultiplicacion[indice] = v1[indice] * v2[indice];
  }
  return arregloMultiplicacion;
};
//Función cargar vector
let cargarVector = (v: number[], cant: number) => {
  let i: number;
  for (i = 0; i < cant; i++) {
    v[i] = Number(prompt("ingrese el valor para el vector posición " + i));
  }
};

//multiplicar cuatro vectores

let dimension: number = Number(prompt("ingrese la longitud del arreglo:"));
let vector1: number[] = new Array(dimension);
let vector2: number[] = new Array(dimension);
let vector3: number[] = new Array(dimension);
let vector4: number[] = new Array(dimension);
let resultadoTotal: number[] = new Array(dimension);
let resultado1: number[] = new Array(dimension);
let resultado2: number[] = new Array(dimension);

cargarVector(vector1, dimension);
cargarVector(vector2, dimension);
cargarVector(vector3, dimension);
cargarVector(vector4, dimension);

resultado1 = multiplicarArreglo(vector1, vector2, dimension);
resultado2 = multiplicarArreglo(vector3, vector4, dimension);
resultadoTotal = multiplicarArreglo(resultado1, resultado2, dimension);
console.log(
  "La multiplicación de los 4 arreglos es : [ " + resultadoTotal + "]"
);
