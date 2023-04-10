let display = document.getElementById("display");
let inputBox = document.getElementById("inputBox");

// press any key
inputBox.addEventListener("keypress", function(e){
    display.innerText = "you are pressing "+ e.key;
});