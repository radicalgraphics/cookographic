s01_top_counter_clock = new Layer ({width:1096, height: 42, image:"images/slide_01/s01_top_counter_clock.png"})

s01_base_left_panel_purple_arrow = new Layer ({x:0, y:300, width:88, height: 45, image:"images/base_slide/base_left_panel_purple_arrow.png"})
s01_base_left_panel_green_arrow = new Layer ({x:0, y:265, width:88, height: 45, image:"images/base_slide/base_left_panel_green_arrow.png"})
s01_base_left_panel_yellow_arrow = new Layer ({x:0, y:330, width:88, height: 45, image:"images/base_slide/base_left_panel_yellow_arrow.png"})
s01_base_left_panel_grey_arrow = new Layer ({x:0, y:395, width:88, height: 45, image:"images/base_slide/base_left_panel_grey_arrow.png"})
s01_base_left_panel_red_arrow = new Layer ({x:0, y:460, width:88, height: 45, image:"images/base_slide/base_left_panel_red_arrow.png"})

s01_base_right_panel_purple_circle = new Layer ({x:1038, y:200, width:42, height: 42, image:"images/base_slide/base_right_panel_purple_circle.png"})
s01_base_right_panel_green_circle = new Layer ({x:1038, y:265, width:42, height: 42, image:"images/base_slide/base_right_panel_green_circle.png"})
s01_base_right_panel_yellow_circle = new Layer ({x:1038, y:330, width:42, height: 42, image:"images/base_slide/base_right_panel_yellow_circle.png"})
s01_base_right_panel_grey_circle = new Layer ({x:1038, y:395, width:42, height: 42, image:"images/base_slide/base_right_panel_grey_circle.png"})
s01_base_right_panel_red_circle = new Layer ({x:1038, y:460, width:42, height: 42, image:"images/base_slide/base_right_panel_red_circle.png"})

s01_base_purple_path = new Layer ({x:40, y:220, width:996, height: 6, image:"images/base_slide/base_purple_path.png"})
s01_base_green_path = new Layer ({x:40, y:285, width:996, height: 6, image:"images/base_slide/base_green_path.png"})
s01_base_yellow_path = new Layer ({x:40, y:350, width:996, height: 6, image:"images/base_slide/base_yellow_path.png"})
s01_base_grey_path = new Layer ({x:40, y:415, width:996, height: 6, image:"images/base_slide/base_grey_path.png"})
s01_base_red_path = new Layer ({x:40, y:480, width:996, height: 6, image:"images/base_slide/base_red_path.png"})


s01_base_left_panel_purple_arrow.animate({
	properties: {y: s01_base_left_panel_purple_arrow.y - 100},
	curve: "spring(100,10,0)",
})