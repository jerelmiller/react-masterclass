/* ------ Declaring functions ------ */

// To declare a new function, use the `function` keyword. This creates a named
// function that you can call later.

function myFirstFunction() {
  console.log('yippeeee')
}

myFirstFunction()

/* ------ Function arguments ------ */

// Unlike most languages, JavaScript does not care if you give a function a set
// of arguments that does not match its arity. When you give less arguments,
// the remaining arguments will be given a value of `undefined`. When you give
// more arguments, the others are simply ignored.

function withArgs(firstName, lastName) {
  console.log(firstName, lastName)
}

withArgs('Jim', 'Halpert')
withArgs('Pam')
withArgs('Bob', 'Vance', 'Vance Refridgeration')

/* ------ Anonymous functions ------ */

// JavaScript also allows you to create anonymous functions. These are
// functions without a name. Functions are also first class citizens, meaning
// you can treat them as any other variable. This allows you to pass them
// around like you would any other value. This allows you to assign anonymous
// functions to variables, which can then be used just like any other function.

const myAnonymousFunction = function() {
  console.log('I work the same as a regular function')
}

const copiedAnonymousFunction = myAnonymousFunction

myAnonymousFunction()
copiedAnonymousFunction()

/* ------ Hoisting ------ */

// Much like `var`, functions are hoisted. This means that you can use them
// before they are declared. This only works with named functions.

myHoistedFunction()

function myHoistedFunction() {
  console.log("I can get called even before I'm declared")
}

/* ------ Functions as values within objects ------ */

// As mentioned, JavaScript functions are first-class citizens. This means that
// you can assign functions as values within objects.

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

/* ------ ES6 shorthand ------ */

// ES6 (a.k.a. ES2015) introduced a shorthand for declaring functions as values
// within objects. This allows you to omit the `function` keyword and colon.

const meals = {
  breakfast() {
    console.log("Too bad I'm not a chef")
  },
  lunch() {
    console.log("Ya, I can't get that for you")
  },
  dinner(withDessert) {
    if (withDessert) {
      console.log('You demand too much')
    } else {
      console.log('You best be full')
    }
  }
}

meals.breakfast()
meals.lunch()
meals.dinner(true)
meals.dinner(false)

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
