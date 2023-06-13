<!-- <script>
    import {Howl, Howler} from 'howler';
    // import audio from ''
    // Load the audio file
var sound = new Howl({
  src: ['./sound.mp3']
});


// Play the audio when the play button is clicked
function playSound() {
  sound.play();
}

function pauseSound() {
  if (sound.playing()) {
    sound.pause();
  } else {
    sound.play();
  }
}

function skipSound() {
  sound.stop();
  sound = new Howl({
    src: ['next_audio.mp3']
  });
  sound.play();
}

function volume() {
  var volume = sound.volume();
  if (volume === 1.0) {
    sound.volume(0.5);
  } else {
    sound.volume(1.0);
  }
}

// sound.on('play', function() {
//   var progressBar = document.getElementById('progress-bar');
//   setInterval(function() {
//     var progress = sound.seek() / sound.duration();
//     progressBar.style.width = progress * 100 + '%';
//   }, 100);
// });
</script>

<style>
    #music-player {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #333;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#play-btn,
#skip-btn,
#volume-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
}

#progress-bar {
  width: 80%;
  height: 5px;
  background-color: #fff;
  margin-top: 20px;
}
</style>

<div id="music-player">
  <div id="play-btn">
    <i class="fa fa-play"></i>
  </div>
  <div id="skip-btn">
    <i class="fa fa-forward"></i>
  </div>
  <div id="volume-btn">
    <i class="fa fa-volume-up"></i>
  </div>
  <div id="progress-bar"></div>
</div> -->