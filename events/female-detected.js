const { femalePlayer } = require('../config.json');

module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (femalePlayer.includes(message.author.id)) {
            message.reply({ files: ["assets/mp4/female-detected-opinion-rejected.mp4"] })
        }
    },
};