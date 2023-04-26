var addAbout = document.getElementById("add");
var card = document.querySelector(".count");
addAbout.addEventListener("click", function () {
  var counterIndex = Number(localStorage.getItem("counter"));
  counterIndex++;
  console.log(counterIndex);
  card.innerHTML = `+ ${counterIndex}`;
  localStorage.setItem("counter", counterIndex);
});

var imageAbout = document.getElementById("aboutImg");
imageAbout.setAttribute("src", localStorage.getItem("imgUrl"));
