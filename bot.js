const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
	client.user.setActivity("");
	
	var bo_gen = "toki wa kita";
	var bo_meow = "";
	
	if (bo_gen != "")
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
});;

client.login(process.env.BOT_TOKEN3);
