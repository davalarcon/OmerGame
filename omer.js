console.log('ready');
function OmerGame (){
  this.grid = [0,0,0,0,0,0,0,0,0];
  this.hebrewNumbers = ['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png', 'images/11.png','images/12.png','images/13.png','images/14.png','images/15.png','images/16.png','images/17.png','images/18.png','images/19.png','images/20.png','images/21.png','images/22.png','images/23.png',
  'images/24.png','images/25.png','images/26.png','images/27.png','images/28.png','images/29.png','images/30.png' ];
  this.randomCardsGrid = '';
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
      this.showCurrentCard();
      this.addRandomCards();

      $('#counter').html(this.round);
    };


    OmerGame.prototype.nextRound = function (){
      this.round +=1;
      this.showCurrentCard();
      this.addRandomCards();
      $('#counter').html(this.round);
    };

    OmerGame.prototype.addRandomCards = (function (){
      function shuffle(input) {
        for (var i = input.length-1; i >=0; i--) {

          var randomIndex = Math.floor(Math.random()*(i+1));
          var itemAtIndex = input[randomIndex];

          input[randomIndex] = input[i];
          input[i] = itemAtIndex;
        }
        return input;
      }

      //                             slice to copy the array
      //                            (shuffle changes the original)
      //                                        |
    var shuffledNumbers = shuffle(this.hebrewNumbers.slice());
    var gridNumbers = shuffledNumbers.slice(0,9);
    var randomPosition = (Math.floor(Math.random()*9)+0);
    gridNumbers[randomPosition]=this.currentCard;
    for (var i=0 ; i<=9 ; i++){

      $('#number'+i).attr('src', gridNumbers[i]);
    }

      // var randomCards = Math.floor((Math.random()*hebrewNumbers.length)+0);
      // this.randomCardsGrid.push(this.hebrewNumbers[randomCards]);

    });

    OmerGame.prototype.showCurrentCard = (function(){
    this.currentCard = (this.hebrewNumbers[this.currentNumber-1]);
      var currentCardImgSrc = $(".currentCard").attr('src', this.currentCard);
    });





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
