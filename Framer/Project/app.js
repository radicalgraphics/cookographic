////////////////////////////
/// === Set up Images

//ipad_body = new Layer ({x:0, y:10, width:1520, height:1148, image:"images/ipad_body.png"})

var top_y = 100

var top_clock_line_y = 250

var currentScene = 0

var curve1 = "spring(300,20,10)";

bgLayer = new Layer({
  x: 250,
  y: 10,
  width: 1024,
  height: 768,
  // backgroundColor: '#e9e9e9'
});
bgLayer.style = {
  'background': "black url('images/background.png') repeat scroll top left"
}
bgLayer.clip = true;




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

s01_top_counter_clock = new Layer ({x:0, y:100, width:1096, height: 42, image:"images/slide_01/s01_top_counter_clock.png"})
s01_top_counter_clock.superLayer = bgLayer;


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

s01_base_right_panel_purple_circle = new Layer ({x:975, y:top_clock_line_y - 45, width:42, height: 42,   backgroundColor: "#8b2786",  borderRadius: "25px"})
s01_base_right_panel_purple_circle.html = "3"
s01_base_right_panel_green_circle = new Layer ({x:975, y:top_clock_line_y + 55, width:42, height: 42, backgroundColor: "#afd46a",  borderRadius: "25px"})
s01_base_right_panel_green_circle.html = "0"
s01_base_right_panel_yellow_circle = new Layer ({x:975, y:top_clock_line_y + 155, width:42, height: 42, backgroundColor: "#fedc0e",  borderRadius: "25px"})
s01_base_right_panel_yellow_circle.html = "2"
s01_base_right_panel_grey_circle = new Layer ({x:975, y:top_clock_line_y + 255, width:42, height: 42, backgroundColor: "#beba90",  borderRadius: "25px"})
s01_base_right_panel_grey_circle.html = "3"
s01_base_right_panel_red_circle = new Layer ({x:975, y:top_clock_line_y + 355, width:42, height: 42, backgroundColor: "#ed3752",  borderRadius: "25px"})
s01_base_right_panel_red_circle.html = "4"

textStyle = {
  "font-size": "0.8em",
  "text-align": "center",
  "line-height" : "40px"
};


s01_base_right_panel_purple_circle.style = textStyle
s01_base_right_panel_green_circle.style = textStyle
s01_base_right_panel_yellow_circle.style = textStyle
s01_base_right_panel_grey_circle.style = textStyle
s01_base_right_panel_red_circle.style = textStyle


s01_base_right_panel_purple_circle.superLayer = bgLayer;
s01_base_right_panel_green_circle.superLayer = bgLayer;
s01_base_right_panel_yellow_circle.superLayer = bgLayer;
s01_base_right_panel_grey_circle.superLayer = bgLayer;
s01_base_right_panel_red_circle.superLayer = bgLayer;



//cookographic_logo = new Layer ({x:210, y:120, width:666, height:398, image:"images/cookographic-logo.jpg"})

cookographic_mini_logo = new Layer ({x:10, y:top_y, width:220, height:125, image:"images/cookographic-logo.jpg"})
radical_logo = new Layer ({x:50, y:top_y+600, width:185, height:100, image:"images/radical_logo.jpg"})
//janssen_logo = new Layer ({x:90, y:top_y+550, width:60, height:61, image:"images/janssen_logo.jpg"})
janssen_logo_2 = new Layer ({x:200, y:top_y+300, width:35, height:314, image:"images/janssen_logo_2.png"})
//clock_green = new Layer ({x:210,y:top_clock_line_y,width:170,height:42, image:"images/slide_01/clock_green.png"})


clock_green_back = new Layer({
  width: 100,
  height: 42,
  x: 0,
  y: top_clock_line_y,
  backgroundColor: "#95cb6f",
  borderRadius: "15px"
});

clock_green_back.superLayer = bgLayer




//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
/* A couple shortcut functions */
//////////////////////////////
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


Layer.prototype.fadeInSlow = function() {

  return this.animate({
    properties: {
      opacity: 1
    },
    curve: 'ease-in-out',
    time: 1.3
  });
};

Layer.prototype.fadeOutSlow = function() {
  return this.animate({
    properties: {
      opacity: 0
    },
    curve: 'ease-in-out',
    time: 1.3
  });
};








////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////











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
  x: 90,
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








// Define
// Bubble Purple Pindas in bakkie

