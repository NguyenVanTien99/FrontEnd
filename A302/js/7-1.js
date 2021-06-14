

$(document).ready(function(){
   update_amount();
    $('.quantity, .price ').on('keyup keypress blur change', function(e){
        update_amount();
    });
});    

function update_amount(){
    var sum = 0;
    $('#product-table > tbody > tr').each(function(){
        let quantity = $(this).find('.quantity').val();
        let price = $(this).find('.price').val();
        let amount =  quantity * price;
        sum += amount
        $(this).find('.amount').text('' + amount);
        
    })

    $('.total').text(sum);
}


$(".plus").click(function() {
    let $n = $(this).parent(".button-container").find(".quantity");

    $n.val(Number($n.val()) + 1);

    update_amount();
})


$(".minus").click(function() {
    let $n = $(this).parent(".button-container").find(".quantity");

    $n.val(Number($n.val()) - 1);

    console.log($n);

    if($n.val() < 0){
        alert("Quantity cannot be negative");
        $n.val(0);
    }

    update_amount();
})