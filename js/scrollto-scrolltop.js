/*SCROLLTO*/

$(".scrollto").on("click", function() {
    var page = $(this).attr("href");
    var speed = 750;
    $("html, body").animate( {
        scrollTop:
        $(page).offset().top
    }, speed);
    return false;
});


/*SCROLLTOP*/

$(window).scroll(function() {
    if($(this).scrollTop()>600) {
        $("#scrolltop").fadeIn();
    }
    else{
        $("#scrolltop").fadeOut();
    }
});

//RETOUR HAUT DE PAGE//

$("#scrolltop").on("click", function() {
   $("html, body").animate( {
       scrollTop:0
   }, 750);
    return false;
});

$(document).ready(function() {
    $(".burger").click(function() {
        $(this).toggleClass("burger-open");
        $("nav.menu").toggleClass("is-open")
    });
    $(".menu ul li a").click(function(){
       $(".burger").removeClass("burger-open");
        $(".menu").removeClass("is-open");
    });
});