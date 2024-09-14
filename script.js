$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    {
      this.scrollY > 20
        ? $(".navbar").addClass("sticky")
        : $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    {
      this.scrollY > 200
        ? $(".scroll-up-btn").addClass("show")
        : $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  new Typed(".typing", {
    strings: [
      "A Frontend Developer",
      "A Backend Developer",
      //"A MERN Stack Developer",
      "A Competitive Programmer",
    ],
    typeSpeed: 150,
    backSpeed: 80,
    loop: true,
  });
});

function showImage(element) {
  var projectDescription = element.querySelector(".projectDescription");
  var projectImage = element.querySelector(".projectImage");
  var hideElement = element.querySelector(".hide");

  projectDescription.style.display = "none";
  projectImage.style.display = "block";
  hideElement.style.display = "none";
}

function showParagraph(element) {
  var projectDescription = element.querySelector(".projectDescription");
  var projectImage = element.querySelector(".projectImage");
  var hideElement = element.querySelector(".hide");

  projectDescription.style.display = "block";
  projectImage.style.display = "none";
  hideElement.style.display = "block";
}

// function calculateExperience(startDate) {
//   const start = new Date(startDate);
//   const now = new Date();

//   let years = now.getFullYear() - start.getFullYear();
//   let months = now.getMonth() - start.getMonth();

//   if (months < 0) {
//     years--;
//     months += 12;
//   }

//   const yearText = years > 1 ? "years" : "year";
//   const monthText = months > 1 ? "months" : "month";

//   return `${years} ${yearText} and ${months} ${monthText}`;
// }

// const experienceDuration = calculateExperience("2024-08-01");
// document.getElementById("experience-duration").textContent = experienceDuration;
