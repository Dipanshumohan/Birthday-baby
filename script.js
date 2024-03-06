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
    "Hello Misha.... How are you??? Don't click on the button yet hehe~",
    "So you by now have known that this is your Birthday surprise.... This is what I have created from my basic Engineering skills...totally not flexing :33",
    "It's been two months since we met and every day since I met you, there's always been a smile in my face... Thank you so much Misha I really appreciate you in my life.",
    "and so I'll continue to always tell you that I love you even when you tell me not too... I am like this deal with it hehe",
    "It will be your first birthday in which I'll be with you and I wish that it won't be the last... I wanna celebrate every Birthday of yours in a way that you look forward for next one <3",
    "and Now I want you to click that button...let's count from 3.......3...",
    "2.....",
    "1.....",
    "NOWWW.....",
     "....... Just click it already TT... you tease!",
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


  var i = 0;
var txt1 = "So yeah.. this is your first gift!.....  <<               Your and yours only... A Virtual cake!!! sorry I am ill rn to make any joke TT  <<<                Well anyways.. Let's blow candles.. click on the flames~                                         > Happy Birthday Sweetheart <3 < May all the Blessing of god falls on you..  <<                  Happy 20th Birthday!!!! < I LOVE YOUUUUUUU!!!! <<                       And these balloons are for you.. you can pop them but please not to many as I am blowing them myself heheheh..                                  > You are the Best Misha!...                     << May you get all the happiness that you want and you never feel sad.                                          > I will always try my best to make you feel happy!                    << You are my whole Heart!! My other half...                       >I Love U <SweetHeart.....! |                  <<<< I wish you a very Happy Birthday once again~ Stay beautiful, cute and the amazing person you are!";
var speed = 100;

function typeWriter() {
  if (i < txt1.length) {        
     if(txt1.charAt(i)=='<')
      document.getElementById("text1").innerHTML += '</br>'
    else if(txt1.charAt(i)=='>')
      document.getElementById("text1").innerHTML = ''
      else
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

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
        cake.classList.add('show');
        typeWriter();
    
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
