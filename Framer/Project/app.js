////////////////////////////
/// === Set up Images

//ipad_body = new Layer ({x:0, y:10, width:1520, height:1148, image:"images/ipad_body.png"})

var top_y = 100

var top_clock_line_y = 250


var curve1 = "spring(300,20,10)";

bgLayer = new Layer({
  x: 210,
  y: 150,
  width: 1024,
  height: 768,
  // backgroundColor: '#e9e9e9'
});
bgLayer.style = {
  'background': "black url('images/background.png') repeat scroll top left"
}
bgLayer.clip = true;


s01_top_counter_clock = new Layer ({x:0, y:100, width:1096, height: 42, image:"images/slide_01/s01_top_counter_clock.png"})
s01_top_counter_clock.superLayer = bgLayer;

s01_base_purple_path = new Layer ({x:0, y:top_clock_line_y - 25, z:-1, width:996, height: 6, image:"images/base_slide/base_purple_path.png"})
s01_base_green_path = new Layer ({x:0, y:top_clock_line_y + 75,  width:996, height: 6, image:"images/base_slide/base_green_path.png"})
s01_base_yellow_path = new Layer ({x:0, y:top_clock_line_y + 175,  width:996, height: 6, image:"images/base_slide/base_yellow_path.png"})
s01_base_grey_path = new Layer ({x:0, y:top_clock_line_y + 275,  width:996, height: 6, image:"images/base_slide/base_grey_path.png"})
s01_base_red_path = new Layer ({x:0, y:top_clock_line_y + 375, width:996, height: 6, image:"images/base_slide/base_red_path.png"})

s01_base_purple_path.superLayer = bgLayer;
s01_base_green_path.superLayer = bgLayer;
s01_base_yellow_path.superLayer = bgLayer;
s01_base_grey_path.superLayer = bgLayer;
s01_base_red_path.superLayer = bgLayer;

s01_base_left_panel_purple_arrow = new Layer ({x:0, y:top_clock_line_y - 45, width:88, height: 45, image:"images/base_slide/base_left_panel_purple_arrow.png"})
s01_base_left_panel_green_arrow = new Layer ({x:0, y:top_clock_line_y + 55, width:88, height: 45, image:"images/base_slide/base_left_panel_green_arrow.png"})
s01_base_left_panel_yellow_arrow = new Layer ({x:0, y:top_clock_line_y + 155, width:88, height: 45, image:"images/base_slide/base_left_panel_yellow_arrow.png"})
s01_base_left_panel_grey_arrow = new Layer ({x:0, y:top_clock_line_y + 255, width:88, height: 45, image:"images/base_slide/base_left_panel_grey_arrow.png"})
s01_base_left_panel_red_arrow = new Layer ({x:0, y:top_clock_line_y + 355, width:88, height: 45, image:"images/base_slide/base_left_panel_red_arrow.png"})

s01_base_left_panel_purple_arrow.superLayer = bgLayer;
s01_base_left_panel_green_arrow.superLayer = bgLayer;
s01_base_left_panel_yellow_arrow.superLayer = bgLayer;
s01_base_left_panel_grey_arrow.superLayer = bgLayer;
s01_base_left_panel_red_arrow.superLayer = bgLayer;

s01_base_right_panel_purple_circle = new Layer ({x:975, y:top_clock_line_y - 45, width:42, height: 42, image:"images/base_slide/base_right_panel_purple_circle.png"})
s01_base_right_panel_green_circle = new Layer ({x:975, y:top_clock_line_y + 55, width:42, height: 42, image:"images/base_slide/base_right_panel_green_circle.png"})
s01_base_right_panel_yellow_circle = new Layer ({x:975, y:top_clock_line_y + 155, width:42, height: 42, image:"images/base_slide/base_right_panel_yellow_circle.png"})
s01_base_right_panel_grey_circle = new Layer ({x:975, y:top_clock_line_y + 255, width:42, height: 42, image:"images/base_slide/base_right_panel_grey_circle.png"})
s01_base_right_panel_red_circle = new Layer ({x:975, y:top_clock_line_y + 355, width:42, height: 42, image:"images/base_slide/base_right_panel_red_circle.png"})

s01_base_right_panel_purple_circle.superLayer = bgLayer;
s01_base_right_panel_green_circle.superLayer = bgLayer;
s01_base_right_panel_yellow_circle.superLayer = bgLayer;
s01_base_right_panel_grey_circle.superLayer = bgLayer;
s01_base_right_panel_red_circle.superLayer = bgLayer;



//cookographic_logo = new Layer ({x:210, y:120, width:666, height:398, image:"images/cookographic-logo.jpg"})

