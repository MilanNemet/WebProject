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

const user1 = new user("Béla", "123");
const user2 = new user("Gizi", "1234");
const user3 = new user("Asexual", "000");

let users = [user1, user2, user3];