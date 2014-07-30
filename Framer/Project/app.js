////////////////////////////
/// === Set up Images

//ipad_body = new Layer ({x:0, y:10, width:1520, height:1148, image:"images/ipad_body.png"})

var top_y = 100

var curve1 = "spring(300,20,20)";


s01_top_counter_clock = new Layer ({x:210, y:top_y + 130, width:1096, height: 42, image:"images/slide_01/s01_top_counter_clock.png"})

s01_base_purple_path = new Layer ({x:264, y:320, z:-1, width:996, height: 6, image:"images/base_slide/base_purple_path.png"})
s01_base_green_path = new Layer ({x:264, y:420, z:-1, width:996, height: 6, image:"images/base_slide/base_green_path.png"})
s01_base_yellow_path = new Layer ({x:264, y:520, z:-1, width:996, height: 6, image:"images/base_slide/base_yellow_path.png"})
s01_base_grey_path = new Layer ({x:264, y:620, z:-1, width:996, height: 6, image:"images/base_slide/base_grey_path.png"})
s01_base_red_path = new Layer ({x:264, y:720, width:996, height: 6, image:"images/base_slide/base_red_path.png"})

s01_base_left_panel_purple_arrow = new Layer ({x:210, y:300, width:88, height: 45, image:"images/base_slide/base_left_panel_purple_arrow.png"})
s01_base_left_panel_green_arrow = new Layer ({x:210, y:400, width:88, height: 45, image:"images/base_slide/base_left_panel_green_arrow.png"})
s01_base_left_panel_yellow_arrow = new Layer ({x:210, y:500, width:88, height: 45, image:"images/base_slide/base_left_panel_yellow_arrow.png"})
s01_base_left_panel_grey_arrow = new Layer ({x:210, y:600, width:88, height: 45, image:"images/base_slide/base_left_panel_grey_arrow.png"})
s01_base_left_panel_red_arrow = new Layer ({x:210, y:700, width:88, height: 45, image:"images/base_slide/base_left_panel_red_arrow.png"})

s01_base_right_panel_purple_circle = new Layer ({x:1255, y:300, width:42, height: 42, image:"images/base_slide/base_right_panel_purple_circle.png"})
s01_base_right_panel_green_circle = new Layer ({x:1255, y:400, width:42, height: 42, image:"images/base_slide/base_right_panel_green_circle.png"})
s01_base_right_panel_yellow_circle = new Layer ({x:1255, y:500, width:42, height: 42, image:"images/base_slide/base_right_panel_yellow_circle.png"})
s01_base_right_panel_grey_circle = new Layer ({x:1255, y:600, width:42, height: 42, image:"images/base_slide/base_right_panel_grey_circle.png"})
s01_base_right_panel_red_circle = new Layer ({x:1255, y:700, width:42, height: 42, image:"images/base_slide/base_right_panel_red_circle.png"})


//cookographic_logo = new Layer ({x:210, y:120, width:666, height:398, image:"images/cookographic-logo.jpg"})

cookographic_mini_logo = new Layer ({x:210, y:top_y-100, width:220, height:130, image:"images/cookographic-logo.jpg"})






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
////////////////

/* Intro slide only draggable horizontally */

cookographic_mini_logo.draggable.enabled = true;

cookographic_mini_logo.draggable.speedY = 0;


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
};

button1.html = "Next Step"
button1.style = textStyle
// cookographic_logo.opacity = 0








//bubble_1 = new Layer ({x:410,y:400,width:575, height:487, image:"images/slide_01/s01_main_task.png"})


//Bubble Yellow ( Put the noodles in the water )

bubble_1 = new Layer ({x:970,y:180,width:575, height:487, image:"images/slide_01/s01_main_task.png"})

bubble_1.properties = {
	scale : 0.1
};

bubble_1.opacity = 0;


clock_green = new Layer ({x:210,y:130,width:170,height:42, image:"images/slide_01/clock_green.png"})



button1.on(Events.TouchStart, function() {

  bubble_1.fadeIn();
  bubble_1.animate({
    properties: {
      scale: 0.2
    },
    curve: curve1
  });




  Utils.delay(1, function() {
    return bubble_1.animate({
      properties: {
        scale: 0.8,
        x: 500,
        y: 180,


      },
      curve: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
    });

  });

  Utils.delay(1, function(){

  	return clock_green.animate({
  		properties:{
  			x: 300 ,
  			
  		}
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