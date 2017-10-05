/* ------ Declaring varibles using `var` ------ */

// The basics of declaring a variable. Prefix a name with the keyword `var`
// to create a variable that you can reference later.

var myVar = 'Not a clever variable name'

console.log(myVar)

/* ------ var: Function scoping ------ */

// `var` is function scoped. This means that variables declared within a
// function are defined within a new scope. Notice how the `myVar` inside of
// the function does not affect the global `myVar` function defined above.

function teachFunctionScope() {
  var myVar = 'Still a terrible variable name'

  console.log(myVar)
}

teachFunctionScope()
console.log(myVar)

/* ------ var: Variable reassignment ------ */

// As you might expect, you can reassign the value given to a `var`. By doing
// so, the variable is updated with the new value.

function teachVarReassignment() {
  var firstName = 'Jerel'
  firstName = 'Bob'

  console.log(firstName)
}

teachVarReassignment()

/* ------ var: Variable redeclaration ------ */

// What might be more surpising is that you can redeclare a `var` again using
// the same name. This is effectively treated the same as variable reassignment
// mentioned above.

function teachVarRedeclaration() {
  var firstName = 'Jerel'
  var firstName = 'Bob'

  console.log(firstName)
}

teachVarRedeclaration()

/* ------ var: Hoisting ------ */

// `var` allows you to actually use the variable before its declared. This is
// called "hoisting". The value assigned to the variable is `undefined` until
// it is defined otherwise.

function teachVarHoisting() {
  console.log(firstName)
  var firstName = 'Jerel'

  console.log(firstName)
}

teachVarHoisting()

/* ------ var: Block scoping ------ */

// `var` is not block-scoped. This means you can access the variable outside of
// blocks. Think of a block as code between `{ }`. In this example, the `if`
// statement defines a new block, yet we are still able to access the variable
// outside of the `if` statement.

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

/* ------ Declaring variables using `let` ------ */

// Much like `var`, you can declare a variable using the `let` keyword.

function teachLet() {
  let greeting = 'hello'

  console.log(greeting)
}

teachLet()

/* ------ let: Variable reassignment ------ */

// Much like `var`, you can reassign the value of a `let`.

function teachLetReassign() {
  let greeting = 'hello'
  greeting = 'Wasssssup'

  console.log(greeting)
}

teachLetReassign()

/* -------------------------- */

// Unlike `var`, you cannot declare a `let` with the same name more than once
// within the same scope. The following code will throw an error since
// `greeting` is declared twice.

function teachLetRedeclare() {
  let greeting = 'hello'
  let greeting = 'bummer dude'

  console.log(greeting)
}

teachLetRedeclare()

/* ------ let: Hoisting ------ */

// Unlike `var`, `let` is not hoisted. You cannot use the variable until after
// it has been declared. This is much more intuitive behavior and can leed to
// less bugs. The following code will throw an error.

function teachLetHoisting() {
  console.log(greeting)
  let greeting = 'hello'

  console.log(greeting)
}

teachLetHoisting()

/* ------ let: Block-scoping ------ */

// Unlike `var`, `let` is block-scoped. Any variables declared within a block
// will not be accessible outside the block.

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

/* ------ Declaring variables using `const` ------ */

// Much like `var` and `let`, you can declare variables using the `const`
// keyword.

function teachConst() {
  const greeting = 'Hello'

  console.log(greeting)
}

/* ------ const: Variable reassignment ------ */

// `const` has almost identical behavior to `let` with the exception that once
// a `const` is assigned a value, you cannot reassign it later.

function teachConst() {
  const greeting = 'Hello'
  greeting = 'Hello'

  console.log(greeting)
}

teachConst()

/* ------ const: Mutability ------  */

// What might be surpising is that `const` does not mean the assigned value
// cannot change. For complex types (objects, arrays, etc.), you can still
// mutate its value. `const` simply means you cannot reassign the variable a
// different value.

function teachMutableConst() {
  const games = ['Mario', 'Zelda']
  games.push('Bomberman')

  console.log(games)
}

teachMutableConst()
