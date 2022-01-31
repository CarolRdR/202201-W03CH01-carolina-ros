import { Character } from './Personaje.js';
import { King } from './Rey.js';
import { Advisor } from './Asesor.js';
import { Squire } from './Escudero.js';
import { Knight } from './Luchador.js';

import { characters } from './personajes.js';

characters.forEach((character) => {
  const template = `
<li class="character col">
        <div class="card character__card">
          <img src="img/${character.name}.jpg" alt= ${character.name} ${character.family} class="character__picture card-img-top" />

          <div class="card-body">
            <h2 class="character__name card-title h4">${character.name} ${character.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${character.age} años</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: ${character.yearsRuling}</li>
                <li>Arma: ${character.weapon}</li>
                <li>Destreza: ${character.skill}</li>
                <li>Asesora a: ${character.patron}</li>
               
              </ul>
              <div class="character__actions">
                <button id= "message" class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>
      `;
  document.querySelector('.characters-list').innerHTML += template;
});

characters.forEach((character, index) => {
  const btn = document.querySelectorAll('button');
  const action = document.querySelectorAll('#message');
  btn[index].addEventListener('click', () => {
    action[index].innerHTML = `${character.message}`;
  });
});
