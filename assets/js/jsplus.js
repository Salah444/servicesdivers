if ($('.testimonials-style-two-carousel').length) {
    $('.testimonials-style-two-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],            
        dots: true,
        autoWidth: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
};