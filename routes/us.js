var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var active = {events:'', house:'', info:'', us:'active'};
	var us = [{
			'name':'STEM Majors',
			'desc': 'STEM Majors',
			'img': 'stem.jpg'
		},
		{
			'name': 'Leaders',
			'desc':  'Leaders',
			'img': 'leaders.jpg'
		},
		{
			'name': 'Friends',
			'desc': 'Friends',
			'img': 'friends.jpeg'
		},
		{
			'name': 'Innovators',
			'desc':  'Innovators',
			'img': 'innovators.jpg'
		}];
   res.render('us', { title: 'About Us', active: active, us: us });
});

module.exports = router;
