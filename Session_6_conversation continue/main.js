import ConversationList from "./Main/ConversationList.js";
import Title from "./Main/title.js";

class Main {
    conversationList;
    title;

    activeConversation;

    constructor() {
        this.conversationList = new ConversationList((conversation) => {
            this.setActiveConversation(conversation);
        });
        this.title = new Title("", 0);
    }

    setActiveConversation = (conversation) => {

        this.activeConversation = conversation;

        this.conversationList.setActiveConversation(conversation);
        this.title.setActiveConversation(conversation);
    }

    initRender = (container) => {
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

        const conversationInfo = document.createElement("div");
        conversationInfo.style.width = "200px";
        const div3 =document.createElement("div");
        div3.classList.add("grow-1", "item", "d-flex", "f-column");

        const messageList = document.createElement("div");
        messageList.classList.add("grow-1", "item");

        const composer = document.createElement("div");
        composer.style.height = "40px";
        composer.classList.add("d-flex");
        const inputChat = document.createElement("input");
        inputChat.type = "text";
        inputChat.placeholder = "Enter something...";  
        inputChat.classList.add("grow-1", "border-radius", "margin");   
        // inputChat.style.margin = "5px 10px";
        // inputChat.style.padding = "10px";  
        // inputChat.style.borderRadius = "5px";  
        const btnSubmit = document.createElement("button");
        btnSubmit.type = "submit";
        btnSubmit.innerHTML = "Send";
        btnSubmit.style.width = "75px";
        btnSubmit.classList.add("margin", "border-radius");
        // btnSubmit.style.margin = "5px";
        // btnSubmit.style.borderRadius = "5px";
        composer.appendChild(inputChat);
        composer.appendChild(btnSubmit);

        content.appendChild(div2);
        div2.appendChild(div3);
        div2.appendChild(conversationInfo);
        div3.appendChild(messageList);
        div3.appendChild(composer)
        container.appendChild(div);
    };
};

export default Main;