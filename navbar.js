// let navbarClick = function () {
    
//     console.log(navbar);
// }
// let navbar = document.getElementsByClassName("navbar");
// navbar.foreach(
//     item => {
//         item.addEventListener("click", console.log("clicked at navbar", item.innerHTML));
//     }
// )
let navBar = document.getElementsByClassName("navbar");
navBar[0].className= "navbar "+themeSelect;
let dropdownElements = document.querySelectorAll("a[class=dropdown-element]");
console.log(dropdownElements);
dropdownElements.forEach(
    item => {
        addEventListener("click", console.log("kattintás"));
    }
);
