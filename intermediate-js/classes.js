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

/* -------------------------------- */

class Cat extends Animal {
  constructor() {
    super('Purrrrr')
  }
}

const cat = new Cat()
cat.makeNoise()
