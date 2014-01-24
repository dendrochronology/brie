HomeController = AppController.extend({
	template: 'home',

	before: function() {
		this.subscribe('Ideas').wait();
	},

	data: function() {
		return {ideas:
			Ideas.find({}, {
				sort: {created_date: -1}
			}).fetch()
		};
	}
});