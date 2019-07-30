const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    	console.log('I am ready!');
	/*
	var guild = client.guilds.get('406354502023774208');
	if(guild && guild.channels.get('406354502464045067')){
		guild.channels.get('406354502464045067').send("Jangan kau menganggap hamster mudah datang mudah pergi oh oh oh").then(() => client.destroy());
	}
	*/
});

/*
Cobalah kau lihat dilangit biru, Rangkaian bintang-bintang
Ikhlaskah engkau memberiku cinta, Tanpa merasa kehilangan
Cinta adalah cinta, Bukan mainan bukanlah dusta
Jangan kau menganggap cinta, Mudah datang mudah pergi
Bukannya aku tak takut mati, Hanya karena sering patah hati
*/

client.on('message', msg => {
    if (!msg.author.bot) {
        var msgt = msg.content.toLowerCase();
        var msgl = msgt.split(" ");
        var t1 = "";
	var t2 = "";
        if (msgt.includes("test123")) {
		t1 = 'okaaay';
	}
	else if (msgl.includes('gay') && msgl.includes('hamster')) {
		t1 = 'maneh nu gay';
	}
	else if (msgl.includes('gelo') && msgl.includes('hamster')) {
		t1 = 'maneh nu gelo';
	}
	else if (msgl.includes('hayu') && msgt.includes("@kowxiii#2644")) {
		t1 = 'ngke nyusul cenah, kagok keur nyebor tangkal';
	}
	else if (msgl.includes("edf")) {
		switch(Math.floor((Math.random() * 11) + 1)) {
			case 1: t1 = "\nTo save our mother Earth from any alien attack\nFrom vicious giant insects who have once again come back\nWe'll unleash all our forces, we won't cut them any slack\nThe EDF deploys!"; break;
			case 2: t1 = "\nOur soldiers are prepared for any alien threats\nThe navy launches ships, the air force send their jets\nAnd nothing can withstand our fixed bayonets\nThe EDF deploys!"; break;
			case 3: t1 = "\nOur forces have now dwindled and we pull back to regroup\nThe enemy has multiplied and formed a massive group\nWe better beat these bugs before we're all turned to soup\nThe EDF deploys!"; break;
			case 4: t1 = "\nTo take down giant insects who came from outer space\nWe now head underground, for their path we must retrace\nAnd find their giant nest and crush the queen's carapace\nThe EDF deploys!"; break;
			case 5: t1 = "\nThe air force and the navy were destroyed or cast about\nScouts, rangers, wing divers have almost been wiped out\nDespite all this the infantry will stubbornly hold out\nThe EDF deploys!"; break;
			case 6: t1 = "\nOur friends were all killed yesterday, as were our families\nToday we might not make it, facing these atrocities\nWe'll never drop our banner despite our casualties\nThe EDF deploys!"; break;
			case 7: t1 = "\nTwo days ago my brother died, next day my lover fell\nToday most everyone was killed, on that we must not dwell\nBut we will never leave the field, we'll never say farewell\nThe EDF deploys!"; break;
			case 8: t1 = "\nA legendary hero soon will lead us to glory\nEight years ago he sunk the mothership says history\nTomorrow we will follow this brave soul to victory\nThe EDF deploys!"; break;
			case 9: t1 = "EDF!"; break;
			case 10: t1 = "EDF! EDF!"; break;
			case 11: t1 = "EDF!! EDF!!"; break;
		}
	}
	else if (msgl.includes('gandeng') && msgl.includes('hamster')) {
		t2 = 'https://i.ibb.co/7VBx3R2/hamster2.jpg';
	}
	else if (msgt === 'gandeng') {
		t2 = 'https://i.ibb.co/7VBx3R2/hamster2.jpg';
	}
	
	else if (msgt.includes("hamster")) {
		/*
		t2 = "https://i.ibb.co/28wQYJQ/hamster8.jpg";
		
		switch(Math.floor((Math.random() * 3) + 1)) {
			case 1: t2 = "https://i.ibb.co/X4hvffB/hamster4.jpg"; break;
			case 2: t2 = "https://i.ibb.co/k2FZRCX/hamster3.jpg"; break;
			case 3: t1 = "Bunuh weh aing..."; break;
		}
		*/
		switch(Math.floor((Math.random() * 8) + 1)) {
			case 1: t1 = 'uing euy...?'; break;
			case 2: t1 = 'okaaay~'; break;
			case 3: t1 = 'oh oh oh'; break;
			case 4: t1 = 'uhuy'; break;
			case 5: t1 = 'I love man'; break;
			case 6: t1 = 'naon uy...?'; break;
			case 7: t2 = "https://i.ibb.co/H29Dkb7/hamster7.jpg"; break;
			case 8: t2 = "https://i.ibb.co/8g9CWWy/hamster6.jpg"; break;
		}
	}
	
	else if (msgl.includes("gay")) {
		t2 = "https://i.ibb.co/q56yQKj/1244827899324.jpg";
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
	/*
	else if (msg.attachments.size > 0) {
		if (msg.attachments.every(attachIsImage)){
			t2 = "https://i.ibb.co/1TZqVwT/hamster1.png";
		} else if (msg.attachments.every(attachIsImage2)){
			t2 = "https://i.ibb.co/1TZqVwT/hamster1.png";
		}
	}
        */
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
    return url.indexOf("png", url.length - "png".length ) !== -1;
}

function attachIsImage2(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a jpg image.
    return url.indexOf("jpg", url.length - "jpg".length ) !== -1;
}

client.login(process.env.BOT_TOKEN);
