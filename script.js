function switchScreen() {
    var screen1 = document.getElementById('screen1');
    var screen2 = document.getElementById('screen2');
  
    screen1.classList.toggle('active');
    screen2.classList.toggle('active');
  }
  $(document).ready(function() {
    $(".candles").click(function() {
        $(".flame").animate({"opacity":0},"fast");
        $(".flame2").animate({"opacity":0},"fast");
        $(".flame3").animate({"opacity":0},"fast");
        $(".text").animate({"opacity":1,"top":-90},"fast");

    });

});