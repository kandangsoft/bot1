const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
 
client.on('message', msg => {
  if (msg.content.toLowerCase().includes("hamster na gay") || msg.content.toLowerCase().includes("hamster gay")) {
    msg.reply('maneh nu gay')
  }
  else if (msg.content.toLowerCase().includes('gay') && msg.content.toLowerCase().includes('hamster')) {
    msg.reply('maneh nu gay')
  }
  else if (msg.content.toLowerCase().includes('gandeng') && msg.content.toLowerCase().includes('hamster')) {
    msg.reply('nying protes wae')
  }
  else if (msg.content === 'Gandeng' || msg.content === 'gandeng') {
    msg.reply('nying protes wae')
  }
  else if (msg.content.toLowerCase().includes("hamster")) {
    msg.reply('uing euy...?')
  }
  else if (msg.content.includes("edf") || msg.content.includes("Edf")) {
    msg.reply('EDF! EDF!')
  }
  else if (msg.content.toLowerCase().includes("balap")) {
    msg.reply('uh...meow?')
  }
  else if (msg.content.toLowerCase().includes("!play")) {
    msg.reply('nyerah aing gagal wae nyetel music na ampun...')
  }
  else if (msg.content.toLowerCase().includes("astolfo")) {
    msg.reply("", {files: ["https://i.ibb.co/KjwPJkB/71-PPl-Cicw0-L-SX425.jpg"]});
  }
  else if (msg.content.toLowerCase().includes("azis")) {
    msg.reply("", {files: ["https://i.ibb.co/GPFY4SC/download.jpg"]});
  }
  else if (msg.content.toLowerCase().includes("ucing")) {
    msg.reply('meow meow')
  }
})

client.login(process.env.BOT_TOKEN);
