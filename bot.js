const Discord = require('discord.js')
const client = new Discord.Client()

function gettime() {
	return Math.floor(Math.random() * 100) + 36000000;
}

function testtime(arg) {
	
	var guild = client.guilds.get("406354502023774208");
	if(guild && guild.channels.get("406354502464045067")){
		guild.channels.get("406354502464045067").send("bullshit wa kita");
	}
	
	setTimeout(testtime, gettime(), 0);
}

client.on('ready', () => {
	
	console.log(`Logged in as ${client.user.tag}!`)
	
	setTimeout(testtime, 100, 0);
})

client.login(process.env.BOT_TOKEN3);
