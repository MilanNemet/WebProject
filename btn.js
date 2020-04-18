$(document).ready(function(){
  
  $(".newCard").click(function(){
    $(".editor").hide();
    $(".newCard").show();
    $(this).slideUp();
    $(this).parent().children(".editor").delay("slow").slideDown();
  });

  $(".closing-x").click(function(){
    $(".newCard").delay("slow").slideDown();
    $(".editor").slideUp();
  });
});