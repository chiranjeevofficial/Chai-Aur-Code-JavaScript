/*
* In Javascript, there are only 2 type(category) of datatypes.
# Primitive DataType (7 Types)
    1. String
    2. Number (100, 100.5)
    3. Boolean (let loggedIn = true || false)
    4. null (let temperature = null)
    5. undefined
    6. Symbol (let userId = Symbol('123'))
    7. BigInt
# Non-Primitive DataType (Reference Type: 3 Types)
    1. Array
    2. Object
    3. function

## categorization is based on, how to save data in memory and how can i access it.
## javascript is a dynamically typed language, because we can't define the type of variable are hold the value.
*/

// Reference DataType Example
// Array
const chiranjeevi = ['Aswattama','Bali','Ved Vyas','Hanuman','Vibhishan','Kripacharya','Parshuram','Markandey'];

// Object
let obj = {
    username : 'Chiranjeev',
    age : 22
}

// function
let fun = function() {
    console.log('Namaste! JavaScript');
}
fun();