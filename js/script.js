(function($) {
    var sections = [];
    var id = false;
    var $navbara = $('#scrollEffect a');

    $navbara.click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 0
        }, 80);
        hash($(this).attr('href'));
    });

    $navbara.each(function() {
        if ($($(this).attr('href')).length != 0) {
            sections.push($($(this).attr('href')));
        }

    })

    $(window).scroll(function(e) {
        var scrollTop = $(this).scrollTop() + ($(window).height() / 2);
        for (var i in sections) {
            var section = sections[i];
            if (scrollTop > section.offset().top) {
                var scrolled_id = section.attr('id');
            }
        }

        if (scrollTop > section.offset().top) {
            var scrolled_id = section.attr('id');
        }
        if (scrolled_id !== id) {
            id = scrolled_id;
            for (let i = 0; i < $($navbara).length; i++) {
                let parentRemove = $($navbara)[i].parentElement;
                parentRemove.classList.remove('active');
            }
            let parentSpan = $('#scrollEffect a[href="#' + id + '"]')['0'].parentElement;
            let indexId = $('#scrollEffect a[href="#' + id + '"]')[0].id;

            parentSpan.classList.add('active');

        }
    })
})(jQuery);

hash = function(h) {
    if (history.pushState) {
        history.pushState(null, null, h);
    } else {
        location.hash = h;
    }
}


$('.faq-heading').click(function() {
    $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
});

/* Code By Webdevtrick ( https://webdevtrick.com ) */
$(document).ready(function() {
    $('.testiSlide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1300,
        responsive: [{
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,

            nav: false

        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: false,
            loop: true
        }
    }
})

var portfolioImageSection = document.querySelectorAll('.portfolio-image-section');

for (let i = 0; i < portfolioImageSection.length; i++) {
    portfolioImageSection[i].style.backgroundImage = 'url(images/' + portfolioImageSection[i].getAttribute('data-image-url') + ')'
}

function toggleMenu() {
    document.getElementById('scrollEffect').classList.toggle('active');
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    slides[slideIndex - 1].style= "display:block; ";
}