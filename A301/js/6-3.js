$(".btn").on("click", function () {
    let value = $(this).data("filter");
    if (value === "all") {
      $(".store-product").css("display", "block");
    } else {
      $(".store-product")
        .not("." + value)
        .css("display", "none");
      $(".store-product")
        .filter("." + value)
        .css("display", "block");
    }
  });
  

  
  $('#search').on('keyup', function(){
      let input = $(this).val().toLowerCase();

      $('.card-title').each(function(){
            let title = $(this).text();
            if(title.toLowerCase().indexOf(input) != -1){
                $(this).parent().parent().parent().parent().parent().css('display','block')
            }else{
                $(this).parent().parent().parent().parent().parent().css('display','none')
            }

      })
  
  })