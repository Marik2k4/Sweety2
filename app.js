console.log('')
console.log('-------------------------------')
console.log('  Sweet Bot запущен.')
console.log('  Разработчик: Сахар Марк')
console.log('-------------------------------')
console.log('')

// ВСЕ НАСТРОЙКИ В ФАЙЛЕ settings.json!

const { VK } = require('vk-io');
const { Keyboard } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');
const { PORT , TOKEN , CONFIRMATION } = require('./config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

const cars = [
	{
		name: 'Lada Vesta',
		cost: 50000,
		id: 1
	},
	{
		name: 'Lada Xray',
		cost: 75000,
		id: 2
	},
	{
		name: 'Hyundai Solaris 2019',
		cost: 120000,
		id: 3
	},
	{
		name: 'Reno logan',
		cost: 200000,
		id: 4
	},
	{
		name: 'Patriot 2019',
		cost: 450000,
		id: 5
	},
	{
		name: 'Range Rover Velar',
		cost: 720000,
		id: 6
	},
	{
		name: 'Audi A8',
		cost: 1200000,
		id: 7
	},
	{
		name: 'Mercedes S-Class',
		cost: 2000000,
		id: 8
	},
	{
		name: 'Toyota Camry',
		cost: 7500000,
		id: 9
	},
	{
		name: 'Porsche Cayenne',
		cost: 15000000,
		id: 10
	},
	{
		name: 'Audi Q7',
		cost: 25000000,
		id: 11
	},
	{
		name: 'BMW X8',
		cost: 35000000,
		id: 12
	},
	{
		name: 'Porsche Panamera',
		cost: 50000000,
		id: 13
	},
	{
		name: 'Toyota FT-HS',
		cost: 75000000,
		id: 14
	},
	{
		name: 'BMW Z4 M',
		cost: 100000000,
		id: 15
	},
	{
		name: 'Subaru WRX STI',
		cost: 150000000,
		id: 16
	},
	{
		name: 'Lamborghini Veneno',
		cost: 250000000,
		id: 17
	},
	{
		name: 'Tesla Roadster',
		cost: 400000000,
		id: 18
	},
	{
		name: 'Lamborghini Huracan',
		cost: 500000000,
		id: 19
	},
	{
		name: 'Bugatti Chiron',
		cost: 1500000000,
		id: 20
	},
	{
		name: 'Thrust SSC',
		cost: 2500000000,
		id: 21
	},
	{
		name: 'Ferrari LaFerrari',
		cost: 5000000000,
		id: 22
	},
	{
		name: 'Koenigsegg Regear',
		cost: 7500000000,
		id: 23
	},
	{
		name: 'Tesla Semi',
		cost: 10500000000,
		id: 24
	},
	{
		name: 'Venom GT',
		cost: 15000000000,
		id: 25
	},
	{
		name: 'Rolls-Royce',		
		cost: 20000000000,
		id: 26
	},
	{
		name: 'Bugatti La Voiture Noire',
		cost: 25000000000,
		id:27
	},
	{
		name: 'Tesla Cybertruck',
		cost: 50000000000,
		id:28
	}
];

const moto = [
	{
		name:'Honda CBR1000RR Fireblade',
		cost: 12000000,
		id:1
	},
	{
		name:'Kawasaki KXF',
		cost: 20000000,
		id:2
	},
	{
		name:'Harley-Davidson Fat Boy',
		cost: 50000000,
		id:3
	},
	{
		name:'Lightning LS',
		cost: 80000000,
		id:4
	},
	{
		name:'Honda CB500F',
		cost: 120000000,
		id:5
	},
	{
		name:'Harley-Davidson Road Glide',
		cost: 200000000,
		id:6
	},
	{
		name:'Yamaha R1',
		cost: 450000000,
		id:7
	},
	{
		name:'Suzuki Hayabusa',
		cost: 600000000,
		id:8
	},
	{
		name:'Honda VFR1200X Crosstourer1',
		cost: 800000000,
		id:9
	},
	{
		name:'Aprilia RS 125',
		cost: 1200000000,
		id:10
	}
]


const yachts = [
	{
		name: 'Шлюпка',
		cost: 6000000,
		id: 1
	},
	{
		name: 'Лодка',
		cost: 15000000,
		id: 2
	},
	{
		name: 'Катамаран',
		cost: 30000000,
		id: 3
	},
	{
		name: 'Nauticat 331',
		cost: 45000000,
		id: 4
	},
	{
		name: 'Nordhavn 56 MS',
		cost: 60000000,
		id: 5
	},
	{
		name: 'Princess 60',
		cost: 100000000,
		id: 6
	},
	{
		name: 'Azimut 70',
		cost: 175000000,
		id: 7
	},
	{
		name: 'Dominator 40M',
		cost: 250000000,
		id: 8
	},
	{
		name: 'Moonen 124',
		cost: 430000000,
		id: 9
	},
	{
		name: 'Wider 150',
		cost: 550000000,
		id: 10
	},
	{
		name: 'Palmer Johnson 42M SuperSport',
		cost: 620000000,
		id: 11
	},
	{
		name: 'Wider 165',
		cost: 800000000,
		id: 12
	},
	{
		name: 'Eclipse',
		cost: 1200000000,
		id: 13
	},
	{
		name: 'Azzam',
		cost: 2000000000,
		id: 14
	},
	{
		name: 'Streets of Monaco',
		cost: 5000000000,
		id: 15
	}
];

const airplanes = [
	{
		name: 'Superstol 2016',
		cost: 1400000,
		id: 1
	},
	{
		name: 'АН-2',
		cost: 5000000,
		id: 2
	},
	{
		name: 'Cessna-172E',
		cost: 20000000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 45000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 63000000,
		id: 5
	},
	{
		name: 'Cessna T210',
		cost: 125000000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 200000000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 370000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 550000000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 720000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 850000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 1000000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 1420000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 2750000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 4000000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 6500000000,
		id: 16
	},
	{
		name: 'B-2 Spirit Stealth Bomber',
		cost: 8000000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Robinson R44 Raven I',
		cost: 2600000,
		id: 1
	},
	{
		name: 'RotorWay Exec 162F',
		cost: 7000000,
		id: 2
	},
	{
		name: 'Robinson R44',
		cost: 20000000,
		id: 3
	},
	{
		name: 'Hiller UH-12C',
		cost: 45000000,
		id: 4
	},
	{
		name: 'AW119 Koala',
		cost: 75000000,
		id: 5
	},
	{
		name: 'MBB BK 117',
		cost: 110000000,
		id: 6
	},
	{
		name: 'Eurocopter EC130',
		cost: 230000000,
		id: 7
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 400000000,
		id: 8
	},
	{
		name: 'Sikorsky S-76',
		cost: 750000000,
		id: 9
	},
	{
		name: 'Bell 429WLG',
		cost: 1000000000,
		id: 10
	},
	{
		name: 'NHI NH90',
		cost: 1200000000,
		id: 11
	},
	{
		name: 'Kazan Mi-35M',
		cost: 1750000000,
		id: 12
	},
	{
		name: 'Bell V-22 Osprey',
		cost: 2500000000,
		id: 13
	}
];

const homes = [
	{
		name: 'Хрущевка',
		cost: 6400000,
		id: 1
	},
	{
		name: 'Подвал в Пентагоне',
		cost: 20000000,
		id: 2
	},
	{
		name: 'Школа',
		cost: 75000000,
		id: 3
	},
	{
		name: 'Бункер в Чернобыле',
		cost: 150000000,
		id: 4
	},
	{
		name: 'Одноэтажный дом',
		cost: 230000000,
		id: 5
	},
	{
		name: 'Дом в лесу',
		cost: 580000000,
		id: 6
	},
	{
		name: 'Деревянный дом',
		cost: 730000000,
		id: 7
	},
	{
		name: 'Дача на Рублёвке',
		cost: 890000000,
		id: 8
	},
	{
		name: 'Кирпичный дом',
		cost: 1200000000,
		id: 9
	},
	{
		name: 'Коттедж',
		cost: 2500000000,
		id: 10
	},
	{
		name: 'Особняк',
		cost: 4200000000,
		id: 11
	},
	{
		name: 'Дом на Рублёвке',
		cost: 6000000000,
		id: 12
	},
	{
		name: 'Личный небоскрёб',
		cost: 13500000000,
		id: 13
	},
	{
		name: 'Остров с особняком',
		cost: 30000000000,
		id: 14
	},
	{
		name: 'Белый дом',
		cost: 45000000000,
		id: 15
	}
];

const reklama = [
	{
		name: 'Старт',
		cost:1500000,
		sub:20000,
		id:1
	},
	{
		name:'Нормал',
		cost:7500000,
		sub:45000,
		id:2
	},
	{
		name:'Про',
		cost:15000000,
		sub:75000,
		id:3
	},
	{
		name:'Мега',
		cost:30000000,
		sub:120000,
		id:4
	},
	{
		name:'Ультра',
		cost:55000000,
		sub:250000,
		id:5
	},
	{
		name:'Слишком сладкая',
		cost:150000000,
		sub:450000,
		id:6
	},
	{
		name:'Король SweetTube',
		cost:600000000,
		sub:1500000,
		id:7
	}

];

const apartments = [
	{
		name: 'Чердак',
		cost: 150000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 550000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 1750000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 2500000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 5000000,
		id: 5
	},
	{
		name: 'Квартира в центре Москвы',
		cost: 10600000,
		id: 6
	},
	{
		name: 'Двухуровневая квартира',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира с Евроремонтом',
		cost: 60000000,
		id: 8
	}
];

const garage = [
	{
		name:'Контейнер',
		cost: 250000,
		id:1
	},
	{
		name:'Деревянный гараж',
		cost:700000,
		id:2
	},
	{
		name:'Во дворе',
		cost:2000000,
		id:3
	},
	{
		name:'Ангар',
		cost:6500000,
		id:4
	},
	{
		name:'Автостоянка',
		cost:10000000,
		id:5
	},
	{
		name:'Нано гараж',
		cost:25000000,
		id:6
	}

];

const phones = [
	{
		name: 'Sumsung Cordy S3650',
		cost: 20000,
		id: 1
	},
	{
		name: 'Nokia 3310 2017',
		cost: 50000,
		id: 2
	},
	{
		name: 'ASUS ZenFone 4',
		cost: 75000,
		id: 3
	},
	{
		name: 'Xiaomi Redmi 4 x',
		cost: 100000,
		id: 4
	},
	{
		name: 'Honor 10 Lite',
		cost: 150000,
		id: 5
	},
	{
		name: 'Samsung Galaxy S8',
		cost: 300000,
		id: 6
	},
	{
		name: 'Xiaomi Mi Mix',
		cost: 500000,
		id: 7
	},
	{
		name: 'Sumsung Galaxy S11',
		cost: 750000,
		id: 8
	},
	{
		name: 'iPhone X',
		cost: 1000000,
		id: 9
	},
	{
		name: 'iPhone 12',
		cost: 2500000,
		id: 10
	}
];

const pristavk = [
	{
		name:'Atari 2600',
		cost:2500,
		id:1
	},
	{
		name:'Nes (Aka Dendy)',
		cost:5000,
		id:2
	},
	{
		name:'Sega Genesis',
		cost:10500,
		id:3
	},
	{
		name:'Nintendo Snes',
		cost:15000,
		id:4
	},
	{
		name:'Sony Playstation',
		cost:25000,
		id:5
	},
	{
		name:'Nintendo 64',
		cost:37000,
		id:6
	},
	{
		name:'Sony Playstation-2',
		cost:45500,
		id:7
	},
	{
		name:'Microsoft XBOX 360',
		cost:70000,
		id:8
	},
	{
		name:'Sony Playstation-3',
		cost:90000,
		id:9
	},
	{
		name:'Nintendo Wii',
		cost:150000,
		id:10
	}

];

const shmot = [
	{
		name:'Одежда из мармеладок',
		cost:5000000,
		id:1
	},
	{
		name:'Вещи с рынка',
		cost:25000000,
		id:2
	},
	{
		name:'Вещи с Zara',
		cost:75000000,
		id:3
	},
	{
		name:'Supreme футболка',
		cost:150000000,
		id:4
	},
	{
		name:'Thrasher толстовка',
		cost:550000000,
		id:5
	},
	{
		name:'Gucci одежда',
		cost:1500000000,
		id:6
	},
	{
		name:'Костюм Versace',
		cost:3000000000,
		id:7
	},
	{
		name:'Вещи H&M',
		cost:5600000000,
		id:8
	},
	{
		name:'Кросы Nike',
		cost:7800000000,
		id:9
	},
	{
		name:'Лук Dolce & Gabbana',
		cost:11000000000,
		id:10
	}

];

const pets = [
	{
		name: 'Улитка',
		cost: 1000,
		id: 1,
		icon: '🐌'
	},
	{
		name: 'Змея',
		cost: 25000,
		id: 2,
		icon: '🐍'
	},
	{
		name: 'Заяц',
		cost: 100000,
		id: 3,
		icon: '🐰 '
	},
	{
		name: 'Свинья',
		cost: 5000000,
		id: 4,
		icon: '🐷 '
	},
	{
		name: 'Лиса',
		cost: 30000000,
		id: 5,
		icon: '🦊 '
	},
	{
		name: 'Собака',
		cost: 75000000,
		id: 6,
		icon: '🐶'
	},
	{
		name: 'Панда',
		cost: 140000000,
		id: 7,
		icon: '🐼'
	},
	{
		name: 'Кот',
		cost: 250000000,
		id: 8,
		icon: '🐈'
	},
	{
		name: 'Дракон',
		cost: 1000000000,
		id: 9,
		icon: '🐲'
	}
];

const dino = [
	{
		name:'Велоцираптор',
		cost:10000000,
		id:1

	},
	{
		name:'Птеродактиль',
		cost:100000000,
		id:2

	},
	{
		name:'Трицераптос',
		cost:500000000,
		id:3
	},
	{
		name:'Минотавразавр',
		cost:1000000000,
		id:4
	},
	{
		name:'Тираннозавр',
		cost:10000000000,
		id:5
	}
]


const petsupd = [
	{
		cost: 2000,
		id: 1
	},
	{
		cost: 50000,
		id: 2
	},
	{
		cost: 200000,
		id: 3
	},
	{
		cost: 10000000,
		id: 4
	},
	{
		cost: 60000000,
		id: 5
	},
	{
		cost: 150000000,
		id: 6
	},
	{
		cost: 280000000,
		id: 7
	},
	{
		cost: 500000000,
		id: 8
	},
	{
		cost: 2000000000,
		id: 9
	}
];

const farms = [
	{
		name: '6U Nvidia',
		cost: 20500000,
		id: 1
	},
	{
		name: 'AntminerS9',
		cost: 100000000,
		id: 2
	},
	{
		name: 'FM2018-BT200',
		cost: 900000000,
		id: 3
	}
];

const businesses = [
	{
		name: 'Шаурмичная',
		cost: 50000,
		earn: 400,
		id: 1,
		icon: '🥖'
	},
	{
		name: 'Ларёк',
		cost: 100000,
		earn: 700,
		id: 2,
		icon: '🏪'
	},
	{
		name: 'Ресторан',
		requiredbusinessLevel: 2,
		cost: 300000,
		earn: 2500,
		id: 3,
		icon: '🍷'
	},
	{
		name: 'Магазин',
		requiredbusinessLevel: 3,
		cost: 500000,
		earn: 3800,
		id: 4,
		icon: '🏫'
	},
	{
		name: 'Завод',
		requiredbusinessLevel: 4,
		cost: 1500000,
		earn: 8000,
		id: 5,
		icon: '🏭'
	},
	{
		name: 'Шахта',
		requiredbusinessLevel: 5,
		cost: 25000000,
		earn: 70000,
		id: 6,
		icon: '⛏'
	},
	{
		name: 'Офис',
		requiredbusinessLevel: 6,
		cost: 80000000,
		earn: 220000,
		id: 7,
		icon: '🏢'
	},
	{
		name: 'Разработка игр',
		requiredbusinessLevel: 7,
		cost: 150000000,
		earn: 300000,
		id: 8,
		icon: '🕹'
	},
	{
		name: 'Нефтевышка',
		requiredbusinessLevel: 8,
		cost: 500000000,
		earn: 700000,
		id: 9,
		icon: '🏜'
	},
	{
		name: 'Атомная электростанция',
		requiredbusinessLevel: 9,
		cost: 800000000,
		earn: 1000000,
		id: 10,
		icon: '💡'
	},
	{
		name: 'Космическое агентство',
		requiredbusinessLevel: 10,
		cost: 50000000000,
		earn: 50000000,
		id: 11,
		icon: '🗺'
	}
];

const works = [
	{
		name: 'Дворник',
		requiredLevel: 1,
		min: 2000,
		max: 2500,
		id: 1
	},
	{
		name: 'Сантехник',
		requiredLevel: 3,
		min: 3750,
		max: 4000,
		id: 2
	},
	{
		name: 'Электрик',
		requiredLevel: 5,
		min: 4000,
		max: 4500,
		id: 3
	},
	{
		name: 'Слесарь',
		requiredLevel: 8,
		min: 5000,
		max: 5500,
		id: 4
	},
	{
		name: 'Юрист',
		requiredLevel: 10,
		min: 7500,
		max: 8000,
		id: 5
	},
	{
		name: 'Бухгалтер',
		requiredLevel: 14,
		min: 9000,
		max: 9489,
		id: 6
	},
	{
		name: 'Бармен',
		requiredLevel: 22,
		min: 10000,
		max: 12500,
		id: 7
	},
	{
		name: 'Администратор',
		requiredLevel: 25,
		min: 12500,
		max: 13500,
		id: 8
	},
	{
		name: 'Программист',
		requiredLevel: 49,
		min: 16000,
		max: 17500,
		id: 9
	}
];

const guns = [
	{
		name:'USP-S',
		uron:1,
		cost:250000000,
		id:1
	},
	{
		name:'P250',
		uron:2,
		cost:480000000,
		id:2
	},
	{
		name:'CZ75-Auto',
		uron:3,
		cost:720000000,
		id:3
	},
	{
		name:'Desert Eagle',
		uron:4,
		cost:840000000,
		id:4
	},
	{
		name:'MAG-7',
		uron:5,
		cost:1000000000,
		id:5
	},
	{
		name:'MP7',
		uron:6,
		cost:1240000000,
		id:6
	},
	{
		name:'ПП-19 Бизон',
		uron:7,
		cost:1470000000,
		id:7
	},
	{
		name:'AK-47',
		uron:8,
		cost:1630000000,
		id:8
	},
	{
		name:'M4A1-S',
		uron:9,
		cost:1890000000,
		id:9
	},
	{
		name:'AUG',
		uron:10,
		cost:2000000000,
		id:10
	},
	{
		name:'AWP',
		uron:11,
		cost:2480000000,
		id:11
	},
	{
		name:'SCAR-20',
		uron:12,
		cost:2700000000,
		id:12
	},
	{
		name:'Negev',
		uron:13,
		cost:3100000000,
		id:13
	},
	{
		name:'Револьвер R8',
		uron:14,
		cost:3450000000,
		id:14
	},
	{
		name:'Карамбит',
		uron:15,
		cost:4000000000,
		id:15
	}
];



const creatures = [
	{
		name:'Единирог',
		id: 1,
		unicorn_health: 5,
		unicorn_ataka: 3,
		unicorn_shit: 2
	},
	{
		name:'Кин-Конг',
		id: 2,
		kinkong_health: 20,
		kinkong_ataka: 14,
		kinkong_shit: 5
	},
	{
		name:'Мегалодон',
		id: 3,
		megalodon_health: 55,
		megalodon_ataka: 36,
		megalodon_shit: 18
	},
	{
		name:'Гоблин',
		id:4,
		goblin_health:9,
		goblin_ataka:4,
		goblin_shit:11
	},
	{
		name:'Медуза',
		id:5,
		medusha_health:18,
		medusha_ataka:15,
		medusha_shit:0
	},
	{
		name:'Голем',
		id:6,
		golem_health:17,
		golem_ataka:0,
		golem_shit:83
	},
	{
		name:'Годзилла',
		id:7,
		godzila_health:48,
		godzila_ataka:29,
		godzila_shit:15
	},
	{
		name:'Химера',
		id:8,
		himera_health:15,
		himera_ataka:45,
		himera_shit:14
	},
	{
		name:'Дельфин',
		id:9,
		delfin_health:48,
		delfin_ataka:5,
		delfin_shit:25
	},
	{
		name:'Ктулху',
		id:10,
		ktylhy_health:95,
		ktylhy_ataka:95,
		ktylhy_shit:2
	},
	{
		name:'Трехглавый орёл',
		id:11,
		orel_health:40,
		orel_ataka:88,
		orel_shit:5
	},
	{
		name:'Минотавр',
		id:12,
		minotavr_health:76,
		minotavr_ataka:115,
		minotavr_shit:35
	},
	{
		name:'Грифон',
		id:13,
		grifon_health:20,
		grifon_ataka:11,
		grifon_shit:29
	},
	{
		name:'Черепаха',
		id:14,
		turtle_health:20,
		turtle_ataka:2,
		turtle_shit:100
	},
	{
		name:'Саламандра',
		id:15,
		salamandra_health:5,
		salamandra_ataka:70,
		salamandra_shit:15
	},
	{
		name:'Акромантул',
		id:16,
		akromanryl_health:105,
		akromanryl_ataka:105,
		akromanryl_shit:56
	},
	{
		name:'Призрак',
		id:17,
		ghost_health:0,
		ghost_ataka:20,
		ghost_shit:5
	},
	{
		name:'Кракен',
		id:18,
		kraken_health:150,
		kraken_ataka:150,
		kraken_shit:1
	},
	{
		name:'Иссушитель',
		id:19,
		issush_health:30,
		issush_ataka:60,
		issush_shit:35
	},
	{
		name:'Гигант',
		id:20,
		gigant_health:120,
		gigant_ataka:5,
		gigant_shit:5
	}
	
];
const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'Много');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

const rotateText = {
	q: 'q',
	Q: 'q',
	w: 'ʍ',
	W: 'ʍ',
	e: 'ǝ',
	E: 'ǝ',
	r: 'ɹ',
	R: 'ɹ',
	t: 'ʇ',
	T: 'ʇ',
	y: 'ʎ',
	Y: 'ʎ',
	u: 'u',
	U: 'u',
	i: 'ᴉ',
	I: 'ᴉ',
	o: 'o',
	O: 'o',
	p: 'p',
	P: 'p',
	a: 'ɐ',
	A: 'ɐ',
	s: 's',
	S: 's',
	d: 'd',
	D: 'd',
	f: 'ɟ',
	F: 'ɟ',
	g: 'ƃ',
	G: 'ƃ',
	h: 'ɥ',
	H: 'ɥ',
	j: 'ɾ',
	J: 'ɾ',
	k: 'ʞ',
	K: 'ʞ',
	l: 'l',
	L: 'l',
	z: 'z',
	Z: 'z',
	x: 'x',
	X: 'x',
	c: 'ɔ',
	C: 'ɔ',
	v: 'ʌ',
	V: 'ʌ',
	b: 'b',
	B: 'b',
	n: 'n',
	N: 'n',
	m: 'ɯ',
	M: 'ɯ',

	й: 'ņ',
	Й: 'ņ',
	ц: 'ǹ',
	Ц: 'ǹ',
	у: 'ʎ',
	У: 'ʎ',
	к: 'ʞ',
	К: 'ʞ',
	е: 'ǝ',
	Е: 'ǝ',
	н: 'н',
	Н: 'н',
	г: 'ɹ',
	Г: 'ɹ',
	ш: 'm',
	Ш: 'm',
	щ: 'm',
	Щ: 'm',
	з: 'ε',
	З: 'ε',
	х: 'х',
	Х: 'х',
	ъ: 'q',
	Ъ: 'q',
	ф: 'ф',
	Ф: 'ф',
	ы: 'ıq',
	Ы: 'ıq',
	в: 'ʚ',
	В: 'ʚ',
	а: 'ɐ',
	А: 'ɐ',
	п: 'u',
	П: 'u',
	р: 'd',
	Р: 'd',
	о: 'о',
	О: 'о',
	л: 'v',
	Л: 'v',
	д: 'ɓ',
	Д: 'ɓ',
	ж: 'ж',
	Ж: 'ж',
	э: 'є',
	Э: 'є',
	я: 'ʁ',
	Я: 'ʁ',
	ч: 'һ',
	Ч: 'һ',
	с: 'ɔ',
	С: 'ɔ',
	м: 'w',
	М: 'w',
	и: 'и',
	И: 'и',
	т: 'ɯ',
	Т: 'ɯ',
	ь: 'q',
	Ь: 'q',
	б: 'ƍ',
	Б: 'ƍ',
	ю: 'oı',
	Ю: 'oı',
	1: '1',
	2: '2',
	3: '3',
	4: '4',
	5: '5',
	6: '6',
	7: '7',
	8: '8',
	9: '9',
	0: '0'
}

let btc = 6000;

let smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`, `😢`, `😩`, `😐`, `😕`, `😕`, `😤`, `😤`, `🤕`, `😪`, `😾`, `💀`, `💩`]);
let smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`, `😄`, `😁`, `😊`, `😉`, `😜`, `😋`, `😎`, `🤤`, `👻`, `🙈`, `🙉`, `🙀`, `😺`]);

let users = require('./users.json');
let config = require('./settings.json');
let buttons = [];

