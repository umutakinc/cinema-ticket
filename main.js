$(".item").click(function() {
    $(this).toggleClass("yellow");

    const selectedChairs = $(".chairs .item.yellow");
    const ticketPrice = 25;
    const total = selectedChairs.length * ticketPrice;

    $('#chairsLength').text(selectedChairs.length);
    $('#totalPrice').text(total);
});


  