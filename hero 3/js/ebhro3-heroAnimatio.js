document.addEventListener("DOMContentLoaded", () => {
  const ebhro1_slides = document.querySelectorAll(".ebhro1-slide");
  let ebhro1_currentIndex = 0;
  const ebhro1_slideDuration = 6000;

  function ebhro1_changeSlide() {
    ebhro1_slides[ebhro1_currentIndex].classList.remove("ebhro1-active");

    ebhro1_currentIndex = (ebhro1_currentIndex + 1) % ebhro1_slides.length;

    ebhro1_slides[ebhro1_currentIndex].classList.add("ebhro1-active");
  }

  if (ebhro1_slides.length > 0) {
    setInterval(ebhro1_changeSlide, ebhro1_slideDuration);
  }
});
