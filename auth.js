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

const user1 = new user("B\u00E9la", "qwe123");
const user2 = new user("Gizi", "1234");
const user3 = new user("Asexual", "000");

let users = [user1, user2, user3];

let doAuth = function () {
    let data = document.querySelectorAll(".auth input");
    let inputName = data[0].value;
    let inputPass = data[1].value;
    let isAuth = false;

    for (var i = 0; i < users.length && !isAuth; i++) {
        if (users[i].userName === inputName && users[i].passWord === inputPass) {
            isAuth = true;
        }
    }
    if (isAuth) {
        let popUp = document.querySelector(".popUp");
        popUp.style.display = "none";
        loadStart();
        renderHtml();
    }
    else {
        data[0].style.backgroundColor = "#F00";
        data[1].style.backgroundColor = "#F00";

        setTimeout(
            function () {
                document.querySelectorAll(".auth input")[0].style.backgroundColor[2]++;
                document.querySelectorAll(".auth input")[0].style.backgroundColor[3]++;
                document.querySelectorAll(".auth input")[1].style.backgroundColor[2]++;
                document.querySelectorAll(".auth input")[1].style.backgroundColor[3]++;
            },
            10
        );
    }
}