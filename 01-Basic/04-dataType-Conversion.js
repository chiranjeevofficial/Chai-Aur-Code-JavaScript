let score = 1;

toInt(score);
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
