// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const makeAllCaps = async array => {
  try {
    let res = await new Promise((resolve, reject) => {
      let capsArray = array.map(word => {
        if (typeof word === 'string') {
          return word.toUpperCase();
        } else {
          reject('Error: Not all items in the array are strings!');
        }
      });
      resolve(capsArray);
    });
    console.log(res);
  } catch (error) {
    console.log('Error', error)
  }
};

makeAllCaps(arrayOfWords)
