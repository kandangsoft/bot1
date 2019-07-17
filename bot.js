const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
 
client.on('message', msg => {
  if (!msg.author.bot) {
      var msgl = msg.content.toLowerCase();
      if (msgl.includes('gay') && msgl.includes('hamster')) {
        msg.reply('maneh nu gay')
      }
      else if (msgl.includes('gandeng') && msgl.includes('hamster')) {
        msg.reply('nying protes wae')
      }
      else if (msgl === 'gandeng') {
        msg.reply('nying protes wae')
      }
      else if (msgl.includes("gay")) {
        msg.reply("", {files: ["https://i.ibb.co/q56yQKj/1244827899324.jpg"]});
      }
      else if (msgl.includes("hamster")) {
        switch(Math.floor((Math.random() * 3) + 1)) {
          case 1: msg.reply('uing euy...?'); break;
          case 2: msg.reply('okaaay~'); break;
          case 3: msg.reply('oh oh oh'); break;
          default: msg.reply('oh oh oh');
        }
      }
      else if (msgl.includes("edf")) {
        switch(Math.floor((Math.random() * 3) + 1)) {
          case 1: msg.reply('EDF!'); break;
          case 2: msg.reply('EDF! EDF!'); break;
          case 3: msg.reply('EDF!! EDF!!'); break;
          default: msg.reply('EDF!! EDF!!');
        }
      }
      else if (msgl.includes("balap")) {
        msg.reply('uh...meow?')
      }
      else if (msgl.includes("!play")) {
        msg.reply('play weh sorangan make nitah batur sagala dasar gay!')
      }
      else if (msgl.includes("astolfo")) {
        msg.reply("", {files: ["https://i.ibb.co/KjwPJkB/71-PPl-Cicw0-L-SX425.jpg"]});
      }
      else if (msgl.includes("azis")) {
        msg.reply("", {files: ["https://i.ibb.co/GPFY4SC/download.jpg"]});
      }
      else if (msgl.includes("sapi")) {
        msg.reply("", {files: ["https://i.ibb.co/WP3yG92/mcow.jpg"]});
      }
      else if (msgl.includes("host")) {
        msg.reply("", {files: ["https://i.ibb.co/kDQnDGP/host-club.jpg"]});
      }
      else if (msgl.includes("kekar")) {
        msg.reply("", {files: ["https://i.ibb.co/1d3pYr1/muscle-march.jpg"]});
      }
   }
})

client.login(process.env.BOT_TOKEN);