try{

		setTimeout(async () => {
			const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

			if(!rq.ticker) return;
			if(!rq.ticker.price) return;

			btc = Math.floor(Number(rq.ticker.price));
		}, 5);

} catch (error){

		setInterval(async () => {
			const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

			if(!rq.ticker) return;
			if(!rq.ticker.price) return;

			btc = Math.floor(Number(rq.ticker.price));
		}, 60000);

}

setInterval(async () => {
	await saveUsers();
	console.log(' База данных успешно сохранена.');
	console.log('');
}, 300000); // 5 минут


setInterval(async () => {
	users.map(user => {
		if(user.bank > 0)
		{
			procent = Math.floor((user.bank * 5) / 100);
			user.bank += procent;
		}
	});
}, 10800000); // 3 часа
	

setInterval(async () => {

smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`, `😢`, `😩`, `😐`, `😕`, `😕`, `😤`, `😤`, `🤕`, `😪`, `😾`, `💀`, `💩`]);
smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`, `😄`, `😁`, `😊`, `😉`, `😜`, `😋`, `😎`, `🤤`, `👻`, `🙈`, `🙉`, `🙀`, `😺`]);

}, 1);


setInterval(async () => {
    users.filter(x=> x.misc.farm !== 0).map(x=> {
        if(x.misc.farm === 1)
        {
            x.farm_btc += 2;
        }

        if(x.misc.farm === 2)
        {
            x.farm_btc += 10;
        }

        if(x.misc.farm === 3)
        {
            x.farm_btc += 100;
        }
    });
}, 3600000);

setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);

function clearTemp()
{
	users.map(user => {
		user.timers.hasWorked = false;
		user.timers.bonus = false;
		user.timers.rec = false;
		user.timers.stream = false;
		user.timers.poxod = false;
		user.timers.poxod2 = false;
		user.timers.sirk = false;
		user.timers.war = false; // Атака
		user.timers.drygoi_igrok_war = false; // Не возможность атаковать другого игрока 
		user.timers.syshestva_war = false; // Атака колодой
		user.timers.drygoi_syshestva_war = false; // Не возможность атаковать другого игрока колодой
		user.timers.hack = false;
		user.timers.inkub = false;
		user.timers.rentapartment = false;
		user.timers.renthouse = false;
		user.promo = false;
		user.energy = 10;
	});
}

function card(user){
	//const multiply = utils.pick([0.25 , 0.5 , 0.75 , 1 , 1.25 , 1.5 , 0.5 , 1.75 , 0.5 , 2 , 0.75 , 2.5 , 0.75 , 2.75 ,0.25 , 3 , 0.75 ,0 , 0.9 , 4 , 0.1]);
    
	card_hp = utils.pick([1,2,3,4,5,6,7,8,9,10]);
	card_hp_url = [0,'photo-167936449_456239087','photo-167936449_456239088','photo-167936449_456239089','photo-167936449_456239090','photo-167936449_456239091','photo-167936449_456239092','photo-167936449_456239093','photo-167936449_456239094','photo-167936449_456239095','photo-167936449_456239096']
	
	card_zashita = utils.pick([1,2,3,4,5,6,7,8,9,10]);
	card_zashita_url = [0,'photo-167936449_456239065','photo-167936449_456239066','photo-167936449_456239067','photo-167936449_456239068','photo-167936449_456239069','photo-167936449_456239070','photo-167936449_456239071','photo-167936449_456239072','photo-167936449_456239073','photo-167936449_456239074']
	
	card_ataka = utils.pick([1,2,3,4,5,6,7,8,9,10]);
	card_ataka_url = [0,'photo-167936449_456239033','photo-167936449_456239034','photo-167936449_456239045','photo-167936449_456239046','photo-167936449_456239047','photo-167936449_456239048','photo-167936449_456239049','photo-167936449_456239050','photo-167936449_456239051','photo-167936449_456239052']
	
	card_kr_udar = utils.pick([1,2,3,4,5]);
	card_kr_udar_url = [0,'photo-167936449_456239109','photo-167936449_456239110','photo-167936449_456239111','photo-167936449_456239112','photo-167936449_456239113']
	
	let a = utils.random(1,4);
	if(a == 1){
		user.hero_hp += Number(card_hp);
		return ['hp', card_hp, card_hp_url[card_hp]];
	}
	if(a == 2){
		user.hero_zashita += Number(card_zashita);
		return ['zashita', card_zashita, card_zashita_url[card_zashita]];
	}
	if(a == 3){
		user.hero_ataka += Number(card_ataka);
		return ['ataka', card_ataka, card_ataka_url[card_ataka]];
	}
	if(a == 4){
	    user.hero_kr_udar += Number(card_kr_udar);
		return ['kr_udar', card_kr_udar, card_kr_udar_url[card_kr_udar]];
	}
}


function text_hero(){
	let text = '';
	for(i=1;i<7;i++){
		var h = heros[i];
text += `⏩ Герой: ${h.group}
- - - - - 
📜 Описание: ${h.text}
- - - - - 
[🆔] » ${i}
 - - - - -
      `
	} 
	return text
} 

function clearPromo()
{
	promo = 0;
	users.map(user => {
		user.promo = false;
	});
}

function msgError(messagetext)
{
	return bot(`${messagetext} ${utils.pick([`😯`, `🙂`, `🤑`, `☺`])}`);
}

clearTemp();
clearPromo();

async function saveUsers()
{
	require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
	return true;
}

async function saveConfig()
{
	require('fs').writeFileSync('./settings.json', JSON.stringify(config, null, '\t'));
	return true;
}

vk.setOptions({ token: config.grouptoken, pollingGroupId: config.groupid });
const { updates, snippets } = vk;

updates.startPolling();

updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();
		users.push({
			id: message.senderId,
			uid: users.length, 				// id игрока
			balance: 50000,					// Баланс
			bank: 0, 						// Банк
			hero_hp: 100,					// Здоровье Героя
            hero_zashita: 25,				// Защита Героя
            hero_ataka: 25,					// Атака Героя
            hero_kr_udar: 25,				// Критический урон Героя
			card: 0,						// Количество карт Героя
			rubins: 0,						// Количество рубинов
			btc: 0, 						// Биткоины
			farm_btc: 0,					// Количество биткоинов на ферме
			farms: 0,						// Номер биткоин фермы
			farmslimit: 1000,				// Лимит биткоин ферм
			energy: 10,						// Энергия для шахты
			opit: 0,						// Опыт на шахте
			meteorit:0,						// Метеорит
			biz: 0,							// Количество денег на бизнесе
			zhelezo: 0,						// Количество железа
			zoloto: 0,						// Количество золота
			almaz: 0,						// Количество алмазов
			bizlvl: 0,						// Уровень бизнеса
			hero_id: false,					// Id героя
            hero_name: `Герой не выбран`, 	// Имя героя
			part: false,					// Партнёрка
			kanal: false,					// Канал
			nuk_kanal: false,				// Название канала
			info_locked: false, 			// Информация о канале
			sub: 0,							// Количество подписчиков
			like: 0,						// Количество лайков
			dislike: 0,						// Количество дизлайков
			videos: 0,						// Количество видео
			camera: false,					// Наличие камеры
			microfon: false,				// Наличие микрофона
			heteri: 0,						// Количество хейтеров
			comment: 0,						// Количество комментариев
			tematika: false,				// Название тематики канала
			but: `Нет`,						// Наличие кнопки SweetTube
			sm: 0,							// Количество просмотров
			rec: true,						// Разрешие/Запрет на съёмку видео
			nicklimit: 16,					// Лимит ника
			foolder:0,						// Количество использованных команд
			rating: 0,						// Количество рейтинга
			regDate: `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`, // Дата регистрации
			mention: true,					// Гиперссылка
			ban: false,						// Наличие бана	
			timers: {
				hasWorked: false,			// Работа
				bonus: false,				// Бонус
				poxod: false,				// Питомец поход
				poxod2: false,				// Поход
				hack: false					// Взломать
			},
			tag: user_info.first_name,
			work: 0,						// Id работы
			business: 0,					// Id бизнеса
			notifications: true,			// Наличие уведомлений
			exp: 1,							// Уровень игрока
			referal: null,					// Реферальная ссылка		
			promo: false,					// Промо
			transport: {
				car: 0,						// Id машины
				moto: 0,					// Id мотоцикла
				yacht: 0,					// Id яхты
				airplane: 0,				// Id самолёта
				helicopter: 0				// Id вертолёта
			},
			realty: {
				home: 0,					// Id дома
				apartment: 0,				// Id квартиры
				garage:0,					// Id гаража
				interierhome:0,				// Количество интерьера для дома
				interierapartment:0			// Количество интерьера для квартиры
			},
			misc: {
				phone: 0,					// Id телефона
				shmot: 0,					// Id одежды
				farm: 0,					// Id фермы
				pet: 0,						// Id питомца
				dino: 0,					// Id динозавра
				lvl:1,						// Уровень динозавра 
				pristavk: 0,				// Id пристави
				guns:0,						// Id оружия
				valer:false					// Наличие вольера
			},
			settings: {
				adm: 0,						// Админка
				trade: true					// Бан/Разбан передачи денег
			},
			pet: {
				lvl: 0						// Уровень питомца
			},
			creatures: {
				unicorn:0,
					unicorn_health: 5,
					unicorn_ataka: 3,
					unicorn_shit: 2,
				kinkong:0,
					kinkong_health:20,
					kinkong_ataka: 14,
					kinkong_shit: 5,
				megalodon:0,
					megalodon_health: 55,
					megalodon_ataka: 36,
					megalodon_shit: 18,
				goblin:0,
					goblin_health:9,
					goblin_ataka:4,
					goblin_shit:11,
				medusha:0,
					medusha_health:18,
					medusha_ataka:15,
					medusha_shit:0,
				golem:0,
					golem_health:17,
					golem_ataka:0,
					golem_shit:83,
				godzila:0,
					godzila_health:48,
					godzila_ataka:29,
					godzila_shit:15,
				himera:0,
					himera_health:15,
					himera_ataka:45,
					himera_shit:14,
				delfin:0,
					delfin_health:48,
					delfin_ataka:5,
					delfin_shit:25,
				ktylhy:0,
					ktylhy_health:95,
					ktylhy_ataka:95,
					ktylhy_shit:2,
				orel:0,
					orel_health:40,
					orel_ataka:88,
					orel_shit:5,
				minotavr:0,
					minotavr_health:76,
					minotavr_ataka:115,
					minotavr_shit:35,
				grifon:0,
					grifon_health:20,
					grifon_ataka:11,
					grifon_shit:29,
				turtle:0,
					turtle_health:20,
					turtle_ataka:2,
					turtle_shit:100,
				salamandra:0,
					salamandra_health:5,
					salamandra_ataka:70,
					salamandra_shit:15,
				akromanryl:0,
					akromanryl_health:105,
					akromanryl_ataka:105,
					akromanryl_shit:56,
				ghost:0,
					ghost_health:0,
					ghost_ataka:20,
					ghost_shit:5,
				kraken:0,
					kraken_health:150,
					kraken_ataka:150,
					kraken_shit:1,
				issush:0,
					issush_health:30,
					issush_ataka:60,
					issush_shit:35,
				gigant:0,
					gigant_health:120,
					gigant_ataka:5,
					gigant_shit:5
			}
		});
		console.log(` +1 игрок [Игроков: ${users.length}]`);
		console.log(``);
		saveUsers();
	}

	message.user = users.find(x=> x.id === message.senderId);

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	if(message.user.ban) return bot(`Ваш аккаунт заблокирован ⛔`);

	const command = commands.find(x=> x[0].test(message.text));

	if(!command)
	{

		if(!message.isChat) return bot(`Такой команды не существует. 
		Отправь «Команды» чтобы узнать мои команды ❓`);
		if(message.isChat) return;

	}
	
	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	saveUsers();
	console.log(` Введена команда: ${message.text}.`)
	console.log(``)
});


const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.hear(/^(?:помощь|привет|команды|📚 Помощь|меню|help|commands|cmds|menu|начать|start)$/i, async (message, bot) => {
	await bot(`мои команды:

🍀 [Развлекательные]:
⠀⠀📺 Гиф [фраза]
⠀⠀↪ Переверни [фраза]
⠀⠀🔮 Шар [фраза]
⠀⠀📊 Инфа [фраза]
⠀⠀⚖ Выбери [фраза] или [фраза2]
⠀⠀🔊 Музыка

🚀 [Игры]:
⠀⠀🎲 Кубик [1-6]
⠀⠀🎰 Казино [сумма]
⠀⠀📈 Трейд [вверх/вниз] [сумма]
⠀⠀🥛 Стаканчик [1-3] [сумма]
⠀⠀🔦 Сейф [двухзначное число]
⠀⠀⛏ Копать
⠀⠀🚕 Таксовать
⠀⠀👣 Поход
⠀⠀👾 Взломать
⠀⠀🚀 Вкосмос
⠀⠀📦 Кейсы

💎 [SweetTube]:
⠀⠀💻 Создать [название]
⠀⠀💻 Сменить название [название]
⠀⠀👭 Вступить в партнёрку
⠀⠀🔝 Топ Просмотров
⠀⠀📺 Тематика
⠀⠀📚 Инфо кнопки
⠀⠀📈 Реклама
⠀⠀🎬 Снять [название]
⠀⠀🔥 Канал
⠀⠀🎮 Стрим
⠀⠀🔝 Тренды
⠀⠀🙈 Убрать хейтеров

👔 [Работа]:
⠀⠀🔨 Работать
⠀⠀❌ Уволиться

💼 [Бизнес]:
⠀⠀📈 Бизнес
⠀⠀💵 Бизнес снять
⠀⠀✅ Бизнес улучшить

🌽 [Питомцы]:
⠀⠀🐒 Питомцы
⠀⠀🙊 Питомец инфа
⠀⠀🐪 Питомец поход
⠀⠀🌟 Питомец улучшить
⠀⠀🎪 Цирк

🐉 [Динозавры]:
⠀⠀🙈 Динозавры
⠀⠀💉 Инкубировать
⠀⠀👽 Динозавр улучшить

💥 [RPG]
⠀⠀🤖 Герои
⠀⠀🤺 Атаковать [ID] 
⠀⠀💔 Лечиться
⠀⠀🌀 Открыть карту
⠀⠀🃏 Моя колода
⠀⠀🃏 Колода бой [ID]
⠀⠀🎴 Выбить карту
⠀⠀🗡 Топ воин

💡 [Разное]:
⠀⠀📗 Профиль
⠀⠀💰 Баланс
⠀⠀💰 Банк [сумма/снять сумма]
⠀⠀👑 Рейтинг
⠀⠀✒ Ник [ваш Ник] [вкл/выкл]
⠀⠀🛒 Магазин
⠀⠀➖ Продать [предмет]
⠀⠀🔋 Ферма
⠀⠀📊 Курс
⠀⠀🤝 Передать [id] [сумма]
⠀⠀🏆 Топ
⠀⠀💎 Бонус
⠀⠀👫 Реферал

🚫 » Удалить аккаунт - Попрощаться с ботом
🆘 » Репорт [фраза] - ошибки или пожелания
🆘 » Админ - узнать администратора группы
❗ » Помощь [команда] - узнать о команде`

);
});

cmd.hear(/^(?:помощь)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].toLowerCase();
	
	if(message.args[1] === 'Гиф')
	{
		return message.send(`Команда "Гиф" выдаёт гифки по заданной фразе.`);
	}
	
	if(message.args[1] === 'переверни')
	{
		return message.send(`Команда "Переверни" пишет ваш текст вверх ногами (Поддерживаются цифры, буквы латинского и кириллического алфавита, а также некоторые символы.)`);
	}

	if(message.args[1] === 'шар')
	{
		return message.send(`Команда "Шар" используя магию рандома выводит случайное сообщение.`);
	}

	if(message.args[1] === 'инфа')
	{
		return message.send(`Команда "Инфа" случайным образом присылает шанс чего-либо.`);
	}

	if(message.args[1] === 'выбери')
	{
		return message.send(`Команда "Выбери" случайным образом выбирает один из двух предложенных вариантов.`);
	}
	
	if(message.args[1] === 'музыка')
	{
		return message.send(`Команда "Музыка" выдаёт один рандомный трек.`);
	}
	
	if(message.args[1] === 'кубик')
	{
		return message.send(`Команда "Кубик" сравнивает ваше число со случайным от 1 до 6, если вы угадали, то получаете вознаграждение.`);
	}

	if(message.args[1] === 'казино')
	{
		return message.send(`Команда "Казино" случайным образом умножает вашу ставку (Могут выпасть множители х0, х0.25, х0.5, x0.75, х1, x1.25 , x1.75 , x2.5 , x2.75). Чтобы поставить всю сумму введите "Казино все".`);
	}																												 

	if(message.args[1] === 'трейд')
	{
		return message.send(`Команда "Трейд" - симулятор бинарных опционов. Введите "Трейд вверх (сумма)" если думаете, что курс валюты будет увеличиваться, или "Трейд вниз (сумма)" если будет уменьшаться.`);
	}

	if(message.args[1] === 'стаканчик')
	{
		return message.send(`Команда "Кубик" сравнивает ваше число со случайным от 1 до 3, если вы угадали, то получаете вознаграждение , в зависимости от поставленной суммы.Чтобы играть введите "Стаканчик [1-3] [сумма]".`);
	}
	
	if(message.args[1] === 'сейф')
	{
		return message.send(`С помощью команды "Сейф" , можно заработать  50.000.000$ , угадав рандомно выбранное число. Например "Сейф 44".`);
	}
	
	if(message.args[1] === 'копать')
	{
		return message.send(`С помощью команды "Копать" , можно , работая в шахте копать железо/золото/алмазы , в зависимости от вашего опыта. Чтобы проверить опыт , введите "Опыт".`);
	}
	
	if(message.args[1] === 'таксовать')
	{
		return message.send(`С помощью команды "Таксовать" , можно рабоать таксистом. Чтобы таксовать , нужно 1 500 опыта , который можно заработать на шахте.`);
	}
	
	if(message.args[1] === 'поход')
	{
		return message.send(`С помощью команды "Поход", можно получить разные плюшки(деньги , биткоины , рейтинг). В поход можно ходить раз в 24 часа.`);
	}
	
	if(message.args[1] === 'взломать')
	{
		return message.send(`С помощью команды "Взломать", можно заработать денег. `);
	}
	
	if(message.args[1] === 'вкосмос')
	{
		return message.send(`С помощью команды "Вкосмос", можно слетать в космос, найти метеориты и продать их на Земле. Стоимость полёта 500.000.000$`);
	}
	
	if(message.args[1] === 'кейсы')
	{
		return message.send(`С помощью команды "Кейсы" , вы можете открыть 3 вида кейсов из которых могу выпасть как хорошие , так и не очень призы.`);
	}
	
	if(message.args[1] === 'создать')
	{
		return message.send(`С помощью команды "Создать", можно создать свой SweetTube канал!`);
	}
	
	if(message.args[1] === 'сменить название')
	{
		return message.send(`С помощью команды "Сменить название", можно изменить название на вашем канале.`);
	}
	
	if(message.args[1] === 'вступить в партнёрку')
	{
		return message.send(`Возможности:
		1. Зарабатывать $ с рекламы на видео.
		2. Удвоенные подписчики с видео.
		3. Удвоенные просмотры с видео.
		4. Удвоенные лайки с видео.
		5. Уменьшее количество дизлайков и хейтеров!`);
	}
	
	if(message.args[1] === 'топ просмотров')
	{
		return message.send(`С помощью команды "Топ просмотров", можно узнать топ 10 игроков по количеству просмоторов.`);
	}
	
	if(message.args[1] === 'тематика')
	{
		return message.send(`С помощью команды "Тематика", можно выбрать тематику канала.`);
	}
	
	if(message.args[1] === 'реклама')
	{
		return message.send(`С помощью команды "Реклама", можно купить рекламу для вашего канала. При покупки увеличиться количество подписчиков.`);
	}
	
	if(message.args[1] === 'снять')
	{
		return message.send(`С помощью команды "Снять", можно снять видео для канала. Снимать можно раз в минуту.`);
	}
	
	if(message.args[1] === 'канал')
	{
		return message.send(`С помощью команды "Канал", можно просмотреть профиль вашего SweetTube канала.`);
	}
	
	if(message.args[1] === 'стрим')
	{
		return message.send(`С помощью команды "Стрим", можно снять стрим. Снимать можно раз в 2 минуты. На стриме можно заработать.`);
	}
	
	if(message.args[1] === 'тренды')
	{
		return message.send(`С помощью команды "Тренды", можно узнать лучших игроков по количеству подписчиков.`);
	}
	
	if(message.args[1] === 'убрать хейтеров')
	{
		return message.send(`С помощью команды "Убрать хейтеров", можно убрать всех ваших хейтеров с канала.Стоимость функции 500.000.000$`);
	}
	
	if(message.args[1] === 'работа')
	{
		return message.send(`С помощью команды "Работа" вы можете устроиться на одну из работ. Чтобы отрыть новые профессии, вам нужно отработать определённое кол-во игровых недель (Команда "Работать"). Для увольнения с работы введите "Уволиться".`);
	}
	
	if(message.args[1] === 'работать')
	{
		return message.send(`С помощью команды "Работать", можно работать на работе , которую вы выбрали.`);
	}
	
	if(message.args[1] === 'уволиться')
	{
		return message.send(`С помощью команды "Уволиться", вы увольняетесь со своей работы.`);
	}

	if(message.args[1] === 'бизнес')
	{
		return message.send(`Владея бизнесом, вы можете зарабатывать немало денег:
		Бизнесы [номер] - купить бизнес
		Бизнес - ваш бизнес
		Бизнес снять - снять деньги со счёта бизнеса
		Продать бизнес - продажа бизнеса`);
	}
	
	if(message.args[1] === 'бизнес снять')
	{
		return message.send(`Команда "Бизнес снять" снимает все деньги с вашего бизнес счёта.`);
	}
	
	if(message.args[1] === 'бизнес улучшить')
	{
		return message.send(`Команда "Бизнес улучшить" улучшает ваш бизнес на +1 уровень.`);
	}

	if(message.args[1] === 'питомец инфа')
	{
		return message.send(`Команда "Питомец инфа" показывает профиль вашего питомца.`);
	}
	
	if(message.args[1] === 'питомцы')
	{
		return message.send(`Команда "Питомцы" показывает список питомцев , которых можно купить.Для покупки введите "Питомцы [номер]".`);
	}
	
	if(message.args[1] === 'питомец поход')
	{
		return message.send(`Команда "Питомец поход" отправляет вашего питомца в поход. В походе можно найти деньги. Питомец может отправляться в поход раз в час.`);
	}
	
	if(message.args[1] === 'питомец улучшить')
	{
		return message.send(`С помощью команды "Питомец улучшить" вы увеличиваете уровень вашего питомца на +1.`);
	}
	
	if(message.args[1] === 'цирк')
	{
		return message.send(`С помощью команды "Цирк" , вы можете отправить своего питомца цирк , чтобы заработать денег. С увеличением уровня питомцы , прибыль в цирке повышается.`);
	}
	
	if(message.args[1] === 'динозавры')
	{
		return message.send(`Команда "Динозавры" показывает список динозавров , которых можно купить.Для покупки введите "Динозавры [номер]".`);
	}
	
	if(message.args[1] === 'инкубировать')
	{
		return message.send(`С помощью команды "Инкубировать" можно заработать денег на клонировании вашего динозавра.`);
	}
	
	if(message.args[1] === 'динозавр улучшить')
	{
		return message.send(`С помощью команды "Динозавр улучшить" вы увеличиваете уровень вашего динозавра на +1.`);
	}
	
	if(message.args[1] === 'герои')
	{
		return message.send(`С помощью команды "Герои", можно стать одним из 6 предложенных героев.`);
	}
	
	if(message.args[1] === 'атаковать')
	{
		return message.send(`С помощью команды "Атаковать" вы можете атаковать любого игрока. Победа в бою зависит от количества Мощности вашего Героя.`);
	}
	
	if(message.args[1] === 'лечиться')
	{
		return message.send(`Команда "Лечиться" увеличивает здоровье вашего Героя на + 5. Чтобы лечиться у вас должно быть 5.000.000$`);
	}
	
	if(message.args[1] === 'открыть карту')
	{
		return message.send(`Команда "Открыть карту" открывает Карту Героя. В каждой карте находятся различные характеристики для вашего Героя. Открывая эти карты ваша Мощь увеличивается.`);
	}
	
	if(message.args[1] === 'моя колода')
	{
		return message.send(`Команда "Моя колода" выводит списов всех ваших существ.`);
	}
	
	if(message.args[1] === 'колода бой')
	{
		return message.send(`С помощью команды "Колода бой" вы можете атаковать любого игрока существами , которые есть у вас в колоде.`);
	}
	
	if(message.args[1] === 'выбить карту')
	{
		return message.send(`Команда "Выбить карту" позволяет вам получить нового существа.`);
	}
	
	if(message.args[1] === 'топ воин')
	{
		return message.send(`Команда "Топ воин" выводит список 10 лучших воинов. Уровень воина зависит от рубинов , которые можно заработать в бою.`);
	}
	
	if(message.args[1] === 'профиль')
	{
		return message.send(`Команда "Профиль" выводит вашу игровую статистику.`);
	}
	
	if(message.args[1] === 'баланс')
	{
		return message.send(`Команда "Баланс" выводит кол-во валюты на вашем аккаунте.`);
	}
	
	if(message.args[1] === 'банк')
	{
		return message.send(`При вводе команды "Банк" выводится ваша сумма на счёте. Для того чтобы положить на счёт деньги введите "Банк [сумма]". Чтобы забрать деньги из банка введите "Банк снять/взять [сумма]".
		Сумма в банке увеличивается каждые 3 часа на 5% от суммы вклада.`);
	}
	
	if(message.args[1] === 'рейтинг')
	{
		return message.send(`Пустая команда "Рейтинг" (без параметров) выводит ваше кол-во рейтинга (также можно узнать в профиле). При указании параметра (любое число) вы купите данное кол-во единиц рейтинга (👑1 = 250.000.000$). Рейтинг влияет на ваше положение в топе.`);
	}
	
	if(message.args[1] === 'ник')
	{
		return message.send(`С помощью команды "Ник" можно выбрать себе ник длинною до 15 символов. Также, ник можно делать кликабельным/некликабельным в топе "Ник вкл" и "Ник выкл"`);
	}
	
	if(message.args[1] === 'магазин')
	{
		return message.send(`Команда "Магазин" выводит список категорий товаров, которые доступны для покупки.`);
	}
	
	if(message.args[1] === 'продать')
	{
		return message.send(`С помощью команды "Продать" вы можете продать любой предмет (Машину, дом, квартиру, гараж , телефон, яхту, самолет, вертолет, машину , мотоцикл , биткоин, ферму).`);
	}
	
	if(message.args[1] === 'ферма')
	{
		return message.send(`Команда "Ферма" выводит список доступных биткоин ферм. Каждая ферма будет приносить биткоины каждый час.`);
	}
	
	if(message.args[1] === 'курс')
	{
		return message.send(`С помощью команды "Курс" можно узнать курс Биткоина на данный момент.`);
	}

	if(message.args[1] === 'передать')
	{
		return message.send(`Команда "Передать" переводит указанную вами сумму любому игроку (Передать ${message.user.uid} 1000).`);
	}

	if(message.args[1] === 'топ')
	{
		return message.send(`Команда "Топ" выводит 10 игроков с самым большим рейтингом.`);
	}
	
	if(message.args[1] === 'бонус')
	{
		return message.send(`Команда "Бонус" ежедневно даёт вам разные плюшки(Деньги , биткоины , рейтинг).`);
	}
	
	if(message.args[1] === 'реф')
	{
		return message.send(`Команда "Реф" даёт вам 250.000.000$ за приглашённого друга. Приглашенному другу начисляется 50.000.000$`);
	}
	
	if(message.args[1] === 'удалить аккаунт')
	{
		return message.send(`Команда "Удалить аккаунт" удаляет ваш аккаунт до исходного состояния.`);
	}

	if(message.args[1] === 'репорт')
	{
		return message.send(`С помощью команды "Репорт" вы можете отправить создателю бота любое сообщение.`);
	}

});

