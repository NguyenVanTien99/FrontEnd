
    $('#league').on('change',function(){
        if($('#league').val() === 'v1'){
            $('#clb option').each(function(){
                $(this).removeClass('d-none');
                if($(this).data('league') === 'v2'){
                    $(this).addClass('d-none');
                }
            })
        }else if($('#league').val() === 'v2'){
            $('#clb option').each(function(){
                $(this).removeClass('d-none');
                if($(this).data('league') === 'v1'){
                    $(this).addClass('d-none');
                }
            })
        }else{
            $('#clb option').each(function(){
                $(this).removeClass('d-none');
            }) 
        }
    })


let players = []


function render() { 
    let stringHtml = ''
    if(players.length > 0){
        $('#no-data').text("");
        $('#table').removeClass('d-none');
        for (let i = 0; i < players.length; i++) {
            stringHtml += '<tr>' 
            stringHtml += '<td>' + players[i].league  +'</td>'
            stringHtml += '<td>' + players[i].clb  +'</td>'
            stringHtml += '<td>' + players[i].name  +'</td>'        
            stringHtml += '<td class="text-right"><button class="btn btn-primary" onclick="deletee(' + i + ')">Xoá</button><button class="ml-2 btn btn-primary" onclick="update(' + i + ')" >Cập Nhật</button></td>'
            stringHtml += '</tr>' 
        }
        $('#players').html(stringHtml);
       
    }else{
        $('#table').addClass('d-none');
        $('#no-data').text("No data");
    }
    
 }

 function deletee(ele){
    players.splice(ele,1)
    render();
     
 }

 function update(ele){
    $('#league').val(players[ele].league);
    $('#clb').val(players[ele].clb);
    $('#player :text').val(players[ele].name);

    if($('#league').val() === 'v1'){
        $('#clb option').each(function(){
            $(this).removeClass('d-none');
            if($(this).data('league') === 'v2'){
                $(this).addClass('d-none');
            }
        })
    }else if($('#league').val() === 'v2'){
        $('#clb option').each(function(){
            $(this).removeClass('d-none');
            if($(this).data('league') === 'v1'){
                $(this).addClass('d-none');
            }
        })
    }else{
        $('#clb option').each(function(){
            $(this).removeClass('d-none');
        }) 
    }

    players.splice(ele,1)
    render();
}

function addPlayer() { 
    players.push({
        league : $('#league').val(),
        clb:  $('#clb').val(),
        name: $('#player :text').val(),
    })

    $('form').trigger('reset');

    $('#clb option').each(function(){
        $(this).removeClass('d-none');
    })

    render();
 }

$('#btn-sm').click(function (e) {   
    addPlayer()
});


render();


