$(document).ready(function(){
  
  $(".newCard").click(function(){
    $(".newCard").slideUp();
    $(".editor").slideDown();
  });

  $(".closing-x").click(function(){
    $(".newCard").slideDown();
    $(".editor").slideUp();
  });
});