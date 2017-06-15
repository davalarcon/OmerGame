var myGame = new OmerGame();
$(document).ready(function(){
myGame.startGame();

// $('button').click(function(){
//   myGame.startGame();
//   });
});

$(document).ready(function(){

  $('.gridImg').click(function(){
    console.log("My game current number:" + myGame.currentNumber);
    if(($(this).attr('src') ===  $(".currentCard").attr('src') ) && myGame.currentNumber <= 3){
      console.log("Inside the function");
    myGame.nextRound();

    }
    // else if (myGame.currentNumber === 4) {
    //   alert('You Won!');
    // }
    else {
      myGame.gameOver();
    }
  });



});


// else if ($(this).attr('src') === $(".currentCard").attr('images/3.png')) {
//   alert('You Won!');
