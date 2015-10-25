function newRound() {
  var sequence = [1,2,1]; // red, green, red
  animate(sequence);
}
 
function animate(sequence) {
  var i = 0;
  var interval = setInterval(function() {
    lightUp(sequence[i]);
 
    i++;
    if (i >= sequence.length) {
      clearInterval(interval);
    }
  }, 600);
}

 
function lightup(tile) {
  var $tile = $('[data-tile=' + tile + ']').addClass('lit');
  window.setTimeout(function() {
    $tile.removeClass('lit');
  }, 300);
 
}