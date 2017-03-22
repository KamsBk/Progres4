const SlackBot = require('slackbots');
module.exports = function(params) {
	this.bot = null;
	var self = this
	this.connect = function() {
		self.bot = new SlackBot(params);
		self.bot.on('start', this.onStart);
		self.bot.on('message', this.onEvent);
	}
	self.onStart = function() {
		 var params = {
		    icon_emoji: ':cat:'
		};
		self.bot.postMessageToChannel('general', 'meow!', params);
		
		
		// define existing username instead of 'user_name'
	   
		self.bot.postMessageToUser('kamel_boukir', 'meow!', params); 
	}
	self.onEvent = function(event) {
	//reception d'un message
	console.log(event);
	}
}

