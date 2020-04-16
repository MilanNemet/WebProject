let renderHtml = function () {
    console.debug("Starting render HTML...");

    let mainDiv = document.querySelector(".container");
    let newDivCol = [];
    let newDivPost = [];

    for (var i = 0; i < columns.length; i++) {
        let divOuter = document.createElement("div");
        divOuter.className = "column medium";    //for testing: add your .className here (related to .column)

        let colTitle = document.createElement("h3");
        colTitle.innerHTML = columns[i].title;

        divOuter.appendChild(colTitle);

        for (var j = 0; j < columns[i].postIts.length; j++) {
            let divInner = document.createElement("div");
            divInner.className = "card medium";    //for testing: add your .className here (related to .card)

            let cardTitle = document.createElement("h5");
            let cardContent = document.createElement("p");
            let cardDescription = document.createElement("p");

            cardTitle.innerHTML = columns[i].postIts[j].title;
            cardContent.innerHTML = columns[i].postIts[j].content;
            cardDescription.innerHTML = columns[i].postIts[j].description;

            divInner.appendChild(cardTitle);
            divInner.appendChild(cardContent);
            divInner.appendChild(cardDescription);

            divOuter.appendChild(divInner);
        }

        mainDiv.appendChild(divOuter);
    }
}