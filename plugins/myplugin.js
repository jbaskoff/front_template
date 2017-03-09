	
function tubsInitialization(tabsWrapId) {
	$('#' + tabsWrapId + " .tabs-content>div:not(:first)").hide();
	
	$('#' + tabsWrapId +" .tabs li").each(function(i) {$(this).attr('data-tab', 'tab_' + i)});
	$('#' + tabsWrapId +" .tabs-content>div").each(function(i) {$(this).attr('data-tab', 'tab_' + i)});

	$('#' + tabsWrapId + ' .tabs li').click(function(e){
		if ($(this).hasClass('active')) return;

		$('#' + tabsWrapId +' .tabs li').removeClass('active');
		$(this).addClass('active');

		$('#' + tabsWrapId +' .tabs-content>div').hide();
		$('#' + tabsWrapId +' .tabs-content>div[data-tab=' + $(this).data('tab') + ']').show();
	});
	/**
	**tabs structure**
	**/ 
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
	tubsInitialization("tabs-wrap1");
})