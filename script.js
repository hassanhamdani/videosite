



let videoPlayer = document.getElementById("video-player");
let choices = document.getElementById("choices");
let choices1 = document.getElementById("choices1");
let choices2 = document.getElementById("choices2");
let choices3 = document.getElementById("choices3");
let choices4 = document.getElementById("choices4");
let choices5 = document.getElementById("choices5");

let scene = 1;

// Hide the choice buttons initially

choices.style.display = "none";

function playClip(src) {
    videoPlayer.src = src;
    videoPlayer.play();
    choices.style.display = "none";
    choices5.style.display="none";
}

function incrementScene(){
    scene++;
}

function makeitlast(){
    scene=6;
}

function restartmovie(){
    scene=1;
}

videoPlayer.addEventListener("ended", function() {
    // Show the choice buttons after the video clip has ended, check for the previous choices style to be none and then change current choice to block

    if(scene == 1){
        choices.style.display ="block";
        incrementScene();
    }

    else if(scene==2){
        choices.style.display="none";
        choices1.style.display ="block";
        incrementScene();
    }

    else if(scene==3){
        choices1.style.display="none";
        choices2.style.display ="block";
        incrementScene();
    }

    else if(scene==4){
        choices2.style.display="none";
        choices3.style.display ="block";
        incrementScene();
    }
    else if(scene==5){
        choices3.style.display="none";
        choices4.style.display ="block";
        incrementScene();
    }
    else if(scene==6){
        choices1.style.display="none";
        choices2.style.display="none";
        choices3.style.display="none";
        choices4.style.display="none";
        choices5.style.display="block";
    }
});


//     if (choices.style.display == "none") {
//         choices.style.display = "block";
//     }
//     else if (choices.style.display == "block" && choices1.style.display=="none") {
//         choices.style.display= "none";
//         choices1.style.display = "block";
//     }
//     else if (choices2.style.display == "none") {
//         choices3.style.display = "block";
//     }
//     else if (choices3.style.display == "none") {
//         choices4.style.display = "block";
//     }
// });



