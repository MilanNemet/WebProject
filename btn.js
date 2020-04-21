$( window ).on( "load", function(){
  console.log("window loaded");

  $(".newCard").click(function () {
      $(".editor").hide();
      $(".newCard").show();
      $(this).slideUp(500);
      $(this).parent().children(".editor").delay(600).slideDown(500);
  });

  $(".closing-x").click(function () {
      $(".editor").slideUp(500);
      $(".newCard").delay(600).slideDown(500);
  });

});