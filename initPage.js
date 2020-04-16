let renderHtml = function () {
    console.debug("Starting render HTML...");

    document.querySelector("html").className = "medium";     //for testing: add your .className here (related to the entire document)

    let mainDiv = document.querySelector(".container");
    mainDiv.className = "container medium";
    let newDivCol = [];
    let newDivPost = [];

    for (var i = 0; i < columns.length; i++) {
        let divOuter = document.createElement("div");
        divOuter.className = "column medium";    //for testing: add your .className here (related to .column)

        let colTitle = document.createElement("h3");
        colTitle.innerHTML = columns[i].title.toUpperCase();

        divOuter.appendChild(colTitle);

        for (var j = 0; j < columns[i].postIts.length; j++) {
            let divInner = document.createElement("div");
            divInner.className = "card medium";    //for testing: add your .className here (related to .card)

            let cardTitle = document.createElement("h5");
            let cardContent = document.createElement("p");
            cardContent.className = "content";  //Card content has class: "content"
            cardContent.style.display = "none"; //Card content is not visible 
            let cardDescription = document.createElement("p");
            cardDescription.className = "cardDescription";   //Card description has class: "cardDescription"
            cardDescription.style.display = "none";         //Card description is not visible

            cardTitle.innerHTML = columns[i].postIts[j].title.toUpperCase();
            cardContent.innerHTML = columns[i].postIts[j].content;
            cardDescription.innerHTML = columns[i].postIts[j].description;

            divInner.appendChild(cardTitle);
            divInner.appendChild(cardContent);
            divInner.appendChild(cardDescription);

            divOuter.appendChild(divInner);
        }

        let buttonAddNewCard = document.createElement("button");
        buttonAddNewCard.innerHTML = "&uacute;j post-it";              /* for testing: text in the button, appearing on frontend */
        buttonAddNewCard.className = "newCard medium";                        /* for testing: class(es) of this button */

        divOuter.appendChild(buttonAddNewCard);

        mainDiv.appendChild(divOuter);
    }
}
let navbarClick = function () {
    
    console.log(navbar);
}
let navbar = document.getElementsByClassName("navbar");
navbar.foreach(
    item => {
        item.addEventListener("click", console.log("clicked at navbar", item.innerHTML));
    }
)
