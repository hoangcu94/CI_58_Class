class Composer {
    activeConversation;

    $form;
    $txtMessage;
    $btnSend;

    constructor() {
        this.$form = document.createElement('form');
        this.$form.addEventListener('submit', this.onSendMessage);

        this.$txtMessage = document.createElement('input');
        this.$txtMessage.type = 'text';
        this.$txtMessage.placeholder = 'Please be nice in chat...'
        this.$txtMessage.classList.add('grow-1');
        this.$btnSend = document.createElement('button');
        this.$btnSend.type = 'submit';
        this.$btnSend.innerHTML = 'Send';

    }

    setActiveConversation(conversation) {
        this.activeConversation = conversation;
        // this.conversationList.setActiveConversation(conversation);
        // this.title.setActiveConversation(conversation);
        // this.composer.setActiveConversation(conversation);
    }

    onSendMessage = (event) => {
        event.preventDefault();
        // console.log('content:', this.$txtMessage.value);
        // console.log('authUser', firebase.auth().currentUser);
        // console.log('activeConversation: ', this.activeConversation);
        db.collection('messages').add({
            content: this.$txtMessage.value,
            sender: firebase.auth().currentUser.email,
            conversationId: this.activeConversation.id,
        });
    }

    initRender = (container) => {
        const div = document.createElement('div');
        div.classList.add('d-flex', 'item');
        div.appendChild(this.$txtMessage);
        div.appendChild(this.$btnSend);
        
        this.$form.appendChild(div);
        container.appendChild(this.$form);
    }
}

export default Composer;