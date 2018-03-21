console.log("Yo")

$(document).ready(function(){
	// var $('.purple').on('keydown', function(move){
	// 	$('.purple').animate({
document.addEventListener('keydown', (event) => {

console.log(event.key)

if (event.key === 'ArrowRight') {

// handles the purple animation
 $('.purple').animate({
  	width: '+=10px'
  	});
} if ($('.purple').width()>= 300){
	alert ("Purple won!")
}

if (event.key === 'z') {

// handles green
  $('.green').animate({
  	width: '+=10px'
  	});
  if ($('.green').width()>= 300)
  	alert('Green won')
}
});



$('button#reset').on('click', function() {
  $('.purple').empty();
  $('.green').empty();

});







//DON'T TOUCH	
})