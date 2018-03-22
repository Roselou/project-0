console.log("Yo")

$(document).ready(function(){
	// var $('.purple').on('keydown', function(move){
	// 	$('.purple').animate({
	$(document).on('keydown', (event) => {

		console.log(event.key)
		if (event.key === 'ArrowRight') {

			// handles the purple animation
			if ($('.purple').width()<925){
			   $('.purple').animate({
			  	width: '+=50px'
			   }, 100);
		    }
		
		    if ($('.purple').width()>= 925){
		    	alert("Purple won!");
		  	$('#light-beam').animate({
				width: '+=250px',
				height: "20px"
			}, 100);
			
		}
	    }

		if (event.key === 'z') {
		// handles green
			$('.green').animate({
			  	width: '+=50px'
			}, 100);

			if ($('.green').width()>= 925){
				 alert("Green won!");
			  	$('#light-beam').animate({
				width: '+=250px',
				height: '20px'
			    }, 100);
			} 
			
		}
	  // return
  
		if ($('#light-beam').on('click', function(){
		$(this).animate({
			width: '+=200px',
			height: "30px"
		}, 100);
		 


	    })
		); 
    });

	$('#reset').on('click', function(){
		location.reload();
	});


//DON'T TOUCH	
})