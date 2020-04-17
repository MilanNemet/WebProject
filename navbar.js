let themeChange = (e) => {
    let btn=e.target;
    // console.log(e.target.dataset.value);
    let themeElements = document.getElementsByClassName(themeSelect);
    console.log(themeElements.length);
    let newTheme = e.target.dataset.value;
    while (themeElements.length > 0) {
        let currClass = themeElements[0].className;
        console.log(currClass);
        let classChange = currClass.replace(themeSelect,newTheme);
        console.log(classChange);
        themeElements[0].className = classChange;
        console.log(themeElements[0].className);
    };
    console.log(themeElements);
    console.log(themeSelect+"/"+newTheme);
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
