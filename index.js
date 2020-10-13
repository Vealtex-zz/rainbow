const { Client, version } = require('discord.js');
const { token, serverID, roleID, interval } = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
    console.log(`[ Client ] ${bot.user.tag} Good luck! You're connected to discord API`);

    let guild = bot.guilds.cache.get(serverID) // This ensures that it connects to your server ID
    if(!guild) throw `[ Error ] The bot was not found on your server! Server ID: ${serverID}` // It is useful to add him... ;)

    let role = guild.roles.cache.find(u => u.id === roleID) // This will make him look for your role!
    if(!role) throw `[ Error ] The role was not found on the server name ${guild.name}` // Make sure you have the right role id!
    
    if(interval < 60000) console.log(`\n[!!!] Oh, I'd be careful!`) // Note if the interval is less than one minute. Psst you get angry people probably!

    setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => console.log(`[ Error ] An error occurred during the role change.`));
    }, interval)

})

bot.login(token)


//BIG BIG BIGGGG NOTE: It changes your role color! For example, if you first had red, and you put index.js and the last color was blue, your role is blue too!
