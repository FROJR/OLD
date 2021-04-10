const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Запустился бот' + bot.user.tag);   
})

bot.login('NTU0Mjk3Mzg3OTMwMzUzNjY3.XIUTqw.r4D7Zm3Mr0EPfrEmkbtMg27MdUU');