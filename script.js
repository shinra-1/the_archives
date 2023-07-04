// search box open close
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// side bar open close
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// side bar submenu open close
let htmlcssArrow = document.querySelector(".cate-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".acc-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

// login popup open close

function openForm(){
  document.getElementById("oppen").style.display = "block";
  menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";
  }
}
function closeForm(){
  document.getElementById("oppen").style.display = "none";
}