cookographic_mini_logo = new Layer ({x:210, y:top_y-100, width:220, height:130, image:"images/cookographic-logo.jpg"})

//clock_green = new Layer ({x:210,y:top_clock_line_y,width:170,height:42, image:"images/slide_01/clock_green.png"})


// =========================================
// BIG RECIPE LAYER ========================
// =========================================
recipe_map = new Layer({
  x: 1030,
  y: 0,
  width: 1024,
  height: 768,
  image: "images/recipe_map.jpg",
  superLayer: bgLayer
});

// searchModal.superLayer = bgLayer;

recipe_map.shadowColor = 'rgba(0,0,0,0.5)';
recipe_map.shadowBlur = 10;
// =========================================

// =========================================
// CHEVRON LAYER ===========================
// =========================================
chevron = new Layer({
  x: 1175,
  y: 800,
  width: 21,
  height: 35,
  image: "images/back_chevron.png"
});


// =========================================

chevron.on(Events.Click, function() {
  recipe_map.animate({
    properties: {
      x: 0
    },
    curve: 'spring(300,40,0)'
  });
  chevron.animate({
    properties: {
      rotationZ: -180
    },
    curve: "spring(100,10,0)"
  })
    chevron.on(Events.Click, function() {
    recipe_map.animate({
      properties: {
        x: 1030,
      },
      curve: 'spring(300,40,0)'
    });
    chevron.animate({
      properties: {
        rotationZ: 0
      },
      curve: "spring(100,10,0)"
    });
  // return chevron.animate({
  //   properties: {
  //     rotationZ: 0
  //   },
  //   curve: 'spring(300,40,0)'
  // });
  // return recipe_map.animate({
  //   properties: {
      
  //   },
  //   curve: 'spring(300,40,0)'
  // });  
  });
});




clock_green_back = new Layer({
  width: 100,
  height: 42,
  x: 0,
  y: top_clock_line_y,
  backgroundColor: "#95cb6f",
  borderRadius: "15px"
});

clock_green_back.superLayer = bgLayer

/* A couple shortcut functions */

Layer.prototype.fadeIn = function() {
  return this.animate({
    properties: {
      opacity: 1
    },
    curve: 'ease-in-out',
    time: 0.3
  });
};

Layer.prototype.fadeOut = function() {
  return this.animate({
    properties: {
      opacity: 0
    },
    curve: 'ease-in-out',
    time: 0.3
  });
};



////////////////
/// ====  Init Animations

//Counter Clock Animation
s01_top_counter_clock.animate({
	properties: {y: s01_top_counter_clock.y - 100},
	curve: "spring(100,30,0)",
})

clock_green_back.animate({
  properties: {y: s01_top_counter_clock.y - 100},
  curve: "spring(100,30,0)",
})

//Paths Animation
//===============
s01_base_purple_path.animate({
	properties: {y: s01_base_purple_path.y - 100},
	curve: "spring(300,10,0)",
	time: 3000,
})

s01_base_green_path.animate({
	properties: {y: s01_base_green_path.y - 100},
	curve: "spring(200,10,0)",
})

s01_base_yellow_path.animate({
	properties: {y: s01_base_yellow_path.y - 100},
	curve: "spring(300,10,0)",
})

s01_base_grey_path.animate({
	properties: {y: s01_base_grey_path.y - 100},
	curve: "spring(400,10,0)",
})

s01_base_red_path.animate({
	properties: {y: s01_base_red_path.y - 100},
	curve: "spring(500,10,0)",
})


//Left Arrows Animation
//=====================
s01_base_left_panel_purple_arrow.animate({
	properties: {y: s01_base_left_panel_purple_arrow.y - 100},
	curve: "spring(200,10,0)",
})

s01_base_left_panel_green_arrow.animate({
	properties: {y: s01_base_left_panel_green_arrow.y - 100},
	curve: "spring(300,10,0)",
})

s01_base_left_panel_yellow_arrow.animate({
	properties: {y: s01_base_left_panel_yellow_arrow.y - 100},
	curve: "spring(100,10,0)",
})

s01_base_left_panel_grey_arrow.animate({
	properties: {y: s01_base_left_panel_grey_arrow.y - 100},
	curve: "spring(400,10,0)",
})

s01_base_left_panel_red_arrow.animate({
	properties: {y: s01_base_left_panel_red_arrow.y - 100},
	curve: "spring(500,10,0)",
})

//Right Circles Animation
//=======================
s01_base_right_panel_purple_circle.animate({
	properties: {y: s01_base_right_panel_purple_circle.y - 100},
	curve: "spring(200,20,0)",
})

s01_base_right_panel_green_circle.animate({
	properties: {y: s01_base_right_panel_green_circle.y - 100},
	curve: "spring(400,20,0)",
})

