const { joinToCreate } = require('../config.json');

module.exports = {
    name: 'voiceStateUpdate',
    execute(oldState, newState) {
        if (newState.channelId === joinToCreate.channelId) {
            if (newState.channel.members.size === 1) {
                const member = newState.channel.members.entries().next().value[1]
                newState.guild.channels.create(`${member.displayName}` + " channel", {
                    type: 'GUILD_VOICE',
                    parent: joinToCreate.categoryId,
                })
                    .then(channel => { 
                        member.voice.setChannel(channel.id)
                    })
                    .catch(err => { console.log(err) });
                return console.log('Channel id : ' + newState.channelId);
            }
        }
    },
};
