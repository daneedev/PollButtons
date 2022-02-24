const { Command, CommandType, Argument, ArgumentType } = require('gcommands');
const Discord = require('discord.js')
new Command({
	name: 'purge',
	description: 'Clear messages',
	type: [CommandType.SLASH, CommandType.MESSAGE],
    arguments: [
        new Argument({
            name: 'number',
            description: 'Number of messages to delete',
            type: ArgumentType.INTEGER,
            required: true
        })
    ],
	run: (ctx) => {
        const number = ctx.arguments.getInteger("number")
        ctx.channel.bulkDelete(number)
        const embed = new Discord.MessageEmbed();
        embed.setColor('RANDOM')
        embed.setDescription(`I deleted **${number}** messages!`)
        ctx.reply({ embeds: [embed], ephemeral: true})
    }
});