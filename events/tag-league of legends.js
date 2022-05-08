module.exports = {
    name: 'presenceUpdate',
    execute(oldMember, newMember) {
        console.log(newMember.activities);
        if (newMember.activities[0] !== undefined) {
            if (newMember.activities[0].name.toLowerCase() == 'league of legends') {
                if (oldMember.activities[0] == undefined || oldMember.activities[0].name.toLowerCase() != 'league of legends') {
                    newMember.guild.channels.cache.find(channel => channel.name === 'boo').send(newMember.user.toString() + "\nhttps://tenor.com/view/touching-grass-touch-gif-21219969")
                    .then(console.log)
                    .catch(console.error);
                }
            }
        }
    },
};
