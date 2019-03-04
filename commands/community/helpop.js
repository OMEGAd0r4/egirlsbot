const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = "?";
const bot = new commando.Client({
  commandPrefix: prefix
});

class helpopCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'helpop', 
      group: 'community',
      memberName: 'helpop',
      description: "Provides a user's request"
    });
  }

  async run(message,args)
  {
    let requestargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        let requestmessage = requestargs.join(" ").slice(7);
        if (!requestmessage) return message.channel.send({embed: new Discord.RichEmbed()
          .setDescription(":x: **Missing args**")
          .setColor("#FF4040")
          .addField("->", "?helpop [request]")});

            let logschannel = message.guild.channels.find(`name`, "logs");

            if(!logschannel) return message.channel.send("Couldn't find the logs channel.");

            message.delete(3000);
            logschannel.send({embed: new Discord.RichEmbed()
                .setTitle('**Egirls | Helpop**')
                .setColor("#D45A97")
                .addField('**Request By**', `${message.author} with the ID: ${message.author.id}`)
                .addField('**User Request**', requestmessage)
                .addField('**Request Location**', message.channel)
                .addField('**Request Time**', message.createdAt)});

        message.reply('Thanks for your request. We will contact you within 24h.');

        message.delete(10000).catch(O_o=>{});
  }
}

module.exports = helpopCommand
