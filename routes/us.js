var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var active = {events:'', house:'', info:'', us:'active'};
   res.render('us', { title: 'About Us', active: active });
});

module.exports = router;
