const foo = "hello";
if (foo) {
    console.log("The foo is true");
} else {
    console.log("The foo is false");
}

const bar = "bar";
switch (bar) {
    case "bar":
        console.log("first case");
        break;
    case "bar2":
        console.log("second case");
        break;
    case "bar3":
        console.log("first case");
        break;
}

let isEven = "even";
// if (3 % 2 === 0) {
//     isEven = "even";
// } else {
//     isEven = "odd";
// }

isEven = 3 % 2 === 0 ? "even" : "odd";

console.log(isEven);