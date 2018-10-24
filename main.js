import personel from './personel.js';
import ratings from './ratings.js';

$(document).ready(() =>{


	let setCast = (obj) =>{
		let personelCont = document.getElementById('personelList');
		personelCont.innerHTML='';
		obj.forEach((actor) => {
			personelCont.innerHTML += `<div class="member"><img src="${actor.picture}" alt="${actor.name}"><p>${actor.name}</p><p>${actor.role}</p><img src="${actor.rolePic}"></div>`;
		});
	};
	setCast(personel.actors);
	$('#staff').on('click', (event) =>{
		setCast(personel.staff);
		$(event.currentTarget).addClass('button-yellow');
		$('#crew').removeClass('button-yellow');
	});
	$('#crew').on('click', () =>{
		setCast(personel.actors);
		$(event.currentTarget).addClass('button-yellow');
		$('#staff').removeClass('button-yellow');
	});

	let rateActors = document.getElementById('leadRoles');
	let  panel = ratings.createPanel();
	console.log(panel);
	rateActors.innerHTML = panel;
	//ratings.createPanel(rateActors);

	$('.film').on('mouseenter', () => {
		$('#filmMenu li').show();
		$('.film').addClass('bottom-underline');
	});
	$('.flexCol').on('mouseleave', () => {
		$('#filmMenu li').hide();
		$('.film').removeClass('bottom-underline');
	});
	$('.serial').on('mouseenter', () => {
		$('#showMenu li').show();
		$('.serial').addClass('bottom-underline');
	});
	$('.flexCol').on('mouseleave', () => {
		$('#showMenu li').hide();
		$('.serial').removeClass('bottom-underline');
	});
	$('.gra').on('mouseenter', () => {
		$('#gameMenu li').show();
		$('.gra').addClass('bottom-underline');
	});
	$('.flexCol').on('mouseleave', () => {
		$('#gameMenu li').hide();
		$('.gra').removeClass('bottom-underline');	
	});
	
});