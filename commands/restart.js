exports.run = (client, message, args) => {
  const Discord = require("discord.js"),
  fs = require("file-system");
  const config = require("../config.json");
if (![(config.owners)].includes(message.author.id)) return message.reply(":rocket: ｜ **This command has been locked to the owner only.**");
  const embed = new Discord.RichEmbed()
       .setColor(`#F79862`) 
    .setTitle(":robot: Bot Restarted")
    .setDescription("Restart was successful")
//send the message to that channel
  message.channel.send(embed); 
  
  message.channel.send(':rocket: ｜ Destroying session... **Bot will automatically restart for you.**')
    .then(msg => client.destroy())
    .then(() => client.login(config.token));
        }