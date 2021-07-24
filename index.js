const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.on('guildMemberAdd' ,(member) => {
	const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Willkommen ' + member.user.tag + '!');
	member.guild.channels.cache.get('823798391078912000').send(embed);
	member.roles.add('823791102779457567')	
  })


  client.on('message', async message => {
	if (message.content === '!befehle') {
		await message.reply('die befehle gibt es alles');
	} else if (message.content === '!insta') {
		await message.reply('das ist nur decko');
    }
}); 

client.login(config.token);
 
