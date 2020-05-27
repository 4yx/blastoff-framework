exports.run = (client, message, args) => {
  const Discord = require("discord.js"),
  fs = require("file-system");
  const config = require("../config.json");

 let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.

    const embed = new Discord.RichEmbed ()
              .setColor(`#${color}`)
    	.setTitle('Blastoff - Help Center')
    .setThumbnail(`${config.icon}`)
    .addField("General Commands", `${config.prefix}help, ${config.prefix}ping, ${config.prefix}info`, true)
    .addField("Admin Commands", `${config.prefix}help, ${config.prefix}ping, ${config.prefix}info`, true)
    .addField("Fun Commands", `${config.prefix}say, ${config.prefix}meme, ${config.prefix}fc, ${config.prefix}quote`, true)
	.setTimestamp()
	.setFooter(`${config.framework}`, `${config.icon}`);
message.channel.send(embed);


}