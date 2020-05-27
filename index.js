const Discord = require("discord.js"),
      client = new Discord.Client(),
      fs = require("fs");
require(__dirname + '/keepOnline.js')
const config = require("./config.json");
//Command Handler
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();
// a few random game activity for the bot
const title = [`${config.prefix}help | On ${client.guilds.size} servers`, `${config.prefix}help | On ${client.users.size} users!`,`${config.prefix}help | Blastoff Framework`];
const random = Math.floor(Math.random() * title.length);
// start the client
client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds. Prefix: ${config.prefix}`); 
   console.log(`${client.guilds.map(x => x.name +" : "+x.memberCount)}`) 
  console.log(`You can invite this bot to your server with this link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
  
  // Changing the bot's activity and logging the start point
  // docs refer to as the "ClientUser".
  client.user.setActivity(`${config.prefix}help | On ${client.guilds.size} servers | ${config.name}`);
  client.channels.get(config.logs).send(':rocket: ｜**Bot is now online.** / *Bot has been reloaded for new commands.*');
  });
// note a message when the bot gets added to a guild
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.channels.get(config.logs).send(`**New guild joined:** ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});
client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
   client.channels.get(config.logs).send(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});
fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("Successfully loaded " + file)
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});
    //Events "handler"
    fs.readdir('./events/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./events/${file}`);
            console.log("Successfully loaded " + file)
            let eventName = file.split(".")[0];
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });
});

client.on("ready", () => console.log("Online!"));
client.login(config.token)