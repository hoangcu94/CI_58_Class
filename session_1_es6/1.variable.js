console.log("Hello world!");

// hoisting
console.log(y);
var y = 1;
y = 2;

// error
console.log(z);
let z = 1;
z = 2;

// scope
let bar = 'bar';

if (bar == "bar") {
    var foo = "foo";
}
console.log(foo);