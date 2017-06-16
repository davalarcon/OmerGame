var myGame = new OmerGame();
$(document).ready(function(){
myGame.startGame();

// $('button').click(function(){
//   myGame.startGame();
//   });
});

$(document).ready(function(){

  $('.gridImg').click(function(){
    ion.sound.play('button_tiny');

    if(($(this).attr('src') ===  $(".currentCard").attr('src') ) && myGame.currentNumber <= 5){
    myGame.nextRound();
    }
    else if (myGame.currentNumber === 6) {
      ion.sound.play('matal_plate_2');
      alert('You Won!');
      window.location = "index.html";
      // myGame.youWin();
    }
    else {
      ion.sound.play('metal_plate_2');
      alert('Game Over. Please try again!');
      window.location = "index.html";
      // myGame.gameOver();

    }
  });



});
