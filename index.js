const Discord = require('discord.js')
const bot = new Discord.Client()
const TOKEN = 'ODI3NjI1MTExNTE4NDQ1NjIw.YGdv8w.F8sQs9syOX2hp9M6hzFkcy303dg' 
const prefix = '!amber'

bot.on('teady', () => {
    console.log('Amber kann jetze helfen')

    bot.user.setPresence({
        activity: {
            name: '!amberhelp',
            type:  'STREMING', 
        },
        status: 'dnd'
    })
})

bot.on('message',  message => {
    Let parts = message.content.split(" ");

    if(parts[0] == '!amber'){
        message.channel.setNSFW('Hey Ich bin Amber und helfe meinen Besitzer Gerne ^^')
    }
})

bot.login(TOKEN)