// TicketCount eventListener
function handleTicket(id, isIncrease){
    const count = document.getElementById(id).value;
    const countNumber = parseInt(count);
    let updateCount = 0;
    if(countNumber>0 && isIncrease == false){
        updateCount = countNumber - 1;
    }
    if(isIncrease == true){
        updateCount = countNumber + 1;
    }  
    document.getElementById(id).value = updateCount;
    calculation();
}


// calculating total 
function calculation(){
    firstClassTotal = ticketCount('firstCount');
    economyClassTotal = ticketCount('economyCount');
    const subTotal = firstClassTotal*150 + economyClassTotal*100;
    document.getElementById('subTotal').innerText = subTotal;
    const tax = subTotal*.1;
    const updateTax = Math.round(tax);
    document.getElementById('tax').innerText = updateTax;
    document.getElementById('total').innerText = subTotal + updateTax;
}

// ticketCount
function ticketCount(id){
    const totalNumber = document.getElementById(id).value;
    const total = parseInt(totalNumber);
    return total;
}
// checkout function
function checkout(){
    alert('Booking done');
    var cart = document.getElementById('booking-section');
    cart.style.display = 'none';
    var checkoutDone = document.getElementById('thanks-section');
    checkoutDone.style.display = 'block';
}
