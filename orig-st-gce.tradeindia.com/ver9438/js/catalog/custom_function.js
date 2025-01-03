// Custom JS Starts Here
$(document).ready(function () {
    $('#product-img-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 10,
        arrows: false,
        fade: true,
        autoplay: false,
        centerMode: false,
        asNavFor: '#product-img-nav',
    });
    $('#product-img-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '#product-img-main',
        dots: false,
        speed: 100,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
        infinite: false,
        arrows: true,
        autoplay: false,

        responsive: [{
                breakpoint: 414,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 375,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 360,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 320,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('#product-img-nav .slick-slide').mouseover(function(){
        $(this).click();    
    });




    //Theme2 Slick JS Starts Here

    $('#product-img-main1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#product-img-nav1'
    });
    $('#product-img-nav1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '#product-img-main1',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 414,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 375,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 360,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 320,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });



    //Theme 3 Slick JS Starts Here

    if (window.matchMedia("(max-width: 480px)").matches) {
        $('#mainImageSlick').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            centerMode: false,
            asNavFor: '#navImageSlick',
        });
        $('#navImageSlick').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '#mainImageSlick',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            vertical: true,
            infinite: false,
            arrows: false,
            autoplay: true,
            responsive: [{
                breakpoint: 480,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }]
        });
    }





    // Hamburger menu JS Starts here
    $("#sideMenu").click(function () {
        $('#fixedMenu').css({
            "right": "0px",
            "transition": "all ease 0.5s"
        });
        $('body').addClass('bg-overlay');
        $('.menu-bg').fadeIn();
    });
    $("#menuCloseBtn").click(function () {
        $('#fixedMenu').css({
            "right": "-100%",
            "transition": "all ease 0.5s"
        });
        $('body').removeClass('bg-overlay');
        $('.menu-bg').fadeOut();
    });
    $('#productsMenu').click(function () {
        $('.sub-menu').toggle();
    });
    $('.has-menu').click(function () {
        $('.has-menu ul').toggle();
    });


    // Easy Scroll JS Starts Here
    $(".product-details a").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });

    $('.header .menu-section .menu ul li>.sub-menu li:has(ul)').addClass('has-menu');
    $('.header .menu-section .menu ul li:has(ul)').addClass('has-main-menu');



    // Slick for Other Products Starts Here
    if (window.matchMedia("(max-width: 414px)").matches) {
        $('.product-list').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }

    var tabContents = document.querySelectorAll('#productDetails > div');
    for (var i = 1; i < tabContents.length; i++) {
        var tabContent = tabContents[i]
        tabContent.classList.add('hidden')
    }

    var tabs = document.querySelectorAll('#productDetails > ul:first-child a');
    for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i]
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            this.parentElement.classList.add('active')
            for (var i = 0; i < tabs.length; i++) {
                if (tabs[i] !== this) {
                    tabs[i].parentElement.classList.remove('active')
                }
            }
            var tabName = this.getAttribute('data-tab')
            for (var i = 0; i < tabContents.length; i++) {
                var tabContent = tabContents[i]
                if (tabName === tabContent.id) {
                    tabContent.classList.remove('hidden')
                } else {
                    tabContent.classList.add('hidden')
                }
            }
        })
    }

    // product Video Popup JS Starts Here

    $('#ProdVideo').on('click', function () {
        $('#videoModal').fadeIn();
        //$('.blur-bg').addClass('blurred');
        $('body').addClass('bg-overlay');
    });

    $('#ProdVideo2').on('click', function () {
        $('#videoModal').fadeIn();
        //$('.blur-bg').addClass('blurred');
        $('body').addClass('bg-overlay');
    });


    $('#videoModal').find('.modal-close-btn').on('click', function () {
        $('#videoModal').fadeOut();
        setTimeout(function () {
            //$('.blur-bg').removeClass('blurred');
        }, 250)
        $('body').removeClass('bg-overlay');
        $('#videoModal').find('iframe').each(function(){
            $(this).attr('src', $(this).attr('src'));
						return false;
        });
    });
    // product Video Popup JS Ends Here
});
// Tabs JS Starts here


//Show Hide Fixed Button JS Starts Here

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 10) {
        $('.fixed-btn-section').addClass('show');
    } else {
        $('.fixed-btn-section').removeClass('show');
    }
});
