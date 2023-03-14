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


///////////////// MODAL LOGIC ///////////////////

let modal_btn = document.getElementById("modal-btn");

function modal_close(){
  document.getElementById("modal").style.display = "none";
}



function enlarge1() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-h1").innerHTML = "Javascript Hello 1";
  document.getElementById("modal-p").innerHTML =
    "Former professional fighter currently studying to become a Fontend Developer at Hyper Island";
}

function enlarge2() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-h1").innerHTML = "Javascript Hello 2";
  document.getElementById("modal-p").innerHTML = "These are all of my current projects";
}

function enlarge3() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-h1").innerHTML = "Javascript Hello 3";
  document.getElementById("modal-p").innerHTML = "Phone: +46 73-999-XX XX <br> Mail: jonathan.zeray@hotmail.com";
}

function enlarge4() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-h1").innerHTML = "Javascript Hello 4";
  document.getElementById("modal-p").innerHTML = "https://github.com/JonathanZeray";

}

function enlarge5() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-h1").innerHTML = "Javascript Hello 5";
}

function enlarge6() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-h1").innerHTML = "Javascript Hello 6";
}



// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }