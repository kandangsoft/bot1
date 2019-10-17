const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
	var bo_gen = "";
	var mr_gen = "";
	
	if (bo_gen != "")
	{
		var guild = client.guilds.get("406354502023774208");
		if(guild && guild.channels.get("406354502464045067")){
			guild.channels.get("406354502464045067").send(bo_gen);
		}
	}
	else if (mr_gen != "")
	{
		var guild = client.guilds.get("406354502023774208");
		if(guild && guild.channels.get("592019399062454302")){
			guild.channels.get("592019399062454302").send(mr_gen);
		}
	}
	
	/*
	// kandang test 13
	if (client.user.id == "600893459724894208") {
		
		var guild = client.guilds.get("600603089753473054");
		if(guild && guild.channels.get("600603089753473056")){
			//guild.channels.get("600603089753473056").send("Uhuy~");
		}
	// blue oyster
	} else if (client.user.id == "600608154396655616") {
		var guild = client.guilds.get("406354502023774208");
		if(guild && guild.channels.get("406354502464045067")){
			//guild.channels.get("406354502464045067").send("ngadaharan ucing");
		}
	}
	*/
});

client.on('message', msg => {
	
    if (msg.author.bot) return;
		
	var msgt = msg.content.toLowerCase();
	var msga = msgt.replace("@", "");
	var msgl = msgt.split(" ");
	var t1 = "";
	var t2 = "";
	var t3 = "";
	var t4 = "";
	var kowxiii_exclude = 1;
	
	if (kowxiii_exclude == 1 && msg.member.id == "406352186398998528") {
		
		if (msgt.includes("squeal")) {
			t1 = 'oh oh oh';
		}
		
	} else if (kowxiii_exclude == 0 || msg.member.id != "406352186398998528") {
		
	/*=======================================================================================================================================================================*/
		
		if (msgt.includes("test123")) {
			t1 = 'okaaay';
		}
		else if (msgl[0] == "!play") {
			t1 = 'play weh sorangan make nitah batur sagala, dasar banci!';
		}
		else if (msgl[0] == "!userinfo") {
			t1 = 'poho eta jeung naon...';
		}
		else if (msgl[0] == "!gay") {
			t1 = 'beuh moal dibere ku aing...';
		}
		else if (msgl[0] == "!astolfo") {
			switch(Math.floor((Math.random() * 2) + 1)) {
				case 1: t2 = 'https://i.ibb.co/XJVDqzM/astolfo.jpg'; break;
				case 2: t2 = 'https://i.ibb.co/28S8pDT/astolfo2.jpg'; break;
			}
		}
		else if (msgl[0] == "!help") {
			t3 = "!astolfo = ningali koleksi foto trap aing\n!gay = ningali koleksi foto gay aing\n!nowplaying = ningali info lagu nu keur diputer nying! \n!play <youtube_link> = muter lagu ti nu youtube nying! \n!skip = nga skip lagu nying! \n!stop = mareuman lagu nying!\n!userinfo = pikir weh sorangan, dasar banci!";
		}
		else if (msgl.includes('gay') && msgl.includes('hamster')) {
			t1 = 'aing gay maneh banci';
		}
		else if (msgl.includes('gelo') && msgl.includes('hamster')) {
			t1 = 'aing gelo maneh banci';
		}
		else if (msgt.includes('hayu') && (msgt.includes("406352186398998528") || msgt.includes("kowxiii") || msgl.includes('kow') || msgl.includes('cow'))) {
			t1 = 'ngke nyusul cenah, kagok keur nyebor tangkal';
			t2 = 'https://i.ibb.co/m68V12z/ffxiv-22082019-212548-724.jpg';
		}
		else if (msgl.includes("edf")) {
			switch(Math.floor((Math.random() * 4) + 1)) {
				case 1: t1 = "\nTo save our mother Earth from any HAMSTER attack\nFrom vicious giant HAMSTER who have once again come back\nWe'll unleash all our forces, we won't cut them any slack\nThe EDF deploys!"; break;
				case 2: t1 = "\nOur soldiers are prepared for any HAMSTER threats\nThe navy launches ships, the air force send their jets\nAnd nothing can withstand our fixed bayonets\nThe EDF deploys!"; break;
				case 3: t1 = "\nOur forces have now dwindled and we pull back to regroup\nThe enemy has multiplied and formed a massive group\nWe better beat these HAMSTER before we're all turned to soup\nThe EDF deploys!"; break;
				case 4: t1 = "\nTo take down giant HAMSTER who came from outer space\nWe now head underground, for their path we must retrace\nAnd find their giant nest and crush the HAMSTER's carapace\nThe EDF deploys!"; break;
				case 5: t1 = "EDF!"; break;
				case 6: t1 = "EDF! EDF!"; break;
				case 7: t1 = "EDF!! EDF!!"; break;
			}
		}
		else if ((msgl.includes('gandeng') && msgl.includes('hamster')) || msgt === 'gandeng') {
			t1 = "cih";
		}		
		else if (msgt.includes("hamster")) {
			switch(Math.floor((Math.random() * 6) + 1)) {
				case 1: t1 = 'oh oh oh'; break;
				case 2: t1 = 'uing euy...?'; break;
				case 3: t1 = 'okaaay~'; break;
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
		
		else if (msgl.includes("gas") || msgl.includes("balap") || msgl.includes("meow") || msgl.includes("sonic") || msgl.includes("ucing") || msgl.includes("racing")) {
			t1 = 'Balap njeng';
		}
		
		else if (msgl.includes("srang") || msgl.includes("sreng") || msgl.includes("masak") || msgl.includes("overcooked") || msgl.includes("overkuk") || msgl.includes("overcooked2")) {
			t1 = 'Masak njeng';
		}
		
		else if (msg.attachments.size > 0) {
			if (msg.attachments.every(attachIsImage)){
				t1 = "Mantab njeng";
			} else if (msg.attachments.every(attachIsImage2)){
				t1 = "Mantab njeng";
			}
		}
		
		
	/*=======================================================================================================================================================================*/
		
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
