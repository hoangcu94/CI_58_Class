// const alice = {
//     name: "Alice",
//     age: 25,
// };
// const bob = {
//     name: "Bob",
//     age: 26,
// };

class Person {
    name = "Demo";
    age = 10;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.address = "Hanoi";
    }

    sayHello() {
        console.log("Hello, this is " + this.name);
    }
}

const alice = new Person("Alice",25);
const bob = new Person("Bob", 26);
console.log(alice, bob);
alice.sayHello();

// Ke thua
class Student extends Person{
    className = "";
    grade = 0;
    constructor(name, age, className, grade) {
        super(name, age); // tro den constructor cha (person)
        this.className = className;
        this.grade = grade;
    }
    display = () => {
        console.log("This is display method");
    };
    sayHello() {
        super.sayHello();
        console.log(" I am a student");
    }
};
const nguyenVanA = new Student("nguyenVanA",25,"Ci 58",8);
const nguyenVanB = new Student("nguyenVanB",26,"Ci 58",7);
console.log(nguyenVanA,nguyenVanB);
nguyenVanA.sayHello();

// ex
const app = document.getElementById("app");
const btnAddForm = document.getElementById("btn-AddForm");

btnAddForm.addEventListener("click", () => {
    const myForm = new MyForm();
    myForm.render(app);
});
class MyForm {
    input = null;
    button = null;
    constructor() {
        this.input = document.createElement("input");
        this.button = document.createElement("button");

        this.button.innerHTML = "Get";
        this.button.addEventListener("click", () => {
            console.log(this.input.value);
        });
    }

    render = (container) => {
        const div = document.createElement("div");
        div.appendChild(this.input);
        div.appendChild(this.button);
        container.appendChild(div);
    };
}