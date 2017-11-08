var db = require('../connection');

exports.addAsPlayer = function(req,res) {
	
 	var collection = db.get().collection('users');
 	collection.find().toArray(function(err, docs) {
 		res.render('/', {comments: docs})

  })
};

