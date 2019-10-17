$(function(){
    $('#hide').click(function(){
        $('h1').delay(100);
        $('h1').fadeOut();
    });
    $('#show').click(function(){
        $('h1').delay(100);
        $('h1').fadeIn(500);
    });
    $('#red').click(function(){
        $('h1').css("color", "red");
        $('span')
            .css({color: 'red', padding: '2px', border: '2px solid red'})
            .fadeIn('fast')
            .text("Cor alterada para Vermelho!")
            .delay(1000)
            .fadeOut('fast');
    });
    $('#blue').click(function(){
        $('h1').css("color", "blue");
        $('span')
            .css({color: 'blue', padding: '2px', border: '2px solid blue'})
            .fadeIn('fast')
            .text("Cor alterada para Azul!")
            .delay(1000)
            .fadeOut(500);
    });
    $('#ch_background').click(function(){
        $('body').addClass('change_background');
    });
    $('#reset_background').click(function(){
        $('body').removeClass('change_background');
    });
});