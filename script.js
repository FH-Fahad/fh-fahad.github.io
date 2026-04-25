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

  var resumePdf = "./Assets/Fahad_Bin_Mohammad_Hossain_Resume.pdf";
  var resumePdfAbsolute = (function () {
    try {
      return new URL(resumePdf, window.location.href).href;
    } catch (e) {
      return resumePdf;
    }
  })();
  var $resumeModal = $("#resume-modal");
  var $resumeFrame = $("#resume-modal-frame");
  var $resumeOpenTrigger = $("#open-resume-modal");
  var $resumeFallback = $("#resume-modal-fallback");
  var $openPdfLink = $("#resume-open-pdf-link");

  /** iOS / Android: PDF in iframe is not supported or shows blank. */
  function shouldUsePdfInlineFallback() {
    var ua = (navigator.userAgent || "").toLowerCase();
    if (ua.indexOf("iphone") > -1 || ua.indexOf("ipod") > -1) return true;
    if (ua.indexOf("ipad") > -1) return true;
    if (typeof navigator.standalone !== "undefined" && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) {
      return true;
    }
    if (ua.indexOf("android") > -1 && (ua.indexOf("mobile") > -1 || document.documentElement.clientWidth < 1024)) {
      return true;
    }
    if (window.matchMedia) {
      try {
        if (window.matchMedia("(max-width: 1024px) and (hover: none) and (pointer: coarse)").matches) {
          return true;
        }
      } catch (e) {}
    }
    return false;
  }

  function setResumeOpenLinksHref() {
    $openPdfLink.attr("href", resumePdfAbsolute);
  }

  setResumeOpenLinksHref();

  function openResumeModal() {
    var useFallback = shouldUsePdfInlineFallback();
    if (useFallback) {
      $resumeModal.addClass("resume-modal--pdf-fallback");
      $resumeFrame.removeAttr("src");
      $resumeFallback.attr("aria-hidden", "false");
    } else {
      $resumeModal.removeClass("resume-modal--pdf-fallback");
      $resumeFrame.attr("src", resumePdf);
      $resumeFallback.attr("aria-hidden", "true");
    }
    $resumeModal[0].removeAttribute("hidden");
    $resumeModal.attr("aria-hidden", "false");
    $("body").css("overflow", "hidden");
    setTimeout(function () {
      $resumeModal.find(".resume-modal__close").first().trigger("focus");
    }, 0);
  }

  function closeResumeModal() {
    $resumeModal[0].setAttribute("hidden", "");
    $resumeModal.attr("aria-hidden", "true");
    $resumeModal.removeClass("resume-modal--pdf-fallback");
    $resumeFallback.attr("aria-hidden", "true");
    $("body").css("overflow", "");
    $resumeFrame.removeAttr("src");
    if (document.activeElement && $resumeModal[0].contains(document.activeElement)) {
      $resumeOpenTrigger.trigger("focus");
    }
  }

  $(".resume-modal-trigger").on("click", function (e) {
    e.preventDefault();
    openResumeModal();
  });

  $("[data-resume-close]").on("click", function (e) {
    e.preventDefault();
    closeResumeModal();
  });

  $resumeModal.on("click", function (e) {
    if (e.target === e.currentTarget) {
      closeResumeModal();
    }
  });

  $(document).on("keydown", function (e) {
    if (e.key !== "Escape" || $resumeModal[0].hasAttribute("hidden")) return;
    closeResumeModal();
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
