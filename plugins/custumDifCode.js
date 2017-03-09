// click outer block
$(document).mouseup(function (event){ // событие клика по веб-документу
	if ($(event.target).closest(".adaptive_menu_show").length || !$('#menu').hasClass('adaptive_menu_show'))  return;
	closeMenu();
	asideMenuItemsContentHiden();
	asideSubMenuItemsContentHiden();
	event.stopPropagation();
});

// click 
$(function(e) {
	$('.img_bus_single img').click(function(e) {
		 $(this).closest('.photos_wrap').find('.big_foto img').attr('src', $(this).data('imglink'));
	})
	$('.big_foto').click(function(){
		var arr_photos = [];
		var firstImage = $(this).find('img').attr('src');
		arr_photos.push(firstImage);
		$(this).closest('.photos_wrap').find('.img_bus_single').each(function(e) {
			var imgBigLink =  $(this).find('img').data('imglink')
			if(imgBigLink != firstImage)
				arr_photos.push(imgBigLink);
		});
		$.fancybox.open(arr_photos, {
										padding:0,
										margin:[0,15,0,15],
										scrolling:'visible'
									});

	});

