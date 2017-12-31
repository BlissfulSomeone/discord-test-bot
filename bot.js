const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setUsername("pupper-bot");
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.indexOf('!') !== 0) return;
  message.channel.send('Hey!');
});

client.login(process.env.BOT_TOKEN);
