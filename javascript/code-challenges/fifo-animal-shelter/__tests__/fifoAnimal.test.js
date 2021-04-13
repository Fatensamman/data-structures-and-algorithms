'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');
let animalShelter = new AnimalShelter();
const newCat = {type:'cat'};
const bird = {type:'bird'};

describe('Animals tests', () => {
  it(' 1 It should enqueue cat to cat queue', () => {
    animalShelter.enqueue(newCat);
    animalShelter.enqueue(newCat);
    expect(animalShelter.cats.size).toEqual(2);

  });
  it(' 2 It should return failer status', () => {
    let animal = animalShelter.enqueue(bird);
    expect(animal).toEqual('this shelter only for dogs and cats');
  });
  it(' 2 It should dequeue from cat queue', () => {
    animalShelter.dequeue('cat');
    expect(animalShelter.cats.size).toEqual(1);
  });
  it('4 It should return null if the animal is not dog or cat', () => {
    expect(animalShelter.dequeue('bird')).toBeNull();
  });

});
