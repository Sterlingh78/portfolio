import { people } from './people.js';
import { planets } from './planets.js';
import { species } from './species.js';

let wrapper = document.querySelector('#wrapper');
let name = document.createElement("h3");
people.forEach(function(person){
    if (person.name == "Luke Skywalker") {
        let info = ``;
        info += `Name: ${person.name} Height: ${person.height} Mass: ${person.mass} Hair color: ${person.hair_color} Eye Color: ${person.eye_color} Birth Year: ${person.birth_year}`;
        name.textContent = info;
        wrapper.append(name);
    }
})
planets.forEach(function(planet){
    if (planet.name == "Tatooine") {
        let planetName = document.createElement('h3');
        planetName.textContent = `Planet: ${planet.name}`;
        wrapper.append(planetName);
    }
})


