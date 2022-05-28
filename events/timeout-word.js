const { listTimeoutWord } = require('../config.json');

module.exports = {
	name: 'Timeout Word',
	event: 'messageCreate',
	execute(message) {
		const guildMember = message.member;
		for (const timeoutWord of listTimeoutWord) {
			if (message.content.toLowerCase().includes(timeoutWord)) {
				message.delete();
				guildMember.timeout(5 * 60 * 1000, 'You say ' + timeoutWord)
					.then(console.log)
					.catch(console.error);
				break
			}
		}
	},
};
