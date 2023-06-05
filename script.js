var typed = new Typed('#name', {
	strings: ['Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar','Karan', 'Kumar'],
	typeSpeed: 90,
});


const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el1 = document.querySelector( '.counter1' )
const el2 = document.querySelector( '.counter2' )
const el3 = document.querySelector( '.counter3' )
const el4 = document.querySelector( '.counter4' )

IO.observe( el1 )
IO.observe( el2 )
IO.observe( el3 )
IO.observe( el4 )


