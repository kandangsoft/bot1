const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	client.user.setActivity("testink");
	var test13 = "";
})

client.on('message', msg => {
	
   if (msg.member.id == "826391131918041109") return;
		
	var msgt = msg.content.toLowerCase();
	var msga = msgt.replace("@", "");
	var msgl = msgt.split(" ");
	var t1 = "";
	var t2 = "";
	var t3 = "";
	var t4 = "";
	var kowxiii_exclude = 0;
	
	if (msgt.includes("test123")) {
		t1 = 'test123';
	}
	
	if (t3 != "" && t4 != ""){
		msg.channel.send(t3, {files: [t4]});
	} else if (t3 != ""){
		msg.channel.send(t3);
	} else if (t1 != "" && t2 != ""){
		msg.reply(t1, {files: [t2]});
	} else if (t2 != ""){
		msg.reply("", {files: [t2]});
	} else if (t1 != "") {
		msg.reply(t1); 
	}
	
})

client.login(process.env.BOT_TOKEN3);
