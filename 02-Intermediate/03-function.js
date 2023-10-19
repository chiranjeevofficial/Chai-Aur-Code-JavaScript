// # function
function sumOfTwo(num1, num2) {
    return num1 + num2;
}

function sayNamaste(username) {
    if (username)
        console.log(`Namaste! ${username}`);
}

function sayNamaste(username = "Narayan") {
    console.log(`Namaste! ${username}`);
}

console.log(`Sum of ${1} & ${8} is ${sumOfTwo(1,8)}`);
sayNamaste();