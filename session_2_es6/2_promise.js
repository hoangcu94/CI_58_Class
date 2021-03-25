
// setTimeout (() => {
//     console.log("hello");
//     setTimeout (() => {
//         console.log("world");
//         setTimeout (() => {
//             console.log("this");
//             setTimeout (() => {
//                 console.log("is");
//                 setTimeout (() => {
//                     console.log("CI");
//                     setTimeout (() => {
//                         console.log("58");
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Promise

const delay = (time) =>{
    return new Promise((resolve) => {
       return setTimeout(() => {
           resolve();
       },time);
    });
};

delay(1000)
    .then(()=> console.log("hello"))
    .then(() => delay(1000))
    .then(()=> console.log("world"))
    .then(() => delay(1000))
    .then(()=> console.log("Ci 58"))
    .then(() => delay(1000));

