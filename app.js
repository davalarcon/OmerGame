$(document).ready(function(){

function OmerGame (){
  this.hebrewNumbers = {
    n1To10: ['images/1.png','images/2.png','images/3.png' ],
    n11To20: [],
    n21To30: [],
    n31To40: [],
    n41To50: [],
    };
  this.randomCards= [];
  this.round = 1;
  this.currentNumber = 1;
  this.currentCard = [];

}

OmerGame.prototype.startGame = (function ())


function getRandomNumber (){
  var randomNumber = Math.floor((Math.random()*hebrewNumbers.n1To10.length)+0);

  var img = hebrewNumbers.n1To10[randomNumber];

  $(".randomN").attr('src', img);
}

getRandomNumber();



});

$('#counter').html("counter");













// var currentNumber=0;
// while (currentNumber<50){
//   currentNumber+=1;
//   console.log(currentNumber);
// }
