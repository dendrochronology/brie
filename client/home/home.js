Template.home.rendered = function() {
	var data = Router.getData() || {ideas:[]};
	if (data.ideas.length === 0) {
		Template.home.show_new_form();
	}
};

Template.home.show_new_form = function() {
	$("#new_idea_form").show(150);
	$("#new_idea").hide(150);
	$("#new_idea_summary").focus();
};


Template.home.hide_new_form = function() {
	$("#new_idea_form").hide(150);
	$("#new_idea").show(150);

	$("#new_idea_summary").val('');
	$("#new_idea_description").val('');
};



Template.home.created_moment = function() {
	Session.get('moment_timer');
	return moment(this.created_date).fromNow();
};



Template.home.author_name = function() {
	return Meteor.users.findOne(this.author).profile.name;
};


Template.home.events({
	'click #new_idea': function(event) {
		event.stopPropagation();
		event.preventDefault();

		var container = $("#new_idea_form");

		if (container.is(':visible') === true) {
			Template.home.hide_new_form();
		}
		else {
			Template.home.show_new_form();
		}
	},



	"submit form": function(event) {
		event.stopPropagation();
		event.preventDefault();

		var summary_f = $("#new_idea_summary"),
			description_f = $("#new_idea_description"),
			summary = summary_f.val(),
			description = description_f.val();

		Ideas.insert({
			summary: summary,
			description: description,
			author: Meteor.userId(),
			created_date: new Date()
		});

		summary_f.val('');
		description_f.val('');
		Template.home.hide_new_form();
	},


	'click #new_idea_cancel': function(event) {
		event.stopPropagation();
		event.preventDefault();

		Template.home.hide_new_form();
	}
});