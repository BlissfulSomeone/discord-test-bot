const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setUsername("pupper-bot v1");
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.indexOf('!') !== 0) return;
  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command == "ping")
  {
    const m = await message.channel.send("Ping?");
    m.edit('Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms');
  }
});

client.login(process.env.BOT_TOKEN);
