document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      document.querySelector(".navbar").classList.add("sticky");
    } else {
      document.querySelector(".navbar").classList.remove("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 200) {
      document.querySelector(".scroll-up-btn").classList.add("show");
    } else {
      document.querySelector(".scroll-up-btn").classList.remove("show");
    }
  });

  document
    .querySelector(".scroll-up-btn")
    .addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // removing smooth scroll on slide-up button click
      document.documentElement.style.scrollBehavior = "auto";
    });

  document.querySelectorAll(".navbar .menu li a").forEach(function (link) {
    link.addEventListener("click", function () {
      // applying smooth scroll on menu items click
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });

  document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
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
