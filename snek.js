const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("config.json");
const pypyjs = require("./lib/pypyjs.js");

client.on("message", (message) => {

    if (message.startsWith("/python")) {
        message.channel.send(pypyjs.exec('print("memes")');
        return;
    } 
});

client.login(config.token);