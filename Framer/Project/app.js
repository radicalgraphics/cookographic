////////////////////////////
/// === Set up Images
s01_top_counter_clock = new Layer ({x:0, y:100, width:1096, height: 42, image:"images/slide_01/s01_top_counter_clock.png"})

s01_base_purple_path = new Layer ({x:40, y:320, z:-1, width:996, height: 6, image:"images/base_slide/base_purple_path.png"})
s01_base_green_path = new Layer ({x:40, y:385, z:-1, width:996, height: 6, image:"images/base_slide/base_green_path.png"})
s01_base_yellow_path = new Layer ({x:40, y:450, z:-1, width:996, height: 6, image:"images/base_slide/base_yellow_path.png"})
s01_base_grey_path = new Layer ({x:40, y:515, z:-1, width:996, height: 6, image:"images/base_slide/base_grey_path.png"})
s01_base_red_path = new Layer ({x:40, y:580, width:996, height: 6, image:"images/base_slide/base_red_path.png"})

s01_base_left_panel_purple_arrow = new Layer ({x:0, y:300, width:88, height: 45, image:"images/base_slide/base_left_panel_purple_arrow.png"})
s01_base_left_panel_green_arrow = new Layer ({x:0, y:365, width:88, height: 45, image:"images/base_slide/base_left_panel_green_arrow.png"})
s01_base_left_panel_yellow_arrow = new Layer ({x:0, y:430, width:88, height: 45, image:"images/base_slide/base_left_panel_yellow_arrow.png"})
s01_base_left_panel_grey_arrow = new Layer ({x:0, y:495, width:88, height: 45, image:"images/base_slide/base_left_panel_grey_arrow.png"})
s01_base_left_panel_red_arrow = new Layer ({x:0, y:560, width:88, height: 45, image:"images/base_slide/base_left_panel_red_arrow.png"})

s01_base_right_panel_purple_circle = new Layer ({x:1038, y:300, width:42, height: 42, image:"images/base_slide/base_right_panel_purple_circle.png"})
s01_base_right_panel_green_circle = new Layer ({x:1038, y:365, width:42, height: 42, image:"images/base_slide/base_right_panel_green_circle.png"})
s01_base_right_panel_yellow_circle = new Layer ({x:1038, y:430, width:42, height: 42, image:"images/base_slide/base_right_panel_yellow_circle.png"})
s01_base_right_panel_grey_circle = new Layer ({x:1038, y:495, width:42, height: 42, image:"images/base_slide/base_right_panel_grey_circle.png"})
s01_base_right_panel_red_circle = new Layer ({x:1038, y:560, width:42, height: 42, image:"images/base_slide/base_right_panel_red_circle.png"})






////////////////
/// ====  Init Animations

//Counter Clock Animation
s01_top_counter_clock.animate({
	properties: {y: s01_top_counter_clock.y - 100},
	curve: "spring(100,10,0)",
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
