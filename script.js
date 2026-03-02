$(document).ready(function () {
  var sectionIds = ["home", "experience", "projects", "skills", "contact"];
  var sections = sectionIds
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  function setActiveNav(sectionId) {
    $(".navbar .menu li a").removeClass("nav-active");
    $('.navbar .menu li a[data-section="' + sectionId + '"]').addClass(
      "nav-active",
    );
  }

  function updateNavHighlight() {
    var activeIndex = 0;
    var offset = window.innerHeight * 0.5;
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      if (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= offset) activeIndex = i;
      }
    }
    setActiveNav(sectionIds[activeIndex]);
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function () {
        updateNavHighlight();
      },
      { root: null, rootMargin: "0px", threshold: [0, 0.1, 0.5, 1] },
    );
    sections.forEach(function (el) {
      if (el) observer.observe(el);
    });
  }
  ["scroll", "resize"].forEach(function (evt) {
    window.addEventListener(evt, updateNavHighlight, { passive: true });
  });
  updateNavHighlight();

  $("body").on("click", 'a[href^="#"]', function (e) {
    var href = $(this).attr("href");
    if (href === "#" || !href) return;
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveNav(target.id);
      $(".navbar .menu").removeClass("active");
      $(".hamburger i").removeClass("active");
    }
  });

  $(".hamburger").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".hamburger i").toggleClass("active");
  });

  new Typed(".typing", {
    strings: [
      "A Software Engineer",
      "A Backend Developer",
      "A Competitive Programmer",
    ],
    typeSpeed: 150,
    backSpeed: 80,
    loop: true,
  });
});

// Optional: add your email in the Contact section (mailto link) for recruiters.
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
