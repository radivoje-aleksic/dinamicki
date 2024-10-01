console.log("dobar dan");

var vozila = [
  "Seat Ibica",
  "Citroen C4",
  "Skoda Fabia",
  "Skoda Fabia",
  "Polo",
  "Polo",
  "Skoda Fabia",
  "Skoda Fabia",
  "Renault Megane",
  "Golf 7",
  "Skoda fabia",
  "Renault clio",
];
var cena = [30, 18, 19, 19, 18, 30, 33, 31, 19, 19, 33, 31];
var ponudaVozila = "";
for (var i = 0; i < vozila.length; i++) {
  let brojac = i + 1;
  ponudaVozila +=
    "<div class='slike'> <img  src=images/" +
    brojac +
    ".jpg>" +
    "</br>" +
    vozila[i] +
    "</br> vec od " +
    cena[i] +
    " eura dnevno </div>";
}
document.getElementById("ponuda").innerHTML = ponudaVozila;

function provera() {
  var imeV = idIme.value;
  var provera = /^[A-z]{3,13}$/i;
  var istinitostI = provera.test(imeV);
  console.log(istinitostI);

  if (istinitostI) {
    document.querySelector(".spanPrvi").innerHTML = "uspesno uneto ime";
    return false;
  } else {
    document.querySelector(".spanPrvi").innerHTML = "ime nije u dobroj formi";
    document.querySelector(".spanPrvi").classList = "crvena";
    return false;
  }
  return false;
}

var padajuci1 = "Izaberite dan u mesecu:<select><option>izaberite</option>";
for (let i = 1; i <= 31; i++) {
  padajuci1 += "<option>" + i + "</option>";
}
padajuci1 += "</select></br>";

var padajuci2 = "Izaberite mesec:<select><option>izaberite</option>";
for (let i = 1; i <= 12; i++) {
  padajuci2 += "<option>" + i + "</option>";
}
padajuci2 += "</select></br>";

var padajuci3 = "Godina:<select><option>izaberite</option>";
for (let i = 2024; i <= 2027; i++) {
  padajuci3 += "<option>" + i + "</option>";
}
padajuci3 += "</select></br>";

document.querySelector("#padajuci").innerHTML =
  padajuci1 + padajuci2 + padajuci3;
console.log("padajuci");
document.querySelector("#padajuci").classList = "padajuca";
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
