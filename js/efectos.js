$(document).ready(function(){
//efecto menu we //
$('.menu a').each(function(index, elemento){
    $(this).css({
        'top':'-200px'
        });
        $(this).animate({ top:'0'
        }, 2000 + (index * 500));
    });

    if($(window).width() > 800){
        $('header .texto').css({
            opacity: 0,
            marginTop:0
        });
        $('header .texto').animate({
            opacity: 1,
            marginTop:'-52px'
        },1500);
    }
// Scroll elementos Menores
var Ubicacion= $('#Ubicacion').offset().top;
$('#btn-Ubicacion').on('click', function(e){
    e.preventDefault();
        $('html, body').animate({
        scrollTop:Ubicacion
        }, 500);
    });
});