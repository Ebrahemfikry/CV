function myFunction(e) {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active");
    });
    e.target.className = "active";
}





// light and dark mood ##########################
let lamp = document.getElementById("moodLight");
let sun = document.getElementById("mood");
lamp.onclick = function(){
    this.style.display = "none";
    sun.style.display = "inline-block";
    document.body.classList.toggle("darktheme");
}

sun.onclick = function(){
    this.style.display = "none";
    lamp.style.display = "inline-block";
    document.body.classList.toggle("darktheme");
}



let preloader = document.getElementById("preloader");
window.addEventListener("load", function() {
    preloader.style.display = "none";
})


