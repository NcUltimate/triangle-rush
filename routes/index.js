var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var rush_events = [{
		name: 'Grill Out',
		img: 'cookout.jpg',
		date: 'Mon, August 25',
		time: '6:00pm - 8:00pm',
		desc: 'Learn about Triangle and meet some great guys while enjoying hot dogs and burgers off the grill'
	},{
		name: 'Pizza Night',
		img: 'pizza.jpg',
		date: 'Wed, August 27',
		time: '6:00pm - 8:00pm',
		desc: 'Pizza from Dominoes and conversation with the brothers'
	},{
		name: 'Car Smash',
		img: 'carsmash.jpg',
		date: 'Fri, August 29',
		time: '6:00pm - 8:00pm',
		desc: 'Let out some stress by beating on a car with a sledgehammer'
	},{
		name: 'Touch Football',
		img: 'football.jpg',
		date: 'Tues, September 2',
		time: '6:00pm - 8:00pm',
		desc: 'Ongoing touch football games out in the intramural fields'
	},{
		name: 'Buffalo Wild Wings',
		img: 'wings.jpg',
		date: 'Thurs, September 4',
		time: '6:00pm - 8:00pm',
		desc: 'Come join us for some unlimited boneless and classic wings'
	},{
		name: 'Hawaiian Bash',
		img: 'hawaiian.jpg',
		date: 'Fri, September 5',
		time: '6:00pm - 8:00pm',
		desc: 'Wear your hawaiian shirts if you have them and have fun at this hawaiian-themed event'
	},{
		name: 'Ultimate Frisbee',
		img: 'frisbee.jpg',
		date: 'Mon, September 8',
		time: '6:00pm - 8:00pm',
		desc: 'A huge game of ultimate frisbee at the intramural fields. Any skill level is welcome'
	},{
		name: 'Cornhole Tournament',
		img: 'cornhole.jpg',
		date: 'Wed, September 10',
		time: '6:00pm - 8:00pm',
		desc: 'Learn how to play Cornhole and see if you\'re better than the rest'
	},{
		name: 'Break or Bounce',
		img: 'breakorbounce.jpg',
		date: 'Fri, September 12',
		time: '6:00pm - 8:00pm',
		desc: 'We throw things off the roof to see if they break or bounce, for science'
	},{
		name: 'Chick-fil-a',
		img: 'chickfila.jpg',
		date: 'Mon, September 15',
		time: '6:00pm - 8:00pm',
		desc: "Arguably the best chicken sandwich in the world, you won't want to miss this"
	},{
		name: 'Game Night',
		img: 'gamenight.png',
		date: 'Wed, September 17',
		time: '6:00pm - 8:00pm',
		desc: 'Play Euchre, Poker, Scrabble, and more games while learning about the house'
	}]

	var active = {events:'active', house:'', info:'', us:''};
  res.render('index', { title: 'Triangle Rush Fall 2014', events: rush_events, active: active});
});


module.exports = router;
