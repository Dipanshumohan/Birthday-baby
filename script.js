function switchScreen() {
    var body = document.body;
    var cake = document.getElementById('birthday-cake');
    var button = document.getElementById('button');

    body.style.backgroundColor = 'pink'; // Change background color to pink

    button.style.display = 'none'; // Hide the button

    setTimeout(function () {
        cake.classList.remove('hidden'); // Remove the 'hidden' class after 2 seconds
        cake.classList.add('show'); // Add the 'show' class to reveal the cake with transition
    }, 2000);


}

$(document).ready(function () {
    $(".candles").click(function () {
        $(".flame").animate({ "opacity": 0 }, "fast");
        $(".flame2").animate({ "opacity": 0 }, "fast");
        $(".flame3").animate({ "opacity": 0 }, "fast");
        $(".text").animate({ "opacity": 1, "top": -90 }, "fast");
    });
});



