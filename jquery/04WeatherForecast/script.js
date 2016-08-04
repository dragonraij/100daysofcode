var main = function() {
  $(".day").on("clicked", 
    $(".day").next().toggleClass("hourly")
  
  )
};

$(document).ready(main);