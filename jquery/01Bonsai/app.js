var main = function() {
  
}
 
$(document).ready(main);

$( "#top-text" ).keyup(function() {
  $( ".top-caption" ).text($("#top-text").val());
});

$( "#bottom-text" ).keyup(function() {
  $( ".bottom-caption" ).text($("#bottom-text").val());
});