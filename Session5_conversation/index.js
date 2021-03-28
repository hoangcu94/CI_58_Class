import Login from "./login.js";
import Main from "./main.js";


class App {
    acctiveScreen;
    container;
    constructor(container) {
        this.container = container;
        this.setUpFirebaseAuthListener();
    }
    
    setUpFirebaseAuthListener = () => {
        firebase
        .auth()
        .onAuthStateChanged((user) => {
            // console.log(user);
            if(user && user.emailVerified) {
                const main = new Main();
                this.changeActiveScreen(main);
            } else {
                const login = new Login();
                this.changeActiveScreen(login);
            }
        });
    };
    
    changeActiveScreen(screen) {
        if (this.acctiveScreen) {
            this.container.innerHTML ="";
        }
        this.acctiveScreen = screen;
        this.acctiveScreen.initRender(this.container);
    }
    
}
const container = document.getElementById(`app`);

const login = new Login();

const app = new App(container);
app.changeActiveScreen(login);

export default app;

