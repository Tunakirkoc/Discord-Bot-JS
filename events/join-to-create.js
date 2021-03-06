const { joinToCreate } = require('../config.json');
const fs = require("fs");

module.exports = {
    name: 'Join To Create',
    event: 'voiceStateUpdate',
    execute(oldState, newState) {
        if (newState.channelId === joinToCreate.channelId) {
            if (newState.channel.members.size >= 1) {
                const member = newState.channel.members.entries().next().value[1]
                newState.guild.channels.create(`${member.displayName}` + " channel", {
                    type: 'GUILD_VOICE',
                    parent: joinToCreate.categoryId,
                })
                    .then(channel => {
                        member.voice.setChannel(channel.id)
                        var rawdata = fs.readFileSync("cache.json");
                        var cache = JSON.parse(rawdata);
                        cache.joinToCreateChannels.push(channel.id);
                        fs.writeFileSync("cache.json", JSON.stringify(cache));
                    })
                    .catch(err => { console.log(err) });
            }
        }
        let rawdata = fs.readFileSync('cache.json');
        let cache = JSON.parse(rawdata);
        for (let channelId of cache.joinToCreateChannels) {
            if (oldState.channelId === channelId) {
                if (oldState.channel.members.size === 0) {
                    oldState.channel.delete();
                    cache.joinToCreateChannels.splice(cache.joinToCreateChannels.indexOf(channelId), 1);
                    fs.writeFileSync("cache.json", JSON.stringify(cache));
                }
            }
        }
    },
};
