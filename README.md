Description of project: 
	This game accepts two players to race as different wavelengths of light: purple and green. Using the right arrow and "z" keys, each player can move their wavelength across the screen to be the first to refract into the triangular prism. 


Technologies used for which parts:
	JQuery
		Used for moving the "lights" across the screen, assigning which keys to use while playigng the game, alerting who the winner is, sending out a light beam in celebration at the end and for the "Reset" button should players want to play again or retry.
	CSS
		Used for overall styling of the page including font selection, element placements, creation of the "triangle/arrow-up" and some surprise hover features over the title and moon. 
	HTML
		Used for the layout of the page, links to jQuery library, google fonts, and the supplementary JS and CSS files. 
		Crucial component of site structure and in labeling the classes and ID's


Explanation of approach:
	Inspired by both the Pink Floyd album "Dark Side of the Moon" as well as light prisms in general, this racing game is meant to allow the players to interact with digital lights in a different way than previously accustomed to.

	Sample Code: 
		
		    if ($('.purple').width()>= 925){
		    	alert("Purple won!");
		  	$('#light-beam').animate({
				width: '+=250px',
				height: "20px"
			}, 100);

Unsolved problems/unfinished challenges: 
	Mostly the bonus challenges: 
		1) Play against a Bot
		2) Timers
		3) Local Storage
		4) Customized Players (**most desired challenge to overcome**)
		5) multiple game rouncs with counter