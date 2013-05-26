(function () {
	'use strict';
	var stems = document.querySelectorAll( '.stem' );

	function toggleClass( element, className ) {
		if ( element.classList.contains( className ) ) {
			element.classList.remove( className );
		} else {
			element.classList.add( className );
		}
	}

	window.addEventListener( 'keyup', function ( event ) {
		var key = event.which;

		if ( key === 90 ) {
			toggleClass( stems[ 0 ], 'alive' );
		} else if ( key === 88 ) {
			toggleClass( stems[ 1 ], 'alive' );
		} else if ( key === 67 ) {
			toggleClass( stems[ 2 ], 'alive' );
		}
	});

})();
