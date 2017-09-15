// Step 4:
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
