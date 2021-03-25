import app from "./index.js";
import Login from "./login.js";

class Register {
    $txtEmail;
    $txtUserName;
    $txtPassword;
    $txtConfirmPassword;
    $formRegister;
    $btnSubmit;
    $errorMessage;

    constructor() {
        this.$txtEmail = document.createElement(`input`);
        this.$txtEmail.placeholder = `Enter your email...`;
        this.$txtEmail.type = "email";

        this.$txtUserName = document.createElement(`input`);
        this.$txtUserName.type = "text";
        this.$txtUserName.placeholder = "enter your Username...";

        this.$txtPassword = document.createElement(`input`);
        this.$txtPassword.placeholder = "Enter password...";
        this.$txtPassword.type = "password";

        this.$txtConfirmPassword = document.createElement(`input`);
        this.$txtConfirmPassword.type = "password";
        this.$txtConfirmPassword.placeholder = "confirm password...";

        this.$formRegister = document.createElement(`form`);
        this.$formRegister.addEventListener(`submit`, this.handleSubmit);

        this.$btnSubmit = document.createElement(`button`);
        this.$btnSubmit.innerHTML = `Register`;
        this.$btnSubmit.type = `submit`;

        this.$errorMessage = document.createElement(`p`);
        this.$errorMessage.classList.add(`error`);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const email = this.$txtEmail.value;
        const userName = this.$txtUserName.value;
        const password = this.$txtPassword.value;
        const confirmPassword = this.$txtConfirmPassword.value;
        
        if (email === "") {
            this.setError(`Email cannot be empty`);
            return;
        }
        if (userName === "") {
            this.setError(`Username cannot be empty! `);
            return;
        }
        if (password === "") {
            this.setError(`Password cannot be empty! `);
            return;
        }
        if (confirmPassword === "") {
            this.setError(`Confirm password cannot be empty! `);
            return;
        }
        if (password !== confirmPassword) {
            this.setError(`Password & Confirm password must be same`);
            return;
        }
        this.setError("");
        // Tao firebase
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // console.log(userCredential);
            firebase.auth().currentUser.updateProfile({
                userName: userName
            })
            // Xac thuc tai khoan email
            firebase.auth().currentUser.sendEmailVerification();
        });

    };
    setError = (content) => {
        this.$errorMessage.innerHTML = content;
        if(content !== "") {
            this.$errorMessage.style.display = "block";
        } else {
            this.$errorMessage.style.display = "none";
        }
    }

    goToLogin = () => {
        const login = new Login();
        app.changeActiveScreen(login);
    };

    initRender = (container) => {
        const flexContainer = document.createElement(`div`);
        flexContainer.classList.add("d-flex", "centering", "f-column");
        const title = document.createElement("h1");
        title.innerHTML = `Creat your account`;

        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$errorMessage);
        flexContainer.appendChild(this.$txtEmail);
        flexContainer.appendChild(this.$txtUserName);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$txtConfirmPassword);
        flexContainer.appendChild(this.$btnSubmit);

        const linkToLogin = document.createElement(`a`);
        linkToLogin.href = "#";
        linkToLogin.innerHTML = "Go to Login";
        linkToLogin.classList.add(`decoration`);
        linkToLogin.addEventListener(`click`, this.goToLogin);

        flexContainer.appendChild(linkToLogin);
        this.$formRegister.appendChild(flexContainer);
        container.appendChild(this.$formRegister);
    };

};

export default Register;
