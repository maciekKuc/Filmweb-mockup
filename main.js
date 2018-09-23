$(document).ready(() =>{
	let personel = {
		actors: [{
			picture: 'https://1.fwcdn.pl/p/58/59/5859/394261.2.jpg',
			name: 'Jamie Foxx',
			role: 'Django',
			rolePic: 'https://1.fwcdn.pl/ph/05/41/620541/400383_2.0.jpg'
		},
		{
			picture: 'https://1.fwcdn.pl/p/95/01/69501/358591.2.jpg',
			name: 'Christoph Waltz',
			role: 'Dr King Schultz',
			rolePic: 'https://1.fwcdn.pl/ph/05/41/620541/400388_5.0.jpg'
		}
		],
		staff: [{
			picture: 'https://1.fwcdn.pl/p/01/11/111/386849.2.jpg',
			name: 'Quentin Tarantino',
			role: 'reżyser',
			rolePic: 'https://1.fwcdn.pl/ph/05/41/620541/361697.0.jpg'
		},
		{
			picture: 'https://1.fwcdn.pl/p/01/11/111/386849.2.jpg',
			name: 'Quentin Tarantino',
			role: ' scenariusz',
			rolePic: ''
		}
		]
	};
	let setCast = (obj) =>{
		let personelCont = document.getElementById('personelList');
		personelCont.innerHTML='';
		obj.forEach((actor) => {
			personelCont.innerHTML += '<div class="memeber"><img src="' + actor.picture +'">' ;
			personelCont.innerHTML += '<p>' + actor.name + '</p>';
			personelCont.innerHTML += '<p>' + actor.role + '</p>';
			personelCont.innerHTML += '<img src="' + actor.rolePic +'"></div>' ;
		});
	};
	setCast(personel.actors);

	$('.film').on('mouseenter', () => {
		$('.filmMenu li').show();
	});
	$('.flexCol').on('mouseleave', () => {
		$('.filmMenu li').hide();
	});
	$('.serial').on('mouseenter', () => {
		$('.showMenu li').show();
	});
	$('.flexCol').on('mouseleave', () => {
		$('.showMenu li').hide();
	});
	$('.gra').on('mouseenter', () => {
		$('.gameMenu li').show();
	});
	$('.flexCol').on('mouseleave', () => {
		$('.gameMenu li').hide();
	});
	
});