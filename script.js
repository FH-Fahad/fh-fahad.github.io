$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        { this.scrollY > 60 ? $('.navbar').addClass("sticky") : $('.navbar').removeClass("sticky") }

        // scroll-up button show/hide script
        { this.scrollY > 400 ? $('.scroll-up-btn').addClass("show") : $('.scroll-up-btn').removeClass("show") }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    new Typed(".typing", {
        strings: ["A MERN Stack Developer", "A Compititive Programmer", "A Web Designer and Developer", "An Android App Developer"],
        typeSpeed: 150,
        backSpeed: 80,
        loop: true
    });
});
