const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = "?";
const bot = new commando.Client({
  commandPrefix: prefix
});

class infoCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'info', 
      group: 'community',
      memberName: 'info',
      description: "Information about the Egirls Network"
    });
  }

  async run(message)
  {

    message.delete(10000).catch(O_o=>{});

      message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Information**")
        .setColor("#D45A97")
        .addField("__Twitter__", "@egirlsclub_")
        .addField("__Discord__", "discord.egirls.club")
        .addField("__Shop__", "store.egirls.club")
        .addField("__Website__", "egirls.club")
        .setFooter("IP: egirls.club | Store: store.egirls.club")
        .setThumbnail("https://cdn.discordapp.com/attachments/551712352987381760/551721723884470292/WEB1080x1080_EGC_Solid_Colour.png")
        .addField("``?info to use this command. Requested by``", ` -> ${message.author}`)})
  }
}

module.exports = infoCommand;
