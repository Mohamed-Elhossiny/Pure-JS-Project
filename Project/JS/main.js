//Start Slider//
var imgSlide = document.getElementById("img-slide");
var lBtn = document.getElementById("left");
var rBtn = document.getElementById("right");
var imgArray = [
  "../Images/Phones/P1.jpg",
  "../Images/Phones/P5.jpg",
  "../Images/Phones/L3.jpg",
  "../Images/Phones/L8.jpg",
  "../Images/Phones/F1.jpg",
  "../Images/Phones/F2.jpg",
  "../Images/Phones/F4.jpg",
  "../Images/Phones/P3.jpg",
];

var counter = 0;
lBtn.addEventListener("click", function () {
  counter++;
  if (counter < imgArray.length) {
    imgSlide.setAttribute("src", imgArray[counter]);
  } else if (counter == imgArray.length) {
    counter = 0;
    imgSlide.setAttribute("src", imgArray[counter]);
  }
});

rBtn.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = imgArray.length-1;
    imgSlide.setAttribute("src", imgArray[counter]);
  }
  imgSlide.setAttribute("src", imgArray[counter]);
});

// End Slider //

// // Start Category buttons //
var phonebtn = document.getElementById("phonebtn");
var lapbtn = document.getElementById("lapbtn");
var fashionbtn = document.getElementById("fashionbtn");
var carbtn = document.getElementById("carbtn");
var phone = document.getElementById("phone");
var laptop = document.getElementById("laptop");
var fashion = document.getElementById("fashion");
var car = document.getElementById("car");

phonebtn.addEventListener("click", function (event) {
  // laptop.classList.toggle("showClass");
  phone.classList.toggle("showClass");
  laptop.style.display = "none";
  fashion.style.display = "none";
  car.style.display = "none";
});

lapbtn.addEventListener("click", function () {
  laptop.classList.toggle("showClass");
  phone.style.display = "none";
  // phone.classList.toggle("showClass");
  // fashion.style.display ="none";
  // car.style.display ="none";
});

fashionbtn.addEventListener("click", function () {
  fashion.classList.toggle("showClass");
  phone.style.display = "none";
  car.style.display = "none";
  laptop.style.display = "none";
});

carbtn.addEventListener("click", function () {
  car.classList.toggle("showClass");
  phone.style.display = "none";
  laptop.style.display = "none";
  fashion.style.display = "none";
});
// // End Category buttons //

// Start Adding

// var counter = Number(localStorage.getItem("counter"));
var counter = 0;
var add = document.querySelectorAll(".add");
var card = document.querySelector(".count");
for (i = 0; i < add.length; i++) {
  add[i].addEventListener("click", function () {
    counter++;
    var result = `+ ${counter}`;
    card.innerHTML = result;
    localStorage.setItem("counter", counter);
  });
}
//End Adding

// Favorite
var fav = document.getElementById("fav");
var like = document.getElementById("like");
var star = document.getElementById("star");
var starIcon = document.getElementById("starIcon");

fav.addEventListener("click", function () {
  like.classList.toggle("colorFav");
  console.log(like);
});
star.addEventListener("click", function () {
  starIcon.classList.toggle("colorStar");
  console.log(starIcon);
});

// End of favorite

// Start Image

var items = document.querySelectorAll(".item");
// console.log(items);

items.forEach(function (item) {
  var imageElement = item.querySelector("img");
  console.log(imageElement);
  imageElement.addEventListener("click", function () {
    var imgSrc = imageElement.getAttribute("src");
    console.log(imgSrc);
    localStorage.setItem("imgUrl", imgSrc);
    window.open("../about.html");
  });
});
