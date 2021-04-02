import CreateConversationModal from "./createConversationModal.js";
import Conversation from "./conversation.js";

class ConversationList {
    $btnCreateConversation;
    $conversationListContainer;
    createConversationModal;

    conversationList;
    activeConversation;

    constructor (onChangeActiveConversation) {
        this.$btnCreateConversation = document.createElement("button");
        this.$btnCreateConversation.innerHTML = "New";
        this.$btnCreateConversation.addEventListener('click', this.openCreateModal);

        this.$conversationListContainer = document.createElement("div");

        this.createConversationModal = new CreateConversationModal();
        this.setUpConversationListener();

        this.conversationList = [];
        this.onChangeActiveConversation = onChangeActiveConversation;
    };
    
    setUpConversationListener = () => {
        db.collection('conversation').onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                // console.log(change.doc.data());
                const conversation = new Conversation(
                    change.doc.id, 
                    change.doc.data().name, 
                    change.doc.data().users.length,
                    (conversation) => {
                        this.onChangeActiveConversation(conversation);
                    }
                    );
                    console.log(conversation);

                this.conversationList.push(conversation);
                conversation.initRender(this.$conversationListContainer);
            })
        })
    }

    openCreateModal = () => {
        this.createConversationModal.setVisibe(true);
    };

    setActiveConversation = (conversation) => {
        if (this.activeConversation) {
            this.activeConversation.setActive(false);
        }
        this.activeConversation = conversation;
        this.activeConversation.setActive(true);
    };

    initRender = (container) => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.style.width = "200px";
        
        div.appendChild(this.$btnCreateConversation);
        div.appendChild(this.$conversationListContainer);
        this.createConversationModal.initRender(div);

        container.appendChild(div);
    };
}

export default ConversationList;