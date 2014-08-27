var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var reds = ['red', 'darkred', 'indianred', '#f50', '#e26'];
	var red_idx = 0;
	var rms = [
		{
			'name': 'Porch',
			'desc':  'Our spacious front porch is perfect for hanging out, listening to music, and getting fresh air.',
			'img': 'porch.jpg',
			'features' : ['Speaker system', 'Grills', 'New landscaping','Handicap Access']
		},
		{
			'name': 'Study Wing',
			'desc':  'The study wing features plenty of resources, quiet and space needed for schoolwork. Our library of binders contains past test, quizzes and homeworks for your academic supplement. ',
			'img': 'study.jpg',
			'features' : ['Homework binder library', 'Desks and chairs', 'Free printing', 'Group study rooms', 'Tutoring and Academic Plan available']
		},
		{
			'name':'kitchen',
			'desc': 'Enjoy cafeteria-style food service with hot meals every day of the week. Our own in-house chef can even prepare meals to fit your dietary needs, allergy concerns or religious preferences.',
			'img': 'kitchen.jpg',
			'features' : ['Hot Lunch Mon. - Fri.', 'Breakfast items daily', 'Hot dinner Sun. - Thurs.', 'Hot brunch on Sat.']
		},
		{
			'name': 'formal',
			'desc':  'Our formal provides plenty of space for studying, socializing and relaxing. Newly refurnished and cleaned over the summer, it is the most welcoming part of the house.',
			'img': 'formal.jpg',
			'features' : ['Magazines available: GQ, Sports Illustrated, Popular Science and others','Strong wifi access', 'Grand piano']
		},
		{
			'name':'dining room',
			'desc': 'The dining room is in our basement adjacent to the kitchen, and doubles as operational space for many of our events.',
			'img': 'dining.jpg',
			'features' : [' Strong wifi access', 'Brightly lit', 'Table space and outlets for studying']
		},
		{
			'name': 'rec room',
			'desc':  'The recreational room is where we have all major events such as watching the Super Bowl, game nights, functions, and formals.',
			'img': 'basement.jpg',
			'features' : ['Cable TV', 'NFL Blitz 2000', 'Foosball', 'Card and board games']
		},
		{
			'name': 'rack room',
			'desc':  'Everyone sleeps in our cold air dorm, aka "the rack room". Leave a tag and someone will wake you up at that time the next morning.',
			'img': 'cold-air.jpg',
			'features' : ['Cool during summers', 'Warm during winters', 'Dark, quiet, and isolated']
		},
		{
			'name':'bathrooms and showers',
			'desc': 'Each floor has its own bathroom and showers. The showers are public within the bathroom, locker-room style.',
			'img': 'bathroom.jpg',
			'features' : ['Unlimited hot water', 'Cleaned daily', 'Handicap accesible']
		},
		{
			'name': 'living space',
			'desc':  'There are two men to every room in the house, and on rare occasions three. Room ownership is determined by seniority, but room mates share space equally.',
			'img': 'room.jpg',
			'features' : ['Capacitous closets', 'Decorate/Renovate anything', 'Cable and Internet ready', 'Keys for every room']
		},
		{
			'name': 'laundry room',
			'desc':  'Triangle provides free laundry to all in-house brothers. This includes washers, dryers, an ironing board, and a sink.',
			'img': 'laundry.jpg',
			'features' : ['4 dryers', '4 washers', '1 ironing board', 'Free at any time']
		},
		{
			'name': 'conference room',
			'desc':  'Our 2nd floor conference room is perfect for group meetings, studying, reading or watching a movie.',
			'img': 'conference.jpg',
			'features' : ['Private group workspace', 'Whiteboard and projectors', 'New office chairs']
		}];

	var act = { events:'', house:'active', info:'', us:'' };
  	res.render('house', { title: 'Our House', rooms: rms, active: act });
});

module.exports = router;
