$(document).ready(function () {
  $(".smallimg").fadeTo(0, 0.5);

  $(".smallimg").bind("mouseover", function () {
    $(this).fadeTo(0, 1.0);
  });

  $(".smallimg").bind("mouseout", function () {
    $(this).fadeTo(0, 0.5);
  });

  $("#thumb1").bind("click", function () {
    $("#mainphoto").hide()
    $("#caption").html("Archway in the park");
    $("#mainphoto").attr("src", "images/image1.jpg").fadeIn();
    $(".smallimg").attr("border", "0");
    $("#thumb1").attr("border", "2");
  });

  $("#thumb2").bind("click", function () {
    $("#mainphoto").hide()
    $("#caption").html("Busy bee");
    $("#mainphoto").attr("src", "images/image2.jpg").fadeIn();
    $(".smallimg").attr("border", "0");
    $("#thumb2").attr("border", "2");
  });

  $("#thumb3").bind("click", function () {
    $("#mainphoto").hide()
    $("#caption").html("Munich Strasse");
    $("#mainphoto").attr("src", "images/image3.jpg").fadeIn();
    $(".smallimg").attr("border", "0");
    $("#thumb3").attr("border", "2");
  });

  $("#thumb4").bind("click", function () {
    $("#mainphoto").hide()
    $("#caption").html("Munich Gardens");
    $("#mainphoto").attr("src", "images/image4.jpg").fadeIn();
    $(".smallimg").attr("border", "0");
    $("#thumb4").attr("border", "2");
  });

  $("#thumb5").bind("click", function () {
    $("#mainphoto").hide()
    $("#caption").html("View from above");
    $("#mainphoto").attr("src", "images/image5.jpg").fadeIn();
    $(".smallimg").attr("border", "0");
    $("#thumb5").attr("border", "2");
  });

  $("#thumb6").bind("click", function () {
    $("#mainphoto").hide()
    $("#caption").html("View of the city");
    $("#mainphoto").attr("src", "images/image6.jpg").fadeIn();
    $(".smallimg").attr("border", "0");
    $("#thumb6").attr("border", "2");
  });

});
