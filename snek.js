const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./snekConfig.json");
const pypyjs = require("./lib/pypyjs.js");

pypyjs.ready().then(function() {
    console.log("hiss");
    client.login(config.token);
});



client.on("ready", () => {
    console.log("hiss discord");
});

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
  });

function snek(command) {
    return pypyjs.ready().then(function() {
        return pypyjs.set('command', command)
    }).then(function() {
        return pypyjs.exec(command);
    }).then(function() {
        return pypyjs.get('command')
    });
}

client.on("message", async (message) => {

    if (message.content.indexOf("/python") == 0) {
        try {            
            let result = await pypyjs.exec(message.content.substring(8));
             message.channel.send(result.toString());
        }catch(e){
            message.channel.send(e.toString());
        }
    };
        return;
});
