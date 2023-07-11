// navigation background
function changeBg() {
    var navbar = document.getElementById('navbar')
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('bgColor');
    } else{
        navbar.classList.add('bgColor'); 

    }
}

window.addEventListener('scroll', changeBg);

// Main menu
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}