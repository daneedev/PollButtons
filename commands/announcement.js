const { Command, CommandType, Argument, ArgumentType } = require('gcommands');
const Discord = require('discord.js')

new Command({
	name: 'announcement',
	description: 'Send announcement',
	type: [CommandType.SLASH, CommandType.MESSAGE],
    arguments: [
        new Argument({
            name: 'title',
            description: 'Embed title',
            type: ArgumentType.STRING,
            required: true
        }),
        new Argument({
            name: 'description',
            description: 'Embed description',
            type: ArgumentType.STRING,
            required: true
        })
    ],
	run: (ctx) => {
        let q = ctx.arguments.getString("title")
        let p = ctx.arguments.getString("description")
        let u = ctx.user
        let p2 = p.replaceAll("---", "\n")

        let announcement = new Discord.MessageEmbed()
            .setTitle(q)
            .setDescription(p2)
            .setColor("YELLOW")
            .setFooter("Made by: " + u.tag, u.avatarURL({ size: 128, dynamic: true }))

        ctx.reply({ content: 'Announcement sended!', ephemeral: true})
        ctx.channel.send({ 
            embeds: [announcement]
        })
	}
});