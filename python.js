const pypyjs = require("./lib/pypyjs.js");

pypyjs.ready().then(function() {
    console.log("hiss");
});

function runPy(text) {
    return pypyjs.exec(text);
}