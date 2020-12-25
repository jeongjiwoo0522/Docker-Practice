const toggle = document.querySelector(".navbar__togle");

toggle.addEventListener("click", (e) => {
  const navBarMenu = document.querySelector(".navbar__menu");
  const navBarIcons = document.querySelector(".navbar__icons");

  if(navBarIcons.style.display === "none") {
    navBarMenu.style.display = "flex";
    navBarIcons.style.display = "flex";
  } else {
    navBarMenu.style.display = "none";
    navBarIcons.style.display = "none";
  }
});