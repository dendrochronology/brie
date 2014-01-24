Meteor.publish('Ideas', function() {
	return Ideas.find({}, {sort: {created_date: -1}});
});