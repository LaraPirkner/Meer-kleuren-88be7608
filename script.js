var Bgcolor = null;
var titleColour  = null;
function Bg() {
    backgroundColor = document.getElementById("colorSelect").value;
}

function titlecolour() {
    titleColor = document.getElementById("colorSelect").value;
}

function apply() {
    document.getElementById("body").style.backgroundColor = backgroundColor;
    document.getElementById("title").style.color = titleColor;
}