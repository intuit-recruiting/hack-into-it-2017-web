(function () {
	// Define restaurants
	var restaurants = {
		burger: {
			name: 'Burger',
			desc: 'The best burgers in town. We see you drooling already.'
		},
		pizza: {
			name: 'Pizza',
			desc: 'This pizza will make your tongue slap your brain.'
		},
		fries: {
			name: 'Fries',
			desc: 'All day err day. You will never visit another restaurant ever again.'
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


	$('#gif').on("click", function() {
		var term = $("#search-term").val();
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			// Code inside here is executed each time the progress of the HTTP request advances.

			//If the HTTP request has completed and the HTTP response code is 200
			if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
					var response = JSON.parse(this.responseText); // Retrieve the response text
					document.getElementById("gifDisplay").src = response.data[0].images.original.url;
			};
		};
		xhr.open("GET", `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=24lZVNYJMtBGnEI4jd5Yt09JzUv4Nmrx&limit=5`);
		xhr.send();
	})

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
