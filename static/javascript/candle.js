$(function() {
  var flame = $('#flame');
  var txt = $('h1');

  flame.on({
    click: function() {
      flame.removeClass('burn').addClass('puff');
      $('.smoke').each(function() {
        $(this).addClass('puff-bubble');
      });
      $('#glow').remove();
      txt.hide().html("May that<b> wish </b>  come true..").delay(750).fadeIn(300);
      $('#candle').animate({
        'opacity': '.5'
      }, 100);

      // Redirect to another HTML page
      setTimeout(function() {
        window.location.href = 'blownCandle';
         // Replace 'another_page.html' with the desired URL
      }, 3000); // Adjust the delay time (in milliseconds) before redirection
    }
  });

  
});