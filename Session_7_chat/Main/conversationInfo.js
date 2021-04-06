

class ConversationInfo {
    $form;
    $txtEmail;
    $btnAdd;
    $userList;


    activeConversation;

    constructor() {
        this.$form = document.createElement('form');

        this.$txtEmail = document.createElement('input')
        this.$txtEmail.type = "email";
        this.$txtEmail.placeholder = 'Enter your friend name...';
        this.$txtEmail.classList.add('grow-1');

        this.$btnAdd = document.createElement('button');
        this.$btnAdd.type = 'submit';
        this.$btnAdd.innerHTML = "Add";

        this.$userList = document.createElement('ul');
    }

    setActiveConversation = (conversation) => {

    }

    initRender = (container) => {
        const infoContainer = document.createElement('div');
        infoContainer.style.width = '200px'
        const div = document.createElement('div');
        div.classList.add('d-flex', 'item');

        div.appendChild(this.$txtEmail);
        div.appendChild(this.$btnAdd);

        this.$form.appendChild(div);
        infoContainer.appendChild(this.$form);
        infoContainer.appendChild(this.$userList)
        container.appendChild(this.$form);
    }
}

export default ConversationInfo;