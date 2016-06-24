var got = require('got');

module.exports = function(app, History, cors) {

	app.get('/api/:query', cors(), function(req, res) {
		// Get images and save query and date.
		var query = req.params.query;
		var size = req.query.offset || 10;

		// Save query and time to the database
		var history = new History({
			"term": query,
			"when": Math.floor(Date.now() / 1000) // Unix Timestamp
		}).save(function(err, history) {
			if (err) throw err;
		});

		// Query the image and populate results
		got('https://www.googleapis.com/customsearch/v1', {
			query: {
				q: query,
				searchType: 'image',
				cx: 'cx',
				key: 'key',
				num: size // Valid values are integers between 1 and 10, inclusive https://developers.google.com/custom-search/json-api/v1/reference/cse/list#parameters
			},
			json: true
		}).then(function(data) {
			res.send(data.body.items.map(function(img) {
				return {
					url: img.link,
					snippet: img.snippet,
					thumbnail: img.image.thumbnailLink,
					context: img.image.contextLink
				}
			}));
		});
	})

	app.get('/latest', cors(), function(req, res) {
		// Check to see if the site is already there
		History.find({}, null, {
			"limit": 10,
			"sort": {
				"when": -1 // https://docs.mongodb.com/manual/reference/method/cursor.sort/#ascending-descending-sort
			}
		}, function(err, history) {
			if (err) return console.error(err);
			console.log(history);
			res.send(history.map(function(arg) {
				// Displays only the field we need to show.
				return {
					term: arg.term,
					when: arg.when
				};
			}));
		});
	})

};
