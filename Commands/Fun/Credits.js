const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  Cooldown: true,
  data: new SlashCommandBuilder()
    .setName("credits")
    .setDescription(
      "Shows and credits all the great users who gave tutorials and shared their code"
    ),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setAuthor({ name: "Credits" })
      .setDescription(
        [
          `**Credits to Dragluca for their amazing tutorials**`,
          `**Credits to LyxCode for their amazing tutorials**`,
          `**Credits to Kaj also for their awesome tutorials**`,
          `**Credits to 👑MR EXTINCT CODE'S#6646 for their dadjokes Command**`,
          `**Credits to Liaam#9901 for their Anime Command**`,
          `**Credits to KevinFoged#1138 for their slowmode command and server info command**`,
          `**Credits to lunar#9205 for their ticket system**`,
          `[LyxCodeYT](https://www.youtube.com/watch?v=Mug61R0cxRw)-[LyxCode-Discord-Server](https://discord.gg/AwV4KaSt), [KajYT](https://www.youtube.com/watch?v=5bK1Zi6jh8M&t=987s)-[Kaj-Discord-Server](https://discord.gg/q6mwUMv6), [Lunar-Codes-Discord-Server](https://discord.gg/Gusn9RUPSX)`,
        ].join("\n")
      )
      .setColor("Random");
    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
