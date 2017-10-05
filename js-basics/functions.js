/* -------------------------- */

function myFirstFunction() {
  console.log('yippeeee')
}

myFirstFunction()

/* -------------------------- */

function withArgs(firstName, lastName) {
  console.log(firstName, lastName)
}

withArgs('Jim', 'Halpert')
withArgs('Pam')
withArgs('Bob', 'Vance', 'Vance Refridgeration')


/* -------------------------- */

myHoistedFunction()

function myHoistedFunction() {
  console.log("I can get called even before I'm declared")
}

/* -------------------------- */

const myAnonymousFunction = function() {
  console.log('I work the same as a regular function')
}

myAnonymousFunction()

/* -------------------------- */

const sayings = {
  hello: function() {
    console.log('You dawg, whats the haps?')
  },
  goodbye: function() {
    console.log('good day to you')
  }
}

sayings.hello()
sayings.goodbye()

/* -------------------------- */

const dishes = {
  breakfast() {
    console.log("Too bad I'm not a chef")
  },
  lunch() {
    console.log("Ya, I can't get that for you")
  },
  dinner() {
    console.log("You demand too much")
  }
}

dishes.breakfast()
dishes.lunch()
dishes.dinner()

/* -------------------------- */

const myFirstArrowFunction = () => {
  console.log('Very pointy')
}

myFirstArrowFunction()

/* -------------------------- */

const greet = (name) => {
  console.log(`Hello ${name}`)
}

greet('Jerel')

/* -------------------------- */

const greetAlternate = name => {
  console.log(`Howdy ${name}`)
}

greetAlternate('Jerel')

/* -------------------------- */

const add = (a, b) => {
  return a + b
}

console.log(add(1, 2))

/* -------------------------- */

const subtract = (a, b) => a - b

console.log(subtract(2, 1))

/* -------------------------- */

const numbers = [1, 2, 3, 4]

const doubledNumbers = numbers.map(num => num * 2)

console.log(doubledNumbers)

/* -------------------------- */

const exclaim = phrase => `${phrase}!`
const phrases = ["Don't do it", 'Bring me coffee']

const excitedPhrases = phrases.map(exclaim)

console.log(excitedPhrases)
