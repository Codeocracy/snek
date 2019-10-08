const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./snekConfig.json");
const pypyjs = require("./lib/pypyjs.js");

client.on("ready", () => {
    console.log("hiss discord");
});

pypyjs.ready().then(function() {
    console.log("hiss pypy")
});

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
  });

client.on("message", (message) => {

    if (message.content.indexOf("/python") == 0) {
//        message.channel.send(pypyjs.exec(message.content.substring(8)));
        return;
    } 
});

client.login(config.token);
