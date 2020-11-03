'use strict';

function main() {
  document.body.innerHTML += `
  <div class="container">
  <div>
    <button id="btn">Get Pokemon</button>
  </div>
  <div>
    <select name="select" id="select">
    <option selected disabled>---Choose---</option>
    </select>
  </div>
  <div class="img-div">
    <img src="" alt="" id="img">
  </div>
  </div>
  `;


  const btn = document.getElementById('btn');
  btn.addEventListener('click', fetchData);
  const select = document.getElementById('select');
  select.addEventListener('change', addPokemonToDOM);
  const img = document.getElementById('img');

  function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) => {
      res.json().then((data) => {
        console.log(data);

        data.results.forEach((pokemon) => {
          let option = document.createElement('option');
          option.text = pokemon.name;
          option.value = pokemon.name;

          select.appendChild(option);
        });
      });
    });
  }

  function addPokemonToDOM(event) {
    const pokemon = event.target.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(res => {
        img.src = res.sprites.front_default
      })
  }
}

main();
