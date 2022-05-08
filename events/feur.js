module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (message.content.toLowerCase().endsWith('quoi?',) ||
            message.content.toLowerCase().endsWith('quoi!') ||
            message.content.toLowerCase().endsWith('quoi.') ||
            message.content.toLowerCase().endsWith('quoi') ||
            message.content.toLowerCase().endsWith('koi?') ||
            message.content.toLowerCase().endsWith('koi!') ||
            message.content.toLowerCase().endsWith('koi.') ||
            message.content.toLowerCase().endsWith('koi')) {
            message.reply({ files: ["assets/mp4/feur.mp4"] })
            .then(console.log)
            .catch(console.error);
        }
    },
};
