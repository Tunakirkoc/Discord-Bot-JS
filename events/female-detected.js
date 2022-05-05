module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (message.author.id === '320267536891510785') {
            message.reply({ files: ["assets/mp4/female-detected-opinion-rejected.mp4"] })
        }
    },
};