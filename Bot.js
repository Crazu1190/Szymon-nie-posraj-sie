const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
});

client.on('message', message => {
    if (message.content === '!klan') {
        message.reply('oto twoje zaproszenie...');
        message.channel.send('Klan w brawl stars: Fire Power');
        message.channel.send('**Wymagania: 1000 pucharków**');
        message.channel.send('https://link.brawlstars.com/invite/band/pl?tag=QLJ0LQJR&token=as37zskx');
        }
    if (message.content === 'Cześć') {
        message.reply('Cześć!');
        }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
