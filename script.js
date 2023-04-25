//////// Matrix Name Logic ////////////
const letters = "AB1CD2EF3GH4IJ5KL6MN7OP8QR9ST0UVWXYZ";

let interval = null;

window.onload = function () {
  document.querySelector("h1").onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 50);
  };
  
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};
  
  // Get the navbar
  let navbar = document.getElementById("navbar");
  
  // Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
}

function homeScroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });}

function aboutScroll() {
  window.scrollTo({
    top: 610,
    left: 0,
    behavior: "smooth",
  });
}

function projectScroll() {
  window.scrollTo({
    top: 1219.3333740234375,
    left: 0,
    behavior: "smooth",
  });
}

function contactScroll() {
  window.scrollTo({
    top: 1828,
    left: 0,
    behavior: "smooth",
  });}

