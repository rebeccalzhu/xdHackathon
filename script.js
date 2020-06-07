var emotion1 = "";
var emotion2 = "";
var emotion3 = "";
var emotions = ["happy", "sad", "angry", "scared", "powerful", "peaceful"];
var emotions2 = ["excited", "energetic", "hopeful", "optomistic", "disappointed", "tired", "relaxed", "cheerful", "anxious", "empty"];
var clicked = "white";
var unclicked = "black";

function button1Clicked(id) {
    emotion1 = id;
    document.getElementById(emotion1).style.color = clicked;
    for (i = 0; i < emotions.length; i++) {
        if ((emotions[i]) == (emotion1)) {
            continue;
        }
        else {
            document.getElementById(emotions[i]).style.color = unclicked;
        }
    }
    document.getElementById("word") = emotion1;
}

// It's now functional
function button2Clicked(id) {

    if (document.getElementById(id).style.color != (clicked)){
        if (emotion2 == "") {
            emotion2 = id;
            document.getElementById(id).style.color = clicked;
        }
        else if (emotion3 == "") {
            emotion3 = id;
            document.getElementById(id).style.color = clicked;
        }
    } 
    else {
        document.getElementById(id).style.color = unclicked;
        if (emotion2 == id) {
            emotion2 = "";
        }
        else if (emotion3 == id) {
            emotion3 = "";
        }
    }  
}