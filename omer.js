console.log('ready');
function OmerGame (){
  this.grid = [
                [0,0,0],
                [0,0,0],
                [0,0,0],
              ];
  this.hebrewNumbers = ['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png' ];
  this.randomCardsGrid = '';
  this.round = 7;
  this.currentNumber = 1;
  this.currentCard = '';
  this.spotOn = '';
  }
$(document).ready(function(){

//______ sounds_________
    $('.start-game').click(function(){
      ion.sound.play('glass');
    });

//_______________________

    OmerGame.prototype.startGame = function (){
      this.addRandomCards = function(){
          for ( var i = 0 ; i <= 3; i++){
          this.addRandomCards();
        }
      };
      this.showCurrentCard();
      this.round+=1;
      this.currentNumber+=1;
      $('#counter').html(this.round);
      };

    OmerGame.prototype.nextRound = function (){
      this.addRandomCards();
      this.currentNumber +=1;
      this.round +=1;
      $('#counter').html(this.round);
    };

    OmerGame.prototype.addRandomCards = (function (){
      var randomCards = Math.floor((Math.random()*hebrewNumbers.length)+0);
      this.randomCardsGrid.push(this.hebrewNumbers[randomCards]);

    });

    OmerGame.prototype.showCurrentCard = (function(){
    this.currentCard = (this.hebrewNumbers[this.round]);
      var currentCardImgSrc = $(".currentCard").attr('src', this.currentCard);


    });


$('#counter').html(this.round);

});




//
//
// ion.sound({
//     sounds: [
//         {name: "glass"},
//         {name: "bell_ring"},
//         {name: "branch_break"},
//         {name: "button_click"}
//     ],
//
//     // main config
//     path: "ion.sound-3.0.7/sounds/",
//     preload: true,
//     multiplay: true,
//     volume: 0.9
// });
//
// // play sound
// ion.sound.play("beer_can_opening");

// var hebrewNumbers = {
//   n1To10: ['images/1.png','images/2.png','images/3.png' ],
//   n11To20: [],
//   n21To30: [],
//   n31To40: [],
//   n41To50: [],
//   };
//
//
