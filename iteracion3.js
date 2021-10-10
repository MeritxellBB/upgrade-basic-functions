/*Iteración #5: Calcular promedio de strings
Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno 
de los elementos. Implementa la función denominada sumNumbers que toma un array de números
como argumento (CualquierArray) y devuelve la suma de todos los números de la matriz.*/



const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(cualquierArray) {
  let resultado = 0;
  for (let i = 0; i < cualquierArray.length; i++) {
    resultado = resultado + cualquierArray[i];
  }
  return resultado
}

console.log(sumAll(numbers));
