var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var active = {events:'', house:'', info:'', us:'active'};
	var us = [{
			'name':'S.T.E.M. Majors',
			'desc': 'Triangle was founded by 12 civil engineers on the principle of its significance in the engineering world. Nationally, our brotherhood is comprised of students with majors in the schools of engineering, science, and technology.',
			'img': 'stem.jpg',
			'icon': 'gears'
		},
		{
			'name': 'Mentors',
			'desc':  'Because of our similar majors, everyone in house takes the same courses and learns similar material. This collectively enrichens everyone\'s learning experience through attending the same courses, studying for the same tests, and receiving homework help from experienced upper classmen.',
			'img': 'mentor.jpg',
			'icon': 'mortar-board'
		},
		{
			'name': 'Leaders',
			'desc':  'Our members constantly seek to further their involvement and leadership within campus organizations. Our brothers have been TAs, presidents, board members, referees, managers, and other high-involvement positions across campus.',
			'img': 'leaders.jpg',
			'icon': 'child'
		},
		{
			'name': 'Brothers',
			'desc': 'The bond of brotherhood is one that lasts a lifetime, and is an invaluable relationship one can only experience firsthand. Knowing that you have the support and comraderie of an entire group of people is a rewarding experience, especially since it lasts through college and beyond. ',
			'img': 'brothers.jpg',
			'icon': 'institution'
		},
		{
			'name': 'Innovators',
			'desc': 'Every semester and over the summer, Triangles accept positions in co-ops and internships at big name companies like GE, Microsoft, Cummins, SpaceX, and countless others. Anywhere you go in industry, tech, or manufacturing, you will find Triangles as a part of their workforce.',
			'img': 'innovators.jpg',
			'icon': 'lightbulb-o'
		},
		{
			'name': 'Friends',
			'desc': 'Friendship is a valued tenet at Triangle, and is exhibited by all. Within our walls is an open door community where everyone lives and socializes together, especially since most of us share interests in a diverse range of hobbies. Whether you enjoy CrossFit, League of Legends, fantasy football or building robots, anything is welcome and encouraged in our house.',
			'img': 'friends.jpg',
			'icon': 'thumbs-o-up'
		},
		{
			'name': 'Volunteers',
			'desc':  'As a Greek organization, we aspire to give back to our community through both volunteer work and philanthropy. Each semester we log over 250 hours of community service at various organizations in the greater lafayette area. Our Fall philanthropy, Mr. & Mrs. PUDM, raised over $600 for Riley Children\'s hospital last year. Our Spring philanthropy, Balls to the Wall, raised over $1000 for testicular cancer awareness.',
			'img': 'volunteers.jpg',
			'icon': 'life-saver'
		}];
		var alumni = [];
   res.render('us', { title: 'About Us', active: active, us: us, alumni: alumni });
});

module.exports = router;
