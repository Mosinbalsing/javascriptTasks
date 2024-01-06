var box = document.getElementById("box");
var btn = document.getElementById("btn");
function  change() {
    console.log("Mosin");
    if (box.style.backgroundColor==="red") {
        box.style.backgroundColor="white";
        btn.innerText="Red";
    }
    else
    {
        box.style.backgroundColor="red";
        btn.innerText="White";
    }
}