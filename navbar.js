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

let backgroundPictureChange = (e) => {
    let htmlData = document.querySelector("html");
    console.log(e.target.dataset.value);
    htmlData.style.backgroundImage = `url(${e.target.dataset.value})`;
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
        dropdownElements[i].addEventListener("click", backgroundPictureChange)
    }
}
// let actualBckgrndColor = document.getElementsByClassName(themeSelect);  // Picks all the elements contains the current theme name, the global background is set on the HTML element. I cannot change that.
// console.log(actualBckgrndColor);
// actualBckgrndColor[0].style.backgroundImage = "url(resources/bgnd-dark5.jpg)";
// let htmlData = document.querySelector("html");
// console.log(htmlData);
// htmlData.style.backgroundImage = "url(resources\bgnd-dark2.jpg)";
// htmlData.style.backgroundImage= "none";
// htmlData.style.backgroundColor = "black";

// console.log(htmlData);
// let backgroundColorSelect = document.getElementById("bckgrndColor");

// backgroundColorSelect.value = ...;   //Can set the default value this vay
// backgroundColorSelect.addEventListener("input"; () => {
//     actualBackground
// });

// $("html").css("background-image","url(resources/bgnd-dark5.jpg)")