



let videoPlayer = document.getElementById("video-player");
let choices = document.getElementById("choices");

// Hide the choice buttons initially

choices.style.display = "none";

function playClip(src) {
    videoPlayer.src = src;
    videoPlayer.play();
    choices.style.display = "none";
}

videoPlayer.addEventListener("ended", function() {
    // Show the choice buttons after the video clip has ended
    choices.style.display = "block";
});



