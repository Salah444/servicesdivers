jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};


    /*=======================================
    =               DATE TIME               =
    =======================================*/

    SLZ.Date_Time = function() {
        var dayOfWeek, dayOfMonth, jsDate;
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        function getOrdinal(val){

            var mod = val % 10;
            if (mod === 1 && val !== 11) {
                return 'st';
            } else if (mod === 2 && val !== 12) {
                return 'nd';
            } else if (mod === 3 && val !== 13) {
                return 'rd';
            } else {
                return 'th';
            }
        }
        if($('.calendar-board').length) {
            var numCalendar = $('.calendar-board').length;
            $('.calendar-board').each(function() {
                var $this = $(this);
                var flag = false;
                $(this).datepicker({
                    todayHighlight: true,
                    beforeShowDay: function(e) {
                        if (flag == false) {
                            jsDate = new Date();
                            dayOfWeek = days[jsDate.getDay()];
                            dayOfMonth = jsDate.getDate() + getOrdinal(jsDate.getDate());
                            $this.find('.datepicker .datepicker-switch').append('<span class="date-label">'+ dayOfWeek + ' ' + dayOfMonth +'</span>');
                            flag = true;
                        }
                    }
                });
            });
            $('.calendar-board').on('changeDate', function() {
                var getDateLabel = $(this).datepicker('getDate');
                dayOfWeek = days[getDateLabel.getDay()];
                dayOfMonth = getDateLabel.getDate() + getOrdinal(getDateLabel.getDate());
                $(this).find('.datepicker table tr td.today').removeClass('today');
                $(this).find('.datepicker-switch').append('<span class="date-label">'+ dayOfWeek + ' ' + dayOfMonth +'</span>');
            });
        }

        /* project slider   */
        $('.wrapper-slick-1 .main-project-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.wrapper-slick-1 .main-project-slider-thumnail'
        });
        $('.wrapper-slick-1 .main-project-slider-thumnail').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.wrapper-slick-1 .main-project-slider',
            focusOnSelect: true
        });

        /* our project slider   */
        $(".wp-our-project-slider").slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.wp-our-project-slider .main-project-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.wp-our-project-slider .main-project-slider-thumnail'
        });
        $('.wp-our-project-slider .main-project-slider-thumnail').slick({
            slidesToShow: 5,
            arrows: false,
            asNavFor: '.wp-our-project-slider .main-project-slider',
            focusOnSelect: true
        });
    };

    /*=====     End of DATE TIME     ======*/

    $(document).ready(function() {
        SLZ.Date_Time();
    });

});