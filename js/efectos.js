$(document).ready(function(){
//efecto menu we //
$('.menu a').each(function(index, elemneto){
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
var acercaDe = $('#acerca-de').offset().top,
     Menu = $('#platillos').offset().top,
     Galeria = $('#Galeria').offset().top,
     Ubicacion= $('#Ubicacion').offset().top;
$('#btn-acerca-de').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:acercaDe -100
         }, 500);
    });
    $('#btn-Menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:Menu
             }, 500);
        });
        $('#btn-Galeria').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop:Galeria
                 }, 500);
            });
            $('#btn-Ubicacion').on('click', function(e){
                e.preventDefault();
                $('html, body').animate({
                    scrollTop:Ubicacion
                     }, 500);
                });
});