exports.run = (client, message, args) => {
  const Discord = require("discord.js"),
  fs = require("file-system");
  const config = require("../config.json");
  //error embed
  const error = new Discord.RichEmbed ()
       .setColor(`#F79862`) 
    .setTitle("Error!")
    .addField(`Permission fail`, `Are you sure you have permission to use this action?`)
    .setFooter(`${config.framework}`, `${config.icon}`)
  
  // check permissions
 if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send({error});
   //kick event
        var member= message.mentions.members.first();
        // kick
        member.kick().then((member) => {
            // Success message
           let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
          
          const embed = new Discord.RichEmbed ()
       .setColor(`#F79862`) 
    .setTitle("Beep boop! Kick?")
    .addField(`Username`, `${member.user.tag}`)
     .addField(`Kicked by`, `${message.author.tag}`)
    .addField(`Reason`, `${reason}`)
    .setThumbnail(`${message.guild.iconURL}`)
    .setFooter(`${config.framework}`, `${config.icon}`)
    message.channel.send(embed);
        }).catch(() => {
        });
};