// DIVS 
const bodycanvas = document.getElementById('bodycanvas');
const bagBadge = document.getElementById('bagBadge');

// BUTTON
const gaVerderButton = document.getElementById('gaVerderButton');

// CART
let cart = [];


// ********** REFRESH CART **********
function checkCart() {
	// REFRESH LOCALSTORAGE
	localStorage.setItem('cart', JSON.stringify(cart));

	// GA VERDER BUTTON
	const gaVerderButton = document.getElementById('gaVerderButton');
	const emptyCart = document.getElementById('emptyCart');

	// CART PRICE
	let total = 0;

	// SHOPPING BAG NOTIFICATION

	// CLEAR CART
	bodycanvas.innerHTML = '';
    

	// ADD EVERY PRODUCT TO CART
	for (let i = 0; i < cart.length; i++) {
		bodycanvas.innerHTML += `
        <div  class="column justify-content-center border rounded-3" style="margin-bottom: 15px;">
          <div class="d-flex  mb-1">
            <h5 class="ps-2 pt-2 pb-2">${cart[i].name}</h5>
            <button id="deleteButton" onclick="deleteFromCart(${i})" class="btn btn-primary ms-auto me-4 mt-2" style="width: 40px; height: 40px; type="button"><i class="bi bi-trash3-fill "></i></button>
          </div>          
            <p class="mt-1 fw-light ps-2">€${cart[i].price}</p>
               <div class="d-flex justify-content-end mb-1">
                <p class="card-text me-5">x1</p>
                <p class="card-text me-3">€${cart[i].price}</p>
              </div>
              
        </div>

        `;

		total += cart[i].price;
	}

	// EMPTY CART
	if (bodycanvas.innerHTML == '') {
		gaVerderButton.classList.add('disabled');
		emptyCart.classList.remove('visually-hidden');
		bagBadge.classList.add('visually-hidden');
	} else {
		gaVerderButton.classList.remove('disabled');
		emptyCart.classList.add('visually-hidden');
		bagBadge.classList.remove('visually-hidden');
		bodycanvas.innerHTML += ` 
	<div class="card border bg-light" style="margin-bottom: 10px;">
        <div class="card-body text-start border-top-0 d-flex justify-content-end py-1 mt-2 mb-2">
            <div class="d-flex justify-content-between">
                <p class="border-top-0 mb-0 me-5 fw-bold">Total:</p>
                <p class="border-top-0 mb-0">€${total}</p>
            </div>
        </div>
    </div>

        `;
	}
}


// ********** ADD TO CART **********
// Wordt gebruikt in de html 
// eslint-disable-next-line no-unused-vars
function addToCart(name, price) {
	cart.push({ name: name, price: price });
	bagBadge.innerText = cart.length;
	checkCart();
}

// ********** DELETE PRODUCT FROM CART **********
// Wordt gebruikt in de html 
// eslint-disable-next-line no-unused-vars
function deleteFromCart(index) {
	cart.splice(index, 1);
	bagBadge.innerText = cart.length;
	checkCart();
}


// ********** GET CART FROM LOCALSTORAGE **********
document.addEventListener('DOMContentLoaded', function() {
	if (localStorage.getItem('cart') !== null) {
		cart = JSON.parse(localStorage.getItem('cart'));
		checkCart();
	}
});


// ********** GO TO GEGEVENS **********
gaVerderButton.addEventListener('click', () => {
	window.location.href = './gegevens.html';
});

// shoppingBag.innerHTML += ` <span class="badge bg-secondary text-primary ms-1">${cart.length}</span> `; 

