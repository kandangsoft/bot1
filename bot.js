const Discord = require('discord.js')
const client = new Discord.Client()

function testtime(arg) {
	
	var test_13 = "toki wa kita";
	
	var guild = client.guilds.get("406354502023774208");
	if(guild && guild.channels.get("406354502464045067")){
		guild.channels.get("406354502464045067").send(test_13);
	}
	
	var jam = Math.floor((Math.random() * 3) + 5) * 1000000;
	setTimeout(testtime, jam, 0);
}

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	var bo_gen = "";
	var bo_meow = "";
	var test13 = "";
	
	setTimeout(testtime, 100, 0);
	
	if (test13 != "")
	{
		var guild = client.guilds.get("637314014187356177");
		if(guild && guild.channels.get("637314015214829569")){
			guild.channels.get("637314015214829569").send(test13);
		}
	}
	else if (bo_gen != "")
	{
		var guild = client.guilds.get("406354502023774208");
		if(guild && guild.channels.get("406354502464045067")){
			guild.channels.get("406354502464045067").send(bo_gen);
		}
	}
	else if (bo_meow != "")
	{
		var guild = client.guilds.get("406354502023774208");
		if(guild && guild.channels.get("592019399062454302")){
			guild.channels.get("592019399062454302").send(bo_meow);
		}
	}
})

client.login(process.env.BOT_TOKEN3);
