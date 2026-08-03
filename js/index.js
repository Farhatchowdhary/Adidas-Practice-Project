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

const linkBlackFriday = document.querySelector(".link-black-friday");
const modalBlackFriday = document.querySelector(".black-friday");
const modalCloseBtn = document.querySelector(".close");

const linkMen = document.querySelector(".link-men");
const modalMens = document.querySelector(".mens-clothing");
const modalCloseMen = document.querySelector(".mens-close");

const linkWomen = document.querySelector(".link-women");
const modalWomen = document.querySelector(".women-clothing");
const modalCloseWomen = document.querySelector(".women-close");

const linkKids = document.querySelector(".link-kids");
const modalKids = document.querySelector(".kids-clothing");
const modalCloseKids = document.querySelector(".kids-close");

const linkGifts = document.querySelector(".link-gifts");
const modalGifts = document.querySelector(".gifts");
const modalCloseGifts = document.querySelector(".gifts-close");

const linkSales = document.querySelector(".link-sale");
const modalSales = document.querySelector(".sales");
const modalCloseSales = document.querySelector(".sales-close");

const linkTrending = document.querySelector(".link-trending");
const modalTrend = document.querySelector(".trend");
const modalCloseTrending = document.querySelector(".trending-close");

const navHelp = document.querySelector(".nav-help");
const modalHelpCenter = document.querySelector(".help-center");

const navReturns = document.querySelector(".nav-returns");
const modalReturn = document.querySelector(".return");

// help modal
// navHelp.addEventListener("click", () => {
//   modalHelpCenter.classList.toggle("active");
//   alert(modalHelpCenter.className);
// });

// navReturns.addEventListener("click", () => {
//   modalReturn.classList.toggle("active");
// });

navHeart.addEventListener("click", () => {
  navHeart.classList.toggle("heart-active");
});
searchIcon.addEventListener("click", () => {
  const value = inputSearch.value.trim().toLowerCase();

  if (value.length < 3) {
    alert("Invalid:Please enter valid search");
    return;
  }

  if (value === "men") {
    modalMens.classList.add("active");
  } else if (value === "women") {
    modalWomen.classList.add("active");
  } else if (value === "kids") {
    modalKids.classList.add("active");
  } else if (value === "gifts") {
    modalGifts.classList.add("active");
  } else if (value === "sale") {
    modalSales.classList.add("active");
  } else if (value === "trend") {
    modalTrend.classList.add("active");
  } else {
    alert("No results found for this search");
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

// Modal Black-Friday
linkBlackFriday.addEventListener("click", () => {
  modalBlackFriday.classList.toggle("active");
});

modalCloseBtn.addEventListener("click", () => {
  modalBlackFriday.classList.remove("active");
});

// Modal Men
linkMen.addEventListener("click", () => {
  modalMens.classList.toggle("active");
});

modalCloseMen.addEventListener("click", () => {
  modalMens.classList.remove("active");
});

// Modal Women
linkWomen.addEventListener("click", () => {
  modalWomen.classList.toggle("active");
});

modalCloseWomen.addEventListener("click", () => {
  console.log(modalCloseWomen);
  modalWomen.classList.remove("active");
});

linkKids.addEventListener("click", () => {
  modalKids.classList.toggle("active");
});

modalCloseKids.addEventListener("click", () => {
  modalKids.classList.remove("active");
});

// Modal Gifts
linkGifts.addEventListener("click", () => {
  modalGifts.classList.toggle("active");
});

modalCloseGifts.addEventListener("click", () => {
  modalGifts.classList.remove("active");
});

// Modal Sales
linkSales.addEventListener("click", () => {
  modalSales.classList.toggle("active");
});

modalCloseSales.addEventListener("click", () => {
  modalSales.classList.remove("active");
});

// Modal Trend
linkTrending.addEventListener("click", () => {
  modalTrend.classList.toggle("active");
});

modalCloseTrending.addEventListener("click", () => {
  modalTrend.classList.remove("active");
});
