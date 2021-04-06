import ConversationList from "./Main/ConversationList.js";
import Title from "./Main/title.js";
import Composer from "./Main/composer.js";
import MessageList from "./Main/messageList.js";
import ConversationInfo from "./Main/conversationInfo.js";

class Main {
    conversationList;
    title;
    composer;
    messageList;
    conversationInfo;

    activeConversation;

    constructor() {
        this.conversationList = new ConversationList((conversation) => {
            this.setActiveConversation(conversation);
        });
        this.title = new Title("", 0);
        this.composer = new Composer();
        this.messageList = new MessageList();
        this.conversationInfo = new ConversationInfo();
    }

    setActiveConversation = (conversation) => {

        this.activeConversation = conversation;

        this.conversationList.setActiveConversation(conversation);
        this.title.setActiveConversation(conversation);
        this.composer.setActiveConversation(conversation);
        this.messageList.setActiveConversation(conversation);
    }

    initRender = (container) => {
        const btnLogout = document.createElement('button');
        btnLogout.innerHTML = 'Logout';
        btnLogout.addEventListener('click', () => {
            firebase.auth().signOut();
        });

        const div = document.createElement(`div`);
        div.classList.add(`d-flex`, `item`);
        div.style.height = `100vh`;

        const content = document.createElement(`div`);
        content.classList.add("grow-1", "item", "d-flex", "f-column");

        this.conversationList.initRender(div);
        this.title.initRender(content);
        div.appendChild(content);

        const div2 = document.createElement("div");
        div2.classList.add("item","d-flex","grow-1");

        const div3 =document.createElement("div");
        div3.classList.add("grow-1", "item", "d-flex", "f-column");


        content.appendChild(div2);
        div2.appendChild(div3);
        
        this.conversationInfo.initRender(div2);
        this.messageList.initRender(div3);
        this.composer.initRender(div3);

        div.appendChild(content);
        container.appendChild(btnLogout);
        container.appendChild(div);

    };
};

export default Main;