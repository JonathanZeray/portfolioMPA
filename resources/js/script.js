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

//GSAP animations for navbar coming in from top and picture of myself. 

}
const tl = gsap.timeline({defaults: {duration: 1.75} });
tl.fromTo(navbar, {y: "-100%"}, {y: "0%"})

/* using functions with scrollTo to get to a certain position on page. 
Functions are added to onClick on navbar */

function homeScroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });}

function aboutScroll() {
  const screenHeight = window.innerHeight;
  const scrollPosition = screenHeight * 1;
  window.scrollTo({
    top: scrollPosition,
    left: 0,
    behavior: "smooth",
  });
}

function projectScroll() {
  const screenHeight = window.innerHeight;
  const scrollPosition = screenHeight * 2;
  window.scrollTo({
    top: scrollPosition,
    left: 0,
    behavior: "smooth",
  });
}

function contactScroll() {
  const screenHeight = window.innerHeight;
  const scrollPosition = screenHeight * 9;
  window.scrollTo({
    top: scrollPosition,
    left: 0,
    behavior: "smooth", 
    /* might remove smooth on contact, 
    have to go through entire horizontal scroll when I go from contacts back to projects & vice versa */
  });}


/* 
GSAP ANIMATIONS for horizontal scroll on projects page.
*/

const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray('.anim');

let resp = gsap.matchMedia();

resp.add("(min-width: 930px)", () => {
  gsap.to(sections, {
  xPercent: -100 * (sections.length - 0.4), 
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000",
    //snap: 1 / (sections.length - 1),
    // markers: true,
  }
})
});

// Console log styled message

const style = 'background-color: black; color: whitesmoke; font-style: italic; border: 5px solid hotpink; font-size: 2em;'
console.log("%cThought I'd find you here. Hi!", style);