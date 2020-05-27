exports.run = (client, message, args) => {
  const Discord = require("discord.js"),
  fs = require("file-system");
  const config = require("../config.json");

let embed = new Discord.RichEmbed()
    .setTitle("Uptime")
    .setDescription("Feel old yet?")
    .addfield("To be honest with you - even i cant remember...", "oops...")
    .setFooter(`${config.framework}`, `${config.icon}`)
  	message.channel.send(embed);


}