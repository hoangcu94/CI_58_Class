// Khai bao function
function sum(a, b) {
    return a + b;
}

// let value = sum(1, 2);
// console.log(value);
// alert(value);

const sub = function (a, b) {
    return a - b;
};

const multi = (a, b) => {
    return a * b;
};

const divide = (a, b) => a / b;

// console.log(sum(2, 2));
// console.log(sub(2, 2));
// console.log(multi(2, 2));
// console.log(divide(2, 2));

const myMath = {};
myMath.sum = sum;
myMath.sub = function () {};
myMath.multi = () => {};

// write a function to solve linear equation ax + b = 0;
const linearEquation = (a, b) => {
    if (a === 0) {
        if (b === 0) {
            return "pt vo so nghiem";
        } else return "pt vo nghiem"
    } else return -b / a;
}
// Write a function solve quadratic equation: ax^2 + bx + c = 0;
const quadratic = (a, b, c) => {
    if (a == 0) {
        return -c / b;
    } else {
        let delta = b*b - 4*a*c;
        if (delta == 0 ) {
            let x = -b / 2*a;
            console.log(`phuong trinh co nghiem kep`);
        } else if (delta < 0) {
            console.log(`phuong trinh vo nghiem`);
        } else {
            return x1; x2;

        }
    }
}

const btnClickMe = document.getElementById("btnClickMe");
btnClickMe.addEventListener('click', () => {
    console.log(this);
});
btnClickMe.addEventListener('click', function() {
    console.log(this);
});