bubble_5 = new Layer({x:700,y:-115,width:577, height:488, image:"images/slide_04/pindas_in_bakkie.png"})

bubble_5.superLayer = bgLayer;
bubble_5.placeBehind(s01_top_counter_clock);
bubble_5.placeBefore(s01_base_purple_path);
bubble_5.placeBefore(s01_base_green_path);

bubble_5.properties = {
  scale : 0.2
};

bubble_5.opacity = 0;


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


// Define 
// Bubble Yellow Dry noodles (   )

bubble_3 = new Layer({x:700,y:bubble1_pos_y,width:575, height:487, image:"images/slide_02/yellow_dry_noodles.png"})

bubble_3.superLayer = bgLayer;

bubble_3.properties = {
  scale : 0.1
};

bubble_3.opacity = 0;

// Define
// Bubble Red Roasted Pindas

bubble_4 = new Layer({x:700,y:285,width:532, height:487, image:"images/slide_03/red_roasted_pinda.png"})

bubble_4.superLayer = bgLayer;

bubble_4.properties = {
  scale : 0.2
};

bubble_4.opacity = 0;







// Define
// Yellow Arrow Noodles

arrow_1 = new Layer ({x:80, y:305, width:208, height:45, image:"images/slide_02/yellow_arrow_noodles.png"})

arrow_1.superLayer = bgLayer;

arrow_1.placeBehind(bubble_2);


arrow_1.opacity = 0;

// Define
// Yellow Arrow Noodles line

yellow_line = new Layer({

  x:100,
  y:320,
  height:15,
  width:5,
  backgroundColor: "#fedb0e",
  borderRadius: "2px"
})

yellow_line.superLayer = bgLayer;
yellow_line.placeBehind(arrow_1);
yellow_line.opacity = 0;

// Define
// Red Arrow Pindas

arrow_2 = new Layer ({x:80, y:505, width:208, height:45, image:"images/slide_03/red_arrow_pindas.png"})

arrow_2.superLayer = bgLayer;

arrow_2.placeBehind(bubble_3);

arrow_2.opacity = 0;


// Define 
// Red Arrow Pindas Line

red_line = new Layer({

  x:100,
  y:522,
  height:15,
  width:5,
  backgroundColor: "#ee3753",
  borderRadius: "2px"
})

red_line.superLayer = bgLayer;
red_line.placeBehind(arrow_2);
red_line.opacity = 0;


//Define
// CheckMark

var checkmark, checkmarkChecked;

checkmark = new Layer({
  x: 264,
  y: 420,
  width: 56,
  height: 56,
  image: "images/checkmarkUnchecked.png"
});

checkmarkChecked = new Layer({
  x: 264,
  y: 420,
  width: 56,
  height: 56,
  image: "images/checkmarkChecked.png"
});

checkmarkChecked.scale = 0;

checkmarkChecked.superLayer = bgLayer;
checkmark.superLayer = bgLayer;



checkmarkChecked.opacity = 0;
checkmark.opacity = 0;


