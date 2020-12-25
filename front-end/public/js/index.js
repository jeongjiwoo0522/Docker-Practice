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

const boardArticle = document.getElementById("board");
const chatArticle = document.getElementById("chat");

boardArticle.addEventListener("click", (e) => {
  document.querySelector(".article__board").style.display = "block";
  document.querySelector(".article__chat").style.display = "none";
});

chatArticle.addEventListener("click", (e) => {
  document.querySelector(".article__chat").style.display = "block";
  document.querySelector(".article__board").style.display = "none";
});