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

// THIS IS NOT FULLY FUNCTIONAL, please check over??
function button2Clicked(id) {
    emotion2 = id;
    document.getElementById(emotion2).style.color = clicked;

    // removes if it was checked before
    if (document.getElementById(id).style.color.equals(clicked)) {
        alert("Uh");
        document.getElementById(id).style.color = unclicked;
        if (emotion2 == id) {
            emotion2 = "";
        }
        else if (emotion3 == id) {
            emotion3 = "";
        }
    }
    // adds if it's not checked yet
    else {
        if (emotion2 == "") {
            alert("Yes");
            emotion2 = id;
            document.getElementById(id).style.color = clicked;
        }
        else if (emotion3 == "") {
            emotion3 = id;
            document.getElementById(id).style.color = clicked;
        }
    }
    for (i = 0; i < emotions2.length; i++) {
        if ((emotions2[i]) == emotion2 || emotions[i] == emotion3) {
            continue;
        }
        else {
            document.getElementById(emotions2[i]).style.color = unclicked;
        }
    }
}