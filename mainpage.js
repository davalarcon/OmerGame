$(document).ready(function(){


  ion.sound({
      sounds: [
          {name: "glass"},
          {name: "bell_ring"},
          {name: "branch_break"},
          {name: "button_click"},
          {name: "fantasy1"},
          {name: "metal_plate_2"},
          {name: "button_tiny"},
          {name: "flamenco2"},
      ],

      // main config
      path: "ion.sound-3.0.7/sounds/",
      preload: true,
      multiplay: false,
      volume: 0.99
  });



});
