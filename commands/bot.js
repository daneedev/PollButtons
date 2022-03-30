const { Command, CommandType } = require('gcommands');
const Discord = require('discord.js')
const ms = require('ms')

new Command({
	name: 'bot',
	description: 'Show bot info',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: (ctx) => {
        const embed = new Discord.MessageEmbed
        embed.setTitle('About Bot')
        embed.setDescription(`**🔄 Last Restart**: ${ms(ctx.client.uptime, { long: true})} ago\n**💨 Version**: v1.2.0\n**👨‍💻 Developer**: DaneeSkripter\n\n**[Changelog](https://github.com/DaneeSkripter/PollButtons/releases)**`)
        embed.setColor('RANDOM')
        ctx.reply({ embeds: [embed]})
	}
});