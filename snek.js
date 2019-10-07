const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("config.json");
const pypyjs = require("./lib/pypyjs.js");

pypyjs.ready().then(function() {
    // this callback is fired when the interpreter is ready for use.
});

client.on("ready", () => {
    console.log("hiss");
 });

client.on('disconnect', function(erMsg, code) {
	console.log('---- Bot disconnected from Discord with code', code, 'for reason:', erMsg, '----');
	client.connect();
});

client.on("message", (message) => {

    if (message.startsWith("/python")) {
        message.channel.send(pypyjs.exec('print("memes")'));
        return;
    } 
});

client.login(config.token);