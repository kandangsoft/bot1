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
  else if (msg.content.toLowerCase().includes("gay")) {
    msg.reply("", {files: ["https://i.ibb.co/VMhpBV1/1244827899324.jpg"]});
  }
  else if (msg.content.toLowerCase().includes("hamster")) {
    var x = Math.floor((Math.random() * 2) + 1);
    switch(x) {
      case 1: msg.reply('uing euy...?'); break;
      case 2: msg.reply('okaaay~'); break;
      default: msg.reply('oh oh oh');
    }
   
  }
  else if (msg.content.includes("edf") || msg.content.includes("Edf")) {
    msg.reply('EDF! EDF!')
  }
  else if (msg.content.toLowerCase().includes("balap")) {
    msg.reply('uh...meow?')
  }
  else if (msg.content.toLowerCase().includes("!play")) {
    msg.reply('play weh sorangan make nitah batur sagala dasar gey!')
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
