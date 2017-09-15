(function () {
	// Define restaurants
	var restaurants = {
		burger: {
			name: 'Burger',
			desc: 'The best burgers in town. We see you drooling already.'
		},
		pizza: {
			name: 'Pizza',
			desc: 'This Pizza will make your tongue slap your brain.'
		},
		fries: {
			name: 'Fries',
			desc: 'All day every day. You will never visit a fast food restaurant again'
		}
	};

	// Declare variablees
	var $modalTitle = $('.modal-title');
	var $modalBody = $('.modal-body');
	var $modal = $('#modal');
	var $carousel = $('.carousel');
	var reserved = false;

	// React to carousel item click
	$('.carousel-item').on('click', function (e) {
		var foodType = e.currentTarget.getAttribute('data-food');
		$modalTitle.text(restaurants[foodType].name);
		$modalBody.text(restaurants[foodType].desc);
		$modal.modal();
		$modal.on('shown.bs.modal', function () {
  			$carousel.carousel('pause');
		});
		$modal.on('hidden.bs.modal', function () {
  			$carousel.carousel('cycle');
  			reserved = false;
		});
	});

	// React to "reserve" button click
	$('.btn-success').on('click', function () {
		if (reserved) return;

		var alert = document.createElement('div');
		alert.classList.add('alert');
		alert.classList.add('alert-success');
		alert.setAttribute('role', 'alert');

		var strong = document.createElement('strong');
		strong.textContent = 'Done! We will be waiting on you today.';
		alert.appendChild(strong);

		$modalBody.prepend(alert);
		reserved = true;
	});

	// Activate "Reserve table" Popover
	$('.btn-success').popover({
	  trigger: 'hover'
	})
})();