s01_base_right_panel_yellow_circle.animate({
	properties: {y: s01_base_right_panel_yellow_circle.y - 100},
	curve: "spring(500,20,0)",
})

s01_base_right_panel_grey_circle.animate({
	properties: {y: s01_base_right_panel_grey_circle.y - 100},
	curve: "spring(300,20,0)",
})

s01_base_right_panel_red_circle.animate({
	properties: {y: s01_base_right_panel_red_circle.y - 100},
	curve: "spring(300,20,0)",
})


////////////////
/// Cookographic title 
////////////////

/* Intro slide only draggable horizontally */

cookographic_mini_logo.draggable.enabled = true;

cookographic_mini_logo.draggable.speedY = 0;

origin_x = cookographic_mini_logo.x;
origin_y = cookographic_mini_logo.y;


/* Add an animation to the end of a drag */

cookographic_mini_logo.on(Events.DragEnd, function(event, layer) {

  /* Snap back to origin */
  var animation;
  return animation = layer.animate({
    properties: {
      x: origin_x,
      y: origin_y
    },
    curve: "spring",
    curveOptions: {
      friction: 20,
      tension: 400,
      velocity: 10
    }
  });
});



////////////////////
/// Create the Next Step Button
//////////////////////

button1 = new Layer({
  x: 50,
  y: 20,
  width: 64,
  height: 64,
  backgroundColor: "#0079c6",
  borderRadius: "6px"
});

textStyle = {
  "font-size": "16px",
  "text-align": "center",
  "line-height" : "30px"
};

button1.html = "Next Step"
button1.style = textStyle





////////////////////////////////////
// Main Loop
////////////////////////////////////


//Define
// Red rooster

bubble_2 = new Layer ({x:700,y:285,width:575, height:487, image:"images/slide_02/red_rooster_pinda.png"})
bubble_2.superLayer = bgLayer;

bubble_2.properties = {
  scale : 0.1
};

bubble_2.opacity = 0;


// Define 
//Bubble Yellow ( Put the noodles in the water )


var bubble1_pos_y = 85

bubble_1 = new Layer ({x:700,y:bubble1_pos_y,width:575, height:487, image:"images/slide_01/s01_main_task.png"})

bubble_1.superLayer = bgLayer;

bubble_1.properties = {
	scale : 0.1
};

bubble_1.opacity = 0;








button1.on(Events.TouchStart, function() {

  //Bubble Woek Noodles yellow FadeIn
  bubble_1.fadeIn();
  bubble_1.animate({
    properties: {
      scale: 0.2
    },
    curve: curve1
  });

  //Yellow Arrow Left movement
  s01_base_left_panel_yellow_arrow.animate({
    properties: {
      x: s01_base_left_panel_yellow_arrow.x + 10,
      scale: 1.3
    },
    curve: curve1
  });

  //Bubble Pinda red FadeIn
  Utils.delay(1, function() {
    bubble_2.fadeIn();
    bubble_2.animate({
      properties: {
        scale: 0.2
      },
      curve: curve1
    });
  });

  // //Red Arrow Left movement
  // Utils.delay(1, function() {
  //   s01_base_left_panel_red_arrow.animate({
  //     properties: {
  //       x: s01_base_left_panel_yellow_arrow.x + 10,
  //       scale: 1.3
  //     },
  //     curve: curve1
  //   });
  // });

  //Bubble Yellow Animation
  Utils.delay(1, function() {
    return bubble_1.animate({
      properties: {
        scale: 1,
        x: 250,
        y: bubble1_pos_y,


      },
      curve: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      
    });
  });
  

  //Bubble Red Pinda Animation
  Utils.delay(1.5, function(){

    return bubble_2.animate({
      properties:{
        scale: 0.4,
        x: 500,
        y: 285
      },
      curve: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      
    });

  });

 //Clock GReen Animation
  Utils.delay(1, function(){

    return clock_green_back.animate({
      properties:{
        width: 250 ,
        
      },
      curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    });

  });


});





// cookographic_logo.on(Events.DragEnd, function() {
//   if (cookographic_logo.x < -80) {

//     /* Dragged enough, move to the next slide after a delay */
//     cookographic_logo.animate({
//       properties: {
//         x: -640
//       },
//       time: 0.2,
//       curve: 'ease-out'
//     });
//     return Utils.delay(0.6, function() {
//       return changeScene(1);
//     });
//   } else {

//     /* Not dragged enough, move it back */
//     return cookographic_logo.animate({
//       properties: {
//         x: 0
//       },
//       time: 0.2,
//       curve: 'ease-out'
//     });
//   }
// });