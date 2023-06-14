const { SlashCommandBuilder } = require('discord.js');


const data = new SlashCommandBuilder()
	.setName('jang')
	.setDescription('tells the fact');

async function execute(funcParams) {
	try {
		if (funcParams.interaction) {
			return await funcParams.interaction.reply('shes the cutest');
		}
		else {
			return await funcParams.message.channel.send('shes the cutest');
		}
	}
	catch (error) {
		console.log('emotional damage in jang.js executeInteractionCmd()');
	}
}

module.exports = {
	data, execute,
};