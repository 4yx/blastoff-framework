exports.run = (client, message, args) => {
  const Discord = require("discord.js"),
  fs = require("file-system");
  const config = require("../config.json");

  const embed = new Discord.RichEmbed ()
       .setColor(`#F79862`) 
    .setTitle("Blastoff - Info")
    .setURL('https://discord.com/oauth2/authorize?client_id=433265855066013706&scope=bot&permissions=8')
    .addField(`Name`, 'Blastoff')
    .addField(`Aliases`, 'TomasBOT')
    .addField(`Guilds`, 'probably a lot, idk')
    .addField(`Version`, `${config.fwver}`)
    .addField(`Support Server`, 'https://discord.gg/Y3XNwz6')
    .setThumbnail(`${config.icon}`)
    .setFooter(`${config.framework}`, `${config.icon}`);
message.channel.send(embed);
   
 }