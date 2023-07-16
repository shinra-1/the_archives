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
  document.getElementById("navlinks").style.left = "-100%";
}
function closeForm(){
  document.getElementById("oppen").style.display = "none";
}



// cart add and minus
 var add = document.getElementById('add');
 var show = document.getElementById('show');
 var minus = document.getElementById('minus',);
 var add2 = document.getElementById('add2');
 var show2 = document.getElementById('show2');
 var minus2 = document.getElementById('minus2',);
 var subtotal = 2;
 var price = 299;
 var tprice = 598;

 // increase quantity
add.addEventListener('click', calculate);
function calculate(){
  var show = document.getElementById('show').innerHTML;
  show++;
  subtotal++;
  tprice= tprice + price;
  document.getElementById('show').innerHTML = show++;
  document.getElementById('itemQ').innerHTML = subtotal;
  document.getElementById('tprice').innerHTML = tprice;
}
 // decrease quantity
 minus.addEventListener('click', calculate2);
 function calculate2(){
  if(document.getElementById('show').innerHTML > 1){
   var show = document.getElementById('show').innerHTML;
   show--;
   subtotal--;
   tprice = tprice - price;
   document.getElementById('show').innerHTML = show--;
   document.getElementById('itemQ').innerHTML = subtotal;
   document.getElementById('tprice').innerHTML = tprice;
 }}
  // increase quantity
add2.addEventListener('click', calculate3,subtotal);
function calculate3(){
  var show2 = document.getElementById('show2').innerHTML;
  show2++;
  subtotal++;
  tprice= tprice + price;
  document.getElementById('show2').innerHTML = show2++;
  document.getElementById('itemQ').innerHTML = subtotal;
  document.getElementById('tprice').innerHTML = tprice;
}
 // decrease quantity
 minus2.addEventListener('click', calculate4,subtotal);
 function calculate4(){
  if(document.getElementById('show2').innerHTML > 1){
   var show2 = document.getElementById('show2').innerHTML;
   show2--;
   subtotal--;
   tprice = tprice - price;
   document.getElementById('show2').innerHTML = show2--;
   document.getElementById('itemQ').innerHTML = subtotal;
   document.getElementById('tprice').innerHTML = tprice;
 }}

 // delete item
 function removeItem(){
  document.getElementById('item1').innerHTML ="";
  subtotal--;
  tprice = tprice - price;
  document.getElementById('itemQ').innerHTML = subtotal;
  document.getElementById('tprice').innerHTML = tprice;

 }
 function removeItem2(){
  document.getElementById('item2').innerHTML ="";
  subtotal--;
  tprice = tprice - price;
  document.getElementById('itemQ').innerHTML = subtotal;
  document.getElementById('tprice').innerHTML = tprice;
 }