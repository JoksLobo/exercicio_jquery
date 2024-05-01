$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideToggle();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const insiraAtividadeEData = $('#novaTarefa').val();
        const novaAtividade = $(`<li>${insiraAtividadeEData}</li>`);
        $(novaAtividade).appendTo('ul');
        $('#novaTarefa').val('');
        
        })

        $(document).ready(function() {
            $('ul').on('click', 'li', function() {
                $(this).toggleClass('completed');
            });
        });
})