changeScene = function(scene) {
  
  //Updated the scene number on screen
  step_layer.html = scene;

  switch (scene) {
    case 1:

      chevron.on(Events.Click, function() {
        recipe_map.opacity = 0;
        return recipe_map_01.states.next();
      });
      //Bubble Woek Noodles yellow FadeIn
      bubble_1.fadeIn();
      bubble_1.animate({
        properties: {
          scale: 0.2
        },
        curve: curve1
      });

      //Update number of upcoming steps
      s01_base_right_panel_red_circle.html = "3"
      s01_base_right_panel_yellow_circle.html = "1"

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
        
        Utils.delay(1, function(){
          checkmarkChecked.superLayer = bubble_1;
          checkmark.superLayer = bubble_1;

          checkmark.fadeIn();
          checkmarkChecked.fadeIn();

          checkmark.on(Events.TouchStart, function() {
        
              Utils.delay(0.5, function(){
                  currentScene = 2;
                  changeScene(currentScene);
                  
              });
              

          });
        });
        

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
     return Utils.delay(1.5, function(){

        return clock_green_back.animate({
          properties:{
            width: 250 ,
            
          },
          curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });

      });




//////////////////////////
//////// CASE 2
//////////////////////////
    case 2:

      chevron.on(Events.Click, function() {
        return recipe_map_02.states.next();
      });

      bubble_1.animate({
        properties:{
          scale: 0.3,
          x: -100 , 
        },
       curve: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
      });

      //Update upcoming steps
      s01_base_right_panel_yellow_circle.html = "0"

      Utils.delay(0.8, function(){

          bubble_1.fadeOutSlow();

          arrow_1.fadeInSlow();

          //Yellow Arrow Left movement
          s01_base_left_panel_yellow_arrow.animate({
            properties: {
              x: s01_base_left_panel_yellow_arrow.x - 10,
              scale: 1
            },
            curve: curve1
          });

          //Red Arrow Left movement
          s01_base_left_panel_red_arrow.animate({
            properties: {
              x: s01_base_left_panel_red_arrow.x + 10,
              scale: 1.3
            },
            curve: curve1
          });


          yellow_line.fadeInSlow();
          
          Utils.delay(0.3, function(){
            yellow_line.animate({
              properties:{
                width:850,
              },
              curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
              time: 1
            });

            bubble_3.fadeIn();
            bubble_3.animate({
              properties: {
                scale: 0.2
              },
              curve: curve1
            });
          });
          



      });

      bubble_2.animate({
        properties:{
          scale:1,
          x:250,
        },
      });

      //Check mark controller on case 2
      Utils.delay(1, function(){
          
          //We reset the checkmark
          checkmark.scale = checkmarkChecked.scale;
          checkmarkChecked.animateStop();
          checkmarkChecked.scale = 0;

          //we put it inside the bubble_2 red pindas
          checkmarkChecked.superLayer = bubble_2;
          checkmark.superLayer = bubble_2;


          checkmark.fadeIn();
          checkmarkChecked.fadeIn();

          checkmark.on(Events.TouchStart, function() {
        
              Utils.delay(0.5, function(){
                  currentScene = 3;
                  changeScene(currentScene);
                  
              });
              

          });
        });

      

      //Clock GReen Animation
     return Utils.delay(0.2, function(){

        return clock_green_back.animate({
          properties:{
            width: clock_green_back.width + 100 ,
            
          },
          curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });

      });


//////////////////////////
//////// CASE 3
//////////////////////////
    
    case 3:

      chevron.on(Events.Click, function() {
        return recipe_map_03.states.next();
      });

      bubble_2.animate({
        properties:{
          scale: 0.3,
          x: -100 , 
        },
       curve: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
      });

      Utils.delay(0.8, function(){

          bubble_2.fadeOutSlow();

          arrow_2.fadeInSlow();

          //Yellow Arrow Left movement
          s01_base_left_panel_red_arrow.animate({
            properties: {
              x: s01_base_left_panel_red_arrow.x - 10,
              scale: 1
            },
            curve: curve1
          });

          bubble_3.animate({
                
            properties:{
            scale:1,
            x:250,
            },
          });
          
          //Check mark controller on case 3
          Utils.delay(1, function(){
          
              //We reset the checkmark
              checkmark.scale = checkmarkChecked.scale;
              checkmarkChecked.animateStop();
              checkmarkChecked.scale = 0;

              //we put it inside the bubble_2 red pindas
              checkmarkChecked.superLayer = bubble_3;
              checkmark.superLayer = bubble_3;


              checkmark.fadeIn();
              checkmarkChecked.fadeIn();

              checkmark.on(Events.TouchStart, function() {
            
                  Utils.delay(0.5, function(){
                      currentScene = 4;
                      changeScene(currentScene);
                      
                  });
              

          });
        });

          
          Utils.delay(0.3, function(){
            yellow_line.animate({
              properties:{
                width:450,
              },
              curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
              time: 1
            });
              //Update upcoming steps
              s01_base_right_panel_red_circle.html = s01_base_right_panel_red_circle.html - 1
            bubble_4.fadeIn();
          });
          
          red_line.fadeIn();
          red_line.animate({
            properties:{
              width:850,
            },
            curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            time:1
          });


      });
      //Clock GReen Animation
     return Utils.delay(0.5, function(){

        return clock_green_back.animate({
          properties:{
            width: clock_green_back.width + 100 ,
            
          },
          curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });

      });


//////////////////////////
//////// CASE 4
//////////////////////////
    case 4:

        bubble_3.animate({
        properties:{
          scale: 0.3,
          x: -100 , 
        },
       curve: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
        });

        

      Utils.delay(0.5, function(){
        yellow_line.animate({
              properties:{
                width:0,
              },
              curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
              time: 1
            });
        arrow_1.fadeOutSlow();
        bubble_3.fadeOutSlow();
      });

      bubble_5.fadeInSlow();

      Utils.delay(0.5, function(){

          bubble_5.animate({
                
            properties:{
            scale:0.8,
            x:450,
            },
          });

      });


      bubble_4.animate({
          properties:{
            scale:1,
            x:250,
            },
      });

      red_line.animate({
          properties:{
            width:350,
          },
          curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          time: 2
      });

      //Update upcoming steps (purple)
      s01_base_right_panel_purple_circle.html = s01_base_right_panel_purple_circle.html - 1


      //Clock GReen Animation
     return Utils.delay(0.5, function(){

        return clock_green_back.animate({
          properties:{
            width: clock_green_back.width + 100 ,
            
          },
          curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });

      });


    }

};


