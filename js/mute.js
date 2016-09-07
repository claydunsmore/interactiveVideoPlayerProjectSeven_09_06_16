/**
 * Created by User on 9/5/2016.
 */

(function(){
//mute button
var video = document.getElementById("video");
var mute = document.getElementById("mute");

mute.addEventListener("click", function(){
    if (video.muted === false) {
        video.muted = true;
        mute.innerHTML = "<img src='img/volume-on-icon.png' alt='volume_on'>";
    }
    else {
        video.muted = false;
        mute.innerHTML = "<img src='img/volume-off-icon.png' alt='volume_off'>";
    }
});
})();