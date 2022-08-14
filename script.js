$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["A Compititive Programmer","An Android Developer", "A Web Developer"],
        typeSpeed: 150,
        backSpeed: 80,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["A Compititive Programmer", "An Android Developer", "A Web Developer"],
        typeSpeed: 150,
        backSpeed: 80,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

//var btn = document.getElementById("sendmail");

// btn.onclick = function sendMail() {

//   var frm = document.getElementById('form1');
//   console.log(frm);
  
//   var email = $('#email').val();
//   var name = $('#name').val();
//   var msg = $('#message').val();
//   var sub = $('#subject').val();

//   console.log(email,name,msg,sub);//

 
  //var Body = 'Your OTP is : ' + OTP;

  // Email.send({
  //   Host: "smtp.gmail.com",
  //   Username: "checkmate.sdp@gmail.com",
  //   Password: "beaking12",
  //   To: email,
  //   From: "checkmate.sdp@gmail.com",
  //   Subject: "Verification code for Checkmate profile.",
  //   Body: Body
  // }).then(
  //   message => {
  //     //   //console.log (message);
  //     //   if (message == 'OK') {
  //     //     //alert('Your mail has been send. Thank you for connecting.');

  //     //   } else {
  //     //     console.error(message);
  //     //     //alert('There is error at sending message. ')
  //   })
//}