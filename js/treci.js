$(document).ready(function () {
  $.ajax({
    url: "files/PONUDA.json",
    type: "get",
    dataType: "json",
    success: function (result) {
      prikaziPodatke(result);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });
});
function prikaziPodatke(sviPodaciJSON) {
  var sadrzaj = "";
  for (var jedanObjekat in sviPodaciJSON) {
    sadrzaj +=
      "<div class='artikal'><p class='naslov'>" +
      sviPodaciJSON[jedanObjekat].ime +
      "</p><img class='slika' src=" +
      sviPodaciJSON[jedanObjekat].slika +
      " alt=''/><p class='opis'" +
      sviPodaciJSON[jedanObjekat].opis +
      "</p><p class='cena'>" +
      sviPodaciJSON[jedanObjekat].coment +
      " vozila na stanju</p></div>";
  }

  document.querySelector("#probica").innerHTML = sadrzaj;
}

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
var ponudaTabela =
  "<table border=1 ><tr><td>marka vozila</td><td>dnevna cena</td></tr>";
for (var i = 0; i < vozila.length; i++) {
  ponudaTabela += "<tr><td>" + vozila[i] + "</td><td>" + cena[i] + "</td></tr>";
}
ponudaTabela += "</table>";
document.getElementById("prikazT").innerHTML = ponudaTabela;
$(document).ready(function () {
  $("#prikazT tr:even").css("background-color", "#dddd33");
  $("#prikazT tr").hover(
    function () {
      $(this).addClass("nova");
    },
    function () {
      $(this).removeClass("nova");
    }
  );
});
