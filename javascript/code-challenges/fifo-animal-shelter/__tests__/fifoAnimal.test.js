'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');
let animalShelter = new AnimalShelter();
const newCat = {type:'cat'};
const bird = {type:'bird'};

describe('Animals tests', () => {
  it(' 1 It should enqueue cat to cat queue', () => {
    animalShelter.enqueue(newCat);
    expect(animalShelter.cats.size).toEqual(1);

  });
  it(' 2 It should return failer status', () => {
    let animal = animalShelter.enqueue(bird);
    expect(animal).toEqual('this shelter only for dogs and cats');

  });
  it(' 2 It should dequeue from cat queue', () => {
    expect(animalShelter.dequeue('bird')).toBeNull();
  });

});
