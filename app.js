var myGame = new OmerGame();
$(document).ready(function(){
myGame.startGame();

$('button').click(function(){
  myGame.startGame();
  });
});

$(document).ready(function(){

  $('.gridImg').click(function(){

    if($(this).attr('src') ===  $(".currentCard").attr('src')){
    // alert('Great!');
    myGame.nextRound();
    }
    else if ($(this).attr('src') === ('images/3.png')) {
      alert('You Won!');
    }
    else {
      // alert('Game Over');
      myGame.gameOver();
    }
  });



});
