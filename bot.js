const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', msg => {
	var msgt = msg.content.toLowerCase();
	
	if (msgt.includes("test123")) {
		t1 = 'okaaay';
	}
	
	if (t1 != "") {
		msg.reply(t1); 
	}
})

client.login(process.env.BOT_TOKEN3);
