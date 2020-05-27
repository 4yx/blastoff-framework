exports.run = (client, message, args) => {
  const config = require("../config.json");
  if (![(config.owners)].includes(message.author.id)) return message.reply(":rocket: ｜ **This command has been locked to the owner only.**");
  if(!args || args.length < 1) return message.reply(":rocket: ｜ **You must provide a command name to reload.**");
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!client.commands.has(commandName)) {
    return message.reply(":rocket: **That command does not exist**");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`:rocket: ｜ The command **${commandName}** has been reloaded`);
};