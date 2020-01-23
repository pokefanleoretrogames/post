$(document).ready(main);

var contador = 1;

function main() {
    $(".menu-bar").click(function () {
        if (contador == 1) {
            $("nav").animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $("nav").animate({
                left: '-100%'
            });
        }
    });
}

// MOSTRAMOS Y OCULTAMOS SUBMENUS

$(".sub-menu").click(function () {
    $(this).children(".menu-hijo").slideToggle();
});

$(".menu-hijo").click(function (p) {
    p.stopPropagation();
})

// MOSTRAMOS BUSQUEDA DE MOVIL 


$(".buscar-bar").click(function () {
    $(this).siblings(".gl-movil").slideToggle("fast");
});

// SCRIPTS DE SLIDE

var swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// script de comentarios

window.fbAsyncInit = function() {
    FB.init({
      appId            : 'your-app-id',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v5.0'
    });
  };


$(document).ready(function(){
    $(".ir-arriba").click(function(){
        $("body, html").animate({
            scrollTop: "0px"
        }, 500);
    });
    
    $(window).scroll(function(){
        if( $(this).scrollTop() > 0){
                $(".ir-arriba").slideDown(1000);
           } else {
                $(".ir-arriba").slideUp(300);
           }
    });
    
});
























