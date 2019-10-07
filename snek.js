var Discord = require("discord.io");
var config = require("config.json");
const pypyjs = require("./lib/pypyjs.js");

var bot = new Discord.Client({
    token: config.token,
    autorun: true
})

pypyjs.read().then(function() {

})

bot.on('message', function (user, userID, channleID, message, evt) {

    if (message.startsWith("/python")) {
        message.channel.send(pypyjs.exec('print("memes")');
        return;
    } 
});

client.login(config.token);