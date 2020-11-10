// Exercise A
async function getData(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
  } catch (error) {
    console.log('Error', error)
  }
}

getData('https://randomfox.ca/floof/')
