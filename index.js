const Discord = require('discord.js')
const bot = new Discord.Client()
const TOKEN = 'ODI3NjI1MTExNTE4NDQ1NjIw.YGdv8w.GQUE8ioaVs74HZMv6oBZD3TuIRc' 
const prefix = '!amber'

bot.on('teady', () => {
    console.log('Amber kann jetze helfen')

    bot.user.setPresence({
        activity: {
            name: '!amberhelp',
            type:  'STREMING',
            url: 'https://www.twitch.tv/nekoteamokko15' 
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