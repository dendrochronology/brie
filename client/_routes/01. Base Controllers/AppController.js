AppController = RouteController.extend({

	// Make sure someone is logged in, and display
	// the login page if not.
	before: function() {
		if (!Meteor.user()) {
			this.render('login');
			this.stop();
		}
	},

	layoutTemplate: 'app_layout',
	loadingTemplate: 'loading'
});