// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const makeAllCaps = async (array) => {
  let capsArray = array.map((word) => {
    if (typeof word === 'string') {
      return word.toUpperCase();
    } else {
      reject('Error: Not all items in the array are strings!');
    }
  });
  return capsArray;
};

makeAllCaps(arrayOfWords)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log('Error', error);
  });
