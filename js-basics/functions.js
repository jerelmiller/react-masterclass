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

const doSomethingWithOne = function(callback) {
  callback(1)
}

doSomethingWithOne(function(value) {
  console.log(`The value is ${value}`)
})

/* -------------------------- */

const giveMeSomethingRidiculous = function(callback) {
  const items = [
    'solar powered cooling hat',
    'alien butler',
    'wrist cell phone carrier'
  ]
  const randomItem = items[Math.floor(Math.random() * items.length)]

  callback(randomItem)
}

const handleRidiculousItem = function(item) {
  console.log(`Get that ${item} away from me`)
}

giveMeSomethingRidiculous(handleRidiculousItem)

/* -------------------------- */

// implement map

const map = function(array, callback) {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]))
  }
  return newArray
}

const values = [1, 2, 3]
const doubled = map(values, function(num) {
  return num * 2
})

console.log(doubled)

