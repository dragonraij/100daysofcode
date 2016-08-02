var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    
    if(firstName === "") {
      $('.first-name-error').text("Please Enter your first name")
    }
    
    var lastName = $('#last').val();
    
    if(lastName === "") {
      $('.last-name-error').text("Please Enter your last name")
    }
    
    var email = $('#email').val();
    
    if(email === "") {
      $('.email-error').text("Please Enter your email")
    }
    
    var password = $('#password').val();
    
    if(password === "") {
      $('.password-error').text("Please Enter a password")
    }
    else if (password.length < 8){
        $('.password-error').text("Good passwords should be longer than 8 characters")
    }
    
    if (email ==="admin@pocketbook.com") {
      $('.email-error').text("That email is already taken")        
    }

    return false;
  })
}

$(document).ready(main);