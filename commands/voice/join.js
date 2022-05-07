const { SlashCommandBuilder } = require('@discordjs/builders');
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('Join current voice channel.'),
	async execute(interaction) {
		const voiceChannel = interaction.member.voice.channel;
		if (!voiceChannel) {
			return interaction.reply("You need to be in a voice channel to play music!");
		}
		const connection = joinVoiceChannel({
			channelId: interaction.member.voice.channel.id,
			guildId: interaction.member.voice.channel.guild.id,
			adapterCreator: interaction.member.voice.channel.guild.voiceAdapterCreator,
		});
		const player = createAudioPlayer();
		const resource = createAudioResource("assets/mp3/auughhh.mp3");
		player.play(resource);
		connection.subscribe(player);
		player.on('error', error => {
			console.error(`Error: ${error.message} with resource ${error.resource.metadata.title}`);
			player.play(getNextResource());
		});
		return interaction.reply('joining channel ' + interaction.member.voice.channel.toString());
	},
};