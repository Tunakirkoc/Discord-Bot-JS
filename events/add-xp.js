module.exports = {
	name: 'Add XP',
	event: 'messageCreate',
	execute(message) {
        if (!message.author.bot) {
            const author = Users.findOne({ where: message.author.id })
            if (author) {
                return author.update( author.xp += 1);                    
            }
            return Users.create({id: message.author.id , xp: 1});
            }
            author.save();
        },
};