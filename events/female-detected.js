module.exports = {
    name: 'messageCreate',
    execute(message) {
        const { femalePlayer } = require('../config.json');
        if (femalePlayer.includes(message.author.id)) {
            message.reply({ files: ["assets/mp4/female-detected-opinion-rejected.mp4"] })
        }
    },
};