
const { Client, RichEmbed } = require('discord.js');
const { red, green, blue, yellow, cyan } = require('chalk');
const bot = new Client();
const settings = require('./settings.json');




bot.on('ready', ()=>{
    console.log(blue(`Transpohia Detector Running`));
    console.log(green('========================='));
    
});

let hahaha = `
I sexually Identify as the "I sexually identify as an attack helicopter" joke.
Ever since I was a child, I've dreamed of flippantly dismissing any concepts or
discussions regarding gender that don't fit in with what I learned in 8th grade 
bio. People say to me that this joke hasn't been funny since 2014 and please at least
come up with a new one, but I don't care, I'm hilarious. I'm having a plastic surgeon 
install Ctrl, C, and V keys on my body. From now on I want you guys to call me "epic kek
dank meme owned with facts and logic" and respect my right to shit up social media.
If you can't accept me you're a memeophobe and need to check your ability-to-critically-think 
privilege. Thank you for being so understanding.

`

bot.on('message', message => {
    if (message.content.startsWith("Tranny"))
      message.author.sendMessage(hahaha)
  })
    

  bot.on('message', message => {
    if (message.content.startsWith("tranny"))
      message.author.sendMessage(hahaha)
  })

bot.login(settings.token);