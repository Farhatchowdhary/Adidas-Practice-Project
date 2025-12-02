// const navBar = document.querySelectorAll(".nav-bar p");

//  setInterval(tick, milliseconds);

// navBar[currentIndex].classList.remove('active');
// if (currentIndex < navBar.length - 1) {
//     currentIndex++;
// } else {
//     currentIndex = 0;
// };

// navBar[currentIndex].classList.add('.active');

const navHeart = document.querySelector(".nav-heart");
const inputSearch = document.querySelector("#nav_search");
const searchIcon = document.querySelector(".search-icon");
const modalCart = document.querySelector(".modal-cart");
const navCart = document.querySelector(".nav-cart");
const modal = document.querySelector(".modal-section");
const logIn = document.querySelector(".nav-login");
const closeBtn = document.querySelector(".modal-close-btn");
const email = document.querySelector(".email-input");
const modalEmail = document.querySelector(".modal-email");
const modalBtn = document.querySelector(".modal-btn");

navHeart.addEventListener("click", () => {
  navHeart.classList.toggle("heart-active");
});

searchIcon.addEventListener("click", () => {
  const value = inputSearch.value.trim();

  if (value.length < 3) {
    alert("Invalid:Please enter valid search");
  } else {
    alert("Search Successful");
  }
});

navCart.addEventListener("click", () => {
  modalCart.classList.toggle("show");
});

logIn.addEventListener("click", () => {
  modal.classList.toggle("modal-section-visible");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal-section-visible");
});

modalBtn.addEventListener("click", () => {
  const value = email.value.trim();

  if (value.length < 3) {
    alert("Invalid:Please enter valid email");
  } else {
    alert("Log In Successful");
  }
});
