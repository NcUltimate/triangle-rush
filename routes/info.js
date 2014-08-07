var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var active = {events:'', house:'', info:'active', us:''};
   res.render('info', { title: 'About Us', active: active });
});

module.exports = router;

// </br>Because of this, everyone in house has taken the same courses and learns the same material. This collectively enrichens everyone\'s learning experience through having similar classes, studying for the same tests, and receiving homework help from experienced upper classmen.