var menubtn = document.getElementById("menu-bar");
var closebtn = document.getElementById("close-bar");
var open = document.getElementById("nav-list");
const navbar = document.querySelector(".nav-cont");

const navcolor = () => {
    navbar.classList.toggle('window-scroll', window.scrollY > 0);
}
                                                    
window.addEventListener('scroll',navcolor);

menubtn.addEventListener("click", () => {
  open.style.display = "flex";
  closebtn.style.display = "inline-block";
  closebtn.style.position = "fixed";
  menubtn.style.display = "none";
  open.style.flexDirection = "column";
});

closebtn.addEventListener("click", () => {
  open.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block";
});

