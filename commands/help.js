const { Command, CommandType } = require('gcommands');
const Discord = require('discord.js')

new Command({
	name: 'help',
	description: 'Show all commands',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: (ctx) => {
        const embed = new Discord.MessageEmbed
        embed.setTitle('Help')
        embed.setDescription('/poll - Create poll\n/ping - Show bot ping\n/bot - Show bot info\n')
        embed.setColor('#AE0131')
        ctx.reply({ embeds: [embed], ephemeral: true})
	}
});