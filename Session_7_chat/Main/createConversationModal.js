class CreateConversationModal {
    $backdrop;
    $formCreate;
    $txtConversationName;
    $btnCreate;
    $btnClose;

    constructor() {
        this.$backdrop = document.createElement("div");
        this.$backdrop.style.height = "100vh";
        this.$backdrop.style.width = "100vw";
        this.$backdrop.style.position = "fixed";
        this.$backdrop.style.top = "0";
        this.$backdrop.style.left = "0";
        this.$backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        this.$backdrop.classList.add("centering");
        this.$backdrop.style.display = "none";

        this.$formCreate = document.createElement('form');
        this.$txtConversationName = document.createElement('input');
        this.$txtConversationName.type ="text";

        this.$btnCreate = document.createElement("button");
        this.$btnCreate.type = "submit";
        this.$btnCreate.innerHTML = "Create";
        this.$btnCreate.addEventListener('click', this.onSubmit);

        this.$btnClose = document.createElement("button");
        this.$btnClose.type = "button";
        this.$btnClose.innerHTML = "Close";
        this.$btnClose.addEventListener('click', () => {
            this.setVisibe(false);
        });

    }

    onSubmit = (event) => {
        event.preventDefault();
        const name = this.$txtConversationName.value;
        const authUser = firebase.auth().currentUser;
        console.log(name, authUser);

        db.collection("conversation")
        .add ({
            name: name,
            creator:authUser.email,
            users: [authUser.email],
        })
        .then(() => {
            this.setVisibe(false);
        })
    };

    setVisibe = (value) => {
        if(value) {
            this.$backdrop.style.display = "flex";
        } else {
            this.$backdrop.style.display = "none";
        }
    };
    initRender = (container) => {
        const div = document.createElement("div");
        div.style.width = "500px";
        div.style.padding = "20px";
        div.style.backgroundColor = "white";

        const title = document.createElement('h3');
        title.innerHTML = 'Create new conversation';
        div.appendChild(title);

        this.$formCreate.appendChild(this.$txtConversationName);
        this.$formCreate.appendChild(this.$btnCreate);
        this.$formCreate.appendChild(this.$btnClose);
        div.appendChild(this.$formCreate);
        this.$backdrop.appendChild(div);
        container.appendChild(this.$backdrop);

    };
}

export default CreateConversationModal;