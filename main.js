$(document).ready(() =>{
	$('.film').on('mouseenter', () => {
		$('.filmMenu li').show();
	});
	$('.filmMenu li').on('mouseleave', () => {
		$('.filmMenu li').hide();
	});
	$('.serial').on('mouseenter', () => {
		$('.showMenu li').show();
	});
	$('.showMenu li').on('mouseleave', () => {
		$('.showMenu li').hide();
	});
	$('.gra').on('mouseenter', () => {
		$('.gameMenu li').show();
	});
	$('.gameMenu li').on('mouseleave', () => {
		$('.gameMenu li').hide();
	});
	
});