var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var rush_events = [{
		name: 'Buffalo Wild Wings',
		img: 'wings.jpg',
		date: 'August 25',
		time: '5:00pm - 8:00pm',
		desc: 'Come join us for some unlimited boneless and classic wings'
	},{
		name: 'Grill Out',
		img: 'cookout.jpg',
		date: 'August 27',
		time: '5:00pm - 8:00pm',
		desc: 'Learn about Triangle and meet some great guys while enjoying hot dogs and burgers off the grill'
	},{
		name: 'Car Smash',
		img: 'carsmash.jpg',
		date: 'August 29',
		time: '5:00pm - 8:00pm',
		desc: 'Let out some stress by beating on a car with a sledgehammer'
	},{
		name: 'Basketball',
		img: 'basketball.jpg',
		date: 'September 2',
		time: '5:00pm - 8:00pm',
		desc: '3v3 basketball games in our parking lot behind the house'
	},{
		name: 'Subway & Purdue Info',
		img: 'subway.jpg',
		date: 'September 4',
		time: '5:00pm - 8:00pm',
		desc: 'Ask anything about Purdue or Triangle over catered Subway sandwiches'
	},{
		name: 'Break or Bounce',
		img: 'breakorbounce.jpg',
		date: 'September 5',
		time: '5:00pm - 8:00pm',
		desc: 'We throw things off the roof to see if they break or bounce, for science'
	},{
		name: 'Chick-fil-a',
		img: 'chickfila.jpg',
		date: 'September 8',
		time: '5:00pm - 8:00pm',
		desc: "Arguably the best chicken sandwich in the world, you won't want to miss this"
	},{
		name: 'Hooters',
		img: 'hooters.jpeg',
		date: 'September 10',
		time: '5:00pm - 8:00pm',
		desc: 'Come join us for some unlimited boneless and classic wings'
	},{
		name: 'Hog Roast',
		img: 'hogroast.jpg',
		date: 'September 12',
		time: '5:00pm - 8:00pm',
		desc: 'We will be roasting an entire hog over an open flame'
	},{
		name: 'Buffalo Wild Wings',
		img: 'wings.jpg',
		date: 'September 16',
		time: '5:00pm - 8:00pm',
		desc: 'Come join us for some unlimited boneless and classic wings'
	},{
		name: 'Game Night',
		img: 'gamenight.png',
		date: 'September 17',
		time: '5:00pm - 8:00pm',
		desc: 'Play Euchre, Poker, Scrabble, and more games while learning about the house'
	}]

	var active = {events:'active', house:'', info:'', us:''};
  res.render('index', { title: 'Triangle Rush Fall 2014', events: rush_events, active: active});
});


module.exports = router;
