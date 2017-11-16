var model = require('../model/appModel');

exports.addAsPlayer = function(req, res) {
	model.addAsPlayer(req.body,res);
	
};

exports.login = function(req, res) {
	console.log(res);
	res.render('pages/index', {
		title : '',
		errors: '',
	})
	
};
