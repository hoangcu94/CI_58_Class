import CreateConversationModal from "./createConversationModal.js";

class ConversationList {
    $btnCreateConversation;
    createConversationModal;

    constructor () {
        this.$btnCreateConversation = document.createElement("button");
        this.$btnCreateConversation.innerHTML = "New";
        this.$btnCreateConversation.addEventListener('click', this.openCreateModal);

        this.createConversationModal = new CreateConversationModal();
        this.setUpConversationListener();
    };

    setUpConversationListener = () => {
        db.collection('conversation').onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                console.log(change.doc.data());
            })
        })
    }

    openCreateModal = () => {
        this.createConversationModal.setVisibe(true);
    };
    initRender = (container) => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.style.width = "200px";
        
        div.appendChild(this.$btnCreateConversation);
        this.createConversationModal.initRender(div);

        container.appendChild(div);
    };
}

export default ConversationList;