cmd.hear(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`держи: "${text.split('').reverse().join('')}" ${smilesuccess}`)
});

cmd.hear(/^(?:гиф)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
       vk.api.call('docs.search', {q: message.args[1] + '.gif', count: 10})
        .then(response => {
            let items = response.items.map(x => `doc${x.owner_id}_${x.id}`).join(',');
            let item = utils.pick(response.items);
            message.send({attachment: items})
        })
});

cmd.hear(/^(?:гиф)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Введите фразу для поиска гифки ${smileerror}:
	📺 Гиф [фраза]
	${smilesuccess} Например "Гиф привет"`)
});

cmd.hear(/^(?:Переверни)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Вы не ввели фразу , которую надо перевернуть ${smileerror}:
	📺 Переверни [фраза]
	${smilesuccess} Например "Переверни привет"`)
});

cmd.hear(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	const phrase = utils.pick(['перспективы не очень хорошие 🤔', 'сейчас нельзя предсказать 🤔', 'пока не ясно 🤔', 'знаки говорят - "Да" 🤔', 'знаки говорят - "Нет" 🤔', 'можешь быть уверен в этом 🤔', 'мой ответ - "нет" 🤔', 'мой ответ - "да" 🤔', 'бесспорно 🤔', 'мне кажется - "Да" 🤔', 'мне кажется - "Нет" 🤔']);
	return bot(phrase);
});


cmd.hear(/^(?:Шар)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Введите фразу для выявления вероятности ${smileerror}:
	📺 Шар [фраза]
	${smilesuccess} Например "Шар Я сдам ОГЭ"`)
});

cmd.hear(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	const phrase = utils.pick(['шанс этого', 'мне кажется около']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}% 🙈`)
});

cmd.hear(/^(?:инфа|шанс|вероятность)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Введите фразу для выявления процента ${smileerror}:
	📺 Инфа [фраза]
	${smilesuccess} Например "Инфа Я сдам ОГЭ"`)
});


cmd.hear(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант ${smilesuccess}`, `мне кажется, что ${utils.random(1, 2)} вариант лучше ${smilesuccess}`]);
	return bot(`${phrase}`);
});

cmd.hear(/^(?:Выбери)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Введите то , из чего нужно выбрать ${smileerror}:
	📺 Выбери [фраза] или [фраза2]
	${smilesuccess} Например "1 или 2"`)
});

cmd.hear(/^(?:админ)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Администратор:
	vk.com/slishkom_sladki`);
});

cmd.hear(/^(?:профиль)$/i, async (message, bot) => {
message.user.foolder += 1;
	let text = ``;
	let mosh = message.user.hero_hp + message.user.hero_zashita + message.user.hero_ataka + message.user.hero_kr_udar;

	text += `[🔎] » ID: ${message.user.uid}\n`;
	text += `[👤] » Герой: ${message.user.hero_name}\n`;
	//text += `[🔗] » Ссылка: vk.com/id${message.user.id}\n`;
	text += `[❤] » Здоровье: ${message.user.hero_hp}%\n`;
	text += `[🛡] » Защита: ${message.user.hero_zashita}%\n`;
	text += `[💣] » Атака: ${message.user.hero_ataka}%\n`;
	text += `[🔪] » Критический урон: ${message.user.hero_kr_udar}%\n`;
	text += `[💉] » Мощь: ${mosh}%\n`;
	if(message.user.misc.shmot) text += `[👕] » Одежда: ${shmot[message.user.misc.shmot - 1].name}\n`;
	if(!message.user.misc.shmot) text += `[👕] » Одежда: нет\n`;
	if(message.user.card) text += `[🃏] » Карт героя: ${message.user.card}\n`;
	
		if(message.user.balance >= 1000000000000000000000){  
				let toch_balance = utils.rn(message.user.balance)
				text += `[💰] » Денег: ${toch_balance}$\n`;
		}
		else{
			text += `[💰] » Денег: ${utils.sp(message.user.balance)}$\n`;
		}	
	
	text += `[💳] » В банке: ${utils.sp(message.user.bank)}$\n`;
	text += `[🌐] » Биткоинов: ${utils.sp(message.user.btc)}฿\n`;
	  if(message.user.zhelezo) text += `[🎛] » Железо: ${message.user.zhelezo}\n`;
	  if(message.user.zoloto) text += `[🏵] » Золото: ${message.user.zoloto}\n`;
	  if(message.user.almaz) text += `[💎] » Алмазы: ${message.user.almaz}\n`;
	  if(message.user.meteorit) text += `[☄] » Метеориты: ${message.user.meteorit}\n`;
	text += `[👑] » Рейтинг: ${utils.sp(message.user.rating)}\n`;
	text += `[🔱] » Рубины: ${utils.sp(message.user.rubins)}\n`;
	if(message.user.work) text += `[👔] » Работа: ${works[message.user.work - 1].name}\n`;
	text += `[🌟] » Уровень: [${message.user.exp}/49]\n`;
	if(message.user.foolder) text += `[📤] » Использовано команд: ${message.user.foolder}\n`;

	if(message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.moto || message.user.transport.helicopter ||
		message.user.realty.home || message.user.realty.apartment || message.user.realty.garage ||
		message.user.misc.phone || message.user.misc.pristavk || message.user.misc.farm > 1 || message.user.business || message.user.misc.pet || message.user.misc.dino)
	{
		text += `\n🔑 Имущество:\n`;
	
		if(message.user.transport.car) text += `⠀⠀🚗 Машина: ${cars[message.user.transport.car - 1].name}\n`;
		if(message.user.transport.moto) text += `⠀⠀🏍 Мотоцикл: ${moto[message.user.transport.moto - 1].name}\n`;
		if(message.user.transport.yacht) text += `⠀⠀🛥 Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`;
		if(message.user.transport.airplane) text += `⠀⠀🛩 Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`;
		if(message.user.transport.helicopter) text += `⠀⠀🚁 Вертолёт: ${helicopters[message.user.transport.helicopter - 1].name}\n`;

		if(message.user.realty.home) text += `⠀⠀🏠 Дом: ${homes[message.user.realty.home - 1].name}\n`;
		if(message.user.realty.interierhome)  text += `⠀⠀🎨 Интерьера дома: ${utils.sp(message.user.realty.interierhome)}lvl\n`;
		if(message.user.realty.apartment) text += `⠀⠀🌇 Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`;
		if(message.user.realty.interierapartment)  text += `⠀⠀🎨 Интерьера квартиры: ${utils.sp(message.user.realty.interierapartment)}lvl\n`;
		if(message.user.realty.garage) text += `⠀⠀🏚 Гараж: ${garage[message.user.realty.garage - 1].name}\n`;

		if(message.user.misc.phone) text += `⠀⠀📱 Телефон: ${phones[message.user.misc.phone - 1].name}\n`;
		if(message.user.misc.guns) text += `⠀⠀🏹 Оружие: ${guns[message.user.misc.guns - 1].name}\n`;
		if(message.user.misc.pristavk) text += `⠀⠀🕹 Приставка: ${pristavk[message.user.misc.pristavk - 1].name}\n`;
		if(message.user.misc.pet) text += `⠀⠀${pets[message.user.misc.pet - 1].icon} Питомец: ${pets[message.user.misc.pet - 1].name} ${message.user.pet.lvl}lvl\n`;
		if(message.user.misc.dino) text += `⠀⠀🐲 Динозавр: ${dino[message.user.misc.dino - 1].name} ${message.user.misc.lvl}lvl\n`;
		if(message.user.misc.farm) text += `⠀⠀🔋 Фермы: ${farms[message.user.misc.farm - 1].name} (${message.user.farms}x)\n`;
		if(message.user.business) text += `⠀⠀${businesses[message.user.business - 1].icon} Бизнес: ${businesses[message.user.business - 1].name} ${message.user.bizlvl}lvl\n\n`;

	}
	text += `\n📗 Дата регистрации: ${message.user.regDate}`;
	return bot(`твой профиль:\n${text}`);
});

cmd.hear(/^(?:баланс)$/i, async (message, bot) => {
message.user.foolder += 1;
	let text = `На руках: ${utils.sp(message.user.balance)}$ 💸`;

	if(message.user.bank) text += `\n💳 В банке: ${utils.sp(message.user.bank)}$`;
	if(message.user.btc) text += `\n🌐 Биткоинов: ${utils.sp(message.user.btc)}฿`;
	if(message.user.zhelezo) text += `\n🎛 ${utils.sp(message.user.zhelezo)} железа`;
	if(message.user.zoloto) text += `\n🏵 ${utils.sp(message.user.zoloto)} золота`;
	if(message.user.almaz) text += `\n💎 ${utils.sp(message.user.almaz)} алмаза`;

	return bot(text);
});

cmd.hear(/^(?:банк)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.bank < 1) return bot(`Ваш банковский счет пуст ${smileerror}`);
	return bot(`На балансе в банке ${utils.sp(message.user.bank)}$
✍🏻 Введите "Банк [кол-во]" для пополнения`);
});

cmd.hear(/^(?:банк снять)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Вы не ввели количество ${smileerror}
	Например: "Банк снять 1000"💰`);
});

cmd.hear(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return bot(`У вас нет данной суммы ${smileerror}`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return bot(`Вы сняли ${utils.sp(message.args[1])}$
💳 Остаток на счёте: ${utils.sp(message.user.bank)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:банк)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] < 1) return bot(`На балансе в банке ${message.user.bank}$
✍🏻 Введите "Банк снять [кол-во]" для снятия`);

	if(message.args[1] > message.user.balance) return bot(`На вашем балансе нет столько денег ${smileerror}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return bot(`Вы положили в банк ${utils.sp(message.args[1])}$ ${smilesuccess}
💰 На руках ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`Уведомления отключены! 🔕`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.notifications = true;
		return bot(`Уведомления включены! 🔔`);
	}
});

cmd.hear(/^(?:передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(!message.user.settings.trade) return bot(`У вас установлен бан передачи ${smileerror}`);

	if(message.args[2] > message.user.balance) return bot(`Недостаточно денег ${smileerror}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`Укажите ID игрока из его профиля. ${smileerror}`);

		if(user.uid === message.user.uid) return bot(`Укажите ID игрока из его профиля. ${smileerror}`);

		message.user.balance -= message.args[2];
		user.balance += message.args[2];

		await bot(`Вы перевели ${user.tag} ${utils.sp(message.args[2])}$ ${smilesuccess}
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}$!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:рейтинг)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

cmd.hear(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`Гиперссылка включена! ${smilesuccess}`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`Гиперссылка отключена! ${smilesuccess}`);
	}
});

cmd.hear(/^(?:ник)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.args[1].length > message.user.nicklimit) return bot(`Вы указали длинный ник. ${smileerror}`);

	message.user.tag = message.args[1];
	let smilenick = utils.pick([`😯`, `🙂`, `☺`]);
	let ggtext = utils.pick([`фантастический`, `крутой`, `классный`, `прикольный`]);
	return bot(`${ggtext} ник! ${smilenick}`);
});

cmd.hear(/^(?:магазин)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`разделы магазина:

🚙 Транспорт:
⠀⠀🚗 Машины
⠀⠀🏍 Мотоциклы
⠀⠀🛥 Яхты
⠀⠀🛩 Самолеты
⠀⠀🚁 Вертолеты

🏘 Недвижимость:
⠀⠀🏠 Дома
⠀⠀🎨 Интерьер дома [кол-во]
⠀⠀🏠 Аренда дома⠀⠀⠀⠀⠀⠀
⠀⠀🌇 Квартиры
⠀⠀🎨 Интерьер квартиры [кол-во]
⠀⠀🏠 Аренда квартиры
⠀⠀🏚 Гаражи

📌 Остальное:
⠀⠀📱 Телефоны
⠀⠀🕹 Приставки
⠀⠀👕 Одежда
⠀⠀🔫 Оружие
⠀⠀🃏 Карта Героя [кол-во]
⠀⠀⭐ Фермы
⠀⠀👑 Рейтинг [кол-во] - $250 млн
⠀⠀🌐 Биткоин [кол-во]

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "${utils.pick(['Телефон 7', 'Машина 1', 'Ферма 2', 'Биткоин 100', 'Рейтинг 10'])}"`);
});

cmd.hear(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
message.user.foolder += 1;
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
		message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.rating);

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}

	if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return bot(`у вас нет машины ${smileerror}`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
		message.user.transport.car = 0;

		return bot(`Вы продали свою машину за ${utils.sp(a)}$ ✅`);
	}

	if(/мотоцикл/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.moto) return bot(`у вас нет мотоцикла ${smileerror}`);
		let a = Math.floor(moto[message.user.transport.moto - 1].cost * 0.85);

		message.user.balance += Math.floor(moto[message.user.transport.moto - 1].cost * 0.85);
		message.user.transport.moto = 0;

		return bot(`Вы продали свой мотоцикл за ${utils.sp(a)}$ ✅`);
	}

	if(/питом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.pet) return bot(`у вас нет питомца ${smileerror}`);
		let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);

		message.user.balance += Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);
		message.user.misc.pet = 0;
		message.user.pet.lvl = 1;

		return bot(`Вы продали своего питомца за ${utils.sp(a)}$ ✅`);
	}

	if(/диноз/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.dino) return bot(`у вас нет динозавра ${smileerror}`);
		let a = Math.floor(dino[message.user.misc.dino - 1].cost * 0.85);

		message.user.balance += Math.floor(dino[message.user.misc.dino - 1].cost * 0.85);
		message.user.misc.dino = 0;
		message.user.misc.lvl = 1;

		return bot(`Вы продали своего динозавра за ${utils.sp(a)}$ ✅`);
	}

	if(/желез/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zhelezo < 1) return bot(`у Вас нет железа. ⚠`);
		let a2 = message.user.zhelezo * 15000;

		var zhelezosda = message.user.zhelezo;

		message.user.balance += message.user.zhelezo * 15000;
		message.user.zhelezo = 0;

		return bot(`Вы продали ${zhelezosda} железа за ${utils.sp(a2)}$ ✅`);
	}

	if(/алмаз/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.almaz < 1) return bot(`у Вас нет алмазов. ⚠`);
		let a3 = message.user.almaz * 100000;

		var zhelezosda2 = message.user.almaz;

		message.user.balance += message.user.almaz * 100000;
		message.user.almaz = 0;

		return bot(`Вы продали ${zhelezosda2} алмазов за ${utils.sp(a3)}$ ✅`);
	}

	if(/золот/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zoloto < 1) return bot(`у Вас нет золота. ⚠`);
		let a4 = message.user.zoloto * 50000;

		var zhelezosda3 = message.user.zoloto;

		message.user.balance += message.user.zoloto * 50000;
		message.user.zoloto = 0;

		return bot(`Вы продали ${zhelezosda3} золота за ${utils.sp(a4)}$ ✅`);
	}

	if(/яхт/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return bot(`у вас нет яхты ${smileerror}`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		message.user.transport.yacht = 0;

		return bot(`Вы продали свою яхту за ${utils.sp(a)}$ ✅`);
	}

	if(/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return bot(`у вас нет самолёта ${smileerror}`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		message.user.transport.airplane = 0;

		return bot(`Вы продали свой самолёт за ${utils.sp(a)}$ ✅`);
	}

	if(/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.helicopter) return bot(`у вас нет вертолёта ${smileerror}`);
		let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

		message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
		message.user.transport.helicopter = 0;

		return bot(`Вы продали свой вертолёт за ${utils.sp(a)}$ ✅`);
	}

	if(/дом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`у вас нет дома ${smileerror}`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		message.user.realty.home = 0;
		message.user.realty.interierhome = 0;

		return bot(`Вы продали свой дом за ${utils.sp(a)}$ ✅`);
	}

	if(/квартир/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return bot(`у вас нет квартиры ${smileerror}`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		message.user.realty.apartment = 0;
		message.user.realty.interierapartment = 0;

		return bot(`Вы продали свою квартиру за ${utils.sp(a)}$ ✅`);
	}

	if(/гараж/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.garage) return bot(`у вас нет гаража ${smileerror}`);
		let a = Math.floor(garage[message.user.realty.garage - 1].cost * 0.85);

		message.user.balance += Math.floor(garage[message.user.realty.garage - 1].cost * 0.85);
		message.user.realty.garage = 0;

		return bot(`Вы продали свой гараж за ${utils.sp(a)}$ ✅`);
	}

	if(/телефон/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return bot(`у вас нет телефона ${smileerror}`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		message.user.misc.phone = 0;

		return bot(`Вы продали свой телефон за ${utils.sp(a)}$ ✅`);
	}
	
	if(/одежд/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.shmot) return bot(`у вас нет одежды ${smileerror}`);
		let a = Math.floor(shmot[message.user.misc.shmot - 1].cost * 0.85);

		message.user.balance += Math.floor(shmot[message.user.misc.shmot - 1].cost * 0.85);
		message.user.misc.shmot = 0;

		return bot(`Вы продали свою одежду за ${utils.sp(a)}$ ✅`);
	}

	if(/приставк/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.pristavk) return bot(`у вас нет приставки ${smileerror}`);
		let a = Math.floor(pristavk[message.user.misc.pristavk - 1].cost * 0.85);

		message.user.balance += Math.floor(pristavk[message.user.misc.pristavk - 1].cost * 0.85);
		message.user.misc.pristavk = 0;

		return bot(`Вы продали свою приставку за ${utils.sp(a)}$ ✅`);
	}
	
	if(/оруж/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.guns) return bot(`у вас нет оружия ${smileerror}`);
		let a = Math.floor(guns[message.user.misc.guns - 1].cost * 0.85);

		message.user.balance += Math.floor(guns[message.user.misc.guns- 1].cost * 0.85);
		message.user.misc.guns = 0;

		return bot(`Вы продали своё оружие за ${utils.sp(a)}$ ✅`);
	}

	if(/ферм/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.farm) return bot(`у вас нет ферм ${smileerror}`);
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);
		let a2 = a*message.user.farms;

		message.user.balance += Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);

		bot(`Вы продали ${farms[message.user.misc.farm - 1].name} (x${message.user.farms}) за ${utils.sp(a2)}$ ✅`);
		message.user.misc.farm = 0;
		message.user.farms = 0;
		return;
	}

	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет рейтинга ${smileerror}`);
		let a = (150000000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return bot(`Вы продали ${utils.sp(options.count)} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))} ✅`);
	}

	if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.business) return bot(`у вас нет бизнеса`);
		let a = Math.floor(businesses[message.user.business - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.business = 0;
		message.user.bizlvl = 0;

		return bot(`Вы продали свой бизнес за ${utils.sp(a)}$ ✅`);
	}
	
	if(/биткоин/i.test(message.args[1].toLowerCase()))
	{
		
		if(options.count > message.user.btc) return bot(`Недостаточно биткоинов ${smileerror}`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`Вы продали ${utils.sp(options.count)}🌐 за ${utils.sp(a)}$ ✅`);
	}
});



cmd.hear(/^(?:машины|машина)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`машины:
${message.user.transport.car === 1 ? '🔹' : '🔸'} 1. Lada Vesta (50.000$)
${message.user.transport.car === 2 ? '🔹' : '🔸'} 2. Lada Xray (75.000$)
${message.user.transport.car === 3 ? '🔹' : '🔸'} 3. Hyundai Solaris 2019 (120.000$)
${message.user.transport.car === 4 ? '🔹' : '🔸'} 4. Reno logan (200.000$)
${message.user.transport.car === 5 ? '🔹' : '🔸'} 5. Patriot 2019 (450.000$)
${message.user.transport.car === 6 ? '🔹' : '🔸'} 6. Range Rover Velar (720.000$)
${message.user.transport.car === 7 ? '🔹' : '🔸'} 7. Audi A8 (1.200.000$)
${message.user.transport.car === 8 ? '🔹' : '🔸'} 8. Mercedes S-Class (2.000.000$)
${message.user.transport.car === 9 ? '🔹' : '🔸'} 9. Toyota Camry (7.500.000$)
${message.user.transport.car === 10 ? '🔹' : '🔸'} 10. Porsche Cayenne (15.000.000$)
${message.user.transport.car === 11 ? '🔹' : '🔸'} 11. Audi Q7 (25.000.000$)
${message.user.transport.car === 12 ? '🔹' : '🔸'} 12. BMW X8 (35.000.000$)
${message.user.transport.car === 13 ? '🔹' : '🔸'} 13. Porsche Panamera (50.000.000$) 
${message.user.transport.car === 14 ? '🔹' : '🔸'} 14. Toyota FT-HS (75.000.000$)
${message.user.transport.car === 15 ? '🔹' : '🔸'} 15. BMW Z4 M (100.000.000$)
${message.user.transport.car === 16 ? '🔹' : '🔸'} 16. Subaru WRX STI (150.000.000$)
${message.user.transport.car === 17 ? '🔹' : '🔸'} 17. Lamborghini Veneno (250.000.000$)
${message.user.transport.car === 18 ? '🔹' : '🔸'} 18. Tesla Roadster (400.000.000$)
${message.user.transport.car === 19 ? '🔹' : '🔸'} 19. Lamborghini Huracan (500.000.000$)
${message.user.transport.car === 20 ? '🔹' : '🔸'} 20. Bugatti Chiron (1.500.000.000$)
${message.user.transport.car === 21 ? '🔹' : '🔸'} 21. Thrust SSC (2.500.000.000$)
${message.user.transport.car === 22 ? '🔹' : '🔸'} 22. Ferrari LaFerrari (5.000.000.000$)
${message.user.transport.car === 23 ? '🔹' : '🔸'} 23. Koenigsegg Regera (7.500.000.000$)
${message.user.transport.car === 24 ? '🔹' : '🔸'} 24. Tesla Semi (10.500.000.000$)
${message.user.transport.car === 25 ? '🔹' : '🔸'} 25. Venom GT (15.000.000.000$)
${message.user.transport.car === 26 ? '🔹' : '🔸'} 26. Rolls-Royce (20.000.000.000$)
${message.user.transport.car === 27 ? '🔹' : '🔸'} 27. Bugatti La Voiture Noire (25.000.000.000$)
${message.user.transport.car === 27 ? '🔹' : '🔸'} 28. Tesla Cybertruck (50.000.000.000$)

Для покупки введите "Машина [номер]"`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.car) return bot(`У вас уже есть машина (${cars[message.user.transport.car - 1].name}) ${smileerror} 
	${smilesuccess} Введите "Продать машину"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return message.send(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
	}
});

