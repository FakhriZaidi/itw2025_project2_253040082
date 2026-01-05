//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = this.document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// contact form
const scriptURL = "https://script.google.com/macros/s/AKfycbyu4cAOHHxBByTT7sj-dQRzLHJIGJqwnc37c3Xx95rRN_g5AVCNzUy4A23iV2_zjANj/exec";
const form = document.forms["iqbalphotography-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnMengirim = document.querySelector(".btn-mengirim");
const myAlert = document.querySelector(".my-alert");
const closeAlert = document.querySelector(".btn-close");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnMengirim.classList.toggle("hidden");
  btnKirim.classList.toggle("hidden");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnMengirim.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      
      myAlert.classList.toggle("hidden");

      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// tombol x di alert
closeAlert.addEventListener("click", () => {
  myAlert.classList.add("hidden");
});