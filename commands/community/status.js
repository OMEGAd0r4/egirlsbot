const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "?";
const bot = new commando.Client({
    commandPrefix: prefix
});

class statusCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'status',
        group: 'community',
        memberName: 'status',
        description: 'Shows the status of the Egirls Network'
      });
    }

    async run(message)
    {

        message.delete(10000).catch(O_o=>{});

        //npm install request --save
        var request = require("request");
        var mcIP = "egirls.club";
        var mcPort = "";

        var url = "http://mcapi.us/server/status?ip=" + mcIP + "&port" + mcPort;
        request(url, function(err, response, body) {
            if (err) message.channel.send(err);

            body = JSON.parse(body);
            
            var status = `The Egirls Network is currently offline`;

            if(body.players.now){
                message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**Egirls | Status**")
                    .setColor("#D45A97")
                    .addField("Egirls is online with,", `${body.players.now} people playing`)
                    .setThumbnail("https://cdn.discordapp.com/attachments/551712352987381760/551721723884470292/WEB1080x1080_EGC_Solid_Colour.png")
                    .addField("``?status to use this command. Requested by``", ` -> ${message.author}`)})
            }
            else{
                message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**Egirls | Status**")
                    .setColor("#D45A97")
                    .addField("The Egirls Network is currently online with,", "-> 0 players")
                    .setThumbnail("https://cdn.discordapp.com/attachments/551712352987381760/551721723884470292/WEB1080x1080_EGC_Solid_Colour.png")
                    .addField("``?status to use this command. Requested by``", ` -> ${message.author}`)})
            }
        })
    }
}

module.exports = statusCommand;


