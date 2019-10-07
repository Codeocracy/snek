var Discord = require("discord.js");
var config = require("config.json");
const pypyjs = require("./lib/pypyjs.js");

var bot = new Discord.Client({
    token: config.token,
    autorun: true
})

pypyjs.read().then(function() {

})

bot.on('message', (message) => {

    if (message.startsWith("/python")) {
        message.channel.send(pypyjs.exec('print("memes")');
        return;
    } 
});

client.login(config.token);