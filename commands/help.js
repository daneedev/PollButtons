const { Command, CommandType } = require('gcommands');
const Discord = require('discord.js')

new Command({
	name: 'help',
	description: 'Show all commands',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: (ctx) => {
        const embed = new Discord.MessageEmbed
        embed.setTitle('Help')
        embed.setDescription('**🔵 Moderation**\n`/purge`\n👍**Polls**\n`/poll`\n📕**Other**\n`/ping`,`/bot`')
        embed.setColor('RANDOM')
        ctx.reply({ embeds: [embed]})
	}
});