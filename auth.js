let user = function (name, pwd) {
    this.userName = name;
    this.passWord = pwd;

    this.changeName = function (newName) {
        this.userName = newName;
    }
    this.changePwd = function (newPwd) {
        this.passWord = newPwd;
    }
}

const user1 = new user("B�la", "qwe123");
const user2 = new user("Gizi", "1234");
const user3 = new user("Asexual", "000");

let users = [user1, user2, user3];

let doAuth = function () {
    let data = document.querySelectorAll(".popUp > .auth > div > div > input");
    let inputName = data[0];
    let inputPass = data[1];
    let auth = false;

    for (var i = 0; i < users.length && !auth; i++) {
        if (users[i].userName === inputName && users[i].passWord === inputPass) {
            auth = true;
        }
    }
    if (auth) {
        document.querySelector(".popUp").style.display = "none";
        loadStart();
        renderHtml();
    }
}