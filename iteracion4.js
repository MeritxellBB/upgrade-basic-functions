/*Iteración #5: Calcular promedio de strings
Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar
tu función*/

 const numbers = [12, 21, 38, 5, 45, 37, 6];

 function average(cualquierArray) {
   let resultado = 0;
   for (let i = 0; i < cualquierArray.length; i++) {
     resultado = resultado + cualquierArray[i];
   }
   return resultado / cualquierArray.length;
 }
 console.log(average(numbers));