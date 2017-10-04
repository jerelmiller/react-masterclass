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
