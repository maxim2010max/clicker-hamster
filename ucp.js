let index;
let div = document.querySelector(".res");
let but = document.querySelector('.btn');

if (localStorage.getItem("cl")) {
   index = parseInt(localStorage.getItem("cl"))
} else {
   index = 0
}
div.innerText = index;

but.addEventListener("click", inpgo);
function inpgo() {
   index = index + 1


   localStorage.setItem("cl", index);
   div.innerText = localStorage.getItem("cl");
   if (index >= 10) but.innerText = "малый клик";
   if (index >= 50) but.innerText = "средний клик";
   if (index >= 100) but.innerText = "большой клик";

}
function indexgo() {
  if (index >= 10) but.innerText = "малый клик";
   if (index >= 50) but.innerText = "средний клик";
   if (index >= 100) but.innerText = "большой клик";
}
indexgo();
document.addEventListener('mousemove', function (e) {
   dot1(e);
   dot2(e);
   dot3(e);
   dot4(e);


});
function dot1(e) {
   console.log(e.x, e.y);
   document.querySelector('.dot1').style.cssText =
      `transform:translate( ${e.x / 30}px, ${e.y / 30}px)` //принимает значение из скрипта ``
}
function dot2(e) {
   console.log(e.x, e.y);
   document.querySelector('.dot2').style.cssText =
      `scale: 1.${e.x * e.y}` //принимает значение из скрипта ``
}
function dot3(e) {
   console.log(e.x, e.y);
   document.querySelector('.dot3').style.cssText =
      `scale: 0.${e.x * e.y}` //принимает значение из скрипта ``
}
function dot4(e) {
   console.log(e.x, e.y);
   document.querySelector('.dot4').style.cssText =
      `transform:translate( ${e.x / 30}px, ${e.y / 30}px)` //принимает значение из скрипта ``
}