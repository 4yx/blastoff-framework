exports.run = (client, message, args) => {
  const Discord = require("discord.js"),
  fs = require("file-system");
  const got = require('got');
  const config = require("../config.json");

  const title = ["Memey McMemeFace", "I love memes", "pls dont meme me", "Peter Griffin: The Memer", "Epic content...", "memes 4 pros"];
const random = Math.floor(Math.random() * title.length);
  const embed = new Discord.RichEmbed();
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.setTitle((title[random]));
      embed.addField(`${memeTitle}`, `[View thread](${memeUrl})`);
        embed.setImage(memeImage);
        embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`);
        message.channel.send(embed)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
        console.log('Bot responded with: ' + memeImage);
    }).catch(console.error);
}