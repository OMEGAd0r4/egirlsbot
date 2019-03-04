const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "?";
const bot = new commando.Client({
    commandPrefix: prefix
});

class usercountCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'usercount',
        group: 'community',
        memberName: 'usercount',
        description: 'Shows user count'
      });
    }
    
    async run(message)
    {

        message.delete(10000).catch(O_o=>{});

        message.channel.send({embed: new Discord.RichEmbed()
            .setColor("#D45A97")
            .setTitle("**Egirls | User Count**")
            .addField("User Count", `-> ` + message.guild.memberCount)
            .addField("``?usercount to use this command. Requested by``", ` -> ${message.author}`)
            .setFooter("IP: egirls.club | Store: store.egirls.club")
            .setThumbnail("https://cdn.discordapp.com/attachments/551712352987381760/551721723884470292/WEB1080x1080_EGC_Solid_Colour.png")});
    }
}

module.exports = usercountCommand;
