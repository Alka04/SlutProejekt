function burgermenu() {
    var x = document.getElementById("nav");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }    
}