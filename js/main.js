(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Dropdown on hover
    $(document).ready(function () {

        function toggleNavbarMethod() {

            if ($(window).width() > 992) {

                $('.navbar .dropdown')
                    .on('mouseover', function () {
                        $('.dropdown-toggle', this).trigger('click');
                    })
                    .on('mouseout', function () {
                        $('.dropdown-toggle', this).trigger('click').blur();
                    });

            } else {

                $('.navbar .dropdown')
                    .off('mouseover')
                    .off('mouseout');
            }
        }

        toggleNavbarMethod();

        $(window).resize(toggleNavbarMethod);

    });

    // Back To Top Button
    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }

    });

    $('.back-to-top').click(function () {

        $('html, body').animate(
            { scrollTop: 0 },
            1500,
            'easeInOutExpo'
        );

        return false;
    });

})(jQuery);


// ======================
// AOS ANIMATIONS
// ======================

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}


// ======================
// PAGE LOADER
// ======================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {
        loader.classList.add("hidden");
    }

});


// ======================
// SCROLL PROGRESS BAR
// ======================

window.addEventListener("scroll", () => {

    const progressBar = document.querySelector(".scroll-progress");

    if (!progressBar) return;

    const winScroll =
        document.body.scrollTop ||
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    progressBar.style.width = scrolled + "%";

});


// ======================
// COUNTER ANIMATION
// ======================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = Math.max(1, Math.ceil(target / 100));

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }
    };

    updateCounter();

});


// ======================
// SMOOTH SCROLL FOR LINKS
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

});


// ======================
// NAVBAR SHADOW ON SCROLL
// ======================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";
    }

});
