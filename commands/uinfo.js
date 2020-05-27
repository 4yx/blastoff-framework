exports.run = (client, message, args) => {
  const Discord = require("discord.js"),
  fs = require("file-system");
  const config = require("../config.json");

let user = message.mentions.users.first(); //makes sure to include the actual user
    let guildMember = message.mentions.members.first();
		if(!user) {
			message.channel.send("<:pingblob:708081152438566962> You forgot to mention a user!") }
  // combine that all info a nice little embed
		let embed = new Discord.RichEmbed()
    .setTitle("User Information")
    .setDescription("I spy with my little eye... :eyes:")
		.addField("Username", `${user.tag}`)
    .addField("Discriminator", `${user.discriminator}`)
    .addField("Nickname", `${guildMember.displayName}`)
		.addField("User ID", `${user.id}`)
		.addField("User Status", `${user.presence.status}`)
		.addField("Account Created", `${user.createdAt}`)
    .addField("Joined Server", `${guildMember.joinedAt}`)
		.setThumbnail(user.avatarURL)
    .setFooter(`${config.framework}`, `${config.icon}`)
		message.channel.send({embed});
		return console.log(`> userinfo command used by ${message.author.username}`);


}