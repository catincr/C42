
$(document).ready(function() {
  $('#submitmsg')
    .bind('click', function() {
      var message = $('#usermsg').val();
      $('#chatbox').append('<p>' + message + '</p>');
      $('#usermsg').val('');
  
    });
});


