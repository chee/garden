(function () {
	'use strict';
	var stems = document.querySelectorAll( '.stem' );
	var flowers = document.querySelectorAll( '.flower' );
	var sun = document.querySelector( '.sun' );
	var colours = [
		'deeppink',
		'black',
		'purple',
		'brown',
		'skyblue',
		'pink',
		'cornflowerblue',
		'orange',
		'darkseagreen',
		'gold',
		'maroon',
		'midnightblue',
		'yellow',
		'#003f07'
	];
	var currentColour = 0;

	function toggleClass( element, className ) {
		if ( element.classList.contains( className ) ) {
			element.classList.remove( className );
		} else {
			element.classList.add( className );
		}
	}

	function cycleColour( direction ) {
		direction = direction || '+';

		if ( direction === '-' ) {
			currentColour += 1;
		} else {
			currentColour -= 1;
		}

		if ( currentColour === -1 ) {
			currentColour = colours.length -1;
		} else if ( currentColour === colours.length ) {
			currentColour = 0;
		}

		return currentColour;
	}

	sun.addEventListener( 'click', function () {
		sun.classList.add( 'spin' );
	});

	sun.addEventListener( 'transitionend', function () {
		sun.classList.remove( 'spin' );
	});

	window.addEventListener( 'keyup', function ( event ) {
		var colour;
		var key = event.which;
		var keys = {
			z: 90,
			x: 88,
			c: 67,
			left: 37,
			right: 39
		};
		

		if ( key === keys.z ) {
			toggleClass( stems[ 0 ], 'alive' );
		} else if ( key === keys.x ) {
			toggleClass( stems[ 1 ], 'alive' );
		} else if ( key === keys.c ) {
			toggleClass( stems[ 2 ], 'alive' );
		} else if ( key === keys.left ) {
			colour = cycleColour( '+' );
			[].forEach.call( flowers, function ( flower ) {
				flower.style.backgroundColor = colours[ colour ];
			});
		} else if ( key === keys.right ) {
			colour = cycleColour( '-' );
			[].forEach.call( flowers, function ( flower ) {
				flower.style.backgroundColor = colours[ colour ];
			});
		}
	});

})();
