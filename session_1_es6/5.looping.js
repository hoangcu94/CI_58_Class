const arr = [1, 2, 3];
for (let i = 0; i< arr.length; i++) {
    console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

for (let element of arr) {
    console.log(element);
}

for (let element in arr) {
    console.log(element);
}

const obj = { foo: "foo value", bar: "bar value"};
for (let key in obj) {
    console.log(key);
}