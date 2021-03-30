const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', msg => {
	
	if (msg.member.id == "826391131918041109") return;
	
	var msgt = msg.content.toLowerCase();
	var t1 = "";
	
	if (msgt.includes("test12")) {
		t1 = 'oh';
	}
	
	if (t1 != "") {
		msg.reply(t1); 
	}
})

client.login(process.env.BOT_TOKEN3);
