document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".nav-scroll");
  const scrollLeft = document.getElementById("scrollLeft");
  const scrollRight = document.getElementById("scrollRight");
  const navItems = document.querySelectorAll(".nav-item");

  scrollRight.addEventListener("click", function () {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });

  scrollLeft.addEventListener("click", function () {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  });

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelector(".nav-item.active")?.classList.remove("active");
      this.classList.add("active");
    });
  });
});

$(document).ready(function () {
  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
