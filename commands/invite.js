const { Command, CommandType } = require('gcommands');
const Discord = require('discord.js')

new Command({
	name: 'invite',
	description: 'Show bot links',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: (ctx) => {
        const embed = new Discord.MessageEmbed
        embed.setTitle('Invite me!')
        embed.setDescription(`**[Invite](https://discord.com/api/oauth2/authorize?client_id=945993357853868062&permissions=8&scope=bot%20applications.commands) | [GitHub](https://github.com/DaneeSkripter/PollButtons)**`)
        embed.setColor('RANDOM')
        ctx.reply({ embeds: [embed]})
	}
});