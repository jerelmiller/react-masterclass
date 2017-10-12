/* ------ Declaring classes ------ */

// To declare a class, use the `class` keyword followed by the identifier.

class Animal {
  constructor(noise) {
    this.noise = noise
  }

  makeNoise() {
    console.log(this.noise)
  }
}

const barker = new Animal('woof')
barker.makeNoise()

/* ------ Extending other classes ------ */

// JavaScript allows you to inherit from other classes. To do so, use
// the `extends` keyword.

class Cat extends Animal {
  constructor() {
    super('Purrrrr')
  }
}

const cat = new Cat()
cat.makeNoise()
