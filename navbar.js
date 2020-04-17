let themeChange = (e) => {
    let btn=e.target;
    themeSelect = btn.innerHTML;
}





let navBar = document.getElementsByClassName("navbar");
navBar[0].className= "navbar "+themeSelect;
let dropdownElements = document.getElementsByClassName("outlook");
console.log(dropdownElements);
for (let i = 0; i < dropdownElements.length; i++) {
    if (dropdownElements[i].className=="outlook themeSelect") {
        dropdownElements[i].addEventListener("click", themeChange)
    } else {
        if (dropdownElements[i].className=="outlook backgroundPicSelect") {
            dropdownElements[i].addEventListener("click", () => console.log ("kép katt"+dropdownElements[i].innerHTML))
        }
    }
    
}
