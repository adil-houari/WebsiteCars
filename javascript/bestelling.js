// CONSTS
const divOrders = document.getElementById('orders');
const divInfo = document.getElementById('formInfo');
const hour = document.getElementById('hour');
const totaalDiv = document.getElementById('totaalDiv');
const otherCommandsDiv = document.getElementById('otherCommandsDiv');


// BUTTONS
const continueShop = document.getElementById('continueShop');


let total = 0;


// WORDT GEBRUIKT IN LIJN 49
// eslint-disable-next-line no-unused-vars
function goToCommands(order) {
	window.location.href = `./bestelling.html?order=${order}`;
}

// ********** SHOW ORDER **********
function showOldOrders() {
	const orders = JSON.parse(localStorage.getItem('orders'));
	
    
	let orderItemsHTML = '';

	for (let i = 0; i < orders.length; i++) {
		// FULL ORDRER
		const order = orders[i];

		// DATE
		let date = new Date(order.my_info.date);
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		date = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;

		// GET TOTAL
		let totalPrice = 0;
		order.my_cart.forEach(car => {
			totalPrice += car.price;
		});

		orderItemsHTML += `
            <div class="order-item" onclick="goToCommands(${i + 1})">
                <p>${date}</p>
                <p>Commande ${i + 1}</p>
                <p>€${totalPrice}</p>	
            </div>
        `;
	}
		
    
	otherCommandsDiv.innerHTML = `
            <div class="card border bg-light" style="margin-bottom: 10px;">
                <div class="card-body text-start border-top-0 d-flex justify-content-between py-1 mt-2 mb-2">
                    <p class="border-top-0 mb-0 me-5 fw-bold">Your previous command(s):</p>
                </div>
                <div class="card-body text-start border-top-0 py-1 mt-2 mb-2">
                    ${orderItemsHTML}
                </div>
            </div>
        `;
}


// ********** CONTINUE SHOPPING **********
continueShop.addEventListener('click', () => {
	window.location.href = './home.html';
});


// ********** GET ORDERS **********
window.addEventListener('DOMContentLoaded', () => {
	const params = new URLSearchParams(window.location.search);
	const numberOfOrder = params.get('order');

	const orders = JSON.parse(localStorage.getItem('orders'));
	const order = orders[numberOfOrder - 1];

	const cart = order.my_cart;
	const form = order.my_info;
	const date = new Date(form.date);
	date.setDate(date.getDate() + 10);

	divOrders.innerHTML = '';
	divInfo.innerHTML = '';
        

	// ********** GET CART **********
	for (let i = 0; i < cart.length; i++) {
		divOrders.innerHTML += `  
        <div class="card border bg-light" style="margin-bottom: 10px;">
            <div class="card-body text-start border-top-0 d-flex justify-content-end py-1 mt-2 mb-2">
                <div class="d-flex justify-content-between">
                    <p class="border-top-0 mb-0 me-5">${cart[i].name}</p>
                    <p class="border-top-0 mb-0">€${cart[i].price}</p>
                </div>
            </div>
        </div>
            `;

		total += cart[i].price;
	}

	totaalDiv.innerHTML += `
	<div class="card border bg-light" style="margin-bottom: 10px;">
        <div class="card-body text-start border-top-0 d-flex justify-content-end py-1 mt-2 mb-2">
            <div class="d-flex justify-content-between">
                <p class="border-top-0 mb-0 me-5 fw-bold">Total:</p>
                <p class="border-top-0 mb-0">€${total}</p>
            </div>
        </div>
    </div>
     
     `;


	// ********** GET FORM **********
	divInfo.innerHTML += `
    <div class="card border bg-light" style="margin-bottom: 10px;">
    <div class="text-start border-top-0 d-flex justify-content-center py-1 mt-2 mb-2">
        <div class="d-flex flex-column yourInformation ms-5 ps-4">
            <h5 class="card-title pt-3 ps-2">Your information:</h5>
            <p class="border-top-0 mb-2 ps-2">First name: ${form.firstName}</p>
            <p class="border-top-0 mb-2 ps-2">Last name: ${form.lastName}</p>
            <p class="border-top-0 mb-2 ps-2">Email: ${form.email}</p>
            <p class="border-top-0 mb-2 ps-2">Tel: ${form.tel}</p>
        </div>
        <div class="d-flex flex-column yourAdress ms-auto me-5 pe-5">
            <h5 class="card-title pt-3 ps-2">Your address:</h5>
            <p class="border-top-0 mb-2 ps-2">Street name: ${form.streetName}</p>
            <p class="border-top-0 mb-2 ps-2">Street Nb. : ${form.streetNb}</p>
            <p class="border-top-0 mb-2 ps-2">Town/City: ${form.townCity}</p>
            <p class="border-top-0 mb-2 ps-2">Postal code: ${form.postalCode}</p>
        </div>
    </div>
</div>



                `;


	// ********** SHOW OLD ORDERS **********
	showOldOrders();


	// ********** GET HOUR **********
	hour.textContent = `Your order will be delivered on: ${date.toDateString()}`;
});
