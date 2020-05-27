const config = require("../config.json");
const prefix = `${config.prefix}`;

exports.run = async (client, message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)) {
    let messageArray = message.content.split(" "),
      cmd = messageArray[0],
      args = messageArray.slice(1),
      commandfile = client.commands.get(cmd.slice(prefix.length));

    if (!commandfile) return;
    commandfile.run(client, message, args);
  }
};
