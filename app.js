const hamburgerContainer = document.querySelector("#header__main-nav");

const hamburger = document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll(".header__main-nav--links li");

// event listener corresponding to css
hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");
  links.forEach(function (link) {
          link.classList.toggle('fade');
      });
});
