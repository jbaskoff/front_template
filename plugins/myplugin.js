	
function tubsInitialization(wrapId) {
	$('#' + wrapId + ">div>div:not(:first)").hide();
	
	$('#' + wrapId +" .tabs li").each(function(i) {$(this).attr('data-tab', 'tab_' + i)});
	$('#' + wrapId +" .tabs-content>div").each(function(i) {$(this).attr('data-tab', 'tab_' + i)});

	$('#' + wrapId + ' .tabs li').click(function(e){
		if ($(this).hasClass('active')) return;

		$('#' + wrapId +' .tabs li').removeClass('active');
		$(this).addClass('active');

		$('#' + wrapId +' .tabs-content>div').hide();
		$('#' + wrapId +' .tabs-content>div[data-tab=' + $(this).data('tab') + ']').show();
	});
	/***tabs structure***/ 
	// 	<div id="tabs-wrap">
	// 	  <ul class="tabs">
	// 		<li class='active'>tab1</li>
	// 		<li>tab2</li>
	// 	  </ul>
	// 	  <div class="tabs-content">
	// 		<div>content1</div>
	// 		<div>content2</div>		
	//    </div>
	//  </div> 
};
$(function(e) {
	tubsInitialization("tabs-wrap");
})