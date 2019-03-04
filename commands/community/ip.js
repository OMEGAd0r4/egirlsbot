const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "?";
const bot = new commando.Client({
    commandPrefix: prefix
});

class ipCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'ip',
        group: 'community',
        memberName: 'ip',
        description: 'Shows the different proxies the network has.'
      });
    }
    
    async run(message)
    {

        message.delete(10000).catch(O_o=>{});

        message.channel.send({embed: new Discord.RichEmbed()
            .setColor("#D45A97")
            .setTitle("**Egirls | Information**")
            .addField(":mailbox_with_no_mail: | Server IP", "-> **egirls.club**")
            .addField("``?ip to use this command. Requested by``", ` -> ${message.author}`)
            .setFooter("IP: egirls.club | Store: store.egirls.club")
            .setThumbnail("https://cdn.discordapp.com/attachments/551712352987381760/551721723884470292/WEB1080x1080_EGC_Solid_Colour.png")});
    }
}

module.exports = ipCommand;
