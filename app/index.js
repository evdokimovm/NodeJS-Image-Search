var Search = require('bing.search');

module.exports = function(app, History, cors) {

	app.get('/api/:query', cors(), function(req, res) {
		// Get images and save query and date.
		var query = req.params.query;
		var size = req.query.offset || 10;
		var search = new Search('API_KEY');

		// Save query and time to the database
		var history = new History({
			"term": query,
			"when": Math.floor(Date.now() / 1000) // Unix Timestamp
		}).save(function(err, history) {
			if (err) throw err;
			console.log('Saved ' + history);
		});

		// Query the image and populate results
		search.images(query, {
				top: size
			},
			function(err, results) {
				if (err) throw err;
				res.send(results.map(function(img) {
					return {
						"url": img.url,
						"snippet": img.title,
						"thumbnail": img.thumbnail.url,
						"context": img.sourceUrl
					}
				}));
			}
		);
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
