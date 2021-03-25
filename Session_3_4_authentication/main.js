class Main {
    constructor() {}

    initRender = (container) => {
        const p = document.createElement(`p`);
        p.innerHTML = `Hello User`;
        const btnLogout = document.createElement(`button`);
        btnLogout.innerHTML = `Logout`;
        // Firebase logout
        btnLogout.addEventListener(`click`, () => {
            firebase.auth().signOut();
        })
        container.appendChild(p);
        container.appendChild(btnLogout);
    };
};

export default Main;