////MAIN LOOP CONTROLLER

step_layer = new Layer({
  x: 170,
  y: 20,
  width: 24,
  height: 24,
  backgroundColor: "#c2c2c2",
  borderRadius: "6px"
});

textStyle = {
  "font-size": "12px",
  "text-align": "center",
  "line-height" : "25px"
};

step_layer.html = currentScene
step_layer.style = textStyle



button1.on(Events.TouchStart, function() {
  currentScene = currentScene + 1;
  changeScene(currentScene);

  
  
});


// =========================================
// RECIPE MAP LAYER + STATES + EVENTS ======
// =========================================
recipe_map = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_00.jpg", superLayer: bgLayer });
recipe_map_01 = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_01.jpg", superLayer: bgLayer });
recipe_map_02 = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_02.jpg", superLayer: bgLayer });
recipe_map_03 = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_03.jpg", superLayer: bgLayer });
recipe_map_04 = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_04.jpg", superLayer: bgLayer });
recipe_map_05 = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_05.jpg", superLayer: bgLayer });
recipe_map_06 = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_06.jpg", superLayer: bgLayer });
recipe_map_07 = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_07.jpg", superLayer: bgLayer });
recipe_map_08 = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_08.jpg", superLayer: bgLayer });
recipe_map_09 = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_09.jpg", superLayer: bgLayer });
recipe_map_10 = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_10.jpg", superLayer: bgLayer });
recipe_map_11 = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_11.jpg", superLayer: bgLayer });
recipe_map_12 = new Layer({ x: 1030, y: 0, width: 1024, height: 768, image: "images/recipe_map_12.jpg", superLayer: bgLayer });
// =========================================

recipe_map.states.add({ stateIn: { x: 0 } });
recipe_map_01.states.add({ stateIn: { x: 0 } });
recipe_map_02.states.add({ stateIn: { x: 0 } });
recipe_map_03.states.add({ stateIn: { x: 0 } });
recipe_map_04.states.add({ stateIn: { x: 0 } });
recipe_map_05.states.add({ stateIn: { x: 0 } });
recipe_map_06.states.add({ stateIn: { x: 0 } });
recipe_map_07.states.add({ stateIn: { x: 0 } });
recipe_map_08.states.add({ stateIn: { x: 0 } });
recipe_map_09.states.add({ stateIn: { x: 0 } });
recipe_map_10.states.add({ stateIn: { x: 0 } });
recipe_map_11.states.add({ stateIn: { x: 0 } });
recipe_map_12.states.add({ stateIn: { x: 0 } });

recipe_map.draggable.enabled = true; recipe_map.draggable.speedY = 0;
recipe_map_01.draggable.enabled = true; recipe_map_01.draggable.speedY = 0;
recipe_map_02.draggable.enabled = true; recipe_map_02.draggable.speedY = 0;
recipe_map_03.draggable.enabled = true; recipe_map_03.draggable.speedY = 0;
recipe_map_04.draggable.enabled = true; recipe_map_04.draggable.speedY = 0;
recipe_map_05.draggable.enabled = true; recipe_map_05.draggable.speedY = 0;
recipe_map_06.draggable.enabled = true; recipe_map_06.draggable.speedY = 0;
recipe_map_07.draggable.enabled = true; recipe_map_07.draggable.speedY = 0;
recipe_map_08.draggable.enabled = true; recipe_map_08.draggable.speedY = 0;
recipe_map_09.draggable.enabled = true; recipe_map_09.draggable.speedY = 0;
recipe_map_10.draggable.enabled = true; recipe_map_10.draggable.speedY = 0;
recipe_map_11.draggable.enabled = true; recipe_map_11.draggable.speedY = 0;
recipe_map_12.draggable.enabled = true; recipe_map_12.draggable.speedY = 0;


