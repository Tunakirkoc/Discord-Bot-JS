module.exports = {
    name: 'presenceUpdate',
    execute(oldMember, newMember) {
        if (newMember.activities[0] !== undefined) {
            if (newMember.activities[0].name.toLowerCase() == 'league of legends' && (oldMember.activities[0].name.toLowerCase() !== 'league of legends') ) {
                newMember.guild.channels.cache.find(channel => channel.name === 'boo').send(newMember.user.toString() + "\nhttps://tenor.com/view/touching-grass-touch-gif-21219969")
            }
        }
    },
};