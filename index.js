/****************************question 10***********************/

/*var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
    token: 'xoxb-157986622021-zVMxjvlCZMvJaY0bpQuC9SUS', // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'ouali Bot'
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':cat:'
    };
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('general', 'meow!', params);
    
    // define existing username instead of 'user_name'
   
    bot.postMessageToUser('kamel_boukir', 'meow!', params); 
    
    
    // define private group instead of 'private_group', where bot exist
                               
});*/

/**********partie 2**********************/

var Bot = require('./bot.js');

// create a bot
var bot = new Bot({
    token: process.env.SLACK_BOT_TOKEN, // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'ouali_bot'
});
bot.connect();
