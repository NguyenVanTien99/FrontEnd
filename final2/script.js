$('#gb :text').blur(function () { 
    $(this).val(parseInt($(this).val()).toLocaleString());
})

$('.btn-add').click(function () { 
    console.log( isNaN($('#gb :text').val() )); 
});