cmd.hear(/^(?:мотоциклы|мотоцикл)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`Мотоциклы:
${message.user.transport.moto === 1 ? '🔹' : '🔸'} 1. Honda CBR1000RR Fireblade (12.000.000$)
${message.user.transport.moto === 2 ? '🔹' : '🔸'} 2. Kawasaki KXF (20.000.000$)
${message.user.transport.moto === 3 ? '🔹' : '🔸'} 3. Harley-Davidson Fat Boy (50.000.000$)
${message.user.transport.moto === 4 ? '🔹' : '🔸'} 4. Lightning LS-218 (80.000.000$)
${message.user.transport.moto === 5 ? '🔹' : '🔸'} 5. Honda CB500F (120.000.000$)
${message.user.transport.moto === 6 ? '🔹' : '🔸'} 6. Harley-Davidson Road Glide (200.000.000$)
${message.user.transport.moto === 7 ? '🔹' : '🔸'} 7. Yamaha R1 (450.000.000$)
${message.user.transport.moto === 8 ? '🔹' : '🔸'} 8. Suzuki Hayabusa (600.000.000$)
${message.user.transport.moto === 9 ? '🔹' : '🔸'} 9. Honda VFR1200X Crosstourer (800.000.000$)
${message.user.transport.moto === 10 ? '🔹' : '🔸'} 10. Aprilia RS 125 (1.200.000.000$)

Для покупки введите "Мотоци��л [номер]"`);

	const sell = moto.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.moto) return bot(`У вас уже есть мотоцикл (${moto[message.user.transport.moto - 1].name}) ${smileerror}
	${smilesuccess} Введите "Продать мотоцикл"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.moto = sell.id;

		return bot(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
	}
});


cmd.hear(/^(?:яхты|яхта)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`яхты:
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Шлюпка (6.000.000$)
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 2. Лодка (15.000.000$)
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 3. Катамаран (30.000.000$)
${message.user.transport.yacht === 2 ? '🔹' : '🔸'} 4. Nauticat 331 (45.000.000$)
${message.user.transport.yacht === 3 ? '🔹' : '🔸'} 5. Nordhavn 56 MS (60.000.000$)
${message.user.transport.yacht === 4 ? '🔹' : '🔸'} 6. Princess 60 (100.000.000$)
${message.user.transport.yacht === 5 ? '🔹' : '🔸'} 7. Azimut 70 (175.000.000$)
${message.user.transport.yacht === 6 ? '🔹' : '🔸'} 8. Dominator 40M (250.000.000$)
${message.user.transport.yacht === 7 ? '🔹' : '🔸'} 9. Moonen 124 (430.000.000$)
${message.user.transport.yacht === 8 ? '🔹' : '🔸'} 10. Wider 150 (550.000.000$)
${message.user.transport.yacht === 9 ? '🔹' : '🔸'} 11. Palmer Johnson 42M SuperSport (620.000.000$)
${message.user.transport.yacht === 10 ? '🔹' : '🔸'} 12. Wider 165 (800.000.000$)
${message.user.transport.yacht === 11 ? '🔹' : '🔸'} 13. Eclipse (1.200.000.000$)
${message.user.transport.yacht === 12 ? '🔹' : '🔸'} 14. Dubai (2.000.000.000$)
${message.user.transport.yacht === 13 ? '🔹' : '🔸'} 15. Streets of Monaco (5.000.000.000$)

Для покупки введите "Яхта [номер]"`);

	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`У вас уже есть яхта (${yachts[message.user.transport.yacht - 1].name}) ${smileerror}
	${smilesuccess} Введите "Продать яхту"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
	}
});


cmd.hear(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`самолеты:
${message.user.transport.airplane === 1 ? '🔹' : '🔸'} 1. Superstol 2016 (1.400.000$)
${message.user.transport.airplane === 2 ? '🔹' : '🔸'} 2. АН-2 (5.000.000$)
${message.user.transport.airplane === 3 ? '🔹' : '🔸'} 3. Cessna-172E (20.000.000$)
${message.user.transport.airplane === 4 ? '🔹' : '🔸'} 4. Supermarine Spitfire (45.000.000$)
${message.user.transport.airplane === 5 ? '🔹' : '🔸'} 5. BRM NG-5 (63.000.000$)
${message.user.transport.airplane === 6 ? '🔹' : '🔸'} 6. Cessna T210 (125.000.000$)
${message.user.transport.airplane === 7 ? '🔹' : '🔸'} 7. Beechcraft 1900D (200.000.000$)
${message.user.transport.airplane === 8 ? '🔹' : '🔸'} 8. Cessna 550 (370.000.000$)
${message.user.transport.airplane === 9 ? '🔹' : '🔸'} 9. Hawker 4000 (550.000.000$)
${message.user.transport.airplane === 10 ? '🔹' : '🔸'} 10. Learjet 31 (720.000.000$)
${message.user.transport.airplane === 11 ? '🔹' : '🔸'} 11. Airbus A318 (850.000.000$)
${message.user.transport.airplane === 12 ? '🔹' : '🔸'} 12. F-35A (1.000.000.000$)
${message.user.transport.airplane === 13 ? '🔹' : '🔸'} 13. Boeing 747-430 Custom (1.420.000.000$)
${message.user.transport.airplane === 14 ? '🔹' : '🔸'} 14. C-17A Globemaster III (2.750.000.000$)
${message.user.transport.airplane === 15 ? '🔹' : '🔸'} 15. F-22 Raptor (4.000.000.000$)
${message.user.transport.airplane === 16 ? '🔹' : '🔸'} 16. Airbus 380 Custom (6.500.000.000$)
${message.user.transport.airplane === 17 ? '🔹' : '🔸'} 17. B-2 Spirit Stealth Bomber (8.000.000.000$)

Для покупки введите "Самолет [номер]"`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`У вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}) ${smileerror}
	${smilesuccess} Введите "Продать самолёт"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
	}
});

cmd.hear(/^(?:вертол(?:е|ё)т|вертол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`вертолеты:
${message.user.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Robinson R44 Raven I (2.600.000$)
${message.user.transport.helicopter === 2 ? '🔹' : '🔸'} 2. RotorWay Exec 162F (7.000.000$)
${message.user.transport.helicopter === 3 ? '🔹' : '🔸'} 3. Robinson R44 (20.000.000$)
${message.user.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Hiller UH-12C (45.000.000$)
${message.user.transport.helicopter === 5 ? '🔹' : '🔸'} 5. AW119 Koala (75.000.000$)
${message.user.transport.helicopter === 6 ? '🔹' : '🔸'} 6. MBB BK 117 (110.000.000$)
${message.user.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Eurocopter EC130 (230.000.000$)
${message.user.transport.helicopter === 8 ? '🔹' : '🔸'} 8. Leonardo AW109 Power (400.000.000$)
${message.user.transport.helicopter === 9 ? '🔹' : '🔸'} 9. Sikorsky S-76 (750.000.000$)
${message.user.transport.helicopter === 10 ? '🔹' : '🔸'} 10. Bell 429WLG (1.000.000.000$)
${message.user.transport.helicopter === 11 ? '🔹' : '🔸'} 11. NHI NH90 (1.200.000.000$)
${message.user.transport.helicopter === 12 ? '🔹' : '🔸'} 12. Kazan Mi-35M (1.750.000.000$)
${message.user.transport.helicopter === 13 ? '🔹' : '🔸'} 13. Bell V-22 Osprey (2.500.000.000$)

Для покупки введите "Вертолет [номер]"`);

	const sell = helicopters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.helicopter) return bot(`У вас уже есть вертолёт (${helicopters[message.user.transport.helicopter - 1].name}) ${smileerror}
	${smilesuccess} Введите "Продать вертолёт"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.helicopter = sell.id;

		return bot(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
	}
});

cmd.hear(/^(?:дом|дома)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`дома:
${message.user.realty.home === 1 ? '🔹' : '🔸'} 1. Хрущевка (6.400.000$)
${message.user.realty.home === 2 ? '🔹' : '🔸'} 2. Подвал в Пентагоне (20.000.000$)
${message.user.realty.home === 3 ? '🔹' : '🔸'} 3. Школа (75.000.000$)
${message.user.realty.home === 4 ? '🔹' : '🔸'} 4. Бункер в Чернобыле(150.000.000$)
${message.user.realty.home === 5 ? '🔹' : '🔸'} 5. Одноэтажный дом(230.000.000$)
${message.user.realty.home === 6 ? '🔹' : '🔸'} 6. Дом в лесу (580.000.000$)
${message.user.realty.home === 7 ? '🔹' : '🔸'} 7. Деревянный дом (730.000.000$)
${message.user.realty.home === 8 ? '🔹' : '🔸'} 8. Дача на Рублёвке (890.000.000$)
${message.user.realty.home === 9 ? '🔹' : '🔸'} 9. Кирпичный дом (1.200.000.000$)
${message.user.realty.home === 10 ? '🔹' : '🔸'} 10. Коттедж (2.500.000.000$)
${message.user.realty.home === 11 ? '🔹' : '🔸'} 11. Особняк (4.200.000.000$)
${message.user.realty.home === 12 ? '🔹' : '🔸'} 12. Дом на Рублёвке (6.000.000.000$)
${message.user.realty.home === 13 ? '🔹' : '🔸'} 13. Личный небоскрёб (13.500.000.000$)
${message.user.realty.home === 14 ? '🔹' : '🔸'} 14. Остров с особняком (30.000.000.000$)
${message.user.realty.home === 15 ? '🔹' : '🔸'} 15. Белый дом (45.000.000.000$)

Для покупки введите "Дом [номер]"`);

	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.home) return bot(`У вас уже есть дом (${homes[message.user.realty.home - 1].name}) ${smileerror}
	${smilesuccess} Введите "Продать дом"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
	}
});

cmd.hear(/^(?:интерьер дома)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Введите количество интерьера ${smileerror}
	${smilesuccess} Например "Интерьер дома 5"
	`);
});

cmd.hear(/^(?:интерьер дома)\s?([0-9]+)?/i, message => {
message.user.foolder += 1;
	let user = message.user;
	let id = message.user.id;
		message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
		message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
		message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
		if(!Number(message.args[1])) return;
		message.args[1] = Math.floor(Number(message.args[1]));

	if(!message.user.realty.home) return message.send (`${smileerror} У вас нет дома ${smileerror}`);
 	if(!message.args[1]) return message.send(`Укажите количество интерьера ${smileerror}`);
 	if(message.user.balance < (message.args[1]) * 1000000000) return message.send(`Недостаточно денег ${smileerror}`)
 		message.user.balance -= message.args[1] * 1000000000;
		message.user.realty.interierhome += Number(message.args[1]);
 	return message.send(`🎨 Вы успешно купили ${message.args[1]} лвл интерьера ${smilesuccess}!`);
 });
 
cmd.hear(/^(?:аренда дома)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.realty.home) return message.send (` ${smileerror} У вас нет дома ${smileerror}`);
	else {

		if(message.user.timers.renthouse) return bot(`Вы можете сдавать дом в аренду раз в час ${smileerror}`);

		setTimeout(() => {
		message.user.timers.renthouse = false;
		return bot(`Вы снова можете сдать дом в аренду ${smilesuccess}`);
		}, 3600000);

		message.user.timers.renthouse = true;

		let renthouse_money = utils.random(1500,5500) * message.user.realty.interierhome;
		message.user.balance += renthouse_money;

		return bot(`Вы получили ${utils.sp(renthouse_money)}$ с аренды дома ${smilesuccess}
		🔔 Чтобы увеличить сумму с аренды покупайте интерьер ${smilesuccess}`);
}	
});
 
cmd.hear(/^(?:квартира|квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`квартиры:
${message.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Чердак (150.000$)
${message.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (550.000$)
${message.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (1.750.000$)
${message.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная квартира (2.500.000$)
${message.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (5.000.000$)
${message.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира в центре Москвы (10.600.000$)
${message.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Двухуровневая квартира (40.000.000$)
${message.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Квартира с Евроремонтом (60.000.000$)

Для покупки введите "Квартира [номер]"`);

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`У вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}) ${smileerror}
	${smilesuccess} Введите "Продать квартиру"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
	}
});

cmd.hear(/^(?:интерьер квартиры)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Введите количество интерьера ${smileerror}
	${smilesuccess} Например "Интерьер квартиры 5"
	`);
});

cmd.hear(/^(?:интерьер квартиры)\s?([0-9]+)?/i, message => {
message.user.foolder += 1;
		message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
		message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
		message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
		let user = message.user;
		let id = message.user.id;
	if(!message.user.realty.apartment) return message.send (`${smileerror} У вас нет квартиры ${smileerror}`);
 	if(!message.args[1]) return message.send(`Укажите количество интерьера.`);
 	if(message.user.balance < (message.args[1]) * 1000000000) return message.send(`Недостаточно денег ${smileerror}`)
 		message.user.balance -= message.args[1] * 1000000000;
		message.user.realty.interierapartment += Number(message.args[1]);
 	return message.send(`🎨 Вы успешно купили ${message.args[1]} лвл интерьера ${smilesuccess}!`);
 });
 
cmd.hear(/^(?:аренда квартиры)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.realty.apartment) return message.send (`У вас нет квартиры ${smileerror}`);
	else {

		if(message.user.timers.rentapartment) return bot(`Вы можете сдавать квартиру в аренду раз в час ${smileerror}`);

		setTimeout(() => {
		message.user.timers.rentapartment = false;
		return bot(`Вы снова можете сдать квартиру в аренду ${smilesuccess}`);
	}, 3600000);

		message.user.timers.rentapartment = true;

		let rentapartment_money = utils.random(500,5000) * message.user.realty.interierapartment;
		message.user.balance += rentapartment_money;


		return bot(`Вы получили ${utils.sp(rentapartment_money)}$ с аренды квартиры ${smilesuccess}
		🔔 Чтобы увеличить сумму с аренды покупайте интерьер ${smilesuccess}`);
}	
});

cmd.hear(/^(?:гараж|гаражи)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`Гаражи:
${message.user.realty.garage === 1 ? '🔹' : '🔸'} 1. Контейнер (250.000$)
${message.user.realty.garage === 2 ? '🔹' : '🔸'} 2. Деревянный гараж (700.000$)
${message.user.realty.garage === 3 ? '🔹' : '🔸'} 3. Во дворе (2.000.000$)
${message.user.realty.garage === 4 ? '🔹' : '🔸'} 4. Ангар (6.500.000$)
${message.user.realty.garage === 5 ? '🔹' : '🔸'} 5. Автостоянка (10.000.000$)
${message.user.realty.garage === 6 ? '🔹' : '🔸'} 6. Нано гараж (25.000.000$)

Для покупки введите "Гараж [номер]"`);

	const sell = garage.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.garage) return bot(`У вас уже есть гараж (${garage[message.user.realty.garage - 1].name}) ${smileerror} 
	${smilesuccess} Введите "Продать гараж"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror} `);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.garage = sell.id;

		return bot(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
	}
});


cmd.hear(/^(?:телефон|телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`телефоны:
${message.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Samsung Corby S3650 (20.000$)
${message.user.misc.phone === 2 ? '🔹' : '🔸'} 2. Nokia 3310 2017 (50.000$)
${message.user.misc.phone === 3 ? '🔹' : '🔸'} 3. ASUS ZenFone 4 (75.000$)
${message.user.misc.phone === 4 ? '🔹' : '🔸'} 4. Xiaomi Redmi 4 x (100.000$)
${message.user.misc.phone === 5 ? '🔹' : '🔸'} 5. Honor 10 Lite (150.000$)
${message.user.misc.phone === 6 ? '🔹' : '🔸'} 6. Samsung Galaxy S8 (300.000$)
${message.user.misc.phone === 7 ? '🔹' : '🔸'} 7. Xiaomi Mi Mix (500.000$)
${message.user.misc.phone === 8 ? '🔹' : '🔸'} 8. Samsung Galaxy S11 (750.000$)
${message.user.misc.phone === 9 ? '🔹' : '🔸'} 9. iPhone X (1.000.000$)
${message.user.misc.phone === 10 ? '🔹' : '🔸'} 10. iPhone 12 (2.500.000$)

Для покупки введите "Телефон [номер]"`);

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`У вас уже есть телефон (${phones[message.user.misc.phone - 1].name}) ${smileerror} 
	${smilesuccess} Введите "Продать телефон"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror} `);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;

		return bot(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
	}
});

cmd.hear(/^(?:оружие)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`Оружие:
${message.user.misc.guns === 1 ? '🏹' : '🏹'} 1. USP-S (250.000.000$)
${message.user.misc.guns === 2 ? '🏹' : '🏹'} 2. P250 (480.000.000$)
${message.user.misc.guns === 3 ? '🏹' : '🏹'} 3. CZ75-Auto (720.000.000$)
${message.user.misc.guns === 4 ? '🏹' : '🏹'} 4. Desert Eagle (840.000.000$)
${message.user.misc.guns === 5 ? '🏹' : '🏹'} 5. MAG-7 (1.000.000.000$)
${message.user.misc.guns === 6 ? '🏹' : '🏹'} 6. MP7 (1.240.000.000$)
${message.user.misc.guns === 7 ? '🏹' : '🏹'} 7. ПП-19 Бизон (1.470.000.000$)
${message.user.misc.guns === 8 ? '🏹' : '🏹'} 8. AK-47 (1.630.000.000$)
${message.user.misc.guns === 9 ? '🏹' : '🏹'} 9. M4A1-S (1.890.000.000$)
${message.user.misc.guns === 10 ? '🏹' : '🏹'} 10. AUG (2.000.000.000$)
${message.user.misc.guns === 11 ? '🏹' : '🏹'} 11. AWP (2.480.000.000$)
${message.user.misc.guns === 12 ? '🏹' : '🏹'} 12. SCAR-20 (2.700.000.000$)
${message.user.misc.guns === 13 ? '🏹' : '🏹'} 13. Negev (3.100.000.000$)
${message.user.misc.guns === 14 ? '🏹' : '🏹'} 14. Револьвер R8 (3.450.000.000$)
${message.user.misc.guns === 15 ? '🏹' : '🏹'} 15. Карамбит (4.000.000.000$)

Для покупки введите "Оружие [номер]"`);

	const sell = guns.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.guns) return bot(`У вас уже есть оружие (${guns[message.user.misc.guns - 1].name}) ${smileerror}
	${smilesuccess} Введите "Продать оружие"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.guns = sell.id;

		return bot(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}
		[💣] + ${message.user.misc.guns } к атаке`);
	}
});

cmd.hear(/^(?:Карта Героя)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 50000000 ) > message.user.balance) return bot(`У вас недостаточно денег ${smileerror}`);
	else if(( message.args[1] * 50000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 50000000 );
		message.user.card += message.args[1]

		return bot(`Вы купили ${utils.sp(message.args[1])}🃏 Карт Героя за ${utils.sp(message.args[1] * 50000000)}$ ${smilesuccess}`);
	}
});

cmd.hear(/^(?:Карта Героя)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`❗Вы не ввели количество ${smileerror}
	🃏 Карта Героя [фраза]
	${smilesuccess} Например "Карта Героя 1"`)
});

cmd.hear(/^(?:одежда)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`одежда:
${message.user.misc.shmot === 1 ? '👕' : '👕'} 1. Одежда из мармеладок (5.000.000$)
${message.user.misc.shmot === 2 ? '👕' : '👕'} 2. Вещи с рынка (25.000.000$)
${message.user.misc.shmot === 3 ? '👕' : '👕'} 3. Вещи с Zara  (75.000.000$)
${message.user.misc.shmot === 4 ? '👕' : '👕'} 4. Supreme футболка (150.000.000$)
${message.user.misc.shmot === 5 ? '👕' : '👕'} 5. Thrasher толстовка (550.000.000$)
${message.user.misc.shmot === 6 ? '👕' : '👕'} 6. Gucci одежда (1.500.000.000$)
${message.user.misc.shmot === 7 ? '👕' : '👕'} 7. Костюм Versace (3.000.000.000$)
${message.user.misc.shmot === 8 ? '👕' : '👕'} 8. Вещи H&M (5.600.000.000$)
${message.user.misc.shmot === 9 ? '👕' : '👕'} 9. Кросы Nike (7.800.000.000$)
${message.user.misc.shmot === 10 ? '👕' : '👕'} 10. Лук Louis Vuittonа (11.000.000.000$)

Для покупки введите "Одежда [номер]"`);

	const sell = shmot.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.shmot) return bot(`У вас уже есть одежда (${shmot[message.user.misc.shmot - 1].name}) ${smileerror}
	${smilesuccess} Введите "Продать одежда"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.shmot = sell.id;

		return bot(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
	}
});

cmd.hear(/^(?:приставка|приставки)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`Приставки:
${message.user.misc.pristavk === 1 ? '🔹' : '🔸'} 1. Atari 2600 (2.500$)
${message.user.misc.pristavk === 2 ? '🔹' : '🔸'} 2. Nes (Aka Dendy) (5.000$)
${message.user.misc.pristavk === 3 ? '🔹' : '🔸'} 3. Sega Genesis (10.500$)
${message.user.misc.pristavk === 4 ? '🔹' : '🔸'} 4. Nintendo Snes (15.000$)
${message.user.misc.pristavk === 5 ? '🔹' : '🔸'} 5. Sony Playstation (25.000$)
${message.user.misc.pristavk === 6 ? '🔹' : '🔸'} 6. Nintendo 64 (37.000$)
${message.user.misc.pristavk === 7 ? '🔹' : '🔸'} 7. Sony Playstation-2 (45.500$)
${message.user.misc.pristavk === 8 ? '🔹' : '🔸'} 8. Microsoft XBOX 360 (70.000$)
${message.user.misc.pristavk === 9 ? '🔹' : '🔸'} 9. Sony Playstation-3 (90.000$)
${message.user.misc.pristavk === 10 ? '🔹' : '🔸'} 10. Nintendo Wii (150.000$)

Для покупки введите "Приставка [номер]"`);

	const sell = pristavk.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.pristavk) return bot(`У вас уже есть приставка (${pristavk[message.user.misc.pristavk - 1].name}) ${smileerror}
	${smilesuccess} Введите "Продать приставку"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.pristavk = sell.id;

		return bot(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
	}
});

cmd.hear(/^(?:питомцы)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`питомцы:
🐌 1. Улитка (1.000$)
🐍 2. Змея (25.000$)
🐰 3. Заяц (100.000$)
🐷 4. Свинья (5.000.000$)
🦊 5. Лиса (30.000.000$)
🐶 6. Собака (75.000.000$)
🐼 7. Панда (140.000.000$)
🐈 8. Кот (250.000.000$)
🐲 9. Дракон (1.000.000.000$)

🚩Для покупки введите "Питомцы [номер]"`);

	const sell = pets.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.pet) return bot(`У вас уже есть питомец. ${smileerror}
	Введите "Продать питомец".`);

	if(message.user.balance < sell.cost) return bot(`Вам нужно ${utils.sp(sell.cost)}$ для покупки. ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.pet = sell.id;
		message.user.pet.lvl += 1;

		return bot(`Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}
		❗ Отправляйте его в поход 🚶‍♂ , в цирк 🎪 и прокачивайте его уровень ⏫`);
	}
});

cmd.hear(/^(?:питомец поход)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.misc.pet < 1) return bot(`У вас нет питомца ${smileerror}`);
	else {

		if(message.user.timers.poxod) return bot(`Вы сможете отправить питомца в поход через 60 минут. Ваш питомец довольно сильно устал! ${smileerror}`);

		let cashfind = utils.random(1540,7879);
		message.user.balance += cashfind;
		message.user.timers.poxod = true;

			setTimeout(() => {
				message.user.timers.poxod = false;
			}, 360000);

		return bot(`Ваш питомец нашёл в походе ${utils.sp(cashfind)}$ 💰 
		Улучшайте своего питомца! ${smilesuccess}`);
}
});

cmd.hear(/^(?:питомец инфа)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.misc.pet < 1) return bot(`У вас нет питомца. ${smileerror}`);
	else {
return bot(`информация:
${pets[message.user.misc.pet - 1].icon} Питомец: «${pets[message.user.misc.pet - 1].name}»
💳 Стоимость улучшения: ${utils.sp(petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl)}$
🌟 Уровень: ${message.user.pet.lvl}`);
}
});

cmd.hear(/^(?:питомец улучшить)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.balance < petsupd[message.user.misc.pet - 1].cost) return bot(`Недостаточно денег. ${smileerror}`);

		var priceupd = petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl;

		var lvlpoupd = message.user.pet.lvl+1;

		message.user.balance -= priceupd;
		message.user.pet.lvl += 1;

		return bot(`Питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}$ ${smilesuccess}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		}
});

cmd.hear(/^(?:цирк)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.misc.pet) return bot(`У вас нет питомца.${smileerror}`);
	if(message.user.timers.sirk) return bot(`Вам питомец устал. Подождите 5 минут. ${smileerror}`);


	setTimeout(() => {
		message.user.timers.sirk = false;
	}, 300000);

	message.user.timers.sirk = true;

	let sirk_earn = utils.random(5000,7500) * message.user.pet.lvl;
	
	message.user.balance += sirk_earn;
	return bot(`В цирке ваш питомец смог заработать ${utils.sp(sirk_earn)}$. 
	Улучшайте питомца и зарабатывайте больше🤑`);
});


cmd.hear(/^(?:Динозавры)$/i, async (message, bot) => {
message.user.foolder += 1;
	
	if(!message.args[1]) return bot(`Динозавры:
1⃣ Велоцираптор [10.000.000$]
2⃣ Птеродактиль [100.000.000$]
3⃣ Трицераптос  [500.000.000$]
4⃣ Минотавразавр[1.000.000.000$]
5⃣ Тираннозавр  [10.000.000.000$]

🚩Для покупки введите "Динозавры [номер]"`);

});

