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
    $("#caption").html("Two cats laying together");
    $("#mainphoto").attr("src", "images/cats-1.webp").fadeIn();
    $(".smallimg").attr("border", "0");
    $("#thumb1").attr("border", "2");
  });

  $("#thumb2").bind("click", function () {
    $("#mainphoto").hide()
    $("#caption").html("A cat in the grass");
    $("#mainphoto").attr("src", "images/cats-2.jpg").fadeIn();
    $(".smallimg").attr("border", "0");
    $("#thumb2").attr("border", "2");
  });

  $("#thumb3").bind("click", function () {
    $("#mainphoto").hide()
    $("#caption").html("A cat looking stressed");
    $("#mainphoto").attr("src", "images/cats-3.jpg").fadeIn();
    $(".smallimg").attr("border", "0");
    $("#thumb3").attr("border", "2");
  });

  $("#thumb4").bind("click", function () {
    $("#mainphoto").hide()
    $("#caption").html("A cat in very short grass");
    $("#mainphoto").attr("src", "images/cats-4.jpg").fadeIn();
    $(".smallimg").attr("border", "0");
    $("#thumb4").attr("border", "2");
  });

  $("#thumb5").bind("click", function () {
    $("#mainphoto").hide()
    $("#caption").html("A cat with a single orange brain cell sleeping");
    $("#mainphoto").attr("src", "images/cats-5.png").fadeIn();
    $(".smallimg").attr("border", "0");
    $("#thumb5").attr("border", "2");
  });

  $("#thumb6").bind("click", function () {
    $("#mainphoto").hide()
    $("#caption").html("A cat with a single orange brain cell screaming");
    $("#mainphoto").attr("src", "images/cats-6.png").fadeIn();
    $(".smallimg").attr("border", "0");
    $("#thumb6").attr("border", "2");
  });

});
