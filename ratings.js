
 let ratings= {
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

