// let score = 1;

// toInt(score);
function toInt(args) {
    console.log(
        "Before Conversion\n"+
        "Value --- "+args+"\n"+
        "Type ---- "+typeof args
    );
    args = String(args);
    console.log(
        "\nAfter Conversion\n"+
        "Value --- "+args+"\n"+
        "Type ---- "+typeof args+"\n"
    );
    // console.log(`
    // Value is: ${args}
    // Type is : ${typeof args}
    // Integer : ${Number.isInteger(args)}`);
    // args = Number(args);
}

// console.log(`Before conversion: ${typeof score}`);
// score = Number(score);
// console.log(`After conversion:  ${typeof score}`);

// if (Number.isInteger(score))
//     console.log(`its number: ${score}`);
// else
//     console.log(`its NaN: ${score}`);

// **************************** operations ****************************
// let value = 5;
// value = -value;
// console.log(value);

// console.log(2 + 2);      // addition
// console.log(2 - 2);      // subtration
// console.log(2 * 2);      // multiplication
// console.log(7.5 / 2);    // division (pure division)
// console.log(5 ** 3);     // exponent (x^y)
// console.log(2 % 3);      // remainder

// in below example, we know how to add two string.
// let greet = "Namaste! ";
// let userName = "Chiranjeev";
// let greeting = greet + userName;
// console.log(greeting);

// console.log(`${"1" + 2}\n${typeof("1" + 2)}`);               // 12 string
// console.log(`${1 + "2"}\n${typeof(1 + "2")}`);               // 12 string
// console.log(`${"1" + "2"}\n${typeof("1" + "2")}`);           // 12 string
// console.log(`${"1" + 2 + 2}\n${typeof("1" + 2 + 2)}`);       // 122 string
// console.log(`${1 + 2 + "2"}\n${typeof(1 + 2 + "2")}`);          // 32 string

// console.log(true);       // true
// console.log(+true);      // 1
// console.log(true+);      // syntax error
// console.log(true++);     // compile time error
// console.log(+"");        // 0
// console.log(""++);       // compile time error
