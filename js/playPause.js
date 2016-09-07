/**
 * Created by User on 9/5/2016.
 */

(function(){
var video = document.getElementById("video");
var play = document.getElementById("playPause");

play.addEventListener("click", function(){
    if (video.paused === true){
        video.play();
        play.innerHTML = "<img src='img/pause-icon.png' alt='pause'>";
    }
    else {
        video.pause();
        play.innerHTML = "<img src='img/play-icon.png' alt='play'>";
    }
});
})();
