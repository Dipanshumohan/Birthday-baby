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
      setTimeout(type, 160); // Adjust typing speed here (160ms)
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
    $(".candles").click(function () {
        $(".flame").animate({ "opacity": 0 }, "fast");
        $(".flame2").animate({ "opacity": 0 }, "fast");
        $(".flame3").animate({ "opacity": 0 }, "fast");
        $(".text").animate({ "opacity": 1, "top": -90 }, "fast");
    });
});




