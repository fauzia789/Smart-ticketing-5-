


function play(){
    hideelementById('ticket-part');
    showelementById('success-part');
  
    
}

function continueBuy(){
    hideelementById('success-part');
    showelementById('ticket-part');
}
 




const tickets = document.querySelectorAll('.current-ticket');
const selectTickets = document.getElementById('ticket-select');
const totalPriceDisplay = document.getElementById('total-price');
const seatDisplay = document.getElementById('seat'); 
const reservedDisplay = document.getElementById('reserved-seat'); 
let selectedTickets = 0;
let totalPrice = 0;
let seat = 0; 
let reservedSeat =40;
for (let index = 0; index < tickets.length; index++) {
    const ticket = tickets[index];

    ticket.addEventListener('click', function () {
        if (selectedTickets < 4) {
            const ticketText = ticket.innerText;

            const ticketContainer = document.createElement('div');
            ticketContainer.classList.add('ticket-container');

            const h1 = document.createElement('h1');
            h1.style.fontSize = '20px';
            h1.style.fontWeight = 'bold';
            h1.innerText = ticketText;

            const h2 = document.createElement('h1');
            h2.style.fontSize = '20px';
            h2.style.fontWeight = 'thin';
            h2.textContent = 'Economy';

            let ticketPrice = 550;

            const h3 = document.createElement('h1');
            h3.style.fontSize = '20px';
            h3.style.fontWeight = 'bold';
            h3.textContent = ticketPrice;

            ticketContainer.appendChild(h1);
            ticketContainer.appendChild(h2);
            ticketContainer.appendChild(h3);

            selectTickets.appendChild(ticketContainer);

            addBackgroundColor(ticket);

            selectedTickets++;

            // Update total price
            totalPrice += ticketPrice;

            // Display total price
            totalPriceDisplay.textContent = 'BDT ' + totalPrice;

            // Display reservedseat number
            seat++;
            seatDisplay.textContent =  seat;

            // Display seat number
            reservedSeat--;
            reservedDisplay.textContent =  reservedSeat;
        }
    });
}

const applyBtn = document.getElementById('apply');
applyBtn.addEventListener('click', function () {
    const input = document.getElementById('input-filed').value;
    const couponCode = input.split(' ').join('').toUpperCase();
    console.log(couponCode);

    if (totalPrice >= 200) {
        let discountPercentage = 0;
        if (couponCode === 'NEW15') {
            discountPercentage = 0.15;
        } else if (couponCode === 'COUPLE20') {
            discountPercentage = 0.2;
        } else {
            alert('Invalid Coupon');
            return; 
        }
        document.getElementById('input-filed').value="";
        const discountAmount = totalPrice * discountPercentage;
        totalPrice -= discountAmount;

        totalPriceDisplay.textContent = 'BDT ' + totalPrice;

        const discountElement = document.getElementById('discount');
        discountElement.innerText = 'BDT ' + discountAmount.toFixed(2);
    } else {
        alert('Total price should be at least 200 BDT for coupon application.');
    }
});

function addBackgroundColor(ticketElement) {
    ticketElement.classList.add('bg-primary-color');
}




