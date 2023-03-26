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

  //////////////////   Container Hover Logic        //////////////////////////

  document.getElementById("cards").onmousemove = (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
};

/////////// MODAL LOGIC (This following code process made me miss React and it's reusable components..) /////////

let modal_btn = document.getElementById("modal-btn");

function modal_close() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modal-link1").style.display = "none";
  document.getElementById("modal-link2").style.display = "none";
  document.getElementById("modal-link3").style.display = "none";
}

function enlarge1() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-link1").style.display = "none";
  document.getElementById("modal-h1").innerHTML = "Get to know me";
  document.getElementById("modal-p").innerHTML =
    "A former professional fighter who's studying to become a Fontend Developer at Hyper Island. <br> \
     I've got a passion for creating, solving problems and working with people. <br><br> \
     I'm currently looking for internship opportunities between 25/9-2023 to 29/3-2024.";
}

function enlarge2() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-link1").style.display = "none";
  document.getElementById("modal-h1").innerHTML = "My previous work";
  document.getElementById("modal-p").innerHTML = "Some of my current projects:";
  document.getElementById("modal-link3").style.display = "block";

}

function enlarge3() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-link1").style.display = "none";
  document.getElementById("modal-h1").innerHTML = "Get in touch with me";
  document.getElementById("modal-p").innerHTML =
    "Phone: +46 73-999-XX XX <br> Mail: jonathan.zeray@hotmail.com";
}

function enlarge4() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-h1").innerHTML = "My Github account";
  document.getElementById("modal-p").innerHTML = "";
  document.getElementById("modal-link1").style.display = "block";
}

function enlarge5() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-link1").style.display = "none";
  document.getElementById("modal-h1").innerHTML = "My LinkedIn profile";
  document.getElementById("modal-p").innerHTML = "";
  document.getElementById("modal-link2").style.display = "block";
}

function enlarge6() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-link1").style.display = "none";
  document.getElementById("modal-h1").innerHTML = "CV & Personal letter";
  document.getElementById("modal-p").innerHTML = "Blablabla..";
}

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
