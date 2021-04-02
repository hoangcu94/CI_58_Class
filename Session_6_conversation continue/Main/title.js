
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

        
        this.$txtNoOfUsers = document.createElement("div");
        this.$txtNoOfUsers.innerHTML = this.noOfUsers;

    }
    setActiveConversation = (activeConversation) => {
        this.name = activeConversation.name;
        this.noOfUsers = activeConversation.users;
        this.$txtName.innerHTML = this.name;
        this.$txtNoOfUsers.innerHTML = this.noOfUsers + " User(s)";
    }
    
    initRender = (container) => {
        const title = document.createElement("div");
        title.classList.add("item", "space-between", "d-flex",);
        title.classList.add("item", "d-flex",);
        title.style.height = "40px";
        title.style.padding = "0 10px";
        
        title.appendChild(this.$txtName);
        title.appendChild(this.$txtNoOfUsers);

        container.appendChild(title);
    }
}

export default Title;