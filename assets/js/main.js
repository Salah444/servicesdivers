jQuery(function($){
    "use strict";

    var SLZ = window.SLZ || {};


    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    SLZ.mainFunction = function(){

        // WOW-JS 
        new WOW().init();

        // slider banner home 1
        $('.slide-banner-1').slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });

        // Show image-gif load for btn load more
        $(".btn-loadmore").on("click", function(){
            $(this).addClass("loading");
            setTimeout(function(){
                $(".btn-loadmore").removeClass("loading");
            }, 3000);
        });

        // show video for block 1, 2
        if ($(".video-embed").length) {
            var gurl = $(".video-embed")[0].src;
            $(".btn-play").on('click', function(event) {
                $(this).parent().find(".video-embed").addClass('show-video');
                $(this).parent().find(".btn-close").addClass('show-video');
                $(this).parent().find(".video-embed")[0].src += "&autoplay=1";
                event.preventDefault();
            });

            $(".btn-close").on('click', function(event) {
                 $(this).parent().find(".video-embed")[0].src = gurl;
                 $(this).parent().find(".video-embed").removeClass('show-video');
                 $(this).parent().find(".btn-close").removeClass('show-video');
            });
        }

        // show gallery images for block 1, 2
        $(".block-gallery-images .gallery-images").slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 300,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        // slider list block - 3 block
        $(".slide-block.column-3").slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        // slider list block - 4 block
        $(".slide-block.column-4").slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        // slider list testimonial-1
        $(".list-testimonial-1").slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: false,
            speed: 300,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        });

        // slider list testimonial-2
        $(".list-testimonial-2").slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            speed: 300,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        });

        // slider list testimonial-3
        $(".list-testimonial-3").slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            speed: 300,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        });

        // slider project
        $(".slider-syncing-wrapper").each(function(){
            $(this).find('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                fade: true,
                asNavFor: $(this).find('.slider-nav'),
                responsive: [
                    {
                        breakpoint: 770,
                        settings: {
                            draggable: false
                        }
                    }
                ]
            });
            $(this).find('.slider-nav').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                asNavFor: $(this).find('.slider-for'),
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 770,
                        settings: {
                            draggable: false
                        }
                    },
                    {
                        breakpoint: 570,
                        settings: {
                            raggable: false,
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 380,
                        settings: {
                            raggable: false,
                            slidesToShow: 2,
                        }
                    }
                ]
            });
        });

        // slider vertical 
        $('.slider-vertical-wrapper').each(function(){
            $(this).find('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                vertical: true,
                verticalSwiping: true,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            verticalSwiping: false,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            
                            verticalSwiping: false,
                        }
                    }
                ],
                asNavFor: $(this).find('.slider-nav')
                
            });
            $(this).find('.slider-nav').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: true,
                asNavFor: $(this).find('.slider-for'),
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            arrows: false,
                            vertical: false,
                            slidesToShow: 2,
                            autoplay: true,
                            autoplaySpeed: 4000,
                        }
                    },
                    {
                        breakpoint: 415,
                        settings: {
                            arrows: false,
                            vertical: false,
                            slidesToShow: 1,
                            autoplay: true,
                            autoplaySpeed: 4000,
                        }
                    }
                ]
            });
        });

        // slider list project
        $(".list-project").slick({
            dots: false,
            arrows: true,
            infinite: true,
            draggable: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 700,
        });

        // slider logo
        $(".list-logo").slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 415,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
        // slider logo
        $(".list-logo-plumbing").slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 415,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });

        // slider certifications
        $(".list-certifications").slick({
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        // slider gallery image nested
        setTimeout(function(){
        }, 3000);
        $(".gallery-images-nested").slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        });

        // slider block service, package
        $(".list-block-service").slick({
            dots: false,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 426,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                }
            ]
        });

        // Isotop
        if($('.gallery-image-grid').length) {
            $('.gallery-image-grid').each(function(){
                var $grid = $(this).isotope({
                    itemSelector: '.grid-item',
                    layoutMode: 'masonry',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.grid-item'
                    }
                });
                // filter functions
                var filterFns = {
                    // show if number is greater than 50
                    numberGreaterThan50: function () {
                        var number = $(this).find('.number').text();
                        return parseInt(number, 10) > 50;
                    },
                    // show if name ends with -ium
                    ium: function () {
                        var name = $(this).find('.name').text();
                        return name.match(/ium$/);
                    }
                };
                // bind filter button click
                $(this).parent().find('.tab-filter').on('click', '.tab', function () {
                    var filterValue = $(this).attr('data-filter');
                    // use filterFn if matches value
                    filterValue = filterFns[filterValue] || filterValue;
                    $grid.isotope({filter: filterValue});
                });
                // change is-checked class on buttons
                $(this).parent().find('.tab-filter').each(function (i, buttonGroup) {
                    var $buttonGroup = $(buttonGroup);
                    $buttonGroup.on('click', '.tab', function () {
                        $buttonGroup.find('.active').removeClass('active');
                        $(this).addClass('active');
                    });
                });
                // re-isotop when change tab
                if(('.tablist-homepage-1').length) {
                    $(this).parents('.image-gallery').find('.tablist-homepage-1 a[data-toggle="tab"]').on('shown.bs.tab', function(e){
                        $grid.isotope();
                    });
                }
            });
        }

        // Count number
        if($(".count-number").length) {
            $('.count-number').appear(function(){
                setTimeout(function(){
                    $('.count-number .number').countTo();
                },300);
            });
        }

        // Fancybox
        if($('.fancybox-thumb').length) {
            $(".fancybox-thumb").fancybox({
                prevEffect  : 'none',
                nextEffect  : 'none',
                helpers : {
                    overlay: {
                      locked: false
                    },
                    thumbs  : {
                        width   : 60,
                        height  : 60,
                    }
                }
            });
            if( $(window).width() > 600 ) {
                $.fancybox.helpers.thumbs.onUpdate = function( opts, obj ){
                    if (this.list) {
                        var center = Math.floor($(window).width() * 0.5 - (obj.group.length / 2 * this.width + this.width * 0.5));
                        this.list.css('left', center);
                    }
                };
            }
        }

        // Backtop
        if ($('#back-top').length) {
            var scrollTrigger = 100; // px
            var backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-top .link').addClass('show');
                } else {
                    $('#back-top .link').removeClass('show');
                }
            };
            backToTop();
            $(window).on('scroll', function() {
                backToTop();
            });
            $('#back-top .link').on('click', function(e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }

    };

    /*=======================================
    =           END MAIN FUNCTION           =
    =======================================*/


    /*=======================================
    =            HEADER & FOOTER            =
    =======================================*/
    SLZ.headerFunction = function() {

        // Show - hide box search on menu
        $('.button-search').on('click', function () {
            $(this).toggleClass('active');
            $('.nav-search').toggleClass('hide');
            $('.nav-search input').focus();
            $('.header-wrapper.searchbar-full .nav-wrapper').toggleClass('addHeight');
        });

        //hide box seach when click outside
        $('body').on('click', function (event) {
            if ($('.button-search').has(event.target).length === 0 && !$('.button-search').is(event.target) && $('.nav-search').has(event.target).length === 0 && !$('.nav-search').is(event.target)) {
                if ($('.nav-search').hasClass('hide') === false) {
                    $('.nav-search').toggleClass('hide');
                    $('.button-search').toggleClass('active');
                    $('.header-wrapper.searchbar-full .nav-wrapper').toggleClass('addHeight');
                }
            }
        });

        // Menu fixded
        if ($('.header-main').length) {
            var header_position = $('.header-main').offset();
            var window_height = $(window).height();
            $(window).on('scroll load', function (event) {
                var st = $(this).scrollTop();
                if (st > header_position.top) {
                    $('header .header-main').addClass("header-fixed");
                }
                else {
                     $('header .header-main').removeClass("header-fixed");
                }
                if(st == 0) {
                    $('header .header-main').removeClass("header-fixed");
                }
            });
        }
        

        // Scroll show/hide menu on mobile
        var lastScroll = 100;
        if ($(window).width() < 768) {
            $(window).on('scroll load', function (event) {
                var st = $(this).scrollTop();
                if (st > lastScroll) {
                    $('header .header-main').addClass("hidden-menu");
                }
                else {
                     $('header .header-main').removeClass("hidden-menu");
                }
                lastScroll = st;
                if(st == 0) {
                    $('header .header-main').removeClass("hidden-menu");
                }
            });
        }

        // hover tab on menu
        // var setTimeoutTab;
        // $(".mega-menu-tablist li a").hover(function(e) {
        //     var tabhover = $(this);
        //     setTimeoutTab = setTimeout(function(){
        //         tabhover.tab('show');
        //     },500);
        // }, function(){
        //     clearTimeout(setTimeoutTab);
        // });

        // hamburger menu click
        $('.hamburger-menu').on('click', function(e) {
            var hamburger = $(this);
            setTimeout(function(){
                $(hamburger).toggleClass('nav-open');
            },500);
            $(".body-wrapper").toggleClass('mobile-menu-open');
        });

        // show hide dropdown menu
        $('.menu-mobile-wrapper .dropdown>a').on('click', function(){
            if ($(this).closest('.dropdown').hasClass('mb-dropdown-open') === true) {
                $(this).closest('.dropdown').removeClass('mb-dropdown-open');
            }
            else {
                //$('.menu-mobile-wrapper .dropdown').removeClass('mb-dropdown-open');
                $(this).closest('.dropdown').addClass('mb-dropdown-open');
            }
        });
    };

    /*=======================================
    =         END HEADER & FOOTER           =
    =======================================*/

    /*====================================
    =            LOADING PAGE            =
    ====================================*/
    
    SLZ.loading = function() {
        if($('#loading-page').length) {
            $('.wrapper-content').addClass('loaded');
            setTimeout(function(){
                $('#loading-page').addClass('loaded');
            }, 1000);
        }
    };
    
    /*=====  End of LOADING PAGE  ======*/

    /*=========================================
    =            CALCULATE SPACING            =
    =========================================*/
    
        SLZ.calcSpacing = function() {
            // Padding banner 1 index
            if($(".header-absolute").length) {
                setTimeout( function(){
                    var headerHeight = $(".header-absolute").height();
                    //if($(window).width() > 767) {
                    $(".slide-banner-1-item .wrapper-item-content .content").css("padding-top", headerHeight);
                    //}
                }, 300);
            }

            // Padding header Homepage Cleaning
            if ($(".header-cleaning").length) {
                setTimeout( function(){
                    if($(window).width() > 767) {
                        var topbarHeight = $(".header-cleaning .header-topbar")[0].clientHeight;
                        var headerHeight = $(".header-cleaning .header-main").height();
                        $(".homepage-cleaning-banner .slide-banner-1-item-wrapper").css("padding-top", topbarHeight + headerHeight/2);
                    }
                }, 300);
            }
            
            // Padding Banner 1
            if ($(".block-service .banner-1").length) {
                var bannerHeight = $(".block-service .banner-1")[0].clientHeight;
                if( $(window).width() > 415) {
                    $(".block-service").css( "padding-top", bannerHeight/2 );
                }
            }
            
            // Padding Banner Bottom
            if ($(".banner-bottom .banner-1").length) {
                if( $(window).width() > 1025 ) {
                    var bannerBottomHeight = $(".banner-bottom .banner-1")[0].clientHeight;
                    $(".banner-bottom").css( "padding-top", bannerBottomHeight/2 );
                }
            }

            // Padding Footer
            if($(".wrapper-footer.style-3").length) {
                if( $(window).width() > 1025 ) {
                    if ($(".banner-bottom .banner-1").length) {
                        var bannerBottomHeight = $(".banner-bottom .banner-1")[0].clientHeight;
                        $(".wrapper-footer.style-3").css("padding-top", 100 + bannerBottomHeight/2 )
                    }
                }
            }
        };
    
    /*=====  End of CALCULATE SPACING  ======*/
    
    

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function(){
        SLZ.headerFunction();
        SLZ.mainFunction();
        SLZ.calcSpacing();
        SLZ.loading();
    });

    $(window).on('load', function() {
        setTimeout(function(){
            $('.slider-vertical-wrapper .slider-for').slick('setPosition');
        }, 900);
    });

    $(window).on('resize', function() {
        SLZ.calcSpacing();
    });
    /*======================================
    =          END INIT FUNCTIONS          =
    ======================================*/

});