cmd.hear(/^(?:Динозавры)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.misc.valer == false) return bot(`❗ Чтобы завести динозавра нужно купить для него вольер ${smileerror}
	${smilesuccess} Для покупки вольера напишите: "Вольер"`)
	
	else{
		const sell = dino.find(x=> x.id === Number(message.args[1]));
		if(!sell) return;
		if(message.user.misc.dino > 0) return bot(`У вас уже есть динозавр. ${smileerror}
		Введите "Продать динозавр".`);

		if(message.user.balance < sell.cost) return bot(`Вам нужно ${utils.sp(sell.cost)}$ для покупки. ${smileerror}`);
		else if(message.user.balance >= sell.cost)
			{
			message.user.balance -= sell.cost;
			message.user.misc.dino = sell.id;
			return bot(`❗ Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
			}	
	}
});

cmd.hear(/^(?:Вольер)$/i, async (message, bot) => {
	if(message.user.balance < 7500000) return bot(`Недостаточно денег на вольер! ${smileerror}
	💰 Цена вольера 7.500.000$ `);
	
	else{
		message.user.balance -= 7500000;
		message.user.misc.valer = true;
		return bot(`Вы купили вольер ${smilesuccess}`);
	}
	
});

cmd.hear(/^(?:динозавр улучшить)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.misc.dino < 1) return bot(`У вас нет динозавра. ${smileerror}`);
	else {

		if(message.user.balance < dino[message.user.misc.dino - 1].cost) return bot(`Недостаточно денег. ${smileerror}`);

		var priceupd = dino[message.user.misc.dino - 1].cost*message.user.misc.lvl;

		var lvlpoupd = message.user.misc.lvl+1;

		message.user.balance -= priceupd;
		message.user.misc.lvl += 1;

		return bot(`Динозавр был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}$ ${smilesuccess}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
}
});

cmd.hear(/^(?:Инкубировать)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.misc.dino) return bot(`У вас нет динозавра. ${smileerror}`);
	else {

		if(message.user.timers.inkub) return bot(`Вы можете инкубировать динозавров раз в час ${smileerror}`);

		setTimeout(() => {
		message.user.timers.inkub = false;
		return bot(`Вы можете снова инкубировать!`);
	}, 3600000);

		message.user.timers.inkub = true;

		let cashfind = utils.random(1000,100000) * message.user.misc.lvl;
		message.user.balance += cashfind;

		return bot(`Вы получили клонов своего динозавра и смогли продать их за ${utils.sp(cashfind)}$ ${smilesuccess}`);
}
});

cmd.hear(/^(?:Получить промо)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.isChat) return bot(`Что бы получить бонус с промокода вы должны отправить этот промокод боту в личку.`);
if(message.user.promo) return bot(`Вы уже активировали промокод. ${smileerror}`);
else
{

	if(promo >= config.promolimit) return bot(`У этого промокода ЗАКОНЧИЛИСЬ ИСПОЛЬЗОВАНИЯ ${smileerror}`);
	if(config.promotip === "btc") message.user.btc += config.promovalue;
	if(config.promotip === "balance") message.user.balance += config.promovalue;
	message.user.promo = true;
	promo += 1;
	ostalos = config.promolimit-promo;
	return bot(`Зачислено +${utils.sp(config.promovalue)}${config.promotip.toString().replace(/btc/gi, "฿").replace(/balance/gi, "$")} ✅
📢 Осталось ${ostalos} использований.`);

}
});


cmd.hear(/^(?:Инфо кнопки)$/i, async (message, bot) => {
	message.user.foolder += 1;

	return bot(`Привет! Тут информация о наших кнопках!

Хочешь получить серебрянную кнопку? Для этого тебе лишь нужно достигнуть отметки в 100000 подписчиков. Легко? Не думаю! Но если достиг, то пиши: получить ск
А вот тут уже ещё сложнее, для золотой кнопки тебе нужно достигнуть отметки в 1000000 подписчиков, это уже ещё сложнее. Достиг? Пиши: получить зк
Вот тут уже полный хардкор 😱, для бриллиантовой кнопки тебе нужно набрать 10 миллионов подписчиков. Набрал? 😎 Пиши: получить бк`);
});

cmd.hear(/^(?:Канал)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.nuk_kanal) return bot(`У вас нет канала.Чтобы завести канал напишите:"Создать [название канала]" ${smileerror}`);
	if(!message.user.tematika) return bot(`У вас нет тематики ${smileerror}
	${smilesuccess} Чтобы получить тематику напишите:"Тематика [тематика вашего канала]" ${smilesuccess}`);

	return bot(`Вот информация о канале:
	📕 Название: ${message.user.nuk_kanal}
📺 Тематика: ${message.user.tematika}
😻 Подписчиков: ${utils.sp(message.user.sub)}	
🚫 Хейтеров: ${utils.sp(message.user.heteri)}	
👁 Просмотров: ${utils.sp(message.user.sm)}	
👍 Лайков: ${utils.sp(message.user.like)}	
👎 Дизлайков: ${utils.sp(message.user.dislike)}	
💬 Комментариев: ${utils.sp(message.user.comment)}	
🎥 Роликов: ${utils.sp(message.user.videos)}	
💎 Кнопка: ${message.user.but}

`);
});

 
cmd.hear(/^(?:Оборудование)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.balance < 1000000) return bot(`Недостаточно денег на оборудование! ${smileerror}`);
	if(message.user.camera) return bot(`У вас уже есть камера ${smileerror}`);
	let prize = utils.pick([1]);

	message.user.balance -= 1000000;

	if(prize === 1)
	{
		message.user.camera = true;
		return bot(`Вы купили камеру для съемок! ${smilesuccess}`);
	}
});

cmd.hear(/^(?:Создать)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.camera) return bot(`❗ Вы не купили оборудование! Для покупки введите "Оборудование". Цена оборудования 1.000.000$ ${smileerror}`)
	if(message.user.kanal) return bot(`❗ У вас уже есть канал! ${smileerror}`)
	if(message.user.tematika = false) return bot(`❗ Для создания канала нужно выбрать тематику! ${smileerror}`)
	if(message.args[1].length >= 16) return bot(`❗ Максимальная длина канала 15 символов ${smileerror}`);

	message.user.nuk_kanal = message.args[1];
	message.user.kanal = true
	return bot(`Вы создали канал "${message.user.nuk_kanal}" ${smilesuccess}`);
});

cmd.hear(/^(?:Создать)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`❗ Вы не ввели название для вашего SweetTube канала!${smileerror}
	${smilesuccess} Например:"Создать МОЙ КАНАЛ" ${smilesuccess}`);
});

cmd.hear(/^(?:Сменить название)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.kanal) return bot(`❗ У вас нет канала! ${smileerror}`)
	if(message.args[1].length >= 16) return bot(`❗ Максимальная длина канала 15 символов ${smileerror}`);

	message.user.nuk_kanal = message.args[1];
	return bot(`Вы сменили название канала на: ${message.user.nuk_kanal} ${smilesuccess}`);
});

cmd.hear(/^(?:Сменить название)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`❗ Вы не ввели новое название! ${smileerror}
	${smilesuccess} Например:"Сменить название НОВОЕ НАЗВАНИЕ" `);
});

cmd.hear(/^(?:Стрим)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.microfon) return bot(`Для стрима нужен микрофон! 
❗ Для покупки введите "Микрофон".
	${smilesuccess} Цена микрофона 10.000.000$`);
	if(message.user.timers.stream) return bot(`Стримить можно раз в 2 минуты ${smileerror}`);
	if(!message.user.kanal) return bot(`У вас нет канала! ${smileerror}`)

	setTimeout(() => {
		message.user.timers.stream = false;
		return bot(`Вы можете стримить!`);
	}, 120000);

	message.user.timers.stream = true;
	
	if(message.user.sub < 100000){
		let cashlvlbiz = utils.random(25000,50000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 100.000 & message.user.sub < 500.000 & message.user.part == false){
		let cashlvlbiz = utils.random(1300000,6700000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 100.000 & message.user.sub < 500.000 & message.user.part == true){
		let cashlvlbiz = utils.random(3300000,8700000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 500.000 & message.user.sub < 1000000 & message.user.part == false){
		let cashlvlbiz = utils.random(8700000,11000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 500.000 & message.user.sub < 1000000 & message.user.part == true){
		let cashlvlbiz = utils.random(9000000,14300000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 1000.000 & message.user.sub < 10000000 & message.user.part == false){
		let cashlvlbiz = utils.random(14300000,16700000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 1000000 & message.user.sub < 10000000 & message.user.part == true){
		let cashlvlbiz = utils.random(15300000,18000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 10000000 & message.user.sub < 50000000 & message.user.part == false){
		let cashlvlbiz = utils.random(24000000,29000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 10000000 & message.user.sub < 50000000 & message.user.part == true){
		let cashlvlbiz = utils.random(26000000,34000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 50000000 & message.user.sub < 100000000 & message.user.part == false){
		let cashlvlbiz = utils.random(48000000,58000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 50000000 & message.user.sub < 100000000 & message.user.part == true){
		let cashlvlbiz = utils.random(51000000,63000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 100000000 & message.user.sub < 100000000 & message.user.part == false){
		let cashlvlbiz = utils.random(90000000,110000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 100000000 & message.user.sub < 300000000 & message.user.part == true){
		let cashlvlbiz = utils.random(95000000,120000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 300000000 & message.user.sub < 500000000 & message.user.part == false){
		let cashlvlbiz = utils.random(210000000,280000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 300000000 & message.user.sub < 500000000 & message.user.part == true){
		let cashlvlbiz = utils.random(250000000,320000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 500000000 & message.user.sub < 800000000 & message.user.part == false){
		let cashlvlbiz = utils.random(450000000,510000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 500000000 & message.user.sub < 800000000 & message.user.part == true){
		let cashlvlbiz = utils.random(480000000,540000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 800000000 & message.user.sub < 1000000000 & message.user.part == false){
		let cashlvlbiz = utils.random(700000000,750000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 800000000 & message.user.sub < 1000000000 & message.user.part == true){
		let cashlvlbiz = utils.random(750000000 , 795000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 1000000000 & message.user.part == false){
		let cashlvlbiz = utils.random(950000000 , 1100000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	};
	
	if(message.user.sub > 1000000000 & message.user.part == true){
		let cashlvlbiz = utils.random(1000000000 , 1550000000);
		message.user.balance += cashlvlbiz;
		
	return bot(`Стрим был удачен! Вы заработали ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`)
	}
});

cmd.hear(/^(?:Микрофон)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.balance < 10000000) return bot(`Недостаточно денег на оборудование! ${smileerror}`);
	if(message.user.microfon) return bot(`У вас уже есть микрофон ${smileerror}`);
	let prize = utils.pick([1]);

	message.user.balance -= 10000000;

	if(prize === 1)
	{
		message.user.microfon = true;
		return bot(`Вы купили микрофон для стримов! ${smilesuccess}`);
	}
});

cmd.hear(/^\Тренды\s*$/i, (context) => {
    // Для хранения юзверов
    let _users = [];

    // Перебираем нашу "базу"
    for (let key in users) {
        // Не пропускаем админов или заблокированных
        if (users.adm > 3 && !users[key].ban){
            _users.push({
                id: key,
                nuk_kanal: users[key].nuk_kanal,
				sub: users[key].sub,
            });
        }
    }
	
    // Отправляем результат
    return context.send(

        "&#128201; Топ-10 игроков по подписчикам в трендах SweetTube:\n" +
        users
            .sort((a, b) => b.sub - a.sub)  // Сортируем по просмотрам
            .slice(0, 10)   // Берем только 10 элементов
			.map((x, i) => `⠀${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${x.id} (${x.tag}) — ${utils.sp(x.sub)}🎥`)
            .join("\n")
    );
});


cmd.hear(/^\Топ просмотров\s*$/i, (context) => {
    // Для хранения юзверов
    let _users = [];

    // Перебираем нашу "базу"
    for (let key in users) {
        // Не пропускаем админов или заблокированных
        if (users.adm > 3 && !users[key].ban){
            _users.push({
                id: key,
                nuk_kanal: users[key].nuk_kanal,
				sm: users[key].sm,
            });
        }
    }
	
    // Отправляем результат
    return context.send(

        "&#128201; Топ-10 игроков по просмотрам в трендах SweetTube:\n" +
        users
            .sort((a, b) => b.sm - a.sm)  // Сортируем по просмотрам
            .slice(0, 10)   // Берем только 10 элементов
			.map((x, i) => `⠀${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${x.id} (${x.tag}) — ${utils.sp(x.sm)}📺`)
            .join("\n")
    );
});

cmd.hear(/^(?:Тематика)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.user.tematika = message.args[1];
	return bot(`У вас теперь тематика "${message.user.tematika}" ${smilesuccess}`);
});

cmd.hear(/^(?:Тематика)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.user.foolder += 1;

	return bot(`Привет! Решил выбрать тематику для канала?

🎯 Тематика игры - Снимаете по играм

👀 Тематика обзоры - Снимаете обзоры

🚥 Тематика влоги - Снимаете влоги и т.д

🔥 Или любая ваша тематика


`);
});

cmd.hear(/^(?:Реклама)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`Приветик, хочешь купить рекламу для своего канала😏?

✅Мы - самая надежная и законная компания по продаже рекламы, с нами ты достигнешь высот!

1.Тариф «Старт»:
　📈Прирост: 20.000 подписчиков
　💸Цена: 1.500.000$

2.Тариф «Нормал»:
　📈Прирост: 45.000 подписчиков
　💸Цена: 7.500.000$

3.Тариф «Про»:
　📈Прирост: 75.000 подписчиков
　💸Цена: 15.000.000$

4. Тариф «Мега»:
　📈Прирост: 120.000 подписчиков
　💸Цена: 30.000.000$

5. Тариф «Ультра»:
　📈Прирост: 250.000 подписчиков
　💸Цена: 55.000.000$

6. Тариф «Слишком сладкая»:
　📈Прирост: 450.000 подписчиков
　💸Цена: 150.000.000$

7. Тариф «Король SweetTube»:
　📈Прирост: 1.500.000 подписчиков
　💸Цена: 600.000.000$

🔥Для покупки введите реклама «id тарифа»
📚Пример "Реклама 1"`
);

	const sell = reklama.find(x=> x.id === Number(message.args[1]));

	if(message.user.balance < sell.cost) return bot(`❗ Недостаточно денег ${smileerror}`);
	if(!message.user.kanal) return bot(`❗  У вас нет канала для пиара! ${smileerror}`)
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.sub += sell.sub;

		return bot(`Вы купили рекламу "${(sell.name)}" ${smilesuccess}`);
	}
});


cmd.hear(/^(?:Снять)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.camera) return bot(`❗  Для записи нужна камера! ${smileerror}`);
	if(message.user.timers.rec) return bot(`❗  Снимать можно раз в минуту ${smileerror}`);
	if(!message.user.kanal) return bot(`❗  У вас нет канала! ${smileerror}`)

	setTimeout(() => {
		message.user.timers.rec = false;
		return bot(`Вы можете снова снимать! ${smilesuccess}`);
	}, 60000);

	message.user.timers.rec = true;

	if(message.user.part == false){
	let sub = utils.random(1,2500);
	let koment = utils.random(1,1000);
	let like = utils.random(1,1000);
	let sm = utils.random(1,5000);
	let dis = utils.random(1,100);

   message.user.sub += sub;
   message.user.comment += koment;
   message.user.like += like;
   message.user.sm += sm;
   message.user.dislike += dis;
   message.user.heteri += dis;
   message.user.videos += 1;

	return bot(`🎬Статистика ролика:
📺 Название видео: ${message.args[1]}
👁 Просмотров: ${utils.sp(sm)}
👍 Лайков: ${utils.sp(like)}
👎 Дизлайков: ${utils.sp(dis)}
💬 Комментариев: ${utils.sp(koment)}
🎬 Новых сабов: ${utils.sp(sub)}
🚫 Новых хейтеров: ${utils.sp(dis)}
✅Ты на верном пути, продолжай выпускать ролики!`);
}

	if(message.user.part == true){
	let sub = utils.random(2,5000);
	let koment = utils.random(2,2000);
	let like = utils.random(2,10000);
	let sm = utils.random(2,10000);
	let dis = utils.random(0,30);
	let and = utils.random(500,75000);

   message.user.sub += sub;
   message.user.comment += koment;
   message.user.like += like;
   message.user.sm += sm;
   message.user.balance += and;
   message.user.dislike += dis;
   message.user.heteri += dis;
   message.user.videos += 1;

	return bot(`🎬Статистика ролика:
📺 Название видео: ${message.args[1]}
👁 Просмотров: ${utils.sp(sm)} 
👍 Лайков: ${utils.sp(like)}
👎 Дизлайков: ${utils.sp(dis)}
💬 Комментариев: ${utils.sp(koment)}
🎬 Новых сабов: ${utils.sp(sub)}
🚫 Новых хейтеров: ${utils.sp(dis)}
🎬 С партнёрки: ${utils.sp(and)}$
✅Ты на верном пути, продолжай выпускать ролики!`);
}
});

cmd.hear(/^(?:Снять)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`❗ Вы не ввели название вашего видео! 
	${smilesuccess} Например:"Снять МОЁ ВИДЕО"`)
});

cmd.hear(/^(?:Вступить в партнёрку|Вступить в партнерку)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.sub < 10000) return bot(`У вас нет 10.000 подписчиков! ${smileerror}`);

	message.user.part = true;
	return bot(`Вы успешно вступили в партнёрку! ${smilesuccess}`)
});

cmd.hear(/^(?:Получить ск)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.sub < 100000)return bot(`Ай! Ай! Ай! Серебрянная кнопка только с 100.000 подписчиков! ${smileerror}`)

	message.user.but = 'Серебрянная';
	return bot(`Успешно! Вы получили серебрянную кнопку! ${smilesuccess}`)
});

cmd.hear(/^(?:Получить зк)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.sub < 1000000)return bot(`Ай! Ай! Ай! Золотая кнопка только с 1.000.000 подписчиков! ${smileerror}`)

	message.user.but = 'Золотая';
	return bot(`Успешно! Вы получили золотую кнопку! ${smilesuccess}`)
});

cmd.hear(/^(?:Получить бк)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.sub < 10000000)return bot(`Ай! Ай! Ай! Бриллиантовая кнопка только с 10.000.000 подписчиков! ${smileerror}`)

	message.user.but = 'Бриллиантовая';
	return bot(`Успешно! Вы получили бриллиантовую кнопку! ${smilesuccess}`)
});

cmd.hear(/^(?:убрать хейтеров)$/i, async (message, bot) => {
message.user.foolder += 1;
	 let user = message.user;
     let id = message.user.id;

		if(message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала ${smileerror}`);
		if(message.user.kanal == true){
 		if(message.user.balance < 500000000) return message.send(`${message.user.tag}, У вас не достаточно денег ${smileerror}
		⚠ Чтобы подкупить хейтеров на вашем балансе должно быть 500.000.000$ 💰 `);
		 message.user.balance -= 500000000;
		 message.user.heteri = 0;
	return bot(`Хейтеры подкуплены! ${smilesuccess}`);
   }
});

cmd.hear(/^(?:рандом музыка|музыка)$/i, async (message) => {
message.user.foolder += 1;
return message.send(`Держи годный трек ${smilesuccess}`, { attachment: utils.pick([
 "audio214005613_456239619", //Trampoline
 "audio214005613_456239612", //Всё как у людей
 "audio214005613_456239599", //Untouchable
 "audio214005613_456239567", //Mambo Italiano
 "audio214005613_456239557", //Два типа людей
 "audio214005613_456239550", //Бонни и Клайд
 "audio214005613_456239543", //Lalala
 "audio214005613_456239538", //Грустный Денс
 "audio214005613_456239221", //Малиновый закат
 "audio214005613_456239414", //Малый повзрослел
 "audio214005613_456239585", //Танцуй до утра
 "audio214005613_456239368", //No place
 "audio214005613_456239473", //Dancin
 "audio214005613_456239316", //Machine
 "audio214005613_456239319", //Friends
 "audio214005613_456239310"  //Panda E
 ]) });
});


cmd.hear(/^(?:удалить аккаунт)$/i, async (message, bot) => {
			message.user.balance = 50000;	
			message.user.meteorit = 0;
			message.user.btc = 0;
			message.user.bank = 0;	
			message.user.hero_hp = 100;
			message.user.hero_zashita = 25;
			message.user.hero_ataka = 25;
			message.user.hero_kr_udar = 25;
			message.user.card = 0;
			message.user.rubins = 0;
			message.user.farm_btc = 0;	
			message.user.farms = 0;
			message.user.farmslimit = 1000;
			message.user.energy = 10;
			message.user.opit = 0;
			message.user.biz = 0;
			message.user.zhelezo = 0;
			message.user.zoloto = 0;
			message.user.almaz = 0;
			message.user.bizlvl = 0;
			message.user.hero_name = `Герой не выбран`;
			message.user.hero_id = false;
			message.user.part = false;
			message.user.kanal = false;
			message.user.nuk_kanal = false;
			message.user.info_locked = false;
			message.user.sub = 0;
			message.user.like = 0;
			message.user.dislike = 0;
			message.user.videos = 0;
			message.user.camera = false;
			message.user.microfon = false;
			message.user.heteri = 0;
			message.user.comment = 0;
			message.user.tematika = false;
			message.user.but = `Нет`;
			message.user.sm = 0;
			message.user.rec = true;
			message.user.rating = 0;
			message.user.mention = true;
			message.user.ban = false;
			message.user.work = 0;
			message.user.business = 0;
			message.user.notifications = true;
			message.user.exp = 1;
			message.user.transport.car = 0;
			message.user.transport.yacht = 0;
			message.user.transport.airplane = 0;
			message.user.transport.helicopter = 0;
			message.user.transport.moto = 0;
			message.user.realty.home = 0;
			message.user.realty.apartment = 0;
			message.user.realty.interierhome = 0;
			message.user.realty.interierapartment = 0;
			message.user.realty.garage = 0;
			message.user.creatures.unicorn = 0;
			message.user.creatures.kinkong = 0;
			message.user.creatures.megalodon = 0;
			message.user.creatures.goblin = 0;
			message.user.creatures.medusha = 0;
			message.user.creatures.golem = 0;
			message.user.creatures.godzila = 0;
			message.user.creatures.himera = 0;
			message.user.creatures.delfin = 0;
			message.user.creatures.ktylhy = 0;
			message.user.creatures.orel = 0;
			message.user.creatures.minotavr = 0;
			message.user.creatures.grifon = 0;
			message.user.creatures.turtle = 0;
			message.user.creatures.salamandra = 0;
			message.user.creatures.akromanryl = 0;
			message.user.creatures.ghost = 0;
			message.user.creatures.kraken = 0;
			message.user.creatures.issush = 0;
			message.user.creatures.gigant = 0;
			message.user.misc.pet = 0;
			message.user.misc.dino = 0;
			message.user.misc.lvl = 1;
			message.user.pet.lvl = 0;
			message.user.misc.pristavk = false;
			message.user.misc.farm = 0;
			message.user.foolder = 0;
			message.user.misc.phone = 0;
			message.user.misc.valer = false;
			message.user.misc.shmot = 0;
			message.user.misc.guns = 0;
	
	        if(message.user.timers.delacc) return bot(`вы больше не можете удалять аккаунт!`);
	return bot(`⚠ Вы удалили аккаунт ДО ИЗНАЧАЛЬНОГО СОСТОЯНИЯ! ⚠`);
});


cmd.hear(/^(?:кейсы)/i, (message) => { 	
message.user.foolder += 1;
	return message.send(`${smilesuccess} Доступные кейсы:
		1⃣ Бомж кейс [100.000$]
		2⃣ Элита кейс [50.000.000$]
		3⃣ Мажор кейс [500.000.000$]
		
		🔍 Для выбора кейса напишите его название `);
	}); 
	
cmd.hear(/^(?:Бомж кейс)/i, (message) => { 
message.user.foolder += 1;
		let user = message.user;
		let id = message.user.id;
		if(user.balance < 100000) return message.send(`💶У вас не достаточно денежных средств , для того, чтобы открыть данный кейс! ${smileerror}`);
		user.balance -= 100000;
		let rez = utils.random(1,5);
		
		if(rez == 1){
			let procent = Math.floor((message.user.balance * 25) / 100)
			user.balance -= procent;
			return message.send(`👓 Был взят налог в размере ${utils.sp(procent)}$) ${smileerror}!`);
		}
		
		if(rez == 2){
		    let money_price = utils.random(5000,130000);
			user.balance += money_price;
			return message.send(`👓 Вам выпало ${utils.sp(money_price)}$ 💰`);
		}
		
		if(rez == 3){
			let btc_price = utils.random(1,13);
			user.btc += btc_price;
			return message.send(`👓 Вам выпало ${btc_price}🌐`);
		}
		
		if(rez == 4){
			user.hero_hp += 1;
			return message.send(`❤ Ваше здоровье увеличено на 1 единицу ${smilesuccess}`);
		}
		
		if(rez == 5){
			user.balance += 0;
			return message.send(`👓 Ничего ${smileerror}`);
		}
		
	}); 
	
cmd.hear(/^(?:Элита кейс)/i, (message) => { 
message.user.foolder += 1;
		let user = message.user;
		let id = message.user.id;
		if(user.balance < 50000000) return message.send(`💶У вас не достаточно денежных средств , для того, чтобы открыть данный кейс! ${smileerror}`);
		user.balance -= 50000000;
		let rez = utils.random(1,6);
		
		if(rez == 1){
			let procent = Math.floor((message.user.balance * 50) / 100)
			user.balance -= procent;
			return message.send(`👓 Был взят налог в размере ${utils.sp(procent)}$ ${smileerror}!`);
		}
		
		if(rez == 2){
		    let money_price = utils.random(10000000 , 64000000);
			user.balance += money_price;
			return message.send(`👓 Вам выпало ${utils.sp(money_price)}$ 💰`);
		}
		
		if(rez == 3){
			let btc_price = utils.random(4200,7000);
			user.btc += btc_price;
			return message.send(`👓 Вам выпало ${utils.sp(btc_price)}🌐`);
		}
		
		if(rez == 4){
			user.hero_hp += 2;
			return message.send(`❤ Ваше здоровье увеличено на 2 единицы ${smilesuccess}`);
		}
		
		if(rez == 5){
			user.hero_zashita += 1;
			return message.send(`🛡 Вам шит был улучшен на 1 единицу ${smilesuccess}`);
		}
		
		if(rez == 6){
			user.balance += 0;
			return message.send(`👓 Ничего ${smileerror}`);
		}
		
	}); 	

cmd.hear(/^(?:мажор кейс)/i, (message) => { 
message.user.foolder += 1;
		let user = message.user;
		let id = message.user.id;
		if(user.balance < 500000000) return message.send(`💶У вас не достаточно денежных средств , для того, чтобы открыть данный кейс! ${smileerror}`);
		user.balance -= 500000000;
		let rez = utils.random(1,6);;
		
		if(rez == 1){
			let money_price = utils.random(420000000 , 525000000);
			user.balance += money_price;
			return message.send(`👓 Вам выпало ${utils.sp(money_price)}$ 💰`);
		}
		
		if(rez == 2){
			let btc_price = utils.random(25000,65000);
			user.btc += btc_price;
			return message.send(`👓 Вам выпало ${utils.sp(btc_price)}🌐`);
		}
		
		if(rez == 3){
			message.user.card += 1;
			return message.send(`🃏 Вам выпала карта Героя ${smilesuccess}`);
		}
		
		if(rez == 4){
			user.hero_hp += 5;
			return message.send(`❤ Ваше здоровье увеличено на 5 единицы ${smilesuccess}`);
		}
		
		if(rez == 5){
			user.hero_ataka += 2;
			return message.send(`💣 К атаке было добавлено 2 единицы ${smilesuccess}`);
		}
		
		if(rez == 6){
			let procent = Math.floor((message.user.balance * 80) / 100)
			user.balance -= procent;
			return message.send(`👓 Был взят налог в размере ${utils.sp(procent)}$ ${smileerror}!`);
		}

	}); 

cmd.hear(/^(?:ферма)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.misc.farm) return bot(`У вас нет фермы ${smileerror}`);
	if(!message.user.farm_btc) return bot(`На вашей ферме пусто, новые биткоины появятся скоро ${smileerror}`);
	let users_farms = message.user.farms;

	const btc_ = message.user.farm_btc * users_farms;

	message.user.btc += btc_
	message.user.farm_btc = 0;

	return bot(`Вы собрали ${utils.sp(btc_)}🌐, следующие биткоины появятся через час ${smilesuccess}
	🌐 Биткоинов: ${utils.sp(message.user.btc)}฿ 🌐`);
});


cmd.hear(/^(?:фермы)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '💽' : '💽'} 1. 6U Nvidia 2🌐/час (20.500.000$)
${message.user.misc.farm === 2 ? '💽' : '💽'} 2. AntminerS9 10🌐/час (100.000.000$)
${message.user.misc.farm === 3 ? '💽' : '💽'} 3. FM2018-BT200 100🌐/час (900.000.000$)

❓ Для покупки введите "Фермы [номер] [кол-во]"
🔔 Например: Фермы 1 3`);

	const sell = farms.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.farms >= message.user.farmslimit) return bot(`Вы достигли лимита ферм (${message.user.farmslimit}x). ${smileerror}`);
	if(!message.user.count) return bot(`Вы не ввели количество
	Для покупки введите "Фермы [номер] [кол-во]"`)
    if(message.user.balance < sell.cost * count) return bot(`Недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{

		if(Number(message.args[2])){

		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

			message.user.balance -= sell.cost;
			message.user.misc.farm = sell.id;
			message.user.farms += message.args[2];

		
			return bot(`Вы купили ${sell.name} (x${message.args[2]}) за ${utils.sp(sell.cost)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);

		}
		
		else {

		message.user.balance -= sell.cost;
		message.user.misc.farm = sell.id;
		message.user.farms += 1;

		return bot(`вы купили ${sell.name} (x1) за ${utils.sp(sell.cost)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		}	
	}
});

cmd.hear(/^(?:фермы 1)\s?([0-9]+)?$/i, async (message, bot) => { 
message.user.foolder += 1;
if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '💽' : '💽'} 1. 6U Nvidia 2₿/час (20.500.000$) 
${message.user.misc.farm === 2 ? '💽' : '💽'} 2. AntminerS9 10₿/час (100.000.000$) 
${message.user.misc.farm === 3 ? '💽' : '💽'} 3. FM2018-BT200 100₿/час (900.000.000$) 

Для покупки введите "Фермы [номер] [кол-во]"`); 

if(message.user.farms >= message.user.farmslimit) return bot(`Вы достигли лимита ферм (x${message.user.farmslimit}). ${smileerror}`);
if(message.user.misc.farm == 2) return bot(`У вас уже есть фермы другого вида ${smileerror}`);
if(message.user.misc.farm == 3) return bot(`У вас уже есть фермы другого вида ${smileerror}`);
if(message.args[1] > 100)return bot(`Вы не можете купить ферм более чем (x100) за один раз!. ${smileerror}`)

var pricefarms1 = 20500000*message.args[1]; 
if(message.user.balance < pricefarms1) return bot(`Недостаточно денег ${smileerror}`); 
else if(message.user.balance >= pricefarms1) 
{ 

message.user.balance -= pricefarms1; 
message.user.misc.farm = 1; 

if(message.user.misc.farm === 1) message.user.farms += Number(message.args[1]); 
else 
{ 

message.user.farms = Number(message.args[1]); 

} 

return bot(`Вы купили 6U Nvidia (x${Number(message.args[1])}) за ${utils.sp(pricefarms1)}$ ${smilesuccess} 
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`); 

}
});

