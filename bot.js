const Discord = require('discord.js');

const client = new Discord.Client();

function testtime(arg) {
	
	var test_13 = "toki wa kita";
	var ran = Math.floor((Math.random() * 2) + 1);
	
	var guild = client.guilds.get("406354502023774208");
	if(guild && guild.channels.get("406354502464045067")){
		guild.channels.get("406354502464045067").send(test_13);
	}
	
	var jam = Math.floor((Math.random() * 3) + 5) * 10000000;
	setTimeout(testtime, jam, 0);
}

client.on('ready', () => {
    console.log('I am ready!');
	client.user.setActivity("");
	
	setTimeout(testtime, 1000, 0);
});

client.login(process.env.BOT_TOKEN3);
