function bulb(x) {
    // Complete the function 
    var img;
    if (x==0) {
        img = "assets/bulbon.gif";
    }
    else {
        img = "assets/bulboff.gif";
    }
    document.getElementById("bulb").src = img;
}