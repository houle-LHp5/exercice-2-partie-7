
const boldText = document.getElementById("boldText");
const colorText = document.getElementById("colorText");
const SizeText = document.getElementById("sizeText");

const textTarget = document.getElementById("textTarget");

function btnBold(){
    textTarget.style.fontWeight = "bold";
}

function btnColor(){
    textTarget.style.color = "pink";
}

function btnSize(){
    textTarget.style.fontSize = "   10rem";
}