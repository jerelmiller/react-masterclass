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

/* ------ Arrow functions ------ */

// ES6 introduced a new syntax for declaring functions. These are called arrow
// functions (`=>`). Arrow functions are always anonymous.
//
// There are some differences in behavior between arrow functions and functions
// declared using the `function` keyword. These differences are not taught
// within this lesson. Refer to the intermediate-js examples to learn more
// about how the behavior differs.

const myFirstArrowFunction = () => {
  console.log('Very pointy')
}

myFirstArrowFunction()

/* ------ Arrow functions: Arguments ------ */

// Since arrow functions are just regular functions, you can accept arguments
// like you normally would. Notice the arguments are encasulated within the
// `()`.

const greet = (firstName, lastName) => {
  const greeting = `Hello ${firstName} ${lastName}`

  console.log(greeting)
}

greet('Jerel')

/* ------ Arrow functions: Single argument shorthand ------ */

// When you only have a single argument to an arrow function, you may omit the
// parens.

const greetAlternate = name => {
  console.log(`Howdy ${name}`)
}

greetAlternate('Jerel')

/* ------ Arrow functions: Returning values ------ */

// Use the `return` keyword to return a value from an arrow function.

const add = (a, b) => {
  return a + b
}

console.log(add(1, 2))

/* ------ Arrow functions: Implicit returns ------ */

// When your arrow function only has a single statement, you may choose to
// return the value implicitly. This means that you can drop the `return`
// keyword and the `{ }` from the function body. Note that implicit returns
// will not work with `{ }` around the function body. When using `{ }`, you
// must use the `return` keyword.

const subtract = (a, b) => a - b

console.log(subtract(2, 1))

/* ------ Arrow functions: Callbacks ------ */

// Arrow functions make great callback functions. When combined with the
// argument shorthand and implicit return, you can create some seriously
// readable code.

const numbers = [1, 2, 3, 4]

const doubledNumbers = numbers.map(num => num * 2)

console.log(doubledNumbers)

/* ------ Arrow functions: First-class citizens ------ */

// Arrow functions are also first-class citizens. You can pass them around like
// any other value. This allows you to pre-define functions that can then be
// passed as callbacks to other functions.

const exclaim = phrase => `${phrase}!`
const phrases = ["Don't do it", 'Bring me coffee']

const excitedPhrases = phrases.map(exclaim)

console.log(excitedPhrases)

/* ------ Arrow functions: Returning objects ------ */

// Like regular functions, it is perfectly normal to return objects from arrow
// functions as well.

const createConfig = options => {
  return {
    description: `${options.version} - ${options.status}`,
    enable: true
  }
}

const config = createConfig({ version: 1, status: 'ok' })
console.log(config)

// Lets rewrite the above using an implicit return. Notice this presents a
// challenge since the curlys are a signal to JavaScript to create a code
// block. To get around this issue, surround the curlys with parens.

const createAnotherConfig = options => ({
  description: `${options.version} - ${options.status}`,
  enable: true
})

const anotherConfig = createAnotherConfig({ version: 2, status: 'Much better' })
console.log(anotherConfig)
