const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setUsername("pupper-bot");
});

client.on('message', function (user, userID, channelID, message, evt) {
  //if (message.substring(0, 1) == '!')
  //{
  //  var args = message.substring(1).split(' ');
  //  var cmd = args[0];
  //  args = args.splice(1);
  //  switch (cmd)
  //  {
  //    case 'fetch':
  //      client.sendMessage({to: channelID, message: '*fetches*'});
  //      break;
  //    case 'role':
  //      let myRole = message.guild.roles.find(userID, "Some Role");
  //      break;
  //  }
  //}
  client.sendMessage({to: channelID, message: 'hey!'});
});

client.login(process.env.BOT_TOKEN);
