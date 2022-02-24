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
        embed.setDescription(`**🔄 Last Restart**: ${ms(ctx.client.uptime, { long: true})} ago\n**💨 Version**: v1.0.0-beta\n**👨‍💻 Developer**: DaneeSkripter`)
        embed.setColor('#AE0131')
        ctx.reply({ embeds: [embed]})
	}
});
