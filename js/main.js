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
AOS.init({
    duration: 1800,
    once: true,
    offset: 120,
    easing: 'ease-out-cubic'
});
        AOS.init({ duration: 900, offset: 100, once: true });
 //<!--Form Scripts -->
        document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {

    e.preventDefault();

    const submitBtn = this.querySelector("button");
    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";

    const formData = {
      name: this.name.value,
      phone: this.phone.value,
      email: this.email.value,
      requirement: this.requirement.value
    };

    try {


      await fetch(
  "https://script.google.com/macros/s/AKfycbztOlTFjIIrUCGddrBCaDkK3DSwLSoQ6J867wIlNZx53S1IXATAiVTp5btI9XKv0sxWtA/exec",
  {
    method: "POST",
    body: JSON.stringify(formData)
  }
);

// Hide form
document.getElementById("formContainer").style.display = "none";

// Show thank you box
document.getElementById("thankYouBox").style.display = "block";

// Thank you content
document.getElementById("thankYouBox").innerHTML = `
<div class="thank-you-card">

    <div class="success-icon">✓</div>

    <h3>Application Submitted Successfully!</h3>

    <p>
        Thank you for your interest in Wellocia.
        Our recruitment team will review your profile and contact you shortly.
    </p>

    <a href="PASTE_YOUR_WHATSAPP_CHANNEL_LINK_HERE"
       target="_blank"
       class="join-channel-btn">
       <i class="fab fa-whatsapp"></i>
<span>Join WhatsApp Channel For Job Updates</span>
    </a>

</div>
`;

    } catch (error) {

      document.getElementById("formMessage").innerHTML =
        "<p style='color:red;'>Something went wrong. Please try again.</p>";

    }

    submitBtn.disabled = false;
    submitBtn.innerText = "Submit";
});
