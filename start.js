const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({ 
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: process.argv[4],
    password: process.argv[5]
});

bot.loadPlugin(require('./lib/antiafk'));


bot.on("spawn", ()=>{
    bot.afk.start();
})