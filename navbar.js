let themeChange = (e) => {
    let newTheme = e.target.dataset.value;
    if (newTheme === themeSelect) {
        return
    };
    let themeElements = document.getElementsByClassName(themeSelect);
    while (themeElements.length > 0) {
        let currClass = themeElements[0].className;
        let classChange = currClass.replace(themeSelect,newTheme);
        themeElements[0].className = classChange;
    };
    themeSelect = newTheme;
};

let backgroundPictureChange = (e) => {
    let htmlData = document.querySelector("html");
    htmlData.style.backgroundImage = `url(${e.target.dataset.value})`;
};

let bckgrndColorChange = (e) => {
    let htmlData = document.querySelector("html");
    htmlData.style.backgroundImage = "none";
    htmlData.style.backgroundColor = e.target.value;
};

let navBar = document.getElementsByClassName("navbar");
navBar[0].className= "navbar "+themeSelect;
let dropdownElements = document.getElementsByClassName("outlook");
for (let i = 0; i < dropdownElements.length; i++) {
    if (dropdownElements[i].className=="outlook themeSelect") {
        dropdownElements[i].addEventListener("click", themeChange)
    };
    if (dropdownElements[i].className=="outlook backgroundPicSelect") {
        dropdownElements[i].addEventListener("click", backgroundPictureChange)
    };
};
let bckgrndColorBtn = document.getElementById("bckgrndColor");
bckgrndColorBtn.addEventListener("input",bckgrndColorChange);