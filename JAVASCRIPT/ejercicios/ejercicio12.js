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
function removeDuplicates(list) {
    const listaUnicos = [];

    for (const element of list) {
        if(!listaUnicos.includes(element)){   /*si se pone una exclamacion al principio es una negacion */
            listaUnicos.push(element);
        }  
    }

    console.log(listaUnicos)
}

