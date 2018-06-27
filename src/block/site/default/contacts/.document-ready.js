/*$('.tabs__link.is--tabs1').on('shown.bs.tab', function (e) {
	$(".tabs__pane.is--map1").toggleClass("active");
	$(".tabs__pane.is--map2").toggleClass("active");	
})*/
$('.azbn__show-map').on('shown.bs.tab', function (e) {
	$(".azbn__map").removeClass("is--inactive");
	$(".azbn__map-preview").removeClass("is--active");	
})
$('.azbn__show-map-link').on('click', function (e) {
	$(".azbn__map").toggleClass("is--inactive");
	$(".azbn__map-preview").toggleClass("is--active");
	if (!$(this).data('status')) {
		$(this).html($(this).data('text-active'));
		$(this).data('status', true);
	}
	else {
		$(this).html($(this).data('text'));
		$(this).data('status', false);
	}
})
$('.azbn__show-map-link.is--panaram').on('click', function (e) {
	$(".azbn__map").toggleClass("is--inactive");
	$(".azbn__map-preview").toggleClass("is--active");	
	$(this).html('Показать панораму');
})
$('.azbn__show-map-preview').on('shown.bs.tab', function (e) {
	$(".azbn__map").addClass("is--inactive");
	$(".azbn__map-preview").addClass("is--active");	
})