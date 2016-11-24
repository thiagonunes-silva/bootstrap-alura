$('#div-menu').on('show.bs.collapse', function () {
  	$(".div-banner").css('transform', 'translate(-50%, 10%)')
})

$('#div-menu').on('hidden.bs.collapse', function () {
  	$(".div-banner").css('transform', 'translate(-50%, -50%)')
})