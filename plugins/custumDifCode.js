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

// плавна зміна картинки

	$('.img_bus_single img').click(function(e) {
		var bigImage = $(this).closest('.photos_wrap').find('.big_foto img');
		 if (bigImage.attr('src') ==  $(this).data('imglink')) return;
		 bigImage.hide();
		 bigImage.attr('src', $(this).data('imglink'));
		 bigImage.fadeIn();
	});

	$('.big_foto').click(function(){
		var arr_images = [];
		var firstImageLink = $(this).find('img').attr('src');
		arr_images.push(firstImageLink);
		$(this).closest('.photos_wrap').find('.img_bus_single').each(function(e) {
			var imgLink =  $(this).find('img').data('imglink')
			if(imgLink != firstImageLink)
				arr_images.push(imgLink);
		});
		$.fancybox.open(arr_images, {
										padding:0,
										margin:[0,15,0,15],
										scrolling:'visible'
									});
	})

