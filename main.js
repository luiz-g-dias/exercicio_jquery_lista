
$('form').on('submit', function(e){
    e.preventDefault();

    const adicionartarefa = $('.caixadetexto').val();
    const novatarefa = $(`<li></li>`);
    $(`<p id="${adicionartarefa}">${adicionartarefa}</p>`).appendTo(novatarefa);
        $(`<li> ${adicionartarefa} </li>`)
            $(novatarefa).appendTo(`ul`);
                $(`.caixadetexto`).val('')
                
                
                $('p').click(function(){
                $(`#${adicionartarefa}`).css("text-decoration", " line-through");
                });
            })


