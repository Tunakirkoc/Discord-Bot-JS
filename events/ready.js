module.exports = {
	name: 'Print Tag When Ready',
	event: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};