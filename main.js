$(document).ready(() =>{
	$('.film').on('click', () => {
		$('.filmMenu li').fadeToggle();
	});
	$('.serial').on('click', () => {
		$('.showMenu li').fadeToggle();
	});
	$('.gra').on('click', () => {
		$('.gameMenu li').fadeToggle();
	});
});