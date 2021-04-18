class CreateConversationModal {
    $backdrop;
    $formCreate;
    $txtConversationName;
    $btnCreate;
    $btnClose;

    constructor() {
        this.$backdrop = document.createElement("div");
        this.$backdrop.classList.add('vh-100', "vw-100")
        this.$backdrop.style.position = "fixed";
        this.$backdrop.style.top = "0";
        this.$backdrop.style.left = "0";
        this.$backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        this.$backdrop.classList.add("centering");
        this.$backdrop.style.display = "none";

        this.$formCreate = document.createElement('form');
        this.$txtConversationName = document.createElement('input');
        this.$txtConversationName.type ="text";
        this.$txtConversationName.classList.add("form-input","m-b-sm")

        this.$btnCreate = document.createElement("button");
        this.$btnCreate.type = "submit";
        this.$btnCreate.innerHTML = "Create";
        this.$btnCreate.classList.add("btn", "btn-primary", "m-b-sm");
        this.$btnCreate.addEventListener('click', this.onSubmit);

        this.$btnClose = document.createElement("button");
        this.$btnClose.type = "button";
        this.$btnClose.innerHTML = "Close";
        this.$btnClose.classList.add("btn", "btn-third", "m-b-sm")
        this.$btnClose.addEventListener('click', () => {
            this.setVisible(false);
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
            this.setVisible(false);
        })
    };

    setVisible = (value) => {
        if(value) {
            this.$backdrop.style.display = "flex";
        } else {
            this.$backdrop.style.display = "none";
        }
    };
    initRender = (container) => {
        const div = document.createElement("div");
        // div.style.width = "500px";
        div.style.padding = "20px";
        div.style.backgroundColor = "white";
        div.classList.add("d-flex", "f-column", "justify-center");

        const title = document.createElement('h3');
        title.innerHTML = 'Create new conversation';
        div.appendChild(title);

        const btnContainer = document.createElement("div");
        div.appendChild(this.$txtConversationName);
        btnContainer.appendChild(this.$btnCreate);
        btnContainer.appendChild(this.$btnClose);
        div.appendChild(btnContainer);
        btnContainer.classList.add("d-flex", "space-around")
        this.$formCreate.appendChild(div);
        this.$backdrop.appendChild(this.$formCreate);
        container.appendChild(this.$backdrop);

    };
}

export default CreateConversationModal;