exports.run = (client, message, args) => {
  const Discord = require("discord.js"),
  fs = require("file-system");
  const config = require("../config.json");
if (![(config.owners)].includes(message.author.id)) return message.reply(":rocket: ｜ **This command has been locked to the owner only.**");
    const sayMessage = args.join(" ");
    let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
      
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    
    const embed = new Discord.RichEmbed()
              .setColor(`#${color}`)
    .setDescription(sayMessage)
    .setFooter(`${config.framework}`, `${config.icon}`);
    message.channel.send(embed)
}