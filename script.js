const audio = document.getElementById('bg-music');
const playButton = document.getElementById('button');

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    audio.addEventListener('ended', () => {
      audio.play(); // Autoplay after finished
    });
  }
});

const texts = [
    "This is the first line.",
    "This is the second line.",
    "This is the third line.",
    "This is the fourth line.",
    "This is the fifth line.",
    "This is the sixth line.",
    "This is the seventh line.",
    "This is the eighth line.",
    "This is the ninth line.",
    "This is the tenth line."
  ];
  
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';
  
  function type() {
    if (count === texts.length) {
      return; // Stop typing animation when reaching the last line
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
  
    document.getElementById('typewriter').textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 4000); // Adjust pause between lines here (4000ms = 4 seconds)
    } else {
      setTimeout(type, 160); 
    }
  }
  
  type();

function switchScreen() {
    var body = document.body;
    var cake = document.getElementById('birthday-cake');
    var button = document.getElementById('button');

    body.style.transition = 'background-color 6s ease-in-out';
    body.style.backgroundColor = 'pink'; // Change background color to pink

    button.style.display = 'none';
    typewriter.style.display = 'none'; // Hide the button

    setTimeout(function () {
        cake.classList.remove('hidden'); // Remove the 'hidden' class after 2 seconds
        cake.classList.add('show'); // Add the 'show' class to reveal the cake with transition
    }, 6000);


}

$(document).ready(function () {
  $(".candles").one("click", function () {
      $(".flame").animate({ "opacity": 0 }, "fast");
      $(".flame2").animate({ "opacity": 0 }, "fast");
      $(".flame3").animate({ "opacity": 0 }, "fast");
      $(".text").animate({ "opacity": 1, "top": -90 }, "fast");
      generateBalloons(15); // Generate 15 balloons initially
  });

  // Function to generate balloons
  function generateBalloons(count) {
      const livingroom = document.querySelector(".living-room");
      const balloonCount = livingroom.childElementCount;

      const $ = (query) => document.querySelector(query);
      const random = (min = 0, max = 10) =>
          Math.floor(Math.random() * (max - min + 1)) + min;

      const getBalloonStyle = () =>
          [
              `transform: rotate(${Math.floor(random(-15, 15) * 1.25)}deg)`,
              `translateX(${random(
                  -$("#living-room").clientWidth / 2,
                  $("#living-room").clientWidth
              )}px)`,
              `translateY(${random(-100, 100)}px);`,
              `color: ${
                  ["#eb4d4b", "#badc58", "#f9ca24", "#22a6b3"][
                      random(0, 3)
                  ]
              };`
          ].join(" ");

      function createElement(type, { style = "", ...props }) {
          const el = Object.assign(document.createElement(type), props);
          if (typeof style === "object") {
              Object.assign(el.style, style);
          } else if (style.length) {
              el.style.cssText = style;
          }
          return el;
      }

      function unpopBalloons() {
          Array.from(document.querySelectorAll(".popped")).forEach((e) => {
              e.classList.remove("popped");
              e.style.cssText = "";
          });
      }

      function generateBalloon() {
          const balloon = createElement("div", {
              className: "balloon",
              style: getBalloonStyle(),
              innerHTML: `<div class="helium"><div class="knot"><div class="string"></div></div></div>`
          });
          livingroom.appendChild(balloon);
          balloon.addEventListener("click", function (ev) {
              Object.assign(ev.target.style, {
                  transition: `all ${random(200, 800)}ms`
              });
              ev.target.classList.add("popped");
              setTimeout(() => {
                  livingroom.removeChild(balloon);
                  generateBalloons(2); 
              }, random(200, 800));
          });
      }

      for (let i = 0; i < count; i++) {
          generateBalloon();
      }
  }
});
