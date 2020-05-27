exports.run = (client, message, args) => {
  //store the ping data
  var ping = Date.now() - message.createdTimestamp + "ms";
  // Include the required depends for the following embed
  const Discord = require("discord.js"),
  fs = require("file-system");
  //begin ping embed
  const embed = new Discord.RichEmbed()
       .setColor(`#F79862`) 
    .setTitle("Ping")
    .addField(":rocket:", "" + `${Date.now() - message.createdTimestamp}` + "ms")
//send the message to that channel
  message.channel.send(embed);
  } 