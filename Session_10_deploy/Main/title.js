
class Title {
    name;
    noOfUsers;

    $txtName;
    $txtNoOfUsers;

    constructor (name, noOfUsers) {
        this.name = name;
        this.noOfUsers = noOfUsers;

        this.$txtName = document.createElement("div");
        this.$txtName.innerHTML = this.name;
        this.$txtName.style.fontSize = "33px";
        
        this.$txtNoOfUsers = document.createElement("div");
        this.$txtNoOfUsers.innerHTML = this.noOfUsers;
        this.$txtNoOfUsers.style.fontSize = "16px";
    }
    setActiveConversation = (activeConversation) => {
        this.name = activeConversation.name;
        
        this.noOfUsers = activeConversation.users.length;
        this.$txtName.innerHTML = this.name;
        this.$txtNoOfUsers.innerHTML = this.noOfUsers + " User(s)";
    }
    
    initRender = (container) => {
        const title = document.createElement("div");
        title.classList.add("space-between", "d-flex",);
        title.style.height = "50px";
        title.classList.add("p-x-sm");
        title.style.border = "0.5px solid #ececec";
        
        title.appendChild(this.$txtName);
        title.appendChild(this.$txtNoOfUsers);

        container.appendChild(title);
    }
}

export default Title;