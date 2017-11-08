var model = require('../model/appModel');

exports.addAsPlayer = function(req, res) {
	model.addAsPlayer(req.body,res);
	
};
