exports.run = (client, message, args) => {
  const Discord = require("discord.js"),
  fs = require("file-system");
  const config = require("../config.json");

let user = message.mentions.users.first(); //makes sure to include user information also
    // if user forgot to mention that one person
		if(!user) {
			message.channel.send("<:pingblob:708081152438566962> You forgot to mention a user!") }
	// Creats an embed with information about the mentioned user
		let embed = new Discord.RichEmbed()
	  .setTitle('Get profile picture')
		.setImage(user.avatarURL)
    .setFooter(`${config.framework}`, `${config.icon}`)
		message.channel.send(embed)
	// Displays a message in the console if the command was used
		return console.log(`> userprofilepic command used by ${message.author.username}`);
  }