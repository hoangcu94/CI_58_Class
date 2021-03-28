import app from "./index.js";
import Register from "./register.js";

class Login {
    $txtEmail;
    $txtPassword;
    $btnLogin;
    $formLogin;

    constructor() {
        this.$txtEmail = document.createElement(`input`);
        this.$txtEmail.type = `email`;
        this.$txtEmail.placeholder = `Enter your email...`;

        this.$txtPassword = document.createElement(`input`);
        this.$txtPassword.type = `password`;
        this.$txtPassword.placeholder = `Enter your password...`;

        this.$btnLogin = document.createElement(`button`);
        this.$btnLogin.type = `submit`;
        this.$btnLogin.innerHTML = `Login`;
      
        this.$formLogin = document.createElement(`form`);
        this.$formLogin.addEventListener(`submit` , this.login);
    }
    
    login = (event) => {
        event.preventDefault();
        const email = this.$txtEmail.value;
        const password = this.$txtPassword.value;
        
        // Login with firebase
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // console.log(userCredential);
        });
    };

    gotoRegister = () => {
        const register = new Register();
        app.changeActiveScreen(register);
    };
    
    initRender = (container) =>{
        const flexContainer = document.createElement(`div`);
        flexContainer.classList.add(`d-flex`, `centering`,`f-column`);
        const title = document.createElement(`h1`);
        title.innerHTML = `Login`;
        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$txtEmail);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$btnLogin);

        const linkToRegister = document.createElement(`a`);
        linkToRegister.innerHTML = "Go to Register...";
        linkToRegister.href = "#";
        linkToRegister.classList.add("decoration");
        linkToRegister.addEventListener(`click`, this.gotoRegister);

        flexContainer.appendChild(linkToRegister);
        this.$formLogin.appendChild(flexContainer);
        container.appendChild(this.$formLogin);
    };
};

export default Login;