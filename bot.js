const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
 
client.on('message', msg => {
    if (!msg.author.bot) {
        var msgt = msg.content.toLowerCase();
        var msgl = msgt.split(" ");
        var t1 = "";
	    var t2 = "";
        /*======================================================================*/
        
        if (msgl.includes('gay') && msgl.includes('hamster')) {
			t1 = 'maneh nu gay';
		}
		else if (msgl.includes('gandeng') && msgl.includes('hamster')) {
			t1 = 'nying protes wae';
		}
		else if (msgt === 'gandeng') {
			t1 = 'nying protes wae';
		}
		else if (msgl.includes("gay")) {
			t2 = "https://i.ibb.co/q56yQKj/1244827899324.jpg";
		}
		else if (msgl.includes("hamster")) {
			switch(Math.floor((Math.random() * 4) + 1)) {
				case 1: t1 = 'uing euy...?'; break;
				case 2: t1 = 'okaaay~'; break;
				case 3: t1 = 'oh oh oh'; break;
				case 4: t1 = 'aing hamster...'; break;
			}
		}
		else if (msgl.includes("edf")) {
			switch(Math.floor((Math.random() * 3) + 1)) {
				case 1: t1 = 'EDF!'; break;
				case 2: t1 = 'EDF! EDF!'; break;
				case 3: t1 = 'EDF!! EDF!!'; break;
			}
		}
		else if (msgl.includes("balap")) {
			t1 = 'uh...meow?'
		}
		else if (msgl.includes("!play")) {
			t1 = 'play weh sorangan make nitah batur sagala dasar gay!';
		}
		else if (msgl.includes("astolfo")) {
			t2 = "https://i.ibb.co/KjwPJkB/71-PPl-Cicw0-L-SX425.jpg";
		}
		else if (msgl.includes("azis")) {
			t2 = "https://i.ibb.co/GPFY4SC/download.jpg";
		}
		else if (msgl.includes("sapi")) {
			t2 = "https://i.ibb.co/WP3yG92/mcow.jpg";
		}
		else if (msgl.includes("kekar")) {
			t2 = "https://i.ibb.co/1d3pYr1/muscle-march.jpg";
		}
        
        /*======================================================================*/
        
        if (t2 != ""){
            msg.reply("", {files: [t2]});
        } else {
            msg.reply(t1); 
        }
    }
})

client.login(process.env.BOT_TOKEN);
