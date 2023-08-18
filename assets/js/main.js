/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav-menu"),
  navClose = document.getElementById("nav-close"),
  navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== ADD BLUR TO HEADER ===============*/

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_39fxvwh",
      "template_13rcjcr",
      "#contact-form",
      "Bm24UpxoF-RYWFrZ_"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "service error";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scrollup");
  if (scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// const sections = document.querySelectorAll("section[id]");

// const scrollActive = () => {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight ,
//      sectionTop = current.offsetTop - 58,
//     sectionId = current.getAttribute('id'),
//     sectionClass=
//   });
// };

// window.addEventListener("scroll", sce);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.intro-section,.section-contact,.footer-section`);
sr.reveal(`.home-img`, { origin: "bottom" });
sr.reveal(`.details-section,.skills-desc-section`, { origin: "left" });
sr.reveal(`.about-img , .skills-list,.slider`, { origin: "right" });
sr.reveal(`.services-card , .project-card`, { interval: 100 });
