let postIt = {
    title: "",
    content: "",
    description: "",
};

let column = {
    title: "",
    postIt: [],

    Add: function (postit) {
        this.postIt.push(postit);
    }
    
};