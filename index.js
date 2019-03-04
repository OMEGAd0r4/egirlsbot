//PLUGINS
const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "?";
const bot = new commando.Client({
    commandPrefix: prefix
});
//PLUGINS

//BOT TOKEN
bot.login(process.env.token);
//BOT TOKEN

//GETS THE BOT ONLINE
bot.on('ready',function(){
    console.log(`Bot is now online!, with ${bot.users.size} users.`);
    bot.user.setActivity(`?Help | Playing egirls.club`, { type: 'PLAYING' });
});
//GETS THE BOT ONLINE

bot.registry.registerGroup('admin', 'ADMIN');
bot.registry.registerGroup('community', 'COMMUNITY');
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();

//WELCOME MESSAGE
bot.on('guildMemberAdd', (member) => {
  const wave = bot.emojis.find(emoji => emoji.name === "wave_em");
  const logChannel = member.guild.channels.find(channel => channel.name === 'welcome');
  if (!logChannel) return undefined;
  let joinEmbed = new Discord.RichEmbed()
  .setTitle("**� EGirls Discord �**")
  .setTimestamp()
  .setDescription(`<@${member.user.id}>` + " has joined the **EGirls  Discord** " + wave)
  .setFooter(`egirls.club`)
  .setColor('#FF298A')
  logChannel.send(joinEmbed);
});

bot.on('guildMemberRemove', (member) => {
  const sad = bot.emojis.find(emoji => emoji.name === "sad_em");
  const logChannel = member.guild.channels.find(channel => channel.name === 'welcome');
  if (!logChannel) return undefined;
  let leaveEmbed = new Discord.RichEmbed()
  .setTitle("**� EGirls Discord �**")
  .setTimestamp()
  .setDescription(`<@${member.user.id}>` + " has left the **EGirls Discord** " + sad)
  .setFooter(`egirls.club`)
  .setColor('#FF298A')
  logChannel.send(leaveEmbed);
});
