Template.app_layout.events({
	'click #logout': function(event) {
		event.stopPropagation();
		event.preventDefault();
		Meteor.logout();
	}
});