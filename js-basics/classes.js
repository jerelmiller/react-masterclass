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
console.log(barker.noise)

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

/* ------ Hoisting ------ */

// Unlike JavaScript functions, classes are not hoisted. The following will
// result in a reference error.

const duck = new Duck()

class Duck extends Animal {
  constructor() {
    super('quack')
  }
}

/* ------ Class properties ------ */

// NOTE: This following does not work natively in Chrome.
// You will only be able to run the following if first transpiled by babel.

// You can declare class properties on the class itself.

class Square {
  sides = 4

  howManySides() {
    return this.sides
  }
}

// This is the same as setting the properties in the constructor.

class Square {
  constructor() {
    this.sides = 4
  }

  howManySides() {
    return this.sides
  }
}
