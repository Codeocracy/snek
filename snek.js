const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./snekConfig.json");
const python = require("./python.js")

client.on("ready", () => {
    console.log("hiss discord");
});



process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
  });

client.on("message", (message) => {

    if (message.content.indexOf("/python") == 0) {
        message.channel.send(python.runPy(message.content.substring(8)));
        return;
    } 
});

client.login(config.token);
