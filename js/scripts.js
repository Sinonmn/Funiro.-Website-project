// Custom scripts



function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	const overlay = document.querySelector('.overlay')

	burger.addEventListener('click', () => {
		if (!menu.classList.contains('active')) {
			menu.classList.add('active')
			burger.classList.add('active-burger')
			body.classList.add('locked')
			overlay.classList.add('active')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
			overlay.classList.remove('active')
		}
	})

	overlay.addEventListener('click', () => {
		menu.classList.remove('active')
		burger.classList.remove('active-burger')
		body.classList.remove('locked')
		overlay.classList.remove('active')
	})

	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
			overlay.classList.remove('active')
		}
	})
}
burgerMenu()

// Fixed nav on scroll
function fixedNav() {
	const nav = document.querySelector('nav')
	const breakpoint = 1

	if (window.scrollY >= breakpoint) {
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav)

// Arrow tabs dropdown
document.addEventListener('DOMContentLoaded', function () {
	const arrows = document.querySelectorAll('.menu__arrow')
	const links = document.querySelectorAll('.menu__item-link')
	const menu = document.querySelector('.menu')

	arrows.forEach(arrow => {
		arrow.addEventListener('click', function (event) {
			event.preventDefault()
			const menuItem = this.closest('.menu__item')
			toggleDropdown(menuItem)
		})
	})

	links.forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault()
			const menuItem = this.closest('.menu__item')
			toggleDropdown(menuItem)
		})
	})

	function toggleDropdown(currentItem) {
		document.querySelectorAll('.menu__item.is-active').forEach(item => {
			if (item !== currentItem) {
				item.classList.remove('is-active')
			}
		})

		currentItem.classList.toggle('is-active')
	}


	if (window.innerWidth < 1339.99 && menu) {
		menu.addEventListener('click', function (event) {
			const activeDropdown = document.querySelector('.menu__item.is-active')

			if (menu.classList.contains('active') &&
				activeDropdown &&
				event.target === menu) {

				menu.classList.add('touch')
				activeDropdown.classList.remove('is-active')
			}
		})
	}


	const heroSlider = new Splide('#heroSlider', {
		type: 'loop',
		perPage: 1,
		perMove: 1,
		focus: 'center',
		gap: '20px',
		autoplay: true,
		interval: 10000,
		pauseOnHover: true,
		pagination: true,
		arrows: true,
		

	});

	heroSlider.mount();
});
//product cards
const productCards = document.querySelectorAll('.item-products');

productCards.forEach(card => {
	const actions = card.querySelector('.item-products__actions');
	let isMobileDevice = false;

// proove mobile
	function checkMobile() {
		isMobileDevice = window.innerWidth <= 768;
	}


	checkMobile();


	window.addEventListener('resize', checkMobile);


	card.addEventListener('mouseenter', function () {
		if (!isMobileDevice) {
			actions.classList.add('active');
			card.classList.add('transparency');
		}
	});

	card.addEventListener('mouseleave', function () {
		if (!isMobileDevice) {
			actions.classList.remove('active');
			card.classList.remove('transparency');
		}
	});


	card.addEventListener('touchstart', function (event) {
		if (isMobileDevice) {
	
			if (!event.target.closest('.item-products__btn')) {
				event.preventDefault();
				actions.classList.toggle('active');
				card.classList.toggle('transparency');
			}
		}
	});


	card.addEventListener('click', function (event) {
	
		if (!isMobileDevice &&
			!event.target.closest('.item-products__btn')) {
			actions.classList.toggle('active');
			card.classList.toggle('transparency');
		}
	});
});


// inspirations slider


document.addEventListener('DOMContentLoaded', function () {
	const slider = new Splide('#tipsSlider', {
		type: 'slide',
		rewind: true, 
		perPage: 3,
		gap: '20px',
		padding: '10px',
		pagination: true,
		focus: 0,
		omitEnd: true,
		autoplay: true,
		interval: 10000,


		breakpoints: {
			1200: {
				perPage: 2,
				padding: '10px'
			},
			992: {
				perPage: 1,
				gap: '15px',
				padding: '5px'
			},
			768: {
				perPage: 1,
				gap: '10px',
				padding: '0'
			}
		}
	}).mount();

});

	document.addEventListener('DOMContentLoaded', function () {
    const cartButtons = document.querySelectorAll('.item-products__btn-cart');
	const cartCounter = document.getElementById('cartCounter');


	function updateCounter() {
        const count = parseInt(localStorage.getItem('cartCount') || '0');
	cartCounter.textContent = count;

 
        if (count > 0) {
		cartCounter.classList.add('active');
        } else {
		cartCounter.classList.remove('active');
        }
    }
	 
	 //function reset cart if needed

		/*function resetCart() {
			localStorage.setItem('cartCount', '0');
			updateCounter();
		} */  


    cartButtons.forEach(button => {
		button.addEventListener('click', function (e) {
			e.preventDefault();

		
			let currentCount = parseInt(localStorage.getItem('cartCount') || '0');

			
			currentCount++;

			
			localStorage.setItem('cartCount', currentCount);

		
			updateCounter();

			
			button.textContent = 'Added!';
			button.disabled = true;
			setTimeout(() => {
				button.textContent = 'Add to cart';
				button.disabled = false;
			}, 800);
		});
    });
	updateCounter();
});