cmd.hear(/^(?:фермы 2)\s?([0-9]+)?$/i, async (message, bot) => { 
message.user.foolder += 1;
if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '💽' : '💽'} 1. 6U Nvidia 2₿/час (20.500.000$) 
${message.user.misc.farm === 2 ? '💽' : '💽'} 2. AntminerS9 10₿/час (100.000.000$) 
${message.user.misc.farm === 3 ? '💽' : '💽'} 3. FM2018-BT200 100₿/час (900.000.000$) 

Для покупки введите "Фермы [номер] [кол-во]"`); 

if(message.user.farms >= message.user.farmslimit) return bot(`Вы достигли лимита ферм (x${message.user.farmslimit}). ${smileerror}`);
if(message.user.misc.farm == 1) return bot(`У вас уже есть фермы другого вида ${smileerror}`);
if(message.user.misc.farm == 3) return bot(`У вас уже есть фермы другого вида ${smileerror}`);
if(message.args[1] > 100)return bot(`Вы не можете купить ферм более чем (x100) за один раз!. ${smileerror}`)

var pricefarms2 = 100000000*message.args[1]; 
if(message.user.balance < pricefarms2) return bot(`Недостаточно денег ${smileerror}`); 
else if(message.user.balance >= pricefarms2) 
{ 

message.user.balance -= pricefarms2; 
message.user.misc.farm = 2; 

if(message.user.misc.farm === 2) message.user.farms += Number(message.args[1]); 
else 
{ 

message.user.farms = Number(message.args[1]); 

} 


return bot(`Вы купили AntminerS9 (x${Number(message.args[1])}) за ${utils.sp(pricefarms2)}$ ${smilesuccess}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`); 

} 
});

cmd.hear(/^(?:фермы 3)\s?([0-9]+)?$/i, async (message, bot) => { 
message.user.foolder += 1;
if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '💽' : '💽'} 1. 6U Nvidia 2₿/час (20.500.000$) 
${message.user.misc.farm === 2 ? '💽' : '💽'} 2. AntminerS9 10₿/час (100.000.000$) 
${message.user.misc.farm === 3 ? '💽' : '💽'} 3. FM2018-BT200 100₿/час (900.000.000$) 

Для покупки введите "Фермы [номер] [кол-во]"`); 

if(message.user.farms >= message.user.farmslimit) return bot(`Вы достигли лимита ферм (x${message.user.farmslimit}). ${smileerror}`);
if(message.user.misc.farm == 1) return bot(`У вас уже есть фермы другого вида ${smileerror}`);
if(message.user.misc.farm == 2) return bot(`У вас уже есть фермы другого вида ${smileerror}`);
if(message.args[1] > 100)return bot(`Вы не можете купить ферм более чем (x100) за один раз!. ${smileerror}`)

var pricefarms3 = 900000000*message.args[1]; 
if(message.user.balance < pricefarms3) return bot(`Недостаточно денег ${smileerror}`); 
else if(message.user.balance >= pricefarms3) 
{ 

message.user.balance -= pricefarms3; 
message.user.misc.farm = 3; 

if(message.user.misc.farm === 3) message.user.farms += Number(message.args[1]); 
else 
{ 

message.user.farms = Number(message.args[1]); 

} 

return bot(`Вы купили FM2018-BT200 (x${Number(message.args[1])}) за ${utils.sp(pricefarms3)}$ ${smilesuccess}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`); 

} 
});


cmd.hear(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 250000000 ) > message.user.balance) return bot(`У вас недостаточно денег ${smileerror}`);
	else if(( message.args[1] * 250000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.rating += message.args[1];
		return bot(`Вы повысили свой рейтинг на ${utils.sp(message.args[1])}👑 за ${utils.sp(message.args[1] * 250000000)}$`);
	}
});

cmd.hear(/^(?:бизнес)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.business) return bot(`У вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business); //Находим нужный id бизнеса
	var lvlcash = biz.earn*message.user.bizlvl; //Заработок в час
	let itog = message.user.biz * message.user.bizlvl
var updprice2 = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl
	return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(lvlcash)}$/час
	💰 На счёте: ${utils.sp(itog)}$
	🌟 Уровень: ${message.user.bizlvl}
	✅ Стоимость улучшения: ${utils.sp(updprice2)}$`);
});

cmd.hear(/^(?:бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`бизнесы:
${message.user.business === 1 ? '🔸' : '🔹'} 1. Шаурмичная - 50.000$
⠀ ⠀ ⠀ Прибыль: 400$/час
${message.user.business === 2 ? '🔸' : '🔹'} 2. Ларёк - 100.000$
⠀ ⠀ ⠀ Прибыль: 700$/час
${message.user.business === 3 ? '🔸' : '🔹'} 3. Ресторан - 300.000$
⠀ ⠀ ⠀ Прибыль: 2.500$/час
${message.user.business === 4 ? '🔸' : '🔹'} 4. Магазин - 500.000$
⠀ ⠀ ⠀ Прибыль: 3.800$/час
${message.user.business === 5 ? '🔸' : '🔹'} 5. Завод - 1.500.000$
⠀ ⠀ ⠀ Прибыль: 8.000$/час
${message.user.business === 6 ? '🔸' : '🔹'} 6. Шахта - 25.000.000$
⠀ ⠀ ⠀ Прибыль: 70.000$/час
${message.user.business === 7 ? '🔸' : '🔹'} 7. Офис - 80.000.000$
⠀ ⠀ ⠀ Прибыль: 220.000$/час
${message.user.business === 8 ? '🔸' : '🔹'} 8. Разработка игр - 150.000.000$
⠀ ⠀ ⠀ Прибыль: 300.000$/час
${message.user.business === 9 ? '🔸' : '🔹'} 9. Нефтевышка - 500.000.000$
⠀ ⠀ ⠀ Прибыль: 700.000$/час
${message.user.business === 10 ? '🔸' : '🔹'} 10. Атомная электростанция - 800.000.000$
⠀ ⠀ ⠀ Прибыль: 1.000.000$/час
${message.user.business === 11 ? '🔸' : '🔹'} 11. Космическое агентство - 50.000.000.000$
⠀ ⠀ ⠀ Прибыль: 50.000.000$/час
Для покупки введите "Бизнесы [номер]"`);

	const sell = businesses.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.business) return bot(`У вас уже есть бизнес (${businesses[message.user.business - 1].name}), введите "Продать бизнес" ${smileerror}`);
	
	if(sell.requiredbusinessLevel > message.user.exp) return bot(`Для покупки этого бизнеса ваш уровень должен быть выше! ${smileerror}
	Чтобы повысить уровень , устройтесь на работу ${smilesuccess}`);
	if(message.user.balance < sell.cost) return bot(`Недостаточно денег ${smileerror}`);
	else if(message.user.balance >= message.args[1] )
	{
		message.user.balance -= sell.cost;
		message.user.business = sell.id;
		message.user.bizlvl = 1;

		return bot(`Вы купили "${sell.name}" за ${utils.sp(sell.cost)}$ ${smilesuccess}`);
	}
});

cmd.hear(/^(?:бизнес)\s(?:снять)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.business) return bot(`У вас нет бизнеса ${smileerror}`);
	if(!message.user.biz) return bot(`У вас нет денег на счёте этого бизнеса ${smileerror}`);
	let itog = message.user.biz * message.user.bizlvl
	const biz_balance = itog;

	message.user.balance += itog;
	message.user.biz = 0;

	return bot(`Вы сняли со счёта своего бизнеса ${utils.sp(biz_balance)}$ ${smilesuccess}`);
});

cmd.hear(/^(?:бизнес улучшить)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.business) return bot(`У вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);

	var updprice = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl;

	if(message.user.balance < updprice) return bot(`Недостаточно денег ${smileerror}`);

	message.user.bizlvl += 1;
	message.user.balance -= updprice;

	return bot(`Вы успешно улучшили бизнес. ${smilesuccess}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);

});

cmd.hear(/^(?:курс)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Курс валют на данный момент:
💸Биткоин: ${utils.sp(btc)}$`);
});

cmd.hear(/^(?:биткоин)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * btc ) > message.user.balance) return bot(`Недостаточно денег ${smileerror}
🌐 Курс биткоина: ${utils.sp(btc)}$`);
	else if(( message.args[1] * btc ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * btc );
		message.user.btc += message.args[1];

		return bot(`Вы купили ${utils.sp(message.args[1])}🌐 за ${utils.sp(message.args[1] * btc)}$ ${smilesuccess}`);
	}
});


cmd.hear(/^\топ\s*$/i, (context) => {
    // Для хранения юзверов
    let _users = [];

    // Перебираем нашу "базу"
    for (let key in users) {
        // Не пропускаем админов или заблокированных
        if (users.adm > 3 && !users[key].ban){
            _users.push({
                id: key,
                rating: users[key].rating,
				nickname: users[key].nickname,
				balance: users[key].balance,
            });
        }
    }
	
    // Отправляем результат
    return context.send(

        "&#128201; Топ-10 игроков:\n" +
        users
            .sort((a, b) => b.rating - a.rating)  // Сортируем по рейтингу и балансу
            .slice(0, 10)   // Берем только 10 элементов
			.map((x, i) => `⠀${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${x.id} (${x.tag}) — ${utils.sp(x.rating)}👑 | ${utils.rn(x.balance)}💴`)
            .join("\n")
    );
});


cmd.hear(/^(?:бонус|🔑 Бонус)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.timers.bonus) return bot(`Бонус можно получить раз в 24 часа ${smileerror}`);

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 86400000);

	message.user.timers.bonus = true;


	if(prize === 1)
	{
		message.user.card += 2; 
		message.user.balance += 50000;
		return bot(`вы выиграли 50.000$ и 2 Карты Героя ${smilesuccess}`);
	}

	if(prize === 2)
	{
		message.user.card += 1;
		message.user.btc += 1000;
		return bot(`вы выиграли 1.000🌐 и Карту Героя 🃏 `);
	}

	if(prize === 3)
	{
		message.user.card += 1;
		message.user.rating += 5;
		return bot(`вы выиграли 5👑 и Карту Героя 🃏`);
	}

	if(prize === 4)
	{
		message.user.card += 2;
		message.user.rating += 1;
		return bot(`Вы выиграли 1👑 и 2 Карты Героя 🃏`);
	}

	if(prize === 5)
	{
		message.user.rating += 10;
		return bot(`Вы выиграли 10👑`);
	}

	if(prize === 6)
	{
		message.user.card += 2;
		message.user.rating += 2;
		return bot(`вы выиграли 2👑 и 2 Карты Героя 🃏`);
	}
	if(prize === 7)
	{
		message.user.card += 2;
		message.user.rating += 3;
		return bot(`Вы выиграли 3👑 и 2 Карты Героя 🃏`);
	}
	if(prize === 8)
	{
		message.user.card += 1;
		message.user.rating += 4;
		return bot(`Вы выиграли 4👑 и Карту Героя 🃏`);
	}
	if(prize === 9)
	{
		message.user.bank += 1000000;
		return bot(`Вы выиграли 1.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
	if(prize === 10)
	{
		message.user.bank += 5000000;
		return bot(`Вы выиграли 5.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 11)
	{
		message.user.bank += 10000000;
		return bot(`Вы выиграли 10.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 12)
	{
		message.user.bank += 50000000;
		return bot(`Вы выиграли 50.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
});

cmd.hear(/^(?:поход)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.timers.poxod2) return bot(`Вы сегодня уже были в походе. ${smileerror}`);

	let prize2 = utils.pick([1, 2, 3, 4, 5, 6, 7, 8]);

	setTimeout(() => {
		message.user.timers.poxod2 = false;
	}, 86400000);

	message.user.timers.poxod2 = true;


	if(prize2 === 1)
	{
		message.user.balance += 50000;
		message.user.card += 2; 
		return bot(`Находясь в походе, вы нашли 50.000$ и 2🃏 ${smilesuccess}`);
	}

	if(prize2 === 2)
	{
		message.user.btc += 1000;
		return bot(`Находясь в походе, вы нашли 1.000🌐 ${smilesuccess}`);
	}

	if(prize2 === 3)
	{
		message.user.rating += 5;
		return bot(`Находясь в походе, вы нашли 5👑 ${smilesuccess}`);
	}

	if(prize2 === 4)
	{
		message.user.rating += 1;
		message.user.card += 2; 
		return bot(`Находясь в походе, вы нашли 1👑 и 2🃏 ${smilesuccess}`);
	}

	if(prize2 === 5)
	{
		message.user.rating += 10;
		return bot(`Находясь в походе, вы нашли 10👑 ${smilesuccess}`);
	}

	if(prize2 === 6)
	{
		message.user.rating += 2;
		return bot(`Находясь в походе, вы нашли 2👑 ${smilesuccess}`);
	}
	if(prize2 === 7)
	{
		message.user.rating += 3;
		return bot(`Находясь в походе, вы нашли 3👑 ${smilesuccess}`);
	}
	if(prize2 === 8)
	{
		message.user.rating += 4;
		return bot(`Находясь в походе, вы нашли 4👑 ${smilesuccess}`);
	}
});

cmd.hear(/^(?:Герой)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Вы не ввели номер героя ${smileerror}:
	📺 Герой [id]
	${smilesuccess} Например "Герой 5"`)
});

cmd.hear(/^(?:✅ Герои|герои|✅ Герои)/i, async (message, bot) => {
message.user.foolder += 1;
		return message.send(`@id${message.user.id}(${message.user.tag}),\n✅ Укажите номер героя\n- - - - -\n${text_hero()}\nДля выбора героя введите "Герой [ид]"`)
});

cmd.hear(/^(?:Герой)\s?([0-9]+)?/i, async (message, args, bot) => {
message.user.foolder += 1;
		let i = Number(message.args[1])
		if(i < 0 || i > 6) return message.send(`📛 Номер должен быть > 0 и < 6`);
		if(i){
			message.user.hero_id = i;
			message.user.hero_name = heros[i].group;
           return message.send(`@id${message.user.id}(${message.user.tag}),
			⚔ Вы выбрали героя: ${heros[i].group}
			🗡 Описание: ${heros[i].text}
			- - - - - - - - - - - - - - hero - - - - - - - - - - - - - -
			`);
		}
	});


function text_hero(){
	let text = '';
	for(i=1;i<7;i++){
		var h = heros[i];
text += `⏩ Герой: ${h.group}
- - - - -
📜 Описание: ${h.text}
- - - - -
[🆔] » ${i}
 - - - - -
      `
	}
	return text
}

const heros = {
	"1": {
		group: "Маг",
		text: `Волшебник — герой, посвятивший свою жизнь изучению древних мистических таинств и искусств. Он не способен сражаться в первых рядах, но при должной поддержке успеет нанести огромный урон, пока противники будут тщетно пытаться добраться до него.`
	},
	"2": {
		group: "Техник",
		text: `Техник — герой, чьи технологии и машины позволяют выполнить любую задачу, какую только можно придумать. Сам по себе он довольно хил, но мощная броня и совершенное оружие решают эту проблему за него. `
	},
	"3": {
		group: "Воин",
		text: `Воин — герой, для которого долг и честь — краеугольные камни жизни. Закалённый в боях, он может принять на себя главный удар вражеских сил, при этом сокрушая противников по всем фронтам.`
	},
	"4": {
		group: "Варвар",
		text: `Варвар — герой, которого не волнует ничего, кроме его жажды сражений, крови и побед. Он будет биться с врагами лицом к лицу до тех пор, пока не погибнет он, или, что куда более вероятно, они. `
	},
	"5": {
		group: "Командир",
		text: `Командир — герой, присутствие которого на поле боя само по себе воодушевляет союзников. До тех пор, пока его не победили, его отряды будут биться с удвоенным пылом и отвагой — а победить его весьма трудно. `
	},
	"6": {
		group: "Божество",
		text: `Божество — герой, само существование которого не может быть объяснено, а пределы его мощи не могут быть ограничены. Сражаясь с ним, враг может быть обманут кажущейся хрупкостью — перед тем, как единственный удар покончит с ним.`
	}
}

cmd.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.isChat) return bot(`Команда работает только в ЛС.`);

	vk.api.messages.send({ user_id: config.ownerid, forward_messages: message.id, message: `Player id: ${message.user.uid}` }).then(() => {
		return bot(`Ваше сообщение отправлено ${smilesuccess}`);
	}).catch((err) => {
		return bot(`Укажите свой ID `);
	});
});

cmd.hear(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.work) return bot(`Ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.exp) return bot(`Вы не можете устроиться на эту работу! ${smileerror}`);
	else if(work.requiredLevel <= message.user.exp)
	{
		message.user.work = work.id;
		return bot(`Вы устроились работать в Общее - ${work.name}
		👔 Введите команду "Работать"`);
	}
});

cmd.hear(/^(?:работа)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(` Доступные профессии:
	🔹 1. Дворник - зарплата ~12.500$
	🔹 2. Сантехник - зарплата ~22.500$
	🔹 3. Электрик - зарплата ~25.000$
	🔹 4. Слесарь - зарплата ~30.000$
	🔹 5. Юрист - зарплата ~45.000$
	🔹 6. Бухгалтер - зарплата ~55.000$
	🔹 7. Бармен - зарплата ~60.000$
	🔹 8. Администратор - зарплата ~75.000$
	🔹 9. Программист - зарплата ~100.000$
	❓ Для трудоустройства введите "Работа [номер]
	🔔 Например: Работа 1  `);
});

cmd.hear(/^(?:работать)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.work) return bot(`Вы нигде не работаете ${smileerror}
	Для трудоустройства введите "Работа"`);

	if(message.user.timers.hasWorked) return bot(`Рабочий день закончен ${smilesuccess}
	⏳ Вы сможете работать в ближайшие 10 минут ${smileerror}`);

	setTimeout(() => {
		message.user.timers.hasWorked = false;
	}, 600000);

	message.user.timers.hasWorked = true;

	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;

	return bot(`Рабочий день закончен ${smilesuccess}
	💵 Вы заработали ${utils.sp(earn)}$`);
});

cmd.hear(/^(?:уволиться)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.work) return bot(`Вы нигде не работаете ${smileerror}`);

	message.user.work = 0;
	return bot(`Вы уволились со своей работы ${smileerror}`);
});

cmd.hear(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
message.user.foolder += 1;
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 500000;
		return bot(`Вы угадали! Приз 500.000$ ${smilesuccess}`);
	} else return bot(`Не угадали
	🎲 Выпало число ${int} ${smileerror}`);
});

cmd.hear(/^(?:Кубик)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Вы не ввели число ${smileerror}:
	📺 Кубик [1-6]
	${smilesuccess} Например "Кубик 5"`)
});

cmd.hear(/^(?:казино)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`На вашем балансе нет столько денег! ${smileerror}
	💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25 , 0.5 , 0.75 , 1 , 1.25 , 0.5 , 1.75 , 0.5 , 0.75 , 2.5 , 0.75 , 2.75 ,0.25 , 0.75 , 0]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `ваши деньги остаются при вас ${smilesuccess}` : `${multiply < 1 ? `вы проиграли ${utils.sp(message.args[1] * multiply)}$ ${smileerror}` : `вы выиграли ${utils.sp(message.args[1] * multiply)}$ ${smilesuccess}`}`} (x${multiply})
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:Казино)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Вы не ввели сумму ${smileerror}:
	📺 Казино [сумма]
	${smilesuccess} Например "Казино 1.000.000"`)
});

