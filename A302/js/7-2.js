$("#form-checkout").validate({

    rules: {
        "first-name": {
            required: true,
        },
    },
    messages: {
        "first-name": "Bắt buộc nhập username"
    },
});


function isString(e) {
    let regex = /^[a-zA-Z]+$/

    console.log("asdasd");
    
    if(regex.test((e.val())) === false){
        console.log("123");
    }
}

$("#first-name").on("keyup", function () {
    isString($(this));
});
