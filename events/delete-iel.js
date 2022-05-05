module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (message.content === 'iel') {
            message.delete();
        }
    },
};