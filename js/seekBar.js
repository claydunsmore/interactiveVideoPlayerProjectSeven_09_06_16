/**
 * Created by User on 9/5/2016.
 */

(function(){
var video = document.getElementById("video");
var seekBar = document.getElementById("seekBar");
var currentTimeText = document.getElementById("currentTimeText");
var durationTimeText = document.getElementById("durationTimeText");


//event listener for seek slider
seekBar.addEventListener("change", function(){
    var time =  (seekBar.value / 100) * video.duration;
    video.currentTime = time;
});

//update seek bar during playback

video.addEventListener("timeupdate", function(){
    var value = (100 / video.duration) * video.currentTime;
    seekBar.value = value;
    var currentMinutes = Math.floor(video.currentTime / 60);
    var currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
    var durationMinutes = Math.floor(video.duration / 60);
    var durationSeconds = Math.floor(video.duration - durationMinutes * 60);

    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
    }
    currentTimeText.innerHTML = currentMinutes + ":" + currentSeconds;
    durationTimeText.innerHTML = durationMinutes + ":" + durationSeconds;
});


//pause slider handle when dragging
seekBar.addEventListener("mousedown", function(){
    video.pause();
});

//play video when slider is dropped
seekBar.addEventListener("mouseup", function(){
    video.play();
});
})();
