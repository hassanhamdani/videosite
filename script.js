



var videoPlayer = document.getElementById("video-player");
var playPauseButton = document.getElementById("play-pause");
var playPauseIcon = document.getElementById("play-pause-icon");
var choices = document.getElementById("choices");

// Hide the choice buttons initially
choices.style.display = "none";

function togglePlayPause() {
    if (videoPlayer.paused || videoPlayer.ended) {
        videoPlayer.play();
        playPauseIcon.src = "pause-icon.png";
    } else {
        videoPlayer.pause();
        playPauseIcon.src = "play-icon.png";
    }
}

function playClip(src) {
    videoPlayer.src = src;
    videoPlayer.play();
    playPauseIcon.src = "pause-icon.png";
    // Hide the choice buttons again after a choice has been made
    choices.style.display = "none";
}

videoPlayer.addEventListener("ended", function() {
    // Show the choice buttons after the video clip has ended
    choices.style.display = "flex";
});


