'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(
          (animalToCheck) => animalToCheck !== animal,
        );
      }
    }
  }
}

const tiger = new Carnivore('Tiger');
const zebra = new Herbivore('Zebra');

tiger.bite(zebra);
tiger.bite(zebra);

console.log(Animal.alive);

// console.log(Animal.alive());

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
