module.exports = {
    name: 'Delete Iel',
    event: 'messageCreate',
    execute(message) {
        if (message.content === 'iel') {
            message.delete();
        }
    },
};