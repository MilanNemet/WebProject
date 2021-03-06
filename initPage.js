let loadStart = function () {
    let postit = new postIt();

    for (var i = 0; i < 8; i++) {
        if (i % 2 == 1) {
            columns.push(new column(i + 1 + ". even column"));
        }
        else {
            columns.push(new column(i + 1 + ". odd column"));
        }
    }
    for (var i = 0; i < columns.length; i++) {
        columns[i].Add(postit);
        columns[i].Add(postit);
        if (i % 2 == 0) {
            columns[i].Add(postit);
        }
        if (i % 3 == 0) {
            columns[i].Add(postit);
            columns[i].Add(postit);
        }
    }
}

let themeSelect = "medium";                         // for testing the theme you need to change the class only here!!

let renderHtml = function () {
    console.debug("Starting render HTML...");

    document.querySelector("html").className = themeSelect;

    let mainDiv = document.querySelector(".container");
    mainDiv.className = "container "+themeSelect;
    let newDivCol = [];
    let newDivPost = [];

    for (var i = 0; i < columns.length; i++) {
        let divOuter = document.createElement("div");
        divOuter.className = "column "+themeSelect;

        let colTitle = document.createElement("h3");
        colTitle.innerHTML = columns[i].title.toUpperCase();

        divOuter.appendChild(colTitle);

        for (var j = 0; j < columns[i].postIts.length; j++) {
            let divInner = document.createElement("div");
            divInner.className = "card "+themeSelect;

            let cardTitle = document.createElement("h5");
            let cardContent = document.createElement("p");
            cardContent.className = "content";  //Card content has class: "content"
            //cardContent.style.display = "none"; //Card content is not visible
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
        buttonAddNewCard.className = "newCard "+themeSelect;

        divOuter.appendChild(buttonAddNewCard);

        let divEditor = document.createElement("div");
        divEditor.className ="editor";
        divEditor.style.display = "none";
        let inputTitle = document.createElement("input");
        inputTitle.className = "title";
        inputTitle.placeholder = "Adj címet ennek a kártyának...";

        let btnNewCard = document.createElement("button");
        btnNewCard.className = "btn-card";
        btnNewCard.innerHTML = "Új kártya";

        let btnClose = document.createElement("button");
        btnClose.className = "closing-x";
        btnClose.innerHTML = "X";

        divEditor.appendChild(inputTitle);
        divEditor.appendChild(btnNewCard);
        divEditor.appendChild(btnClose);
        divOuter.appendChild(divEditor);

        mainDiv.appendChild(divOuter);
    }
}