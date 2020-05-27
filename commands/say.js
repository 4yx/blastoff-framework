exports.run = (client, message, args) => {
  const Discord = require("discord.js"),
  fs = require("file-system");
  const config = require("../config.json");

const pings = ["@everyone", "@here"];
    
    let pingsMsg = false;
    for (var i in pings) {
        if (message.content.toLowerCase().includes(pings[i].toLowerCase())) pingsMsg = true;
    }
    //our error message
     const error = new Discord.MessageEmbed()
    .setColor(`#fff`)
     .setTitle('Error: Mentions')
    .setDescription('<:pingblob:708081152438566962> This bot does not support the use of the everyone or here tags.')

    if(pingsMsg) {
        return message.channel.send(error);
    } else {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
      
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    
    const embed = new Discord.MessageEmbed()
              .setColor(`#${color}`)
    .setDescription(sayMessage)
    .setFooter(`Sent by ${message.author.username}`)
    message.channel.send(embed)
      .setTimestamp();


}}