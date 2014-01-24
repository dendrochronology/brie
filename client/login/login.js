Template.login.events({
	'click button': function(event) {
		event.stopPropagation();
		event.preventDefault();

		Meteor.loginWithGoogle();
	}
});