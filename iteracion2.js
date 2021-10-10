/*Iteración #5: Calcular promedio de strings
Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la
misma longitud deberá devolver el primero*/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(cualquierArray) {
  let longestWord = cualquierArray[0];

  for (let index = 0; index < cualquierArray.length; index++) {
    if ((cualquierArray[index] && (cualquierArray[index].length > longestWord.length) {
      longestWord = cualquierArray[index];
    }
  }
  return longestWord;
}

findLongestWord(avengers;)
