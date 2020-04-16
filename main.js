console.debug("Starting script...");

function postIt(title, content, description) {
    this.title = "post-it title";
    this.content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    this.description = "post-it description";
}

function column (title){
    this.title = title;
    this.postIts = [];

    this.Add = function (postit) {
        this.postIts.push(postit);
    }
}

let columns = [];


window.onload = function () {
    console.debug("Window loaded...");
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

    renderHtml();
}