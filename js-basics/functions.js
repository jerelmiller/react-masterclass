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
