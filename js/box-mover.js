//api.jquery.com <-----For all jQuery codes


$(document).ready(function(){

$('#apply').click(function (ev) {
	
		ev.preventDefault();
		//console.log('Hello');
		//console.log ($('#color').val());
		//$('.toggler').css($('#effects').val(), $('#color').val());
		
		if($('#effects').val() == 'border-color') {
			$('#borderradius').css('border-color', $('#color').val());
		}
		else {
			$('.toggler').css($('#effects').val(), $('#color').val());	
		}
		
	});
});



	
	
	
	/*
		// run the currently selected effect
		function runEffect() {
			// get effect type from 
			var selectedEffect = $( "#effectTypes" ).val();
			
			// most effect types need no options passed by default
			var options = {};
			// some effects have required parameters
			if ( selectedEffect === "scale" ) {
				options = { percent: 0 };
			} else if ( selectedEffect === "transfer" ) {
				options = { to: "#button", className: "ui-effects-transfer" };
			} else if ( selectedEffect === "size" ) {
				options = { to: { width: 200, height: 60 } };
			}

			// run the effect
			$( "#effect" ).effect( selectedEffect, options, 500, callback );
		};

		// callback function to bring a hidden box back
		function callback() {
			setTimeout(function() {
				$( "#effect" ).removeAttr( "style" ).hide().fadeIn();
			}, 1000 );
		};

		// set effect from select menu value
		$( "#button" ).click(function() {
			runEffect();
			return false;
		});
	});
*/






