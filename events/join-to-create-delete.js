const fs = require('fs');

module.exports = {
    name: 'voiceStateUpdate',
    execute(oldState, newState) {
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