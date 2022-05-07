const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('submit-idea')
        .setDescription('Submit an idea for the server.')
        .addStringOption(option =>
            option.setName('idea')
                .setDescription('The idea to submit ')
                .setRequired(true)),
    async execute(interaction) {
        const idea = interaction.options.getString("idea")
        const content = "========== Idea by '" + interaction.user.tag + "' [" + interaction.user.id + "] " + new Date() + " ==========\n" + idea + "\n"
        fs.appendFile('idea.log', content, err => {
            if (err) {
                console.error(err);
            }
        });
        return interaction.reply(interaction.user.toString() + " submitted the following idea : " + idea)
    },
};