recipe_map.states.animationOptions = {
  curve: "cubic-bezier(0.23, 1, 0.32, 1)",
};
// =========================================

// =========================================
// CHEVRON LAYER + STATES + EVENTS =========
// =========================================
chevron = new Layer({ x: 1175, y: 680, width: 21, height: 35, image: "images/back_chevron.png" });
chevron2 = new Layer({ x: 1165, y: 680, width: 21, height: 35, opacity: 0.7, image: "images/back_chevron.png"});
chevron3 = new Layer({ x: 1155, y: 680, width: 21, height: 35, opacity: 0.4, image: "images/back_chevron.png"});

chevron_origin_x = chevron.x;
chevron_origin_y = chevron.y;

chevron.states.add({
  stateIn : {
    rotation: -180,
  }
});

chevron.states.animationOptions = {
  curve: "spring",
  curveOptions: {
    tension: 100,
    friction: 10
  }
};
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
chevron.draggable.enabled = true;
chevron.draggable.speedY = 0;
chevron.on(Events.DragMove, function(){

  return recipe_map.animate({
    properties: {
      x: recipe_map.x - 15
    },
    curve: "cubic-bezier(0.23, 1, 0.32, 1)",
  });
});

chevron.on(Events.DragEnd, function () {
  if (chevron.x < 1100) {
      recipe_map.states.next();
      chevron.animate({
        properties: {
          x: chevron_origin_x,
          y: chevron_origin_y,
        },
        curve: "spring",
        curveOptions: {
          tension: 100,
          friction: 10
        }
      });
      // chevron.states.next();
      chevron.opacity = 0
      chevron2.opacity = 0
      chevron3.opacity = 0
  } else {
    recipe_map.animate({
      properties: {
        x: 1030
      }
    });
      chevron.animate({
        properties: {
          x: chevron_origin_x,
          y: chevron_origin_y,
        },
        curve: "spring",
        curveOptions: {
          tension: 100,
          friction: 10
        }
      });    
  }
});

recipe_map.on(Events.DragEnd, function () {
  if (recipe_map.x > 50) {
    recipe_map.states.next();
    Utils.delay(0.7, function(){
      chevron.fadeIn();
      chevron2.fadeIn();
      chevron3.fadeIn();
    })
    Utils.delay(1.1, function(){
      chevron.opacity = 1
      chevron2.opacity = 0.7
      chevron3.opacity = 0.4
    })
  }
});

// chevron.on(Events.Click, function() {
  
// });
// =========================================


// ========================================
// EVENTS CONTROLLING THE CheckMark
// ========================================

/* We want the checkmark to scale down when the user initiallyclicks or touches to provide feedback */

checkmark.on(Events.TouchStart, function() {
  return checkmark.animate({
    properties: {
      scale: .8
    },
    curve: "spring(200,15,0)"
  });
});

/* When the click or touch ends, we want to swap the checkmark and scale back up to 1. We set checkmarkChecked to the current scale of checkmark (this makes sure they're always in sync) and then immediately set the scale of checkmark to 0. We then call animateStop() on checkmark, in case the spring is still oscillating, then set checkmark's scale to 0 and finally animate checkmarkChecked back to the proper scale. */

checkmark.on(Events.TouchEnd, function() {
  checkmarkChecked.scale = checkmark.scale;
  checkmark.animateStop();
  checkmark.scale = 0;
  return checkmarkChecked.animate({
    properties: {
      scale: 1
    },
    curve: "spring(200,15,0)"
  });
});

/* We also want to be able to toggle the selection state of the checkmark, so we apply the same events with the opposite effects to checkmarkChecked */

checkmarkChecked.on(Events.TouchStart, function() {
  return checkmarkChecked.animate({
    properties: {
      scale: .8
    },
    curve: "spring(200,15,0)"
  });
});

checkmarkChecked.on(Events.TouchEnd, function() {
  checkmark.scale = checkmarkChecked.scale;
  checkmarkChecked.animateStop();
  checkmarkChecked.scale = 0;
  return checkmark.animate({
    properties: {
      scale: 1
    },
    curve: "spring(200,15,0)"
  });
});