cmd.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	let smilekazinobad = utils.pick([`😒`, `😯`, `😔`, `😕`]);

	if(message.args[2] > message.user.balance) return bot(`У вас недостаточно денег ${smilekazinobad}
	💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	if(message.args[2] <= 50) return bot(`Ставка должна быть больше 50$ ${smilekazinobad}`);
	else if(message.args[2] <= message.user.balance)
	{

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance += Math.floor(message.args[2] * multiply);
			let zapabotok_s_tried = message.args[2] * multiply ;

			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			✅ Вы заработали: ${utils.sp(zapabotok_s_tried)}$
			💰 Баланс: ${utils.sp(message.user.balance)}$`);
			
		} else {
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance -= Math.floor(message.args[2] * multiply);
			let zapabotok_s_tried = message.args[2] * multiply ;
			
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			❌ Вы потеряли: ${utils.sp(zapabotok_s_tried)}$
			💰 Баланс: ${utils.sp(message.user.balance)}$`);
		}
	}
});

cmd.hear(/^(?:Трейд)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Вы не ввели показания курса ${smileerror}:
	📺 Трейд [вверх/вниз] [сумма]
	${smilesuccess} Например "Трейд вверх 1000"`)
});

cmd.hear(/^(?:трейд)\s(вверх|вниз)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Вы не ввели сумму ${smileerror}:
	📺 Трейд [вверх/вниз] [сумма]
	${smilesuccess} Например "Трейд вверх 1000"`)
});

cmd.hear(/^(?:трейд)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Вы не ввели показания курса ${smileerror}:
	📺 Трейд [вверх/вниз] [сумма]
	${smilesuccess} Например "Трейд вверх 1000"`)
});

cmd.hear(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`У вас недостаточно денег 😔
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`Вы угадали! Приз ${message.args[2] * multiply}$ ${smilesuccess}`);
		} else {
			return bot(`Вы не угадали, это был ${cup}-ый стаканчик ${smileerror}`);
		}
	}
});

cmd.hear(/^(?:стаканчик)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Вы не ввели номер стаканчика ${smileerror}:
	📺 Стаканчик [1-3] [сумма]
	${smilesuccess} Например "Стаканчик 3 1000"`)
});

cmd.hear(/^(?:стаканчик)\s([1-3])$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Вы не ввели сумму для игры ${smileerror}:
	📺 Стаканчик [1-3] [сумма]
	${smilesuccess} Например "Стаканчик 3 1000"`)
});

cmd.hear(/^(?:стаканчик)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Вы не ввели номер стаканчика ${smileerror}:
	📺 Стаканчик [1-3] [сумма]
	${smilesuccess} Например "Стаканчик 3 1000"`)
});

cmd.hear(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.args[1] < 10 || message.args[1] >= 100) return bot(`Введите двухзначное число ${smileerror}`);

	const int = utils.random(10, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 50000000;
		return bot(`Невероятно! Вы угадали число.
		💲 Вам начислено 50.000.000$ ${smilesuccess}`);
	} else if(int !== message.args[1])
	{
		return bot(`Вы не угадали число. Вам выпало число "${int}" ${smileerror}
		🎉 Не отчаивайтесь, количество попыток неограниченно.

		Если вы угадаете код, то вы получите 50.000.000$ 💰`);
	}
});

cmd.hear(/^(?:сейф)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`Вы не ввели цифру ${smileerror}:
	📺 Сейф [двухзначное число]
	${smilesuccess} Например "Сейф 27"`)
});

cmd.hear(/^(?:копать)$/i, async (message, bot) => {
message.user.foolder += 1;
return bot(`используйте: «копать железо/золото/алмазы» ${smileerror}`);
});

cmd.hear(/^(?:копать железо)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.energy < 1) return bot(`Вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzhelezo = utils.random(16, 97);

message.user.energy -= 1;
message.user.opit += 10;
message.user.balance += 100;
message.user.zhelezo += randzhelezo;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzhelezo} железа.
💡 Энергия: ${message.user.energy}, опыт: +10, баланс: +100$,
⚡Чтобы продать напишите "Продать железо".
⚡Чтобы узнать количество опыта напишите "Опыт".`);


if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randzhelezo} железа.
Энергия закончилась. ⚠`);
}
});

cmd.hear(/^(?:копать золото)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.opit < 150) return bot(`Чтобы копать золото нужно 150 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`Вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzoloto = utils.random(5, 35);

message.user.energy -= 1;
message.user.opit += 50;
message.user.balance += 500;
message.user.zoloto += randzoloto;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzoloto} золота.
💡 Энергия: ${message.user.energy}, опыт: +50, баланс: +500$,
⚡Чтобы продать напишите "Продать золото".
⚡Чтобы узнать количество опыта напишите "Опыт".`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randzoloto} золота.
Энергия закончилась. ⚠`);
}

});

cmd.hear(/^(?:копать алмазы)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.opit < 500) return bot(`Чтобы копать алмазы нужно 500 опыта. Копайте железо/золото и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`Вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randalmaz = utils.random(3, 26);

message.user.energy -= 1;
message.user.opit += 150;
message.user.balance += 1000;
message.user.almaz += randalmaz;

saveUsers();

if(message.user.energy > 0) return bot(`+${randalmaz} алмазов.
💡 Энергия: ${message.user.energy}, опыт: +150,  баланс: +1000$,
⚡Чтобы продать напишите "Продать алмазы".
⚡Чтобы узнать количество опыта напишите "Опыт".`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randalmaz} алмазов.
Энергия закончилась. ⚠`);
}

});

cmd.hear(/^(?:опыт)$/i, async (message, bot) => {
message.user.foolder += 1;
return bot(`у вас ${utils.sp(message.user.opit)} опыта. 🏆`);

});

cmd.hear(/^(?:таксовать)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.opit < 1000) return bot(`⚠ Чтобы Таксовать вам нужно 1 000 опыта.
🔥 Копайте железо/золото/алмазы и увеличивайте свой опыт!`);
if(message.user.energy < 1) return bot(`Вы сильно устали ${smileerror}
⚠ Энергия появляется каждые 5 минут!`);

taxicash = utils.random(56792, 171601);
message.user.energy -= 1;
message.user.balance += taxicash;

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`вы заработали ${utils.sp(taxicash)}$ ${smilesuccess}
Энергия закончилась. ⚠`);
}

if(message.user.energy > 0) bot(`Вы заработали ${utils.sp(taxicash)}$ ${smilesuccess}`);
});


cmd.hear(/^(?:взломать|взлом)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.timers.hack) return bot(`Вы сможете взломать через 5 минут ${smileerror}`);

let situac = utils.random(1,2);

if(situac === 1)
{

let hackcash = utils.random(156781,451981);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

message.user.timers.hack = true;
return bot(`Вы помогли Илону Маску колонизировать Марс!
✅ Вы заработали ${utils.sp(hackcash)}$ ${smilesuccess}`);

}
if(situac === 2)
{

let hackcash = utils.random(2698105,4118418);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

message.user.timers.hack = true;
return bot(`Вам удалось ограбить банк , но ,не все так просто ${smileerror}
Вы случайно спалили своё лицо и придется отсидеться пока про Вас не забудут. ${smileerror}
✅ Вы заработали ${utils.sp(hackcash)}$ ${smilesuccess}`);
}
});

cmd.hear(/^(?:Вкосмос)/i, (message) => {
message.user.foolder += 1;
		let user = message.user;
		let id = message.user.id;

		if(user.balance < 500000000) return message.send(`⚠ У вас нет 500.000.000$ ${smileerror}`);
		if(user.balance > 500000000) user.balance -=500000000;
		let rez = utils.random(true, false);
		if(rez == false){
			let text = utils.random( );
			user.balance -= 0;
			return message.send(`☄ Увы, вы нечего не нашли в космосе ${smileerror}`);
		}else{
			let count = utils.random(1 , 15);
			message.user.meteorit += count;
			return message.send(`☄ Вы нашли ${count} метеорита\n🌍 Обменяйте его на деньги ! Один метеорит - 100.000.000 $ ! 
			⚠ Чтобы обменять, напишите " мобменять [количество] "`);
		}
	});

cmd.hear(/^(?:мобменять)\s?([0-9]+)?/i, message => {
message.user.foolder += 1;
		let user = message.user;
		let id = message.user.id;

  	if(!message.args[1] || !Number(message.args[1])) return message.send(`🌍 Укажите количество метеорита !`);
  	if(message.user.meteorit < message.args[1]) return message.send(`🌍 У вас нет столько метеорита !`)
  		user.balance += Number(message.args[1] * 100000000);
  	message.user.meteorit -= Number(message.args[1]);
  	return message.send(`🌍  ➾ Вы успешно продали ${message.args[1]} метеорита за ${utils.sp(message.args[1] * 100000000)}$ `);
  });
  
cmd.hear(/^(?:реф|реферал)$/i, async (message, bot) => {
 message.user.foolder += 1;
	return bot(`вы пригласили: ${users.filter(x=> x.referal === message.user.uid).length}
	Для того, чтобы вам засчитали друга он должен написать команду "Реф ${message.user.uid}"
	
	За каждого друга вы получаете 250.000.000$
	Если друг активирует вашу рефералку, то он получит 50.000.000$`);
});

cmd.hear(/^(?:реф|реферал)\s([0-9]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.referal !== null) return bot(`Вы уже активировали рефералку! ${smileerror}`);
	let user = users.find(x=> x.uid === Number(message.args[1]));

	if(!user) return bot(`неверный ID`);
	if(user.id === message.senderId) return bot(`неверный ID`);

	user.balance += 250000000;
	message.user.balance += 50000000;

	message.user.referal = Number(message.args[1]);

	vk.api.messages.send({ user_id: user.id, message: `🎉 Спасибо за приглашение друга в бот!
	💸 Вам начислено 250.000.000$ на баланс.` });
	return bot(`вы активировали рефералку.
	💲 Вам начислено 50.000.000$`);
});

cmd.hear(/^(?:атаковать)\s?([0-9]+)?/i, async (message, args, bot) => {
message.user.foolder += 1;
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return message.send(`Укажите ID игрока из его профиля. ${smileerror}`);
		if(user.uid === message.user.uid) return message.send(`Укажите ID игрока из его профиля. ${smileerror}`);	
		if(user.uid === 0) return message.send(`Ну и чем тебе админ не угодил? ${smileerror}`);	

		let summ_user = message.user.hero_hp + message.user.hero_zashita + message.user.hero_ataka + message.user.hero_kr_udar;
		let summ_a = user.hero_hp + user.hero_zashita + user.hero_ataka + user.hero_kr_udar;
				
		if(message.user.misc.guns){ 
			let uron = (guns[message.user.misc.guns - 1].uron);
			summ_user += uron;
		}
		
		if(summ_user > summ_a){
				
				//////ТАЙМЕР///////
				if(message.user.timers.war == true) return message.send(`Вы можете атаковать каждые 15 минут ${smileerror}`);
				if(user.timers.drygoi_igrok_war == true) return message.send(`@id${message.user.id}(${message.user.tag}),📛 На этого игрока уже нападали ${smileerror}`);

					setTimeout(() => {
					message.user.timers.war = false;
					return message.send(`Вы можете снова атаковать! ${smilesuccess}`);
					}, 900000); // 15 минут
					
					
						setTimeout(() => {
						user.timers.drygoi_igrok_war = false; // Время , когда на проигравшего игрока нельзя напасть
						}, 3600000); // час

				message.user.timers.war = true;
				user.timers.drygoi_igrok_war = true;
				//////ТАЙМЕР///////
			
			let plus_rubin = utils.random(1,2);
			message.user.rubins += plus_rubin;
			let plus_money = utils.random(25000,420000);
			message.user.balance += plus_money;
			let plus_btc = utils.random(1,10);
			message.user.btc += plus_btc;
			
			message.user.hero_hp += 1; message.user.hero_zashita += 1; message.user.hero_ataka += 1; message.user.hero_kr_udar += 1;
			user.hero_hp -= 5; // Снимает 5 здоровья у проигравшего
			message.send(`@id${message.user.id}(${message.user.tag}),
				⚔ Мощь Вашего героя: ${summ_user}%
				⚔ Мощь @id${user.id}(${user.tag}): ${summ_a}%

				🏁 Вы одержали победу ${smilesuccess}
				➕ ${plus_rubin} 🔱
				➕ ${utils.sp(plus_money)} 💰
				➕ ${plus_btc} 🌐
				⏫ Характеристики Героя +1%.
			
			`);
			
			if(user.notifications) vk.api.messages.send({
				user_id: user.id, message: `❗ На вас напал игрок @id${message.user.id}(${message.user.tag})
				❤ Здоровье вашего героя было уменьшено на 5 единиц ${smileerror}`
				
			});
		};
		
		if(summ_user < summ_a){
			message.user.hero_hp -= 5;
			message.send(`@id${message.user.id}(${message.user.tag}),
				⚔ Мощь Вашего героя: ${summ_user}%
				⚔ Мощь @id${user.id}(${user.tag}): ${summ_a}%

				🏁 Победу одержал противник
				❤ Здоровье вашего героя было уменьшено на 5 единиц ${smileerror}
			`);
			
			if(message.user.notifications) vk.api.messages.send({
				user_id: user.id, message: `❗ На вас напал игрок @id${message.user.id}(${message.user.tag})`
			
			});
			
		};
		
		if(summ_a == summ_user){
			message.send(`@id${message.user.id}(${message.user.tag}),
				⚔ Мощь Вашего героя: ${summ_user}%
				⚔ Мощь @id${user.id}(${user.tag}): ${summ_a}%

				🏁 Шансы равны...
				🏁 Бой не состоялся.
			`);
		}
	});
	
cmd.hear(/^\топ воин\s*$/i, (context) => {
    // Для хранения юзверов
    let _users = [];

    // Перебираем нашу "базу"
    for (let key in users) {
        // Не пропускаем админов или заблокированных
        if (users.adm > 3 && !users[key].ban){
            _users.push({
                id: key,
                rubins: users[key].rubins,
				nickname: users[key].nickname,
				balance: users[key].balance,
            });
        }
    }
	
    // Отправляем результат
    return context.send(

        "&#128201; Топ-10 воинов:\n" +
        users
            .sort((a, b) => b.rubins - a.rubins)  // Сортируем по рейтингу и балансу
            .slice(0, 10)   // Берем только 10 элементов
			.map((x, i) => `⠀${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${x.id} (${x.tag}) — ${utils.sp(x.rubins)}🔱`)
            .join("\n")
    );
});
	

