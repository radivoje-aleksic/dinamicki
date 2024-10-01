$(document).ready(function () {
  $(".naVrh").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".naVrh").fadeIn();
    } else {
      $(".naVrh").fadeOut();
    }
  });
  $(".tekstKontakt").hide();
  $(".naslovKontakt").click(function () {
    $(".tekstKontakt").fadeIn();
  });
});
$(document).ready(function () {
  $.ajax({
    url: "PONUDA.json",
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
