const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = "?";
const bot = new commando.Client({
  commandPrefix: prefix
});

class warnCommand extends commando.Command{
  constructor(client) 
  {
    super(client, {
      name: 'warn', 
      group: 'admin',
      memberName: 'warn',
      description: "Warns a user"
    });
  }
  async run (message, args)
  {
        var warnargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(warnargs[0]));
        var warnreason = warnargs.join(" ").slice(27);
        if (!warnUser) return message.channel.send({embed: new Discord.RichEmbed()
          .setDescription(":x: **Missing args**")
          .setColor("#FF4040")
          .addField("->", "?warn [User] [Reason]")});
    
        var supportteamerole = message.guild.roles.find(`name`, "Staff");

        if (!supportteamerole) return message.channel.send("Couldn't find a role called ``Staff``")
        
        if (!message.member.roles.has(supportteamerole.id)) return message.channel.send("Insufficient permission. You do not have permission to warn others.");

        if (warnUser.roles.has(supportteamerole.id)) return message.channel.send("Insufficient permission. You do not have permission to warn staff members!");
        
          var warnembed = new Discord.RichEmbed()
          .setColor("#D45A97")
          .setTitle('**Egirls | Warn**')
          .setDescription(`${warnUser}, Warned by ${message.author}`)
          .addField(`**REASON:**`, warnreason)

          let logschannel = message.guild.channels.find(`name`, "logs");

          if(!logschannel) return message.channel.send("Couldn't find the logs channel.");

          logschannel.send(warnembed);

        message.channel.send(`${warnUser} has been warned`)

        warnUser.sendMessage(warnUser + " Hey you have been warned for the reason of ``" + warnreason + "``.").catch()

        message.delete(10000);
  }
}

module.exports = warnCommand
