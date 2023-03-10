const {
    ChatInputCommandInteraction,
    EmbedBuilder,
    SlashCommandBuilder
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("membercount")
    .setDescription("Shows you the membercount of the server."),


    async execute(interaction) {
        const { guild } = interaction;
        const { members } = guild;
        
        const botCount = members.cache.filter(member => member.user.bot).size;

        interaction.reply({ embeds: [
            new EmbedBuilder()
                .setColor("Green")
                .setTitle(`${guild.name}'s Membercount`)
                .setThumbnail(guild.iconURL({ size: 1024 }))
                .setImage(guild.bannerURL({ size: 1024 }))
                .setFooter({ text: "Membercount Command" })
                .addFields(
                    {
                        name: `User (${guild.memberCount})`,
                        value: [
                            `๐จโ๐ฉโ๐งโ๐ฆ **Member** ${guild.memberCount - botCount}`,
                            `๐ค **Bots** ${botCount}`
                        ].join("\n"),
                        inline: true
                    }
                )
        ] });
    }
}