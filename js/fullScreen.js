/**
 * Created by User on 9/5/2016.
 */

(function(){
var video = document.getElementById("video");
var fullScreen = document.getElementById("fullScreen");

fullScreen.addEventListener("click",function(){
// go full-screen
if (video.requestFullscreen) {
    video.requestFullscreen();
} else if (video.webkitRequestFullScreen) {
    video.webkitRequestFullScreen();
} else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
} else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
}

});
})();