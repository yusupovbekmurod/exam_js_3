"use strict"

const elPokemonCard = document.querySelector(".wrapper_pokemons");
const searchInput = document.querySelector(".input_search");



// render qism

const renderPokemon = (pokemons, elPokemonCard) => {
   elPokemonCard.textContent = "";
   for (let i = 0; i < pokemons.length; i++) {
     const element = pokemons[i];
     const newCard = document.createElement("div", "card");
     newCard.className = "card text-center";
     newCard.innerHTML = `
     <div>
     <img src="${element.img}" class="card_img_poke" alt="${element.name}">
     <div class="line_card"></div>
     <div class="card-body text-start">
        <h5 class="name_poke">${element.name}</h5>
       <p class="card-text">${element.type}</p>
       <div class="div d-flex justify-content-around">
        <h5 class="width_poke">${element.height}</h5>
        <h5 class="hight_poke">${element.weight}</h5>
       </div>
     </div>
   </div>           
 
   `;
   elPokemonCard.appendChild(newCard);
   }
 };
 
 renderPokemon(pokemons, elPokemonCard);

// search qism

 searchInput.addEventListener('input', (e) => {
  e.preventDefault();

  const inputText = searchInput.value.trim().toLowerCase();
  let sourc = [];

  pokemons.forEach((elements) => {
    if (elements.name.toLowerCase().includes(inputText)) {
      sourc.push(elements);
      console.log(sourc);
    }
  });

  renderPokemon(sourc, elPokemonCard);
});
 
