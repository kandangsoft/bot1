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
	if (msgl.includes("edf2")) {
		switch(Math.floor((Math.random() * 1) + 1)) {
			case 1: t1 = "To save our mother Earth from any alien attack\nFrom vicious giant insects who have once again come back\nWe\'ll unleash all our forces, we won't cut them any slack\nThe EDF deploys!"; break;
		}
	}
        /*
        if (msgl.includes('gay') && msgl.includes('hamster')) {
			t1 = 'maneh nu gay';
		}
		else if (msgl.includes('gandeng') && msgl.includes('hamster')) {
			t2 = 'https://i.ibb.co/7VBx3R2/hamster2.jpg';
		}
		else if (msgt === 'gandeng') {
			t2 = 'https://i.ibb.co/7VBx3R2/hamster2.jpg';
		}
		else if (msgl.includes("gay")) {
			t2 = "https://i.ibb.co/q56yQKj/1244827899324.jpg";
		}
		else if (msgt.includes("hamster")) {
			switch(Math.floor((Math.random() * 3) + 1)) {
				case 1: t2 = "https://i.ibb.co/k2FZRCX/hamster3.jpg"; break;
				case 2: t2 = "https://i.ibb.co/X4hvffB/hamster4.jpg"; break;
				case 3: t2 = "https://i.ibb.co/VpyFH09/hamster5.jpg"; break;	
			}
			
			switch(Math.floor((Math.random() * 5) + 1)) {
				case 1: t1 = 'uing euy...?'; break;
				case 2: t1 = 'okaaay~'; break;
				case 3: t1 = 'oh oh oh'; break;
				case 4: t1 = 'aing hamster...'; break;
				case 5: t1 = 'I love man'; break;
			}
			
		}
		*/
	    /*
		else if (msgl.includes("edf")) {
			switch(Math.floor((Math.random() * 3) + 1)) {
				case 1: t1 = 'EDF!'; break;
				case 2: t1 = 'EDF! EDF!'; break;
				case 3: t1 = 'EDF!! EDF!!'; break;
			}
		}
		else if (msgl.includes("balap") || msgl.includes("meow") || msgl.includes("sonic") || msgl.includes("ucing") || msgl.includes("racing")) {
			t1 = 'uh...meow?'
		}
		else if (msgl[0] == "!play") {
			t1 = 'play weh sorangan make nitah batur sagala dasar gay!';
		}
		else if (msgl.includes("astolfo")) {
			t2 = "https://i.ibb.co/XJVDqzM/astolfo.jpg";
		}
		else if (msgl.includes("azis")) {
			t2 = "https://i.ibb.co/GPFY4SC/download.jpg";
		}
		*/
	    /*
	    	else if (msg.attachments.size > 0) {
			if (msg.attachments.every(attachIsImage)){
				t2 = "https://i.ibb.co/1TZqVwT/hamster1.png";
			} else if (msg.attachments.every(attachIsImage2)){
				t2 = "https://i.ibb.co/1TZqVwT/hamster1.png";
			}
		}
		*/
        
        /*======================================================================*/
        
        if (t2 != ""){
            msg.reply("", {files: [t2]});
        } else if (t1 != "") {
            msg.reply(t1); 
        }
    }
})

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'member-log');
	if (!channel) return;
	channel.send(`Selamat datang, ${member}`);
});

function attachIsImage(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
}

function attachIsImage2(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a jpg image.
    return url.indexOf("jpg", url.length - "jpg".length /*or 3*/) !== -1;
}

client.login(process.env.BOT_TOKEN);
