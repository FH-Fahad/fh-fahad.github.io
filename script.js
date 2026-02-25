$(document).ready(function () {
  var pageIds = ["home", "experience", "skills", "projects", "contact"];

  function getPageIndex(hash) {
    if (!hash) return 0;
    var id = hash.replace("#", "");
    var i = pageIds.indexOf(id);
    return i >= 0 ? i : 0;
  }

  function goToPage(index) {
    index = Math.max(0, Math.min(index, pageIds.length - 1));
    $(".pages-inner").css("transform", "translateY(-" + index * 100 + "vh)");
    $(".navbar .menu li a").removeClass("active");
    if (index === 0) {
      $('.navbar .menu li a[href="/"]').addClass("active");
    } else {
      $('.navbar .menu li a[href="#' + pageIds[index] + '"]').addClass(
        "active",
      );
    }
    if (typeof history.replaceState !== "undefined") {
      var url =
        index === 0
          ? window.location.pathname + window.location.search
          : "#" + pageIds[index];
      history.replaceState(null, null, url);
    }
  }

  $("body").on("click", 'a[href^="#"]', function (e) {
    var href = $(this).attr("href");
    if (href === "#" || !href) return;
    var index = getPageIndex(href);
    if (pageIds[index] !== undefined) {
      e.preventDefault();
      goToPage(index);
      $(".navbar .menu").removeClass("active");
      $(".hamburger i").removeClass("active");
    }
  });

  $(window).on("hashchange", function () {
    goToPage(getPageIndex(window.location.hash));
  });

  var initialIndex = getPageIndex(window.location.hash);
  goToPage(initialIndex);

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
