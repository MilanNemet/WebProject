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

        animateBgnd(data[0], 5);
        animateBgnd(data[1], 0, "lin", 1);
    }
}

let animateBgnd = function (target, intervall=1, mode = null, modifier = null, pace=1) {

    let str = target.style.backgroundColor;
    let values = str.slice(4, str.length - 1);
    let arr = values.split(", ");

    let red = parseInt(arr[0]);
    let green = parseInt(arr[1]);
    let blue = parseInt(arr[2]);

    let time = intervall;

    green += pace;
    blue += pace;

    switch (mode) {
        case "lin":
            time += modifier;
            break;
        case "exp":
            time *= modifier;
            break;
        default:
            break;
    }
    
    target.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    if (green <= 255) {
        setTimeout(
            () => {
                animateBgnd(target, time, mode, modifier);
                console.info("T: " + time + " || r:" + red + ", g:" + green + ", b:" + blue);
            },
            time
        );
    }
}