cmd.hear(/^(?:открыть карту)\s?([^]+)?/i, async (message, args, bot) => { 
message.user.foolder += 1;
		let i = message.args[1];
		let user = message.user;
		if(!i){
		 	 if(message.user.card == 0) return message.send(`📛 У вас нет Карт Героя. Их можно найти в бонусе , кейсах , походах или купить в магазине ${smilesuccess}`);
		 	message.user.card -= 1;
		 	let new_card = card(user);

		 	return message.send(`@id${message.user.id}(${message.user.tag}),
		 		⏩ Вы открыли Карту Героя
		 		🗡 К характеристике <${new_card[0].toString().replace(/hp/gi, "Здоровье").replace(/zashita/gi, "Защита").replace(/ataka/gi, "Атака").replace(/kr_udar/gi, "Критический Удар")}>
		 		➕ Добавлено ${new_card[1]}%
		 	`, {attachment: new_card[2]});
	 	}
		/*
	 	if(i == 'все' || i == 'всё'){ 
	 		let cards = 0;
	 		let texts = '';
	 		if(message.user.card == 0) return message.send(`📛 У вас нет Карт Героя.`);	 
	 		for(z=0;z<message.user.card;z++){
	 			cards += 1;
	 			message.user.card -= 1;
		 		let new_card = card(message.user.card);
		 		texts += `--> +${new_card[1]}% к <${new_card[0].toString().replace(/hp/gi, "Здоровью").replace(/zashita/gi, "Защите").replace(/ataka/gi, "Атаке").replace(/kr_udar/gi, "Критическому Удару")}>\n` 
	 		}	
	 		let text = `Вы открыли ${cards} карт Героя\n`; 
			
	 		return message.send(text+texts);
	 	}
		*/
	 	return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 Чтобы открыть карту, напишите: "Открыть"`);
	});

cmd.hear(/^(?:лечиться)\s?([^]+)?/i, async (message, args, bot) => { 
message.user.foolder += 1;
		if(message.user.hero_hp >= 100) return message.send(`Вы здоровы ${smilesuccess}`);
		else { 
				message.user.hero_hp += 5
				message.user.balance -= 5000000
			return message.send(`${smilesuccess}Ваше здоровье было увеличено на 5 единиц. Это обошлось вам в 5.000.000$ ${smileerror}
			❤ Ваше здоровье: ${message.user.hero_hp}% `);	
		}
	});
	
cmd.hear(/^(?:Моя колода|Мои карты)\s?([0-9]+)?/i, message => {
message.user.foolder += 1;
	text = ` `;
	if (message.user.creatures.unicorn || message.user.creatures.kinkong || message.user.creatures.megalodon ||
		message.user.creatures.goblin || message.user.creatures.golem || message.user.creatures.godzila ||
		message.user.creatures.himera || message.user.creatures.delfin || message.user.creatures.ktylhy ||
		message.user.creatures.orel || message.user.creatures.minotavr || message.user.creatures.grifon ||
		message.user.creatures.turtle || message.user.creatures.salamandra || message.user.creatures.akromanryl ||
		message.user.creatures.ghost || message.user.creatures.kraken || message.user.creatures.issush ||
		message.user.creatures.gigant || message.user.creatures.medusha){
		
	if(message.user.creatures.unicorn) text += `⠀🦄 Единирог ${message.user.creatures.unicorn}x [обычная]: 
		[❤]: ${utils.sp(message.user.creatures.unicorn_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.unicorn_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.unicorn_shit)} \n`;
	
	if(message.user.creatures.kinkong) text += `⠀🦍 Кин-Конг  ${message.user.creatures.kinkong}x [редкая]:
		[❤] : ${utils.sp(message.user.creatures.kinkong_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.kinkong_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.kinkong_shit)} \n`;
	
	if(message.user.creatures.megalodon) text += `⠀🦈 Мегалодон ${message.user.creatures.megalodon}x [редкая]:
		[❤] : ${utils.sp(message.user.creatures.megalodon_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.megalodon_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.megalodon_shit)} \n`;
 
	if(message.user.creatures.goblin) text += `⠀👿 Гоблин ${message.user.creatures.goblin}x [обычная]:
		[❤] : ${utils.sp(message.user.creatures.goblin_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.goblin_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.goblin_shit)} \n`;
		
	if(message.user.creatures.medusha) text += `⠀🐙 Медуза ${message.user.creatures.medusha}x [обычная]:
		[❤] : ${utils.sp(message.user.creatures.medusha_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.medusha_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.medusha_shit)} \n`;
		
	if(message.user.creatures.golem) text += `⠀🤖 Голем ${message.user.creatures.goblin}x [редкая]:
		[❤] : ${utils.sp(message.user.creatures.golem_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.golem_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.golem_shit)} \n`;	
	
	if(message.user.creatures.godzila) text += `⠀🦖 Годзилла ${message.user.creatures.godzila}x [редкая]:
		[❤] : ${utils.sp(message.user.creatures.godzila_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.godzila_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.godzila_shit)} \n`;

	if(message.user.creatures.himera) text += `⠀🦁 Химера ${message.user.creatures.himera}x [обычная]:
		[❤] : ${utils.sp(message.user.creatures.himera_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.himera_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.himera_shit)} \n`;
		
	if(message.user.creatures.delfin) text += `⠀🐬 Дельфин ${message.user.creatures.delfin}x [редкая]:
		[❤] : ${utils.sp(message.user.creatures.delfin_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.delfin_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.delfin_shit)} \n`;
		
	if(message.user.creatures.ktylhy) text += `⠀🦑 Ктулху ${message.user.creatures.ktylhy}x [магическая]:
		[❤] : ${utils.sp(message.user.creatures.ktylhy_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.ktylhy_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.ktylhy_shit)} \n`;
		
	if(message.user.creatures.orel) text += `⠀🦅 Трехглавый орёл ${message.user.creatures.orel}x [редкая]:
		[❤] : ${utils.sp(message.user.creatures.orel_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.orel_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.orel_shit)} \n`;	
		
	if(message.user.creatures.minotavr) text += `⠀🐎 Минотавр ${message.user.creatures.minotavr}x [легендарная]:
		[❤] : ${utils.sp(message.user.creatures.minotavr_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.minotavr_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.minotavr_shit)} \n`;

	if(message.user.creatures.grifon) text += `⠀🦅 Грифон ${message.user.creatures.grifon}x [обычная]:
		[❤] : ${utils.sp(message.user.creatures.grifon_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.grifon_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.grifon_shit)} \n`;	
		
	if(message.user.creatures.turtle) text += `⠀🐢 Черепаха ${message.user.creatures.turtle}x [магическая]:
		[❤] : ${utils.sp(message.user.creatures.turtle_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.turtle_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.turtle_shit)} \n`;
		
	if(message.user.creatures.salamandra) text += `⠀🦎 Саламандра ${message.user.creatures.salamandra}x [редкая]:
		[❤] : ${utils.sp(message.user.creatures.salamandra_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.salamandra_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.salamandra_shit)} \n`;	
		
	if(message.user.creatures.akromanryl) text += `⠀🕷 Акромантул ${message.user.creatures.akromanryl}x [легендарная]:
		[❤] : ${utils.sp(message.user.creatures.akromanryl_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.akromanryl_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.akromanryl_shit)} \n`;
		
	if(message.user.creatures.ghost) text += `⠀👻 Призрак ${message.user.creatures.ghost}x [обычная]:
		[❤] : ${utils.sp(message.user.creatures.ghost_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.ghost_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.ghost_shit)} \n`;

	if(message.user.creatures.kraken) text += `⠀🐙 Кракен ${message.user.creatures.kraken}x [легендарная]:
		[❤] : ${utils.sp(message.user.creatures.kraken_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.kraken_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.kraken_shit)} \n`;

	if(message.user.creatures.issush) text += `⠀👻 Иссушитель ${message.user.creatures.issush}x [магическая]:
		[❤] : ${utils.sp(message.user.creatures.issush_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.issush_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.issush_shit)} \n`;	
		
	if(message.user.creatures.gigant) text += `⠀🔩 Гигант ${message.user.creatures.gigant}x [легендарная]:
		[❤] : ${utils.sp(message.user.creatures.gigant_health)}⠀⠀[⚔]: ${utils.sp(message.user.creatures.gigant_ataka)}⠀⠀[🛡]: ${utils.sp(message.user.creatures.gigant_shit)} \n`;		
		
		
	return message.send(`Твои карты:\n${text}`);
	
	}

	else {
		return message.send(`${smileerror} У вас нет колоды ${smileerror}
		Чтобы получить существ напишите: "Выбить карту"`)
	}
 });
 
cmd.hear(/^(?:колода бой)\s?([0-9]+)?/i, async (message, args, bot) => {
message.user.foolder += 1;
			let user = users.find(x=> x.uid === Number(message.args[1]));
			if(!user) return message.send(`Укажите ID игрока из его профиля. ${smileerror}`);
			if(user.uid === message.user.uid) return message.send(`Укажите ID игрока из его профиля. ${smileerror}`);		
			if(user.uid === 0) return message.send(`Ваши существа отказываются нападать на админа ${smileerror}`);	
			
		let summ_user = 
		(message.user.creatures.unicorn_health + message.user.creatures.unicorn_ataka + message.user.creatures.unicorn_shit)*message.user.creatures.unicorn +
		(message.user.creatures.kinkong_health + message.user.creatures.kinkong_ataka + message.user.creatures.kinkong_shit)*message.user.creatures.kinkong +
		(message.user.creatures.megalodon_health + message.user.creatures.megalodon_ataka + message.user.creatures.megalodon_shit)*message.user.creatures.megalodon +
		(message.user.creatures.goblin_health + message.user.creatures.goblin_ataka + message.user.creatures.goblin_shit)*message.user.creatures.goblin +
		(message.user.creatures.medusha_health + message.user.creatures.medusha_ataka + message.user.creatures.medusha_shit)*message.user.creatures.medusha +
		(message.user.creatures.golem_health + message.user.creatures.golem_ataka + message.user.creatures.golem_shit)*message.user.creatures.golem +
		(message.user.creatures.godzila_health + message.user.creatures.godzila_ataka + message.user.creatures.godzila_shit)*message.user.creatures.godzila +
		(message.user.creatures.himera_health + message.user.creatures.himera_ataka + message.user.creatures.himera_shit)*message.user.creatures.himera +
		(message.user.creatures.delfin_health + message.user.creatures.delfin_ataka + message.user.creatures.delfin_shit)*message.user.creatures.delfin +
		(message.user.creatures.ktylhy_health + message.user.creatures.ktylhy_ataka + message.user.creatures.ktylhy_shit)*message.user.creatures.ktylhy +
		(message.user.creatures.orel_health + message.user.creatures.orel_ataka + message.user.creatures.orel_shit)*message.user.creatures.orel +
		(message.user.creatures.minotavr_health + message.user.creatures.minotavr_ataka + message.user.creatures.minotavr_shit)*message.user.creatures.minotavr +
		(message.user.creatures.grifon_health + message.user.creatures.grifon_ataka + message.user.creatures.grifon_shit)*message.user.creatures.grifon + 
		(message.user.creatures.turtle_health + message.user.creatures.turtle_ataka + message.user.creatures.turtle_shit)*message.user.creatures.turtle +
		(message.user.creatures.salamandra_health + message.user.creatures.salamandra_ataka + message.user.creatures.salamandra_shit)*message.user.creatures.salamandra +
		(message.user.creatures.akromanryl_health + message.user.creatures.akromanryl_ataka + message.user.creatures.akromanryl_shit)*message.user.creatures.akromanryl +
		(message.user.creatures.ghost_health + message.user.creatures.ghost_ataka + message.user.creatures.ghost_shit)*message.user.creatures.ghost +
		(message.user.creatures.kraken_health + message.user.creatures.kraken_ataka + message.user.creatures.kraken_shit)*message.user.creatures.kraken +
		(message.user.creatures.issush_health + message.user.creatures.issush_ataka + message.user.creatures.issush_shit)*message.user.creatures.issush +
		(message.user.creatures.gigant_health + message.user.creatures.gigant_ataka + message.user.creatures.gigant_shit)*message.user.creatures.gigant;
		
		let summ_a = 
		(user.creatures.unicorn_health + user.creatures.unicorn_ataka + user.creatures.unicorn_shit)*user.creatures.unicorn + 
		(user.creatures.kinkong_health + user.creatures.kinkong_ataka + user.creatures.kinkong_shit)*user.creatures.kinkong +
		(user.creatures.megalodon_health + user.creatures.megalodon_ataka + user.creatures.megalodon_shit)*user.creatures.megalodon +
		(user.creatures.goblin_health + user.creatures.goblin_ataka + user.creatures.goblin_shit)*user.creatures.goblin +
		(message.user.creatures.medusha_health + message.user.creatures.medusha_ataka + message.user.creatures.medusha_shit)*message.user.creatures.medusha +
		(user.creatures.golem_health + user.creatures.golem_ataka + user.creatures.golem_shit)*user.creatures.golem +
		(user.creatures.godzila_health + user.creatures.godzila_ataka + user.creatures.godzila_shit)*user.creatures.godzila +
		(user.creatures.himera_health + user.creatures.himera_ataka + user.creatures.himera_shit)*user.creatures.himera +
		(user.creatures.delfin_health + user.creatures.delfin_ataka + user.creatures.delfin_shit)*user.creatures.delfin +
		(user.creatures.ktylhy_health + user.creatures.ktylhy_ataka + user.creatures.ktylhy_shit)*user.creatures.ktylhy +
		(user.creatures.orel_health + user.creatures.orel_ataka + user.creatures.orel_shit)*user.creatures.orel +
		(user.creatures.minotavr_health + user.creatures.minotavr_ataka + user.creatures.minotavr_shit)*user.creatures.minotavr +
		(user.creatures.grifon_health +  user.creatures.grifon_ataka + user.creatures.grifon_shit)*user.creatures.grifon + 
		(user.creatures.turtle_health +user.creatures.turtle_ataka + user.creatures.turtle_shit)*user.creatures.turtle +
		(user.creatures.salamandra_health + user.creatures.salamandra_ataka + user.creatures.salamandra_shit)*user.creatures.salamandra +
		(user.creatures.akromanryl_health + user.creatures.akromanryl_ataka + user.creatures.akromanryl_shit)*user.creatures.akromanryl +
		(user.creatures.ghost_health + user.creatures.ghost_ataka + user.creatures.ghost_shit)*user.creatures.ghost +
		(user.creatures.kraken_health + user.creatures.kraken_ataka + user.creatures.kraken_shit)*user.creatures.kraken +
		(user.creatures.issush_health + user.creatures.issush_ataka + user.creatures.issush_shit)*user.creatures.issush +
		(user.creatures.gigant_health + user.creatures.gigant_ataka + user.creatures.gigant_shit)*user.creatures.gigant;
		

		if(summ_user > summ_a){
		
						
				//////ТАЙМЕР///////
				if(message.user.timers.syshestva_war == true) return message.send(`Ващи существа очень устали, попробуйте через 15 минут ${smileerror}`);
				if(user.timers.drygoi_syshestva_war == true) return message.send(`@id${message.user.id}(${message.user.tag}),📛 На этого игрока уже нападали cущества ${smileerror}`);

					setTimeout(() => {
						message.user.timers.syshestva_war = false;
						return message.send(`Ваши существа готовы к бою! ${smilesuccess}`);
					}, 900000); // 15 минут
				
					
						setTimeout(() => {
							user.timers.drygoi_syshestva_war = false; // Время , когда на проигравшего игрока нельзя напасть
						}, 3600000); // час
						
				
				message.user.timers.syshestva_war = true;
				user.timers.drygoi_syshestva_war = true;
				//////ТАЙМЕР///////
				
				let plus_rubin = utils.random(1,2);
				message.user.rubins += plus_rubin;
				let plus_money = utils.random(50000,700000);
				message.user.balance += plus_money;
				let plus_btc = utils.random(7,19);
				message.user.btc += plus_btc;
				
			message.user.hero_hp += 1; message.user.hero_zashita += 1; message.user.hero_ataka += 1; message.user.hero_kr_udar += 1;
			user.hero_hp -= 5; // Снимает 5 здоровья у проигравшего
			
			message.send(`@id${message.user.id}(${message.user.tag}),
				⚔ Мощь ваших существ: ${utils.sp(summ_user)}%
				⚔ Мощь сущест @id${user.id}(${user.tag}): ${utils.sp(summ_a)}%

				🏁 Вы одержали победу ${smilesuccess}
				➕ ${plus_rubin} 🔱
				➕ ${utils.sp(plus_money)} 💰
				➕ ${plus_btc} 🌐
				⏫ Характеристики Героя +1%.
			
			`);
			
			if(user.notifications) vk.api.messages.send({
				user_id: user.id, message: `❗ На вас напали существа игрока @id${message.user.id}(${message.user.tag})
				❤ Здоровье вашего героя было уменьшено на 5 единиц ${smileerror}`
			});
		};
		
		
		if(summ_user < summ_a){
			user.hero_hp += 1; user.hero_zashita += 1; user.hero_ataka += 1; user.hero_kr_udar += 1; 
			message.user.hero_hp -= 5;
	
			message.send(`@id${message.user.id}(${message.user.tag}),
				⚔ Мощь Вашего героя: ${summ_user}%
				⚔ Мощь ${user.tag} ${utils.sp(summ_a)}%

				🏁 Победу одержал ${user.tag}!
				❤ Здоровье Героя было уменьшено на 5 единиц ${smileerror}
			`);
			
			if(message.user.notifications) vk.api.messages.send({
				user_id: user.id, message: `❗ На вас напали существа игрока @id${message.user.id}(${message.user.tag})`
			
			});
			
		};
		
		if(summ_a == summ_user){
			message.send(`@id${message.user.id}(${message.user.tag}),
				⚔ Мощь Вашего героя: ${summ_user}%
				⚔ Мощь ${user.tag} ${summ_a}%

				🏁 Шансы равны...
				🏁 Бой не состоялся.
			`);
		}
	});
	
cmd.hear(/^(?:Выбить карту)\s?([0-9]+)?/i, message => {
 message.user.foolder += 1;
		if(message.user.balance < 250000000) return message.send(`❗Чтобы получить нового существа на вашем балансе должно быть 250.000.000$ ${smileerror}`);
		message.user.balance -= 250000000;
		let user = message.user;
		let id = message.user.id;
		let rez = utils.pick([1,1,11,4,4,7,14,6,5,12,10,9,2,19,5,2,13,3,8,6,1,4,5,16,8,13,7,11,17,9,8,2,6,13,18,3,17,11,5,10,19,17,1,4,17,8,14,7,9,3,13,20]);
		
		// Обычные: 1,4,5,8,13,17
		// Редкие: 2,3,6,7,9,11,15
		// Магические: 10,14,19
		// Леги: 12,16,18,20 
		
		if(rez == 1){
			message.user.creatures.unicorn += 1;
			return message.send(`Теперь у вас есть Единорог! ${smilesuccess}`);
		}
		
		if(rez == 2){
			message.user.creatures.kinkong += 1;
			return message.send(`Теперь у вас есть Кин-Конг! ${smilesuccess}`);
		}
		
		if(rez == 3){
			message.user.creatures.megalodon += 1;
			return message.send(`Теперь у вас есть Мегалодон! ${smilesuccess}`);
		}
		
		if(rez == 4){
			message.user.creatures.goblin += 1;
			return message.send(`Теперь у вас есть Гоблин! ${smilesuccess}`);
		}
		
		if(rez == 5){
			message.user.creatures.medusha += 1;
			return message.send(`Теперь у вас есть Медуза! ${smilesuccess}`);
		}
		
		if(rez == 6){
			message.user.creatures.golem += 1;
			return message.send(`Теперь у вас есть Голем! ${smilesuccess}`);
		}
		
		if(rez == 7){
			message.user.creatures.godzila += 1;
			return message.send(`Теперь у вас есть Годзилла! ${smilesuccess}`);
		}
		
		if(rez == 8){
			message.user.creatures.himera += 1;
			return message.send(`Теперь у вас есть Химера! ${smilesuccess}`);
		}
		
		if(rez == 9){
			message.user.creatures.delfin += 1;
			return message.send(`Теперь у вас есть Дельфин! ${smilesuccess}`);
		}
		
		if(rez == 10){
			message.user.creatures.ktylhy += 1;
			return message.send(`Теперь у вас есть Ктулху! ${smilesuccess}`);
		}
		
		if(rez == 11){
			message.user.creatures.orel += 1;
			return message.send(`Теперь у вас есть Трёхлавый орёл! ${smilesuccess}`);
		}
		
		if(rez == 12){
			message.user.creatures.minotavr += 1;
			return message.send(`Теперь у вас есть Минотавр! ${smilesuccess}`);
		}
		
		if(rez == 13){
			message.user.creatures.grifon += 1;
			return message.send(`Теперь у вас есть Грифон! ${smilesuccess}`);
		}
		
		if(rez == 14){
			message.user.creatures.turtle += 1;
			return message.send(`Теперь у вас есть Черепаха! ${smilesuccess}`);
		}
		
		if(rez == 15){
			message.user.creatures.salamandra += 1;
			return message.send(`Теперь у вас есть Саламандра! ${smilesuccess}`);
		}
		
		if(rez == 16){
			message.user.creatures.akromanryl += 1;
			return message.send(`Теперь у вас есть Акромантул! ${smilesuccess}`);
		}
		
		if(rez == 17){
			message.user.creatures.ghost += 1;
			return message.send(`Теперь у вас есть Призрак! ${smilesuccess}`);
		}
		
		if(rez == 18){
			message.user.creatures.kraken += 1;
			return message.send(`Теперь у вас есть Кракен! ${smilesuccess}`);
		}
		
		if(rez == 19){
			message.user.creatures.issush += 1;
			return message.send(`Теперь у вас есть Иссушитель! ${smilesuccess}`);
		}
		
		if(rez == 20){
			message.user.creatures.gigant += 1;
			return message.send(`Теперь у вас есть Гигант! ${smilesuccess}`);
		}
		
 });
 
//////////////ДЛЯ АДМИНА/////////////

cmd.hear(/^(?:выдать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

if(!Number(message.args[2])) return;
message.args[2] = Math.floor(Number(message.args[2]));

if(message.args[2] <= 0) return;

{
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);


user.balance += message.args[2];


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$`);
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
Администратор выдал вам ${utils.sp(message.args[2])}$!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
}
});

cmd.hear(/^(?:removecoins)\s?([0-9]+)?/i, async (message, args, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'removecoins [ID]'`);
	user.balance = 50000;
	user.bank = 0;
	return message.send(`[💰] » Вы забрали все коины у игрока [@id${user.id}(${user.tag})]`);
});

cmd.hear(/^(?:бан)\s(.*)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);

{
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
	user.ban = true;
	saveUsers();
	await bot(`вы забанили игрока *id${user.id} (${user.tag}).`,);
	vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт был заблокирован. ⛔` });
}
});

cmd.hear(/^(?:разбан)\s(.*)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);

{
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
	user.ban = false;
	saveUsers();
	await bot(`вы разбанили игрока *id${user.id} (${user.tag}).`);
	vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт был разблокирован.` });
}
});

cmd.hear(/^(?:банпередачи)\s(.*)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);

{
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
	user.settings.trade = false;
	saveUsers();
	await bot(`Вы установили бан передачи *id${user.id} (${user.tag}).`,);
	vk.api.messages.send({ user_id: user.id, message: `Вам был установлен бан передачи ⛔` });
}
});

cmd.hear(/^(?:разбанпередачи)\s(.*)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);

{
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
	user.settings.trade = true;
	saveUsers();
	await bot(`Вы убрали бан передачи *id${user.id} (${user.tag}).`);
	vk.api.messages.send({ user_id: user.id, message: `Разблокирована передача` });
}
});

cmd.hear(/^all\s([^]+)/i, async (message, args, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);
	if(!message.args[1]) return message.send(`[🚀] » Введите текст рассылки`)
      let i = config;

		for(x in i.full){if(!i.full[id]) return;}
		for(i=0;i<20000;i++){
			if(users[i]){
				vk.api.call("messages.send", {
					peer_id: users[i].id,
					message: `[🚀] » Обьявление от @id${message.user.id}(${message.user.tag}) \n💎${message.args[1]}💎`
				})
			}
		}
	});

cmd.hear(/^(?:!пострассылка)\s([^]+)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);
 			 users.filter(x=> x.id !== 1).map(zz => {
  vk.api.messages.send({ user_id: zz.id, message: `[👮] ⇢ Быстро посмотрел запись:`, attachment: `${message.args[1]}`});
 });
 			let people = 0;
        for(let id in users) {
            vk.api.call('messages.send', {
             chat_id: id,
              message: `[👮] ⇢ Быстро посмотрел запись:`,
              attachment: `${message.args[1]}` });
        }
        return message.send(`[🚀] || Я успешно сделал рассылку!`);

});


cmd.hear(/^(?:get)\s([0-9]+)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);
	if(message.args[1] == 176 && message.args[1] == 27);
	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
			let text = ``;
	text += `📕 Информация об игроке\n`;
	text += `⠀⠀[🌍] » Игровой айди: ${user.uid}\n`;
	text += `⠀⠀[🔗] » Ссылка:  vk.com/id${user.id}\n`;
	text += `⠀⠀[👤] » Герой: ${user.hero_name}\n`;
	text += `⠀⠀[❤] » Здоровье: ${user.hero_hp}%\n`;
	text += `⠀⠀[🛡] » Защита: ${user.hero_zashita}%\n`;
	text += `⠀⠀[💣] » Атака: ${user.hero_ataka}%\n`;
	text += `⠀⠀[🔪] » Критический урон: ${user.hero_kr_udar}%\n`;
	
	if(user.misc.shmot) text += `⠀⠀[👕] » Одежда: ${shmot[user.misc.shmot - 1].name}\n`;
	if(!user.misc.shmot) text += `⠀⠀[👕] » Одежда: нет\n`;
	text += `⠀⠀[💳] » В банке: ${utils.sp(user.bank)}$\n`;
	text += `⠀⠀[💰] » Денег: ${utils.sp(user.balance)}$\n`;
	if(user.zhelezo) text += `⠀⠀[🎛] » Железо: ${user.zhelezo}\n`;
	if(user.zoloto) text += `⠀⠀[🏵] » Золото: ${user.zoloto}\n`;
	if(user.almaz) text += `⠀⠀[💎] » Алмазы: ${user.almaz}\n`;
	if(user.meteorit) text += `⠀⠀[☄] » Метеориты: ${user.meteorit}\n`;
	text += `⠀⠀[💽] » Биткоинов: ${utils.sp(user.btc)}฿\n`;
	text += `⠀⠀[👑] » Рейтинг: ${utils.sp(user.rating)} 👑\n`;;
	text += `⠀⠀[🔱] » Рубины: ${utils.sp(user.rubins)} 🔱\n`;
	text += `⠀⠀[🎀] » Уровень: [${user.exp}/24]\n`;
	if(user.work) text += `⠀⠀[👔] » Работа: ${works[user.work - 1].name}\n`;

	if(user.transport.car || user.transport.moto || user.transport.airplane || user.transport.yachts || user.misc.farm || user.business ||
		user.misc.phone || user.misc.dino || user.misc.phone || user.realty.home || user.realty.apartment || user.realty.garage ||  user.number)
	{
		text += `\n [🍀] Имущество:\n`;

		if(user.transport.car) text += `⠀⠀🚗Машина: ${cars[user.transport.car - 1].name}\n`;
	if(user.transport.moto) text += `⠀⠀🏍Мотоцикл: ${moto[user.transport.moto - 1].name}\n`;
	if(user.transport.yacht) text += `⠀⠀🛥Яхта: ${yachts[user.transport.yacht - 1].name}\n`;
	if(user.transport.airplane) text += `⠀⠀🛩Самолёт: ${airplanes[user.transport.airplane - 1].name}\n`;
	if(user.transport.helicopter) text += `⠀⠀🚁Вертолёт: ${helicopters[user.transport.helicopter - 1].name}\n`;
	if(user.misc.phone) text += `⠀⠀📱Телефон: ${phones[user.misc.phone - 1].name}\n`;
	if(user.misc.pristavk) text += `⠀⠀🕹Приставка: ${pristavk[user.misc.pristavk - 1].name}\n`;
	if(user.realty.home) text += `⠀⠀🏠Дом: ${homes[user.realty.home - 1].name}\n`;
	if(user.realty.apartment) text += `⠀⠀🌇Квартира: ${apartments[user.realty.apartment - 1].name}\n`;
	if(user.realty.garage) text += `⠀⠀🏚Гараж: ${garage[user.realty.garage - 1].name}\n`;
	if(user.misc.dino) text += `⠀⠀🐉Динозавр: ${dino[user.misc.dino - 1].name} ${user.misc.lvl}lvl\n`;
	if(user.misc.farm) text += `⠀⠀🔋Фермы: ${farms[user.misc.farm - 1].name} (x${user.farms})\n`;
	if(user.business) text += `⠀⠀${businesses[user.business - 1].icon}Бизнес: ${businesses[user.business - 1].name} ${user.bizlvl}lvl\n`;
	if(user.misc.pet) text += `⠀⠀${pets[user.misc.pet - 1].icon}Питомец: ${pets[user.misc.pet - 1].name} ${user.pet.lvl}lvl\n`;}
		if(user.business.length != 0)
		{
			for(var i = 0; i < user.business.length; i++)
			{
				text += `⠀${ businesses[user.business[i].id - 1][user.business[i].upgrade - 1].icon } ${businesses[user.business[i].id - 1][user.business[i].upgrade - 1].name}\n`;
			}
		}
		
	text +=`
	[📕] Название: ${user.nuk_kanal}
⠀⠀📺 Тематика: ${user.tematika}
⠀⠀😻 Подписчиков: ${utils.sp(user.sub)}	
⠀⠀🚫 Хейтеров: ${utils.sp(user.heteri)}	
⠀⠀👁 Просмотров: ${utils.sp(user.sm)}	
⠀⠀👍 Лайков: ${utils.sp(user.like)}	
⠀⠀👎 Дизлайков: ${utils.sp(user.dislike)}	
⠀⠀💬 Комментариев: ${utils.sp(user.comment)}	
⠀⠀🎥 Роликов: ${utils.sp(user.videos)}	
⠀⠀💎 Кнопка: ${user.but}\n`

	text +=`\n [👾] Существа:
⠀⠀🦄 Единирог ${user.creatures.unicorn}x [обычная] 
⠀⠀🦍 Кин-Конг  ${user.creatures.kinkong}x [редкая]
⠀⠀🦈 Мегалодон ${user.creatures.megalodon}x [редкая]
⠀⠀👿 Гоблин ${user.creatures.goblin}x [обычная]	
⠀⠀🐙 Медуза ${user.creatures.medusha}x [обычная]
⠀⠀🤖 Голем ${user.creatures.goblin}x [редкая]
⠀⠀🦖 Годзилла ${user.creatures.godzila}x [редкая]
⠀⠀🦁 Химера ${user.creatures.himera}x [обычная]	
⠀⠀🐬 Дельфин ${user.creatures.delfin}x [редкая]	
⠀⠀🦑 Ктулху ${user.creatures.ktylhy}x [магическая]	
⠀⠀🦅 Трехглавый орёл ${user.creatures.orel}x [редкая]	
⠀⠀🐎 Минотавр ${user.creatures.minotavr}x [легендарная]
⠀⠀🦅 Грифон ${user.creatures.grifon}x [обычная]	
⠀⠀🐢 Черепаха ${user.creatures.turtle}x [магическая]
⠀⠀🦎 Саламандра ${user.creatures.salamandra}x [редкая]	
⠀⠀🕷 Акромантул ${user.creatures.akromanryl}x [легендарная]	
⠀⠀👻 Призрак ${user.creatures.ghost}x [обычная]
⠀⠀🐙 Кракен ${user.creatures.kraken}x [легендарная]
⠀⠀👻 Иссушитель ${user.creatures.issush}x [магическая]
⠀⠀🔩 Гигант ${user.creatures.gigant}x [легендарная]:	\n`
		
	if(user.foolder) text += `\n [✉] Использовано команд: ${user.foolder}\n`;
	text += `[🔥] Аккаунт заблокирован: ${user.ban ? "Да" : "Нет"}`
	text += `\n[🔥] Уведомления: ${user.notifications ? "Включены" : "Выключены"}`
	text += ("\n[📗] Дата регистрации: " + (user.regDate));
	return bot(`профиль игрока:\n${text}`);
});

cmd.hear(/^(?:warn)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!message.args[1] || !message.args[2]) return message.send(`[🚀] » Пример команды: warn [ID] [ПРИЧИНА]`);
		if(!Number(message.args[1])) return message.send(`[🚀] » Число должно быть цифрового вида.`);
		if(!users[message.args[1]]) return message.send(`[❎] » Такого игрока нет!`);

		users[message.args[1]].warn += 1;
        users[message.args[1]].warn_p = `${message.args[2]}`;

		let text = `[🚀] » [${message.user.tag}] выдал вам предупреждение по причине: [${message.args[2]}]\n
		После 3 предупреждений - бан`
		if(users[message.args[1]].warn == 3){
			users[message.args[1]].warn = 0;
			users[message.args[1]].ban = true;
			text += `\n[🚀] » У вас 3 предупреждения.\n🔸 » Ваш аккаунт заблокирован.`
		}
		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
			message: text
		});
		return message.send(`[🚀] » Вы выдали предупреждение игроку [${users[message.args[1]].tag}].\n[🚀] По причине: [${message.args[2]}]`);
	});

cmd.hear(/^(?:giverating)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);
	let user = users.find(x=> x.uid === Number(message.args[1]));
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if(message.user.adm < 3) return message.send(`[🚀] » Доступно с привилегии - Хэлпер `);
	if(!message.args[1] || !users[message.args[1]] || !message.args[2] || message.args[2] < 0) return message.send(`[💰] » Пример: 'giverating [ID] [COUNT]'`);
	users[message.args[1]].rating += Number(message.args[2]);

	return message.send(`[💰] » Вы выдали игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})] ${utils.sp(message.args[2])} рейтинг`);
});


cmd.hear(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;

	vk.api.messages.send({ user_id: user.id, message: `✉ Сообщение от администратора:

	${message.args[2]}` });
});

cmd.hear(/^(?:рассылка)\s([^]+)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);
users.filter(x=> x.id !== 1).map(zz => {
vk.api.messages.send({ user_id: zz.id, message: `${message.args[1]}`});
});
let people = 0;
bot(`рассылка отправлена!`);
for(let id in users) {
vk.api.call('messages.send', {
chat_id: id,
message: `${message.args[1]}` });
}
return;
});

cmd.hear(/^(?:restart)$/i, async (message, bot) => {
	if(message.user.settings.adm < 2) return;
	await bot(`бот уходит в перезагрузку.`);

	await saveUsers();
	process.exit(-1);
	console.log("node app")
});

cmd.hear(/^(?:промо)\s([0-9]+)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);
config.promovalue = Number(message.args[1]);
saveConfig();
return bot(`Сумма промокода: ${config.promovalue}. ${smilesuccess}`);

});

cmd.hear(/^(?:промо лимит)\s([0-9]+)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);
config.promolimit = Number(message.args[1]);
saveConfig();
return bot(`Лимит использований промокода: ${config.promolimit}. ${smilesuccess}`);

});

cmd.hear(/^(?:промо вкл)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return;

clearPromo();
return bot(`промокод включен! ${smilesuccess}`);

});

cmd.hear(/^(?:промо тип btc)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return;
config.promotip = "btc";
saveConfig();
return bot(`тип промокода: Bitcoin. ${smilesuccess}`);

});

cmd.hear(/^(?:промо тип баланс)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return;
config.promotip = "balance";
saveConfig();
return bot(`тип промокода: Баланс. ${smilesuccess}`);
});

cmd.hear(/^(?:панель)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return message.send(`[🚀] » Доступно только админу `);

return bot(`
1⃣ Выдать [id] [$]
2⃣ Removecoins [id]
3⃣ Бан/Разбан [id]
4⃣ Банпередачи/Разбанпередачи [id]
5⃣ All [txt]
6⃣ !пострассылка [link]
7⃣ get [id]
8⃣ warn [id] [причина]
9⃣ giverating 
1⃣0⃣ Рассылка [txt]
1⃣1⃣ Промо [$]
1⃣2⃣ Промо лимит [0-9]
1⃣3⃣ Промо тип баланс/btc
1⃣4⃣ Промо вкл
1⃣5⃣ Restart
`);
});