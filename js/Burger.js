const x = document.getElementById("nav");
window.addEventListener("resize",windowChange);
function burgermenu() {
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }    
}

function windowChange(){
    if(window.innerWidth > 800)
        x.style.display = "grid";
    else
        x.style.display = "none";
}