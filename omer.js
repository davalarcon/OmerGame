function OmerGame (){
  // this.grid = [0,0,0,0,0,0,0,0,0];
  this.hebrewNumbers = ['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png', 'images/11.png','images/12.png','images/13.png','images/14.png','images/15.png','images/16.png','images/17.png','images/18.png','images/19.png','images/20.png','images/21.png','images/22.png','images/23.png',
  'images/24.png','images/25.png','images/26.png','images/27.png','images/28.png','images/29.png','images/30.png','images/31.png','images/32.png','images/33.png','images/34.png','images/35.png','images/36.png','images/37.png','images/38.png','images/39.png','images/40.png', 'images/41.png','images/42.png','images/43.png','images/44.png','images/45.png','images/46.png','images/47.png','images/48.png','images/49.png','images/50.png' ];
  this.currentNumber = 1;
  this.currentCard = '';
  // this.time = 1;
  }

$(document).ready(function(){

    OmerGame.prototype.startGame = function (){
      this.showCurrentCard();
      this.addRandomCards();
      this.currentNumber = 1;
      ion.sound.play('adventurers');
      this.clock();
      // this.currentCard = 'image/1.png';

      $('#counter').html(this.currentNumber);
    };

    OmerGame.prototype.clock = function (){

      timeUp = setInterval(timer, 1000);
      var count = 60;
      function timer(){
        count = count -1;
        $('h2').html(count);

        if (count===-1){
          // myGame.time = 0;
          $('h2').html("0");
          clearInterval(timeUp);
          showModalLose();
        }
      }
    };


    OmerGame.prototype.nextRound = function (){
      this.currentNumber +=1;
      this.showCurrentCard();
      this.addRandomCards();
      $('#counter').html(this.currentNumber);
    };

    OmerGame.prototype.addRandomCards = (function (){
      function shuffle(input) {
        for (var i = 0; i<=50; i++) {
          var randomIndex = (Math.floor(Math.random()*50)+1);
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
    });

    OmerGame.prototype.showCurrentCard = (function(){
    this.currentCard = (this.hebrewNumbers[this.currentNumber-1]);
       currentCardImgSrc = $(".currentCard").attr('src', this.currentCard);
    });

    OmerGame.prototype.gameOver = function () {
      alert("Game over!! Try again!!");
      this.clock(clearInterval(timeUp));
      this.currentNumber = 1;
      this.startGame();
    };
    OmerGame.prototype.youWin = function (){
      // alert("Great game! You Win!");
      this.currentNumber = 1;
      this.clock(clearInterval(timeUp));
      this.startGame();
    };

//buttons------------------
        $('.stop-clock').click(function(){
          ion.sound.play('branch_break');
          this.clock(clearInterval(timeUp));
        });
        $('.turn-off-cards').on('click', function(){
          ion.sound.play('branch_break');
          $('.currentCard').fadeToggle(200);
        });

//_______________________


});

// --------------------SOUNDS------------------

ion.sound({
    sounds: [
        {name: "glass"},
        {name: "bell_ring"},
        {name: "branch_break"},
        {name: "button_click"},
        {name: "fantasy1"},
        {name: "metal_plate_2"},
        {name: "button_tiny"},
        {name: "victory"},
    ],

    // main config
    path: "ion.sound-3.0.7/sounds/",
    preload: true,
    multiplay: false,
    volume: 0.99
});

ion.sound({
    sounds: [

        {name: "adventurers"},

    ],

    // main config
    path: "ion.sound-3.0.7/sounds/",
    preload: true,
    multiplay: false,
    volume: 0.2
});


// -------------- MODAL ----------------

// Get the modal
var modal = document.getElementById('myModal');
var modalLose= document.getElementById('myModalLose');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanLose = document.getElementsByClassName("closeLose")[0];

// When the user clicks on the button, open the modal
 function showModal() {
    modal.style.display = "block";
}
function showModalLose() {
   modalLose.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    window.location = "index.html";
};
spanLose.onclick = function() {
    window.location = "index.html";
};

// When the user clicks anywhere outside of the modal, close it
