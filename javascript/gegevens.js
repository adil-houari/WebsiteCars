// BUTTON
const btnPay = document.getElementById('btnPay');
const btnClear = document.getElementById('clearAll');


btnPay.addEventListener('click', function(e) {
	// GETTING THE VALUES FROM THE INPUTS
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const email = document.getElementById('email').value;
	const tel = document.getElementById('tel').value;
	const streetName = document.getElementById('streetName').value;
	const streetNb = document.getElementById('streetNb').value;
	const townCity = document.getElementById('townCity').value;
	const postalCode = document.getElementById('postalCode').value;
	const cardName = document.getElementById('cardName').value;
	const cardNumber = document.getElementById('cardNumber').value;

	// VALIDATION
	if (firstName === '') {
		e.preventDefault();
		alert('Please enter your first name');
	} 
	else if (lastName === '') {
		e.preventDefault();
		alert('Please enter your last name');
	} else if (email === '' || !email.includes('@')) {
		e.preventDefault();
		alert('Please enter a correct email');
	} else if (tel === '') {
		e.preventDefault();
		alert('Please enter your phone number');
	} else if (streetName === '') {
		e.preventDefault();
		alert('Please enter your street name');
	} else if (streetNb === '') {
		e.preventDefault();
		alert('Please enter your street number');
	} else if (townCity === '') {
		e.preventDefault();
		alert('Please enter your town/city');
	} else if (postalCode === '') {
		e.preventDefault();
		alert('Please enter your postal code');
	} else if (cardName === '') {
		e.preventDefault();
		alert('Please enter your card name');
	} else if (cardNumber === '' || cardNumber.length < 16) {
		e.preventDefault();
		alert('Please enter a correct card number');
	}
	else {
		const form = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			tel: tel,
			streetName: streetName,
			streetNb: streetNb,
			townCity: townCity,
			postalCode: postalCode,
			cardName: cardName,
			cardNumber: cardNumber,
			date: new Date()
		};

            
		// SAVE FORM DATA TO LOCALSTORAGE
		localStorage.setItem('form', JSON.stringify(form));


		// ADD CURRENT CART & FORMS TO ORDERS
		const my_info = form;
		const my_cart = JSON.parse(localStorage.getItem('cart'));
		const my_order = { my_info, my_cart };


		// ADD CURRENT ORDER TO ORDERS
		if (localStorage.getItem('orders')) {
			const orders = JSON.parse(localStorage.getItem('orders'));
			orders.push(my_order);
			localStorage.setItem('orders', JSON.stringify(orders));
		} else {
			localStorage.setItem('orders', JSON.stringify([my_order]));
		}

		// REMOVE CART
		localStorage.removeItem('cart');

		// GET NUMBER OF CURRENT ORDER
		const orders = JSON.parse(localStorage.getItem('orders'));
		const numberOfOrders = orders.length;

		// REDIRECT TO BESTELLING
		const query = new URLSearchParams({ order : numberOfOrders });
		window.location.href = './bestelling.html?' + query;
	}
});


// RETRIEVE FORM DATA FROM LOCALSTORAGE
window.addEventListener('DOMContentLoaded', () => {
	// Retrieve form data from localStorage
	const savedForm = JSON.parse(localStorage.getItem('form'));

	
	if (savedForm) {
		document.getElementById('firstName').value = savedForm.firstName;
		document.getElementById('lastName').value = savedForm.lastName;
		document.getElementById('email').value = savedForm.email;
		document.getElementById('tel').value = savedForm.tel;
		document.getElementById('streetName').value = savedForm.streetName;
		document.getElementById('streetNb').value = savedForm.streetNb;
		document.getElementById('townCity').value = savedForm.townCity;
		document.getElementById('postalCode').value = savedForm.postalCode;
		document.getElementById('cardName').value = savedForm.cardName;
		document.getElementById('cardNumber').value = savedForm.cardNumber;
	}
});


// CLEAR FORM AND LOCAL STORAGE
btnClear.addEventListener('click', function() {
	// CLEAR FORM
	document.getElementById('firstName').value = '';
	document.getElementById('lastName').value = '';
	document.getElementById('email').value = '';
	document.getElementById('tel').value = '';
	document.getElementById('streetName').value = '';
	document.getElementById('streetNb').value = '';
	document.getElementById('townCity').value = '';
	document.getElementById('postalCode').value = '';
	document.getElementById('cardName').value = '';
	document.getElementById('cardNumber').value = '';

	// CLEAR LOCAL STORAGE
	localStorage.removeItem('form');
});

