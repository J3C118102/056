// document ready
(function ($) {

    $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
        if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
         $("html,body").stop();
        }
       })

    $('#1_nav').fadeIn('1000');

    if ($(window).width() < 768) {
        $('#carousel').css("padding-top",$('#navbar').height());
        console.log($('#navbar').height());
    }