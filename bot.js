const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setUsername("pupper-bot");
});

client.on('message', message => {
  if (message.content == 'fetch')
  {
    message.reply('*fetches*');
  }
});

client.login(process.env.BOT_TOKEN);
