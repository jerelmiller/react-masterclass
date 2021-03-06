/* ------ A simple callback ------ */

// A callback is simply a function passed to another function. The callback
// can then be invoked within the function body just like any other function.

// Here is an example using the `function` syntax

function doSomethingWithOne(callback) {
  callback(1)
}

doSomethingWithOne(function(value) {
  console.log(`The value is ${value}`)
})

// Here is the example using arrow functions

const doSomethingWithTwo = callback => {
  callback(2)
}

doSomethingWithTwo(value => {
  console.log(`The value is ${value}`)
})

/* ------ Callback as a first-class function ------ */

// Since functions are first class citizens and can be passed around just like
// any other variable, we can assign the callback to a variable, then pass that
// variable as the argument to another function.

const giveMeSomethingRidiculous = callback => {
  const items = [
    'solar powered cooling hat',
    'alien butler',
    'wrist cell phone carrier'
  ]
  const randomItem = items[Math.floor(Math.random() * items.length)]

  callback(randomItem)
}

const handleRidiculousItem = item => {
  console.log(`Get that ${item} away from me`)
}

giveMeSomethingRidiculous(handleRidiculousItem)

/* ------ Challenge: Implementing `map` ------ */

const map = (array, callback) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]))
  }
  return newArray
}

const values = [1, 2, 3]

// Using function syntax
const doubled = map(values, function(num) {
  return num * 2
})

// Written using arrow functions
const doubledAgain = map(values, num => num * 2)

console.log(doubled)
console.log(doubledAgain)
