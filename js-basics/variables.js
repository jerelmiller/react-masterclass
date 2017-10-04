/* ---------- var --------------- */

var myVar = 'Not a clever variable name'

console.log(myVar)

/* -------------------------- */

function teachFunctionScope() {
  var myVar = 'Still a terrible variable name'

  console.log(myVar)
}

teachFunctionScope()
console.log(myVar)

/* -------------------------- */

function teachVarReassignment() {
  var firstName = 'Jerel'
  firstName = 'Bob'

  console.log(firstName)
}

teachVarReassignment()

/* -------------------------- */

function teachVarRedeclaration() {
  var firstName = 'Jerel'
  var firstName = 'Bob'

  console.log(firstName)
}

teachVarRedeclaration()

/* -------------------------- */

function teachVarHoisting() {
  console.log(firstName)
  var firstName = 'Jerel'

  console.log(firstName)
}

teachVarHoisting()

/* -------------------------- */

function teachVarBlockScope() {
  var age = 22
  var legal = false

  if (age > 10) {
    var dogYears = age * 7
    console.log(dogYears)
  }

  console.log(dogYears)

  if (age >= 21) {
    var legal = true
  }

  console.log(legal)
}

teachVarBlockScope()

/* ---------- let ----------- */

function teachLet() {
  let greeting = 'hello'

  console.log(greeting)
}

teachLet()

/* -------------------------- */

function teachLetReassign() {
  let greeting = 'hello'
  greeting = 'Wasssssup'

  console.log(greeting)
}

teachLetReassign()

/* -------------------------- */

function teachLetRedeclare() {
  let greeting = 'hello'
  let greeting = 'bummer dude'

  console.log(greeting)
}

teachLetRedeclare()

/* -------------------------- */

function teachLetHoisting() {
  console.log(greeting)
  let greeting = 'hello'

  console.log(greeting)
}

teachLetHoisting()

/* -------------------------- */

function teachLetBlockScope() {
  let greeting = 'hello'

  if (greeting === 'hello') {
    let goodbye = 'goodbye'

    console.log(goodbye)
  }

  console.log(goodbye)

  if (greeting === 'hello') {
    let greeting = 'bummer'

    console.log(greeting)
  }

  console.log(greeting)
}

teachLetBlockScope()

/* ----------- const --------- */

function teachConst() {
  const greeting = 'Hello'
  greeting = 'Hello'

  console.log(greeting)
}

teachConst()

/* -------------------------- */

function teachMutableConst() {
  const games = ['Mario', 'Zelda']
  games.push('Bomberman')

  console.log(games)
}

teachMutableConst()
