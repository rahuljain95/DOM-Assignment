let container = document.getElementById("container");
let display = document.getElementById("display");

// key up
document.addEventListener("keyup", function(e){
    display.style.color = "red";
    display.innerText = e.key;
});

// key down
document.addEventListener("keydown", function(e){
    display.style.color = "blue";
    display.innerText = e.key;
});
