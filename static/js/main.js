var music = new Audio("../music/katrinalil.mp3");

var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked...");
    playMusic();
  } else {
    console.log("Checkbox is not checked...");
    stopMusic();
  }
});

function playMusic() {
    music.play();
}

function stopMusic() {
    music.pause();
    music.currentTime = 0;
}
