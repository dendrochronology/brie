Session.setDefault('moment_timer', new Date());

Meteor.startup(function() {

	// Updates the 'moment_timer' session variable once
	// every 15 seconds. Template helpers which perform
	// moment.js functions can call Session.get('moment_timer')
	// to make sure their output is updated periodically.
	Meteor.setInterval(function() {
		Session.set('moment_timer', new Date());
	}, 15000); // once every 15 seconds
});