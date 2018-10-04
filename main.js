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
	let ratings = {
		star: '',
		actory: [{
			name: 'Christoph Waltz',
			pic: 'https://1.fwcdn.pl/ph/05/41/620541/400388_5.2.jpg',
			rating: '9,4',
			votes: '10625'
		},
		{
			name: 'Leonardo DiCaprio',
			pic: 'https://1.fwcdn.pl/ph/05/41/620541/361695_2.2.jpg',
			rating: '9,2',
			votes: '13282'
		},
		{
			name: 'Samuel L. Jackson',
			pic: 'https://1.fwcdn.pl/ph/05/41/620541/400387_1.2.jpg',
			rating: '9,1',
			votes: '7398'
		},
		{
			name: 'Jamie Foxx',
			pic: 'https://1.fwcdn.pl/ph/05/41/620541/400383_2.2.jpg',
			rating: '8,6',
			votes: '6359'
		},
		{
			name: 'Kerry Washington',
			pic: 'https://1.fwcdn.pl/ph/05/41/620541/361693_2.2.jpg',
			rating: '7,5',
			votes: '2577'
		}
		],
		moveRight: () => {

		},
		moveLeft: () => {

		},
		createPanel: () => {
			let html = `<button id='leftArrow'><</button>`;
			ratings.actory.forEach((actor) => {
				html += `<div style='margin: 0 10px'>
							<div style="background-image:url(${actor.pic});background-size: cover; width: 185px; height:185px; color: white"><p>${actor.name}</p></div>
							<div><p style='font-size:18px'>${actor.rating}  <span style='font-size:13px'>${actor.votes} głosów</span></p></div>
						</div>`;
			});
			html += `<button id='rightArrow'>></button>`;
			return html;
		}
	}
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