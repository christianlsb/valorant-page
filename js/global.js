document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const overlay = document.querySelector(".overlay");

  hamburgerIcon.addEventListener("click", function () {
    overlay.classList.toggle("active");
    document.body.classList.toggle("overlay-active");

    hamburgerIcon.classList.toggle("rotate");
  });
});
