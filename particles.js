particlesJS("particles-js", {
  particles: {
    number: { value: 55 },
    size: { value: 2 },
    color: { value: "#2ea8ff" },
    line_linked: {
      enable: true,
      distance: 130,
      color: "#2ea8ff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" }
    }
  }
});
document.addEventListener("DOMContentLoaded", function(){

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const overlay = document.getElementById("navOverlay");
  const links = navLinks.querySelectorAll("a");

  hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-open");
  });

  overlay.addEventListener("click", closeMenu);

  links.forEach(link=>{
    link.addEventListener("click", closeMenu);
  });

  function closeMenu(){
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("nav-open");
  }

});
