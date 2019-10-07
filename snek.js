const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const pypyjs = require("./lib/pypyjs.js");

pypyjs.ready().then(function() {
    console.log("hiss pypy")
});

var bot = new Discord.Client({
    token: config.token,
    autorun: true
})

bot.on("message", function(user, userID, channelID, message, evt) {

    if (message.content.indexOf("/python") == 0) {
        message.channel.send(pypyjs.exec('print("memes")'));
        return;
    } 
});
