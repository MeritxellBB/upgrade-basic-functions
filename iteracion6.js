/*Iteración #6: Valores únicos
Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar
este array para probar tu función*/

  const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let newElements = [];
    for (let index = 0; index < param.length; index++) {
      if(!newElements.includes(param[index])){
        newElements.push(param[index]);
      }
      
    }
    return newElements;
  }
  console.log('Duplicados', duplicates);
  console.log('No Duplicados', removeDuplicates(duplicates));