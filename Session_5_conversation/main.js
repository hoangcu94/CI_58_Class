import ConversationList from "./Main/ConversationList.js";

class Main {
    conversationList;

    constructor() {
        this.conversationList = new ConversationList();
    }

    initRender = (container) => {
        const div = document.createElement(`div`);
        div.classList.add(`d-flex`, `item`);
        div.style.height = `100vh`;

        const content = document.createElement(`div`);
        content.classList.add(`grow-1`,`item`);
        content.innerHTML = "content";

        this.conversationList.initRender(div);
        div.appendChild(content);
        
        container.appendChild(div);
    };
};

export default Main;