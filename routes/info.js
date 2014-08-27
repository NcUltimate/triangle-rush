var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var active = {events:'', house:'', info:'active', us:''};
	var contacts = [
	{
		'name': 'John Voelker',
		'role': 'Recruitment Director',
		'tags': 'Scholarships, Recruitment, Rush, Events',
		'phone': '860-384-1535',
		'email': 'jvoelker@purdue.edu'
	},
	{
		'name': 'Chris Ekonomou',
		'role': 'Rush Chairman',
		'tags': 'Recruitment, Rush, Events',
		'phone': '312-502-8510',
		'email': 'cekonomo@purdue.edu'
	},
	{
		'name': 'Andres Alvarez',
		'role': 'Rush Chairman',
		'tags': 'Recruitment, Rush, Events',
		'phone': '512-590-5711',
		'email': 'alvare15@purdue.edu'
	},
	{
		'name': 'Connor Hampton',
		'role': 'Rush Chairman',
		'tags': 'Recruitment, Rush, Events',
		'phone': '972-658-4201',
		'email': 'hamptoc@purdue.edu'
	},
	{
		'name': 'Nolan Pugh',
		'role': 'Financial Director',
		'tags': 'Housing Fees, Billing, Scholarships',
		'phone': '574-601-8025',
		'email': 'pughn@purdue.edu'
	},
	{
		'name': 'Nick Coungeris',
		'role': 'Membership Director',
		'tags': 'Membership, Brotherhood, House Living',
		'phone': '847-636-2520',
		'email': 'ncounger@purdue.edu'
	},
	{
		'name': 'David Philpot',
		'role': 'Vice President',
		'tags': 'Academics, Service',
		'phone': '812-569-0759',
		'email': 'pphilpot@purdue.edu'
	},
	{
		'name': 'Joseph Klemen',
		'role': 'President',
		'tags': 'Academics, Membership, Events',
		'phone': '317-919-1461',
		'email': 'jklemen@purdue.edu'
	},
	];
   res.render('info', { title: 'About Us', active: active, contacts: contacts });
});

module.exports = router;