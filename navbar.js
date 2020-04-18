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
}





let navBar = document.getElementsByClassName("navbar");
navBar[0].className= "navbar "+themeSelect;
let dropdownElements = document.getElementsByClassName("outlook");
// console.log(dropdownElements);
for (let i = 0; i < dropdownElements.length; i++) {
    if (dropdownElements[i].className=="outlook themeSelect") {
        dropdownElements[i].addEventListener("click", themeChange)
    }
    if (dropdownElements[i].className=="outlook backgroundPicSelect") {
        dropdownElements[i].addEventListener("click", () => console.log ("kép katt"+dropdownElements[i].innerHTML))
    }
}
