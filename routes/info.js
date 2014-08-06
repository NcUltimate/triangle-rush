var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var active = {events:'', house:'', info:'active', us:''};
   res.render('info', { title: 'About Us', active: active });
});

module.exports = router;
