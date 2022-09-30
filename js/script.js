document.addEventListener('DOMContentLoaded', () => {
 const API = 'https://pokeapi.co/api/v2/pokemon/';
 const GENERATE_BTN = document.querySelector('.generate');

 let getPokemonData = () => {
    let id = Math.floor(Math.random() * 30) + 1;
    console.log('Pokemon ID: ', id);
    fetch(API + id)
        .then((response) => response.json())
        .then((data) => {
            console.log('Pokemon HP:', getPokemonCard(data));
            console.log('Data: ', data);
            console.log('Pokemon name: ', data.name);
        })
        .catch((error) => {
            console.log(error);
        });
 }

 let getPokemonCard = (data) => {
    const STAT_HP = data.stats.length ? data.stats[0].base_stat : 0;
    const STAT_ATTACK = data.stats.length && data.stats[1] ? data.stats[1].base_stat : 0;
    const STAT_DEFENCE =  data.stats.length && data.stats[2] ? data.stats[2].base_stat : 0;
    const STAT_SPEED = data.stats.length && data.stats[5] ? data.stats[5].base_stat : 0;
    const NAME = data.name;
    const IMG_URL = data.sprites.other.dream_world.front_default;
    const CARD = document.querySelector('.card');
    CARD.innerHTML = `<div class="card__top">
                    <span>${STAT_HP}</span>
                </div>
                <div class="card__middle">
                    <img src="${IMG_URL}" alt="Name">
                    <h2>${NAME}</h2>
                </div>
                <div class="card__bottom">
                    <ul>
                        <li>${STAT_ATTACK} <span> Attack </span> </li>
                        <li>${STAT_DEFENCE} <span> Defence </span> </li>
                        <li>${STAT_SPEED} <span> Speed </span> </li>
                    </ul>
                </div>`
 }

 GENERATE_BTN.addEventListener('click',  getPokemonData);
});