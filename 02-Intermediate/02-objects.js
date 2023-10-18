// # singleton
// # Object.create

// # object literals
/*
    In object you can define your key & value, like
    let obj = {
        "keyName" : value
    }
    1. key is define as string, if you can't define as string its implicitly change to string.
    2. to access the property of object using .propertyName (dot) its not a appropriate way, using ["propertyName"] (square braces) its good way to access the object property.
    3. how to use the symbol in object - 
        i. declare a symbol, like - const symbol = Symbol("key1");
       ii. define the symbnol in object, like - [symbol] : "namaste!";
    4. how to freeze the object for soameone cannot change the value of property, like - Object.freeze(obj);
    5. define function in object
        JsUser.greet = function () {
            console.log(`Namaste! ${this.username}`);
        }
        console.log(JsUser.greet());
*/
const myKey = Symbol("key1");
let JsUser = {
    username : 'chiranjeev@123',
    "Full Name" : 'Chiranjeev Kashyap',
    age : 22,
    location : "Rishikesh",
    email : "chiranjeev@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"],
    [myKey]: "userkey"
}
// console.log(obj.username);
// console.log(obj["Full Name"]);
// console.log(obj[myKey]);

JsUser.greet = function () {
    console.log(`Namaste! ${this.username}`);
}
// console.log(JsUser.greet());