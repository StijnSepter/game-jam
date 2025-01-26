function myFunction(){
    let x = document.getElementById("big");
    let y = document.getElementById("small");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {    
        x.style.display = "none";
        y.style.display = "block";
    }
}
