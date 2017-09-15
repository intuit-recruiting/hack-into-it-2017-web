// Step 3:
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
