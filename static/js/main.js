var music = new Audio("../music/katrinalil.mp3");

var checkbox = document.querySelector("input[name=checkbox]");

var image = document.getElementById("profile-picture");

function goSnipping() {
  image.classList.add("spin");
}

function stopSpinning() {
  image.classList.remove("spin");
}

function playMusic() {
  music.play();
}

function stopMusic() {
  music.pause();
  music.currentTime = 0;
}

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked...");
    goSnipping();
    playMusic();
  } else {
    console.log("Checkbox is not checked...");
    stopSpinning();
    stopMusic();
  }
});





