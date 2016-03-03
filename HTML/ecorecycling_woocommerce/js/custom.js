//Menu js Start
//rainy day
function run() {
        "use strict";
        var image = document.getElementById('background');
        image.onload = function() {
            var engine = new RainyDay({
                image: this
            });
            engine.rain([
                [1, 2, 8000]
            ]);
            engine.rain([
                [3, 3, 0.88],
                [5, 5, 0.9],
                [6, 2, 1]
            ], 100);
        };
        image.crossOrigin = 'anonymous';
        image.src = 'images/slideshow-eco-4-rain.jpg';
    }
    //.ready start
$(document).ready(function() {
    "use strict";
    jQuery(window).load(function() {
        var colorcode = document.cookie;
        if (colorcode != "") {
            var cname = "colorcssfile";
            var name = cname + "=";
            var cssname = '';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) {
                    cssname = c.substring(name.length, c.length);
                }
            }

            if (cssname != '') {
                var new_style = 'css/' + cssname + '.css';
                $('#theme-change').attr('href', new_style);
            }
        }
        if (jQuery('.eco_home').hasClass('eco_home')) {
            var menu = jQuery('.mainmenu');
            var h = 970;
            jQuery(window).scroll(function() {
                if (!menu.isOnScreen() && jQuery(this).scrollTop() > h) {
                    jQuery(".fixedmenu").slideDown(200);
                } else {
                    jQuery(".fixedmenu").slideUp(200);
                }
            });
            jQuery.fn.isOnScreen = function() {

                var win = jQuery(window);

                var viewport = {
                    top: win.scrollTop(),
                    left: win.scrollLeft()
                };
                viewport.right = viewport.left + win.width();
                viewport.bottom = viewport.top + win.height();

                if (this.offset()) {
                    var bounds = this.offset();
                    bounds.right = bounds.left + this.outerWidth();
                    bounds.bottom = bounds.top + this.outerHeight();

                    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
                }
            }
        } else {
            var menu = jQuery('.mainmenu');
            var h = 320;
            jQuery(window).scroll(function() {
                if (!menu.isOnScreen() && jQuery(this).scrollTop() > h) {
                    jQuery(".fixedmenu").slideDown(200);
                } else {
                    jQuery(".fixedmenu").slideUp(200);
                }
            });
            jQuery.fn.isOnScreen = function() {

                var win = jQuery(window);

                var viewport = {
                    top: win.scrollTop(),
                    left: win.scrollLeft()
                };
                viewport.right = viewport.left + win.width();
                viewport.bottom = viewport.top + win.height();

                if (this.offset()) {
                    var bounds = this.offset();
                    bounds.right = bounds.left + this.outerWidth();
                    bounds.bottom = bounds.top + this.outerHeight();

                    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
                }
            }
        }
    });
    //Menu js End
    //Bx slider
    jQuery('.slider4').bxSlider({
        slideWidth: 400,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 1,
        controls: false,
        pager: false,
        auto: true
    });
    //Bx slider End
    //portfolio
    jQuery("#grid").mixitup({
        filterSelector: ".filter-item"
    });
    jQuery(".filter-item").click(function(e) {
        e.preventDefault()
    });
    //portfolio end
    //goto top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".totop").fadeIn()
        } else {
            $(".totop").fadeOut()
        }
    });
    $(".totop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    });
    //goto top end
    //color change script
    $('.colorchange').click(function() {
        var name = $(this).attr('id');
        var new_style = 'css/' + name + '.css';
        $('#theme-change').attr('href', new_style);
    });
    $("#style-switcher .bottom a.settings").click(function(e) {
        e.preventDefault();
        var div = $("#style-switcher");
        if (div.css("left") === "-155px") {
            $("#style-switcher").animate({
                left: "0px"
            });
        } else {
            $("#style-switcher").animate({
                left: "-155px"
            });
        }
    });

    //color change script end

    //chart
    var circle1 = Circles.create({
        id: 'circles-1',
        value: 80,
        radius: 100,
        number: 80,
        text: '80%',
        width: 7,
        colors: ["#ddd", "#94bb54"],
        duration: 900
    });
    var circle2 = Circles.create({
        id: 'circles-2',
        value: 50,
        radius: 100,
        number: 50,
        text: '50%',
        width: 7,
        colors: ["#ddd", "#333"],
        duration: 900
    });
    var circle3 = Circles.create({
        id: 'circles-3',
        value: 70,
        radius: 100,
        number: 70,
        text: '70%',
        width: 7,
        colors: ["#ddd", "#94bb54"],
        duration: 900
    });
    var circle4 = Circles.create({
        id: 'circles-4',
        value: 40,
        radius: 100,
        number: 40,
        text: '40%',
        width: 7,
        colors: ["#ddd", "#333"],
        duration: 900
    });

    //counter 
    $('.appear-count').appear(function() {
        $('.count').countTo();
    });
    //parallax 
    $('#intro').parallax("50%", 0.1);
    $('#second').parallax("50%", 0.1);
    $('#eco_new_home').parallax("50%", 0.1);
    //ACCORDION 
    $("#accordion").accordion();
    //toggle
    $(".eco_toggle_container").hide();
    $("h2.eco_trigger").click(function() {
        $(this).toggleClass("active").next().slideToggle("slow");
    });
    //pretty photo
    $("area[data-gal^='prettyPhoto']").prettyPhoto();
    $(".gallery a[data-gal^='prettyPhoto']").prettyPhoto({
        animation_speed: "normal",
        theme: "light_square",
        slideshow: 3e3,
        autoplay_slideshow: false
    });
    //search icon
    $('.eco_search a i').click(function() {
        $('.eco_search_form').slideToggle();
    });
    //search icon for fixed menu
    $('.eco_search1 a i').click(function() {
        $('.eco_search_form1').slideToggle();
    });
    // shop page button

    $('.eco_shop_clickbtn').click(function(e) {
        e.preventDefault();
        $('.eco_shop_clickbtn').each(function() {
            $(this).hide();
        });
        $('.eco_shop_hover_btn').show();


    });
    //Main Slider		
    $('.tp-banner').show().revolution({
        dottedOverlay: "none",
        delay: 14000,
        startwidth: 1180,
        startheight: 540,
        hideThumbs: 200,
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 3,
        simplifyAll: "off",
        navigationType: "none",
        navigationArrows: "solo",
        navigationStyle: "round",
        touchenabled: "on",
        onHoverStop: "off",
        nextSlideOnWindowFocus: "off",
        swipe_threshold: 0.7,
        swipe_min_touches: 1,
        drag_block_vertical: false,
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        shadow: 0,
        fullWidth: "on",
        fullScreen: "off",
        spinner: "spinner2",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "off",
        hideThumbsOnMobile: "on",
        hideBulletsOnMobile: "on",
        hideArrowsOnMobile: "on",
        hideThumbsUnderResolution: 0,
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 961,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0
    });
    //
    $('.tp-banner1').show().revolution({
        dottedOverlay: "none",
        delay: 14000,
        startwidth: 1180,
        startheight: 970,
        hideThumbs: 200,

        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 1,


        simplifyAll: "off",

        navigationType: "none",
        navigationArrows: "none",
        navigationStyle: "round",

        touchenabled: "on",
        onHoverStop: "off",
        nextSlideOnWindowFocus: "off",

        swipe_threshold: 0.7,
        swipe_min_touches: 1,
        drag_block_vertical: false,
        //parallax:"mouse+scroll",
        //parallaxBgFreeze:"off",
        //parallaxLevels:[60,60,60,60,30,30,35,40,45,50],


        keyboardNavigation: "off",

        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,

        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,

        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,

        shadow: 0,
        fullWidth: "on",
        fullScreen: "off",

        spinner: "spinner2",

        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: 1,

        shuffle: "off",

        autoHeight: "off",
        forceFullWidth: "off",



        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,

        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0
    });
    //
    $('.tp-banner2').show().revolution({
        dottedOverlay: "none",
        delay: 12000,
        startwidth: 1180,
        startheight: 600,
        hideThumbs: 200,

        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 1,


        simplifyAll: "off",

        navigationType: "none",
        navigationArrows: "none",
        navigationStyle: "round",

        touchenabled: "on",
        onHoverStop: "on",
        nextSlideOnWindowFocus: "off",

        swipe_threshold: 0.7,
        swipe_min_touches: 1,
        drag_block_vertical: false,
        parallax: "mouse+scroll",
        parallaxBgFreeze: "off",
        parallaxLevels: [2, 5, 8, 10, 15, 18, 20, 22, 25, 28],


        keyboardNavigation: "off",

        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,

        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,

        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,

        shadow: 0,
        fullWidth: "on",
        fullScreen: "off",

        spinner: "spinner2",

        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: 1,

        shuffle: "off",

        autoHeight: "off",
        forceFullWidth: "off",


        hideTimerBar: "on",
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,

        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0
    });
    //Range Slider
    $(function() {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 2350,
            values: [12, 2350],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    });
    //contact form submtion
    $("#em_submit").click(function() {
        var e = $("#uname").val();
        var t = $("#umail").val();
        var n = $("#subj").val();
        var r = $("#msg").val();
        $.ajax({
            type: "POST",
            url: "ajaxmail.php",
            data: {
                username: e,
                useremail: t,
                useresubject: n,
                mesg: r
            },
            success: function(n) {
                var i = n.split("#");
                if (i[0] == "1") {
                    $("#uname").val("");
                    $("#umail").val("");
                    $("#subj").val("");
                    $("#msg").val("");
                    $("#err").html(i[1])
                } else {
                    $("#uname").val(e);
                    $("#umail").val(t);
                    $("#subj").val(t);
                    $("#msg").val(r);
                    $("#err").html(i[1])
                }
            }
        })
    });
    //preloader
    $("#status").fadeOut();
    $("#preloader").delay(300).fadeOut("slow")
        //preloader end
}); //ready