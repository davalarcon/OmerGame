$(document).ready(function(){



  $('.btn-success').click(function(){

  });

  ion.sound({
      sounds: [
          {name: "adventurers"},
          {name: "flowerfairyfly"}
      ],

      // main config
      path: "ion.sound-3.0.7/sounds/",
      preload: true,
      multiplay: false,
      volume: 0.4
  });
ion.sound.play('flowerfairyfly');


});
