const pypyjs = require("./lib/pypyjs.js");

pypyjs.ready().then(function() {});

function runPy(text) {
    return pypyjs.exec(text);
}