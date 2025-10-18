const WILAYAS = [
	{
		id: '1',
		code: '1',
		name: 'Adrar',
		ar_name: 'أدرار',
		longitude: '27.9766155',
		latitude: '-0.20396'
	},
	{
		id: '2',
		code: '2',
		name: 'Chlef',
		ar_name: 'الشلف',
		longitude: '36.1691245',
		latitude: '1.3539002'
	},
	{
		id: '3',
		code: '3',
		name: 'Laghouat',
		ar_name: 'الأغواط',
		longitude: '33.7873735',
		latitude: '2.8829115'
	},
	{
		id: '4',
		code: '4',
		name: 'Oum El Bouaghi',
		ar_name: 'أم البواقي',
		longitude: '35.8726014',
		latitude: '7.1180248'
	},
	{
		id: '5',
		code: '5',
		name: 'Batna',
		ar_name: 'باتنة',
		longitude: '35.32147',
		latitude: '3.1066502'
	},
	{
		id: '6',
		code: '6',
		name: 'Béjaïa',
		ar_name: 'بجاية',
		longitude: '36.7695969',
		latitude: '5.0085855'
	},
	{
		id: '7',
		code: '7',
		name: 'Biskra',
		ar_name: 'بسكرة',
		longitude: '34.8515041',
		latitude: '5.7246709'
	},
	{
		id: '8',
		code: '8',
		name: 'Bechar',
		ar_name: 'بشار',
		longitude: '31.5977602',
		latitude: '-1.8540446'
	},
	{
		id: '9',
		code: '9',
		name: 'Blida',
		ar_name: 'البليدة',
		longitude: '36.4803023',
		latitude: '2.8009379'
	},
	{
		id: '10',
		code: '10',
		name: 'Bouira',
		ar_name: 'البويرة',
		longitude: '36.2084234',
		latitude: '3.925049'
	},
	{
		id: '11',
		code: '11',
		name: 'Tamanrasset',
		ar_name: 'تمنراست',
		longitude: '22.2746227',
		latitude: '5.6754684'
	},
	{
		id: '12',
		code: '12',
		name: 'Tbessa',
		ar_name: 'تبسة',
		longitude: '35.4117259',
		latitude: '8.110545'
	},
	{
		id: '13',
		code: '13',
		name: 'Tlemcen',
		ar_name: 'تلمسان',
		longitude: '34.8959541',
		latitude: '-1.3150979'
	},
	{
		id: '14',
		code: '14',
		name: 'Tiaret',
		ar_name: 'تيارت',
		longitude: '35.3599899',
		latitude: '1.3916159'
	},
	{
		id: '15',
		code: '15',
		name: 'Tizi Ouzou',
		ar_name: 'تيزي وزو',
		longitude: '36.7002068',
		latitude: '4.075957'
	},
	{
		id: '16',
		code: '16',
		name: 'Alger',
		ar_name: 'الجزائر',
		longitude: '36.7538259',
		latitude: '3.057841'
	},
	{
		id: '17',
		code: '17',
		name: 'Djelfa',
		ar_name: 'الجلفة',
		longitude: '34.6672467',
		latitude: '3.2993118'
	},
	{
		id: '18',
		code: '18',
		name: 'Jijel',
		ar_name: 'جيجل',
		longitude: '36.7962714',
		latitude: '5.7504845'
	},
	{
		id: '19',
		code: '19',
		name: 'Se9tif',
		ar_name: 'سطيف',
		longitude: '36.1905173',
		latitude: '5.4202134'
	},
	{
		id: '20',
		code: '20',
		name: 'Saefda',
		ar_name: 'سعيدة',
		longitude: '34.841945',
		latitude: '0.1483583'
	},
	{
		id: '21',
		code: '21',
		name: 'Skikda',
		ar_name: 'سكيكدة',
		longitude: '36.8777912',
		latitude: '6.9357204'
	},
	{
		id: '22',
		code: '22',
		name: 'Sidi Bel Abbes',
		ar_name: 'سيدي بلعباس',
		longitude: '35.206334',
		latitude: '-0.6301368'
	},
	{
		id: '23',
		code: '23',
		name: 'Annaba',
		ar_name: 'عنابة',
		longitude: '36.9184345',
		latitude: '7.7452755'
	},
	{
		id: '24',
		code: '24',
		name: 'Guelma',
		ar_name: 'قالمة',
		longitude: '36.4569088',
		latitude: '7.4334312'
	},
	{
		id: '25',
		code: '25',
		name: 'Constantine',
		ar_name: 'قسنطينة',
		longitude: '36.319475',
		latitude: '6.7370571'
	},
	{
		id: '26',
		code: '26',
		name: 'Medea',
		ar_name: 'المدية',
		longitude: '36.2838408',
		latitude: '2.7728462'
	},
	{
		id: '27',
		code: '27',
		name: 'Mostaganem',
		ar_name: 'مستغانم',
		longitude: '35.9751841',
		latitude: '0.1149273'
	},
	{
		id: '28',
		code: '28',
		name: "M'Sila",
		ar_name: 'المسيلة',
		longitude: '35.7211476',
		latitude: '4.5187283'
	},
	{
		id: '29',
		code: '29',
		name: 'Mascara',
		ar_name: 'معسكر',
		longitude: '35.382998',
		latitude: '0.1542592'
	},
	{
		id: '30',
		code: '30',
		name: 'Ouargla',
		ar_name: 'ورقلة',
		longitude: '32.1961967',
		latitude: '4.9634113'
	},
	{
		id: '31',
		code: '31',
		name: 'Oran',
		ar_name: 'وهران',
		longitude: '35.7066928',
		latitude: '-0.6405861'
	},
	{
		id: '32',
		code: '32',
		name: 'El Bayadh',
		ar_name: 'البيض',
		longitude: '32.5722756',
		latitude: '0.950011'
	},
	{
		id: '33',
		code: '33',
		name: 'Illizi',
		ar_name: 'إليزي',
		longitude: '26.5065999',
		latitude: '8.480587'
	},
	{
		id: '34',
		code: '34',
		name: 'Bordj Bou Arreridj',
		ar_name: 'برج بوعريريج',
		longitude: '36.0686488',
		latitude: '4.7691823'
	},
	{
		id: '35',
		code: '35',
		name: 'Boumerdes',
		ar_name: 'بومرداس',
		longitude: '36.7564181',
		latitude: '3.4917212'
	},
	{
		id: '36',
		code: '36',
		name: 'El Tarf',
		ar_name: 'الطارف',
		longitude: '36.7534258',
		latitude: '8.2984543'
	},
	{
		id: '37',
		code: '37',
		name: 'Tindouf',
		ar_name: 'تندوف',
		longitude: '27.2460501',
		latitude: '-6.3252899'
	},
	{
		id: '38',
		code: '38',
		name: 'Tissemsilt',
		ar_name: 'تيسمسيلت',
		longitude: '35.6021906',
		latitude: '1.802187'
	},
	{
		id: '39',
		code: '39',
		name: 'El Oued',
		ar_name: 'الوادي',
		longitude: '33.3714492',
		latitude: '6.8573436'
	},
	{
		id: '40',
		code: '40',
		name: 'Khenchela',
		ar_name: 'خنشلة',
		longitude: '35.4263293',
		latitude: '7.1414137'
	},
	{
		id: '41',
		code: '41',
		name: 'Souk Ahras',
		ar_name: 'سوق أهراس',
		longitude: '36.277849',
		latitude: '7.9592299'
	},
	{
		id: '42',
		code: '42',
		name: 'Tipaza',
		ar_name: 'تيبازة',
		longitude: '36.5980966',
		latitude: '2.4085379'
	},
	{
		id: '43',
		code: '43',
		name: 'Mila',
		ar_name: 'ميلة',
		longitude: '36.4514882',
		latitude: '6.2487316'
	},
	{
		id: '44',
		code: '44',
		name: 'Ain Defla',
		ar_name: 'عين الدفلى',
		longitude: '36.1283915',
		latitude: '2.1772514'
	},
	{
		id: '45',
		code: '45',
		name: 'Naama',
		ar_name: 'النعامة',
		longitude: '33.1995605',
		latitude: '-0.8021968'
	},
	{
		id: '46',
		code: '46',
		name: 'Ain Temouchent',
		ar_name: 'عين تموشنت',
		longitude: '35.404044',
		latitude: '-1.0580975'
	},
	{
		id: '47',
		code: '47',
		name: 'Ghardaefa',
		ar_name: 'غرداية',
		longitude: '32.5891743',
		latitude: '3.7455655'
	},
	{
		id: '48',
		code: '48',
		name: 'Relizane',
		ar_name: 'غليزان',
		longitude: '35.8050195',
		latitude: '0.867381'
	},
	{
		id: '49',
		code: '49',
		name: "El M'ghair",
		ar_name: 'المغير',
		longitude: '33.947222',
		latitude: '5.922222'
	},
	{
		id: '50',
		code: '50',
		name: 'El Menia',
		ar_name: 'المنيعة',
		longitude: '30.579167',
		latitude: '2.879167'
	},
	{
		id: '51',
		code: '51',
		name: 'Ouled Djellal',
		ar_name: 'أولاد جلال',
		longitude: '34.433333',
		latitude: '5.066667'
	},
	{
		id: '52',
		code: '52',
		name: 'Bordj Baji Mokhtar',
		ar_name: 'برج باجي مختار',
		longitude: '21.327778',
		latitude: '0.955556'
	},
	{
		id: '53',
		code: '53',
		name: 'Béni Abbès',
		ar_name: 'بني عباس',
		longitude: '30.133333',
		latitude: '-2.166667'
	},
	{
		id: '54',
		code: '54',
		name: 'Timimoun',
		ar_name: 'تيميمون',
		longitude: '29.258333',
		latitude: '0.230556'
	},
	{
		id: '55',
		code: '55',
		name: 'Touggourt',
		ar_name: 'تقرت',
		longitude: '33.108333',
		latitude: '6.063889'
	},
	{
		id: '56',
		code: '56',
		name: 'Djanet',
		ar_name: 'جانت',
		longitude: '24.554167',
		latitude: '9.484722'
	},
	{
		id: '57',
		code: '57',
		name: 'In Salah',
		ar_name: 'عين صالح',
		longitude: '27.197222',
		latitude: '2.483333'
	},
	{
		id: '58',
		code: '58',
		name: 'In Guezzam',
		ar_name: 'عين قزام',
		longitude: '19.572222',
		latitude: '5.769444'
	}
];

const CITIES = [
	{
		_id: '101',
		name: 'Adrar',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '102',
		name: 'Tamest',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '104',
		name: 'Reggane',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '105',
		name: 'In Zghmir',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '106',
		name: 'Tit',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '108',
		name: 'Tsabit',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '111',
		name: 'Zaouiet Kounta',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '112',
		name: 'Aoulef',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '113',
		name: 'Tamekten',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '114',
		name: 'Tamantit',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '115',
		name: 'Fenoughil',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '118',
		name: 'Sali',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '119',
		name: 'Akabli',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '121',
		name: 'Ouled Ahmed Tammi',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '122',
		name: 'Bouda',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '126',
		name: 'Sebaa',
		wilaya_link: '1',
		wilaya_name: 'Adrar',
		wilaya: '1'
	},
	{
		_id: '201',
		name: 'Abou El Hassan',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '202',
		name: 'Aïn Merane',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '203',
		name: 'Bénairia',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '204',
		name: 'Beni Bouateb',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '205',
		name: 'Beni Haoua',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '206',
		name: 'Beni Rached',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '207',
		name: 'Boukadir',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '208',
		name: 'Bouzeghaia',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '209',
		name: 'Breira',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '210',
		name: 'Chettia',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '211',
		name: 'Chlef',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '212',
		name: 'Dahra',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '213',
		name: 'El Hadjadj',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '214',
		name: 'El Karimia',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '215',
		name: 'El Marsa',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '216',
		name: 'Harchoun',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '217',
		name: 'Harenfa',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '218',
		name: 'Labiod Medjadja',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '219',
		name: 'Moussadek',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '220',
		name: 'Oued Fodda',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '221',
		name: 'Oued Goussine',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '222',
		name: 'Oued Sly',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '223',
		name: 'Ouled Abbes',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '224',
		name: 'Ouled Ben Abdelkader',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '225',
		name: 'Ouled Fares',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '226',
		name: 'Oum Drou',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '227',
		name: 'Sendjas',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '228',
		name: 'Sidi Abderrahmane',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '229',
		name: 'Sidi Akkacha',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '230',
		name: 'Sobha',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '231',
		name: 'Tadjena',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '232',
		name: 'Talassa',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '233',
		name: 'Taougrite',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '234',
		name: 'Ténès',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '235',
		name: 'Zeboudja',
		wilaya_link: '2',
		wilaya_name: 'Chlef',
		wilaya: '2'
	},
	{
		_id: '301',
		name: 'Laghouat',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '302',
		name: 'Ksar El Hirane',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '303',
		name: 'Bennasser Benchohra',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '304',
		name: 'Sidi Makhlouf',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '305',
		name: 'Hassi Delaa',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '306',
		name: "Hassi R'Mel",
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '307',
		name: 'Aïn Madhi',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '308',
		name: 'Tadjemout',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '309',
		name: 'Kheneg',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '310',
		name: 'Gueltat Sidi Saad',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '311',
		name: 'Aïn Sidi Ali',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '312',
		name: 'Beidha',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '313',
		name: 'Brida',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '314',
		name: 'El Ghicha',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '315',
		name: 'Hadj Mechri',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '316',
		name: 'Sebgag',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '317',
		name: 'Taouiala',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '318',
		name: 'Tadjrouna',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '319',
		name: 'Aflou',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '320',
		name: 'El Assafia',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '321',
		name: 'Oued Morra',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '322',
		name: "Oued M'Zi",
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '323',
		name: 'El Houaita',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '324',
		name: 'Sidi Bouzid',
		wilaya_link: '3',
		wilaya_name: 'Laghouat',
		wilaya: '3'
	},
	{
		_id: '401',
		name: 'Oum el Bouaghi',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '402',
		name: 'Aïn Beïda',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '403',
		name: "Aïn M'lila",
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '404',
		name: 'Behir Chergui',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '405',
		name: 'El Amiria',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '406',
		name: 'Sigus',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '407',
		name: 'El Belala',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '408',
		name: 'Aïn Babouche',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '409',
		name: 'Berriche',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '410',
		name: 'Ouled Hamla',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '411',
		name: 'Dhalaa',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '412',
		name: 'Aïn Kercha',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '413',
		name: 'Hanchir Toumghani',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '414',
		name: 'El Djazia',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '415',
		name: 'Aïn Diss',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '416',
		name: 'Fkirina',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '417',
		name: 'Souk Naamane',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '418',
		name: 'Zorg',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '419',
		name: 'El Fedjoudj Boughrara Saoudi',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '420',
		name: 'Ouled Zouaï',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '421',
		name: 'Bir Chouhada',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '422',
		name: 'Ksar Sbahi',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '423',
		name: 'Oued Nini',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '424',
		name: 'Meskiana',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '425',
		name: 'Aïn Fakroun',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '426',
		name: 'Rahia',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '427',
		name: 'Aïn Zitoun',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '428',
		name: 'Ouled Gacem',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '429',
		name: 'El Harmilia',
		wilaya_link: '4',
		wilaya_name: 'Oum El Bouaghi',
		wilaya: '4'
	},
	{
		_id: '501',
		name: 'Batna',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '502',
		name: 'Ghassira',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '503',
		name: 'Maafa',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '504',
		name: 'Merouana',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '505',
		name: 'Seriana',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '506',
		name: 'Menaa',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '507',
		name: 'El Madher',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '508',
		name: 'Tazoult',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '509',
		name: "N'Gaous",
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '510',
		name: 'Guigba',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '511',
		name: 'Inoughissen',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '512',
		name: 'Ouyoun El Assafir',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '513',
		name: 'Djerma',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '514',
		name: 'Bitam',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '515',
		name: 'Abdelkader Azil',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '516',
		name: 'Arris',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '517',
		name: 'Kimmel',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '518',
		name: 'Tilatou',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '519',
		name: 'Aïn Djasser',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '520',
		name: 'Ouled Sellam',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '521',
		name: 'Tigherghar',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '522',
		name: 'Aïn Yagout',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '523',
		name: 'Fesdis',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '524',
		name: 'Sefiane',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '525',
		name: 'Rahbat',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '526',
		name: 'Tighanimine',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '527',
		name: 'Lemsane',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '528',
		name: 'Ksar Bellezma',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '529',
		name: 'Seggana',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '530',
		name: 'Ichmoul',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '531',
		name: 'Foum Toub',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '532',
		name: 'Ben Foudhala El Hakania',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '533',
		name: 'Oued El Ma',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '534',
		name: 'Talkhamt',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '535',
		name: 'Bouzina',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '536',
		name: 'Chemora',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '537',
		name: 'Oued Chaaba',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '538',
		name: 'Taxlent',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '539',
		name: 'Gosbat',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '540',
		name: 'Ouled Aouf',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '541',
		name: 'Boumagueur',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '542',
		name: 'Barika',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '543',
		name: 'Djezar',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '544',
		name: "T'Kout",
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '545',
		name: 'Aïn Touta',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '546',
		name: 'Hidoussa',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '547',
		name: 'Teniet El Abed',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '548',
		name: 'Oued Taga',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '549',
		name: 'Ouled Fadel',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '550',
		name: 'Timgad',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '551',
		name: 'Ras El Aioun',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '552',
		name: 'Chir',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '553',
		name: 'Ouled Si Slimane',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '554',
		name: 'Zanat El Beida',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '555',
		name: "M'doukel",
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '556',
		name: 'Ouled Ammar',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '557',
		name: 'El Hassi',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '558',
		name: 'Lazrou',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '559',
		name: 'Boumia (Batna)',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '560',
		name: 'Boulhilat',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '561',
		name: 'Larbaâ',
		wilaya_link: '5',
		wilaya_name: 'Batna',
		wilaya: '5'
	},
	{
		_id: '601',
		name: 'Béjaïa',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '602',
		name: 'Amizour',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '603',
		name: 'Ferraoun',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '604',
		name: 'Taourirt Ighil',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '605',
		name: 'Chellata',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '606',
		name: 'Tamokra',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '607',
		name: 'Timezrit',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '608',
		name: 'Souk El Ténine',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '609',
		name: "M'cisna",
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '610',
		name: 'Tinabdher',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '611',
		name: 'Tichy',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '612',
		name: 'Semaoun',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '613',
		name: 'Kendira',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '614',
		name: 'Tifra',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '615',
		name: 'Ighram',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '616',
		name: 'Amalou',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '617',
		name: 'Ighil Ali',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '618',
		name: 'Fenaïa Ilmaten',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '619',
		name: 'Toudja',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '620',
		name: 'Darguina',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '621',
		name: 'Sidi Ayad',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '622',
		name: 'Aokas',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '623',
		name: 'Ait Djellil',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '624',
		name: 'Adekar',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '625',
		name: 'Akbou',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '626',
		name: 'Seddouk',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '627',
		name: 'Tazmalt',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '628',
		name: "Aït R'zine",
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '629',
		name: 'Chemini',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '630',
		name: 'Souk Oufella',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '631',
		name: 'Tibane',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '632',
		name: 'Tala Hamza',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '633',
		name: 'Barbacha',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '634',
		name: 'Aït Ksila',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '635',
		name: 'Ouzellaguen',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '636',
		name: 'Bouhamza',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '637',
		name: 'Taskriout',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '638',
		name: 'Aït Mellikeche',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '639',
		name: 'Sidi Aïch',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '640',
		name: 'El Kseur',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '641',
		name: 'Melbou',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '642',
		name: 'Akfadou',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '643',
		name: 'Leflaye',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '644',
		name: 'Kherrata',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '645',
		name: 'Draâ El Kaïd',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '646',
		name: 'Tamridjet',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '647',
		name: 'Aït Smail',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '648',
		name: 'Boukhelifa',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '649',
		name: "Tizi N'Berber",
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '650',
		name: 'Aït Maouche',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '651',
		name: 'Oued Ghir',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '652',
		name: 'Boudjellil',
		wilaya_link: '6',
		wilaya_name: 'Béjaïa',
		wilaya: '6'
	},
	{
		_id: '701',
		name: 'Aïn Naga',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '702',
		name: 'Aïn Zaatout',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '704',
		name: 'Biskra',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '705',
		name: 'Bordj Ben Azzouz',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '706',
		name: 'Bouchagroune',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '707',
		name: 'Branis',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '708',
		name: 'Chetma',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '709',
		name: 'Djemorah',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '712',
		name: 'El Feidh',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '713',
		name: 'El Ghrous',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '714',
		name: 'El Hadjeb',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '715',
		name: 'El Haouch',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '716',
		name: 'El Kantara',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '717',
		name: 'El Mizaraa',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '718',
		name: 'El Outaya',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '719',
		name: 'Foughala',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '720',
		name: 'Khenguet Sidi Nadji',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '721',
		name: 'Lichana',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '722',
		name: 'Lioua',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '723',
		name: "M'Chouneche",
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '724',
		name: 'Mekhadma',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '725',
		name: "M'Lili",
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '727',
		name: 'Oumache',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '728',
		name: 'Ourlal',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '731',
		name: 'Sidi Okba',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '732',
		name: 'Tolga',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '733',
		name: 'Zeribet El Oued',
		wilaya_link: '7',
		wilaya_name: 'Biskra',
		wilaya: '7'
	},
	{
		_id: '801',
		name: 'Béchar',
		wilaya_link: '8',
		wilaya_name: 'Béchar',
		wilaya: '8'
	},
	{
		_id: '802',
		name: 'Erg Ferradj',
		wilaya_link: '8',
		wilaya_name: 'Béchar',
		wilaya: '8'
	},
	{
		_id: '804',
		name: 'Meridja',
		wilaya_link: '8',
		wilaya_name: 'Béchar',
		wilaya: '8'
	},
	{
		_id: '806',
		name: 'Lahmar',
		wilaya_link: '8',
		wilaya_name: 'Béchar',
		wilaya: '8'
	},
	{
		_id: '809',
		name: 'Mechraa Houari Boumedienne',
		wilaya_link: '8',
		wilaya_name: 'Béchar',
		wilaya: '8'
	},
	{
		_id: '810',
		name: 'Kenadsa',
		wilaya_link: '8',
		wilaya_name: 'Béchar',
		wilaya: '8'
	},
	{
		_id: '813',
		name: 'Taghit',
		wilaya_link: '8',
		wilaya_name: 'Béchar',
		wilaya: '8'
	},
	{
		_id: '815',
		name: 'Boukais',
		wilaya_link: '8',
		wilaya_name: 'Béchar',
		wilaya: '8'
	},
	{
		_id: '816',
		name: 'Mougheul',
		wilaya_link: '8',
		wilaya_name: 'Béchar',
		wilaya: '8'
	},
	{
		_id: '817',
		name: 'Abadla',
		wilaya_link: '8',
		wilaya_name: 'Béchar',
		wilaya: '8'
	},
	{
		_id: '821',
		name: 'Beni Ounif',
		wilaya_link: '8',
		wilaya_name: 'Béchar',
		wilaya: '8'
	},
	{
		_id: '901',
		name: 'Blida',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '902',
		name: 'Chebli',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '903',
		name: 'Bouinan',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '904',
		name: 'Oued Alleug',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '907',
		name: 'Ouled Yaïch',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '908',
		name: 'Chréa',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '910',
		name: 'El Affroun',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '911',
		name: 'Chiffa',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '912',
		name: 'Hammam Melouane',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '913',
		name: 'Benkhelil',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '914',
		name: 'Soumaa',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '916',
		name: 'Mouzaia',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '917',
		name: 'Souhane',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '918',
		name: 'Meftah',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '919',
		name: 'Ouled Slama',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '920',
		name: 'Boufarik',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '921',
		name: 'Larbaa',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '922',
		name: 'Oued Djer',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '923',
		name: 'Beni Tamou',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '924',
		name: 'Bouarfa',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '925',
		name: 'Beni Mered',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '926',
		name: 'Bougara',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '927',
		name: 'Guerouaou',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '928',
		name: 'Aïn Romana',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '929',
		name: 'Djebabra',
		wilaya_link: '9',
		wilaya_name: 'Blida',
		wilaya: '9'
	},
	{
		_id: '1001',
		name: 'Aïn Bessem',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1002',
		name: 'Hanif',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1003',
		name: 'Aghbalou',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1004',
		name: 'Aïn El Hadjar',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1005',
		name: 'Ahl El Ksar',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1006',
		name: 'Aïn Laloui',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1007',
		name: 'Ath Mansour',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1008',
		name: 'Aomar',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1009',
		name: 'Aïn El Turc',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1010',
		name: 'Aït Laziz',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1011',
		name: 'Bouderbala',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1012',
		name: 'Bechloul',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1013',
		name: 'Bir Ghbalou',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1014',
		name: 'Boukram',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1015',
		name: 'Bordj Okhriss',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1016',
		name: 'Bouira',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1017',
		name: 'Chorfa',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1018',
		name: 'Dechmia',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1019',
		name: 'Dirrah',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1020',
		name: 'Djebahia',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1021',
		name: 'El Hakimia',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1022',
		name: 'El Hachimia',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1023',
		name: 'El Adjiba',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1024',
		name: 'El Khabouzia',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1025',
		name: 'El Mokrani',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1026',
		name: 'El Asnam',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1027',
		name: 'Guerrouma',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1028',
		name: 'Haizer',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1029',
		name: 'Hadjera Zerga',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1030',
		name: 'Kadiria',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1031',
		name: 'Lakhdaria',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1032',
		name: "M'Chedallah",
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1033',
		name: 'Mezdour',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1034',
		name: 'Maala',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1035',
		name: 'Maamora',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1036',
		name: 'Oued El Berdi',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1037',
		name: 'Ouled Rached',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1038',
		name: 'Raouraoua',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1039',
		name: 'Ridane',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1040',
		name: 'Saharidj',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1041',
		name: 'Sour El Ghouzlane',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1042',
		name: 'Souk El Khemis',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1043',
		name: 'Taguedit',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1044',
		name: 'Taghzout',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1045',
		name: 'Zbarbar',
		wilaya_link: '10',
		wilaya_name: 'Bouira',
		wilaya: '10'
	},
	{
		_id: '1101',
		name: 'Tamanrasset',
		wilaya_link: '11',
		wilaya_name: 'Tamanrasset',
		wilaya: '11'
	},
	{
		_id: '1102',
		name: 'Abalessa',
		wilaya_link: '11',
		wilaya_name: 'Tamanrasset',
		wilaya: '11'
	},
	{
		_id: '1105',
		name: 'Idles',
		wilaya_link: '11',
		wilaya_name: 'Tamanrasset',
		wilaya: '11'
	},
	{
		_id: '1106',
		name: 'Tazrouk',
		wilaya_link: '11',
		wilaya_name: 'Tamanrasset',
		wilaya: '11'
	},
	{
		_id: '1109',
		name: 'In Amguel',
		wilaya_link: '11',
		wilaya_name: 'Tamanrasset',
		wilaya: '11'
	},
	{
		_id: '1201',
		name: 'Tébessa',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1202',
		name: 'Bir el Ater',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1203',
		name: 'Cheria',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1204',
		name: 'Stah Guentis',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1205',
		name: 'El Aouinet',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1206',
		name: 'El Houidjbet',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1207',
		name: 'Safsaf El Ouesra',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1208',
		name: 'Hammamet',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1209',
		name: 'Negrine',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1210',
		name: 'Bir Mokkadem',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1211',
		name: 'El Kouif',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1212',
		name: 'Morsott',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1213',
		name: 'El Ogla',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1214',
		name: 'Bir Dheb',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1215',
		name: 'Ogla Melha',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1216',
		name: 'Guorriguer',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1217',
		name: 'Bekkaria',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1218',
		name: 'Boukhadra',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1219',
		name: 'Ouenza',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1220',
		name: 'El Ma Labiodh',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1221',
		name: 'Oum Ali',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1222',
		name: 'Tlidjene',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1223',
		name: 'Aïn Zerga',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1224',
		name: 'El Meridj',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1225',
		name: 'Boulhaf Dir',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1226',
		name: 'Bedjene',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1227',
		name: 'El Mezeraa',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1228',
		name: 'Ferkane',
		wilaya_link: '12',
		wilaya_name: 'Tébessa',
		wilaya: '12'
	},
	{
		_id: '1301',
		name: 'Tlemcen',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1302',
		name: 'Beni Mester',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1303',
		name: 'Aïn Tallout',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1304',
		name: 'Remchi',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1305',
		name: 'El Fehoul',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1306',
		name: 'Sabra',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1307',
		name: 'Ghazaouet',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1308',
		name: 'Souani',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1309',
		name: 'Djebala',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1310',
		name: 'El Gor',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1311',
		name: 'Oued Lakhdar',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1312',
		name: 'Aïn Fezza',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1313',
		name: 'Ouled Mimoun',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1314',
		name: 'Amieur',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1315',
		name: 'Aïn Youcef',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1316',
		name: 'Zenata',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1317',
		name: 'Beni Snous',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1318',
		name: 'Bab El Assa',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1319',
		name: 'Dar Yaghmouracene',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1320',
		name: 'Fellaoucene',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1321',
		name: 'Azails',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1322',
		name: 'Sebaa Chioukh',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1323',
		name: 'Terny Beni Hdiel',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1324',
		name: 'Bensekrane',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1325',
		name: 'Aïn Nehala',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1326',
		name: 'Hennaya',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1327',
		name: 'Maghnia',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1328',
		name: 'Hammam Boughrara',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1329',
		name: 'Souahlia',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1330',
		name: 'MSirda Fouaga',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1331',
		name: 'Aïn Fetah',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1332',
		name: 'El Aricha',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1333',
		name: 'Souk Tlata',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1334',
		name: 'Sidi Abdelli',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1335',
		name: 'Sebdou',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1336',
		name: 'Beni Ouarsous',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1337',
		name: 'Sidi Medjahed',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1338',
		name: 'Beni Boussaid',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1339',
		name: "Marsa Ben M'Hidi",
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1340',
		name: 'Nedroma',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1341',
		name: 'Sidi Djillali',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1342',
		name: 'Beni Bahdel',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1343',
		name: 'El Bouihi',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1344',
		name: 'Honaïne',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1345',
		name: 'Tienet',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1346',
		name: 'Ouled Riyah',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1347',
		name: 'Bouhlou',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1348',
		name: 'Beni Khellad',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1349',
		name: 'Aïn Ghoraba',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1350',
		name: 'Chetouane',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1351',
		name: 'Mansourah',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1352',
		name: 'Beni Semiel',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1353',
		name: 'Aïn Kebira',
		wilaya_link: '13',
		wilaya_name: 'Tlemcen',
		wilaya: '13'
	},
	{
		_id: '1401',
		name: 'Aïn Bouchekif',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1402',
		name: 'Aïn Deheb',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1403',
		name: 'Aïn El Hadid',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1404',
		name: 'Aïn Kermes',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1405',
		name: 'Aïn Dzarit',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1406',
		name: 'Bougara',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1407',
		name: 'Chehaima',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1408',
		name: 'Dahmouni',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1409',
		name: 'Djebilet Rosfa',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1410',
		name: 'Djillali Ben Amar',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1411',
		name: 'Faidja',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1412',
		name: 'Frenda',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1413',
		name: 'Guertoufa',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1414',
		name: 'Hamadia',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1415',
		name: 'Ksar Chellala',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1416',
		name: 'Madna',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1417',
		name: 'Mahdia',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1418',
		name: 'Mechraa Safa',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1419',
		name: 'Medrissa',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1420',
		name: 'Medroussa',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1421',
		name: 'Meghila',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1422',
		name: 'Mellakou',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1423',
		name: 'Nadorah',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1424',
		name: 'Naima',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1425',
		name: 'Oued Lilli',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1426',
		name: 'Rahouia',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1427',
		name: 'Rechaiga',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1428',
		name: 'Sebaine',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1429',
		name: 'Sebt',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1430',
		name: 'Serghine',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1431',
		name: 'Si Abdelghani',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1432',
		name: 'Sidi Abderahmane',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1433',
		name: 'Sidi Ali Mellal',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1434',
		name: 'Sidi Bakhti',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1435',
		name: 'Sidi Hosni',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1436',
		name: 'Sougueur',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1437',
		name: 'Tagdemt',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1438',
		name: 'Takhemaret',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1439',
		name: 'Tiaret',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1440',
		name: 'Tidda',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1441',
		name: 'Tousnina',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1442',
		name: 'Zmalet El Emir Abdelkader',
		wilaya_link: '14',
		wilaya_name: 'Tiaret',
		wilaya: '14'
	},
	{
		_id: '1501',
		name: 'Tizi Ouzou',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1502',
		name: 'Ain El Hammam',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1503',
		name: 'Akbil',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1504',
		name: 'Freha',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1505',
		name: 'Souamaâ',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1506',
		name: 'Mechtras',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1507',
		name: 'Irdjen',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1508',
		name: 'Timizart',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1509',
		name: 'Makouda',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1510',
		name: 'Draâ El Mizan',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1511',
		name: 'Tizi Gheniff',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1512',
		name: 'Bounouh',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1513',
		name: 'Aït Chafâa',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1514',
		name: 'Frikat',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1515',
		name: 'Beni Aïssi',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1516',
		name: 'Beni Zmenzer',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1517',
		name: 'Iferhounène',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1518',
		name: 'Azazga',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1519',
		name: 'Illoula Oumalou',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1520',
		name: 'Yakouren',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1521',
		name: 'Larbaâ Nath Irathen',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1522',
		name: 'Tizi Rached',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1523',
		name: 'Zekri',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1524',
		name: 'Ouaguenoun',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1525',
		name: 'Aïn Zaouia',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1526',
		name: "M'Kira",
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1527',
		name: 'Aït Yahia',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1528',
		name: 'Aït Mahmoud',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1529',
		name: 'Mâatkas',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1530',
		name: 'Aït Boumahdi',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1531',
		name: 'Abi Youcef',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1532',
		name: 'Beni Douala',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1533',
		name: 'Illilten',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1534',
		name: 'Bouzguen',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1535',
		name: 'Aït Aggouacha',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1536',
		name: 'Ouadhia',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1537',
		name: 'Azeffoun',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1538',
		name: 'Tigzirt',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1539',
		name: 'Aït Aïssa Mimoun',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1540',
		name: 'Boghni',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1541',
		name: 'Ifigha',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1542',
		name: 'Aït Oumalou',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1543',
		name: 'Tirmitine',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1544',
		name: 'Akerrou',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1545',
		name: 'Yatafen',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1546',
		name: 'Ath Zikki',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1547',
		name: 'Draâ Ben Khedda',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1548',
		name: 'Ouacif',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1549',
		name: 'Idjeur',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1550',
		name: 'Mekla',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1551',
		name: "Tizi N'Tleta",
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1552',
		name: 'Aït Yenni',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1553',
		name: 'Aghribs',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1554',
		name: 'Iflissen',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1555',
		name: 'Boudjima',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1556',
		name: 'Aït Yahia Moussa',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1557',
		name: 'Souk El Thenine',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1558',
		name: 'Aït Khellili',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1559',
		name: 'Sidi Namane',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1560',
		name: 'Iboudraren',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1561',
		name: 'Agouni Gueghrane',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1562',
		name: 'Mizrana',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1563',
		name: 'Imsouhel',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1564',
		name: 'Tadmaït',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1565',
		name: 'Aït Bouadou',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1566',
		name: 'Assi Youcef',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1567',
		name: 'Aït Toudert',
		wilaya_link: '15',
		wilaya_name: 'Tizi Ouzou',
		wilaya: '15'
	},
	{
		_id: '1601',
		name: 'Alger Centre',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1602',
		name: "Sidi M'Hamed",
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1603',
		name: 'El Madania',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1604',
		name: 'Belouizdad',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1605',
		name: 'Bab El Oued',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1606',
		name: 'Bologhine',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1607',
		name: 'Casbah',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1608',
		name: 'Oued Koriche',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1609',
		name: 'Bir Mourad Raïs',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1610',
		name: 'El Biar',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1611',
		name: 'Bouzareah',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1612',
		name: 'Birkhadem',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1613',
		name: 'El Harrach',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1614',
		name: 'Baraki',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1615',
		name: 'Oued Smar',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1616',
		name: 'Bachdjerrah',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1617',
		name: 'Hussein Dey',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1618',
		name: 'Kouba',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1619',
		name: 'Bourouba',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1620',
		name: 'Dar El Beïda',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1621',
		name: 'Bab Ezzouar',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1622',
		name: 'Ben Aknoun',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1623',
		name: 'Dely Ibrahim',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1624',
		name: 'El Hammamet',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1625',
		name: 'Raïs Hamidou',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1626',
		name: 'Djasr Kasentina',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1627',
		name: 'El Mouradia',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1628',
		name: 'Hydra',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1629',
		name: 'Mohammadia',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1630',
		name: 'Bordj El Kiffan',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1631',
		name: 'El Magharia',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1632',
		name: 'Beni Messous',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1633',
		name: 'Les Eucalyptus',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1634',
		name: 'Birtouta',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1635',
		name: 'Tessala El Merdja',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1636',
		name: 'Ouled Chebel',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1637',
		name: 'Sidi Moussa',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1638',
		name: 'Aïn Taya',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1639',
		name: 'Bordj El Bahri',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1640',
		name: 'El Marsa',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1641',
		name: "H'raoua",
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1642',
		name: 'Rouïba',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1643',
		name: 'Reghaïa',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1644',
		name: 'Aïn Benian',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1645',
		name: 'Staoueli',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1646',
		name: 'Zeralda',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1647',
		name: 'Mahelma',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1648',
		name: 'Rahmania',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1649',
		name: 'Souidania',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1650',
		name: 'Cheraga',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1651',
		name: 'Ouled Fayet',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1652',
		name: 'El Achour',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1653',
		name: 'Draria',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1654',
		name: 'Douera',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1655',
		name: 'Baba Hassen',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1656',
		name: 'Khraicia',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1657',
		name: 'Saoula',
		wilaya_link: '16',
		wilaya_name: 'Alger',
		wilaya: '16'
	},
	{
		_id: '1701',
		name: 'Aïn Chouhada',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1702',
		name: 'Aïn El Ibel',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1703',
		name: 'Aïn Feka',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1704',
		name: 'Aïn Maabed',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1705',
		name: 'Aïn Oussara',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1706',
		name: 'Amourah',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1707',
		name: 'Benhar',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1708',
		name: 'Beni Yagoub',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1709',
		name: 'Birine',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1710',
		name: 'Bouira Lahdab',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1711',
		name: 'Charef',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1712',
		name: 'Dar Chioukh',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1713',
		name: 'Deldoul',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1714',
		name: 'Djelfa',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1715',
		name: 'Douis',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1716',
		name: 'El Guedid',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1717',
		name: 'El Idrissia',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1718',
		name: 'El Khemis',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1719',
		name: 'Faidh El Botma',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1720',
		name: 'Guernini',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1721',
		name: 'Guettara',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1722',
		name: 'Had Sahary',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1723',
		name: 'Hassi Bahbah',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1724',
		name: 'Hassi El Euch',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1725',
		name: 'Hassi Fedoul',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1726',
		name: 'Messaad',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1727',
		name: "M'Liliha",
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1728',
		name: 'Moudjebara',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1729',
		name: 'Oum Laadham',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1730',
		name: 'Sed Rahal',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1731',
		name: 'Selmana',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1732',
		name: 'Sidi Baizid',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1733',
		name: 'Sidi Ladjel',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1734',
		name: 'Tadmit',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1735',
		name: 'Zaafrane',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1736',
		name: 'Zaccar',
		wilaya_link: '17',
		wilaya_name: 'Djelfa',
		wilaya: '17'
	},
	{
		_id: '1801',
		name: 'Jijel',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1802',
		name: 'Eraguene',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1803',
		name: 'El Aouana',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1804',
		name: 'Ziama Mansouriah',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1805',
		name: 'Taher',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1806',
		name: 'Emir Abdelkader',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1807',
		name: 'Chekfa',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1808',
		name: 'Chahna',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1809',
		name: 'El Milia',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1810',
		name: 'Sidi Maarouf',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1811',
		name: 'Settara',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1812',
		name: 'El Ancer',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1813',
		name: 'Sidi Abdelaziz',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1814',
		name: 'Kaous',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1815',
		name: 'Ghebala',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1816',
		name: 'Bouraoui Belhadef',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1817',
		name: 'Djimla',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1818',
		name: 'Selma Benziada',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1819',
		name: 'Boucif Ouled Askeur',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1820',
		name: 'El Kennar Nouchfi',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1821',
		name: 'Ouled Yahia Khedrouche',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1822',
		name: 'Boudriaa Ben Yadjis',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1823',
		name: 'Kheïri Oued Adjoul',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1824',
		name: 'Texenna',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1825',
		name: 'Djemaa Beni Habibi',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1826',
		name: 'Bordj Tahar',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1827',
		name: 'Ouled Rabah',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1828',
		name: 'Ouadjana',
		wilaya_link: '18',
		wilaya_name: 'Jijel',
		wilaya: '18'
	},
	{
		_id: '1901',
		name: 'Aïn Abessa',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1902',
		name: 'Aïn Arnat',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1903',
		name: 'Aïn Azel',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1904',
		name: 'Aïn El Kebira',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1905',
		name: 'Aïn Lahdjar',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1906',
		name: 'Aïn Legradj',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1907',
		name: 'Aïn Oulmene',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1908',
		name: 'Aïn Roua',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1909',
		name: 'Aïn Sebt',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1910',
		name: 'Aït Naoual Mezada',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1911',
		name: 'Aït Tizi',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1912',
		name: 'Aït Wertilan',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1913',
		name: 'Amoucha',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1914',
		name: 'Babor',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1915',
		name: 'Bazer Sakhra',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1916',
		name: 'Beidha Bordj',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1917',
		name: 'Belaa',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1918',
		name: 'Beni Aziz',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1919',
		name: 'Beni Chebana',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1920',
		name: 'Beni Fouda',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1921',
		name: 'Beni Hocine',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1922',
		name: 'Beni Mouhli',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1923',
		name: 'Bir El Arch',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1924',
		name: 'Bir Haddada',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1925',
		name: 'Bouandas',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1926',
		name: 'Bougaa',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1927',
		name: 'Bousselam',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1928',
		name: 'Boutaleb',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1929',
		name: 'Dehamcha',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1930',
		name: 'Djemila',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1931',
		name: 'Draa Kebila',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1932',
		name: 'El Eulma',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1933',
		name: 'El Ouldja',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1934',
		name: 'El Ouricia',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1935',
		name: 'Guellal',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1936',
		name: 'Guelta Zerka',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1937',
		name: 'Guenzet',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1938',
		name: 'Guidjel',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1939',
		name: 'Hamma',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1940',
		name: 'Hammam Guergour',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1941',
		name: 'Hammam Soukhna',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1942',
		name: 'Harbil',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1943',
		name: 'Ksar El Abtal',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1944',
		name: 'Maaouia',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1945',
		name: 'Maoklane',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1946',
		name: 'Mezloug',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1947',
		name: 'Oued El Barad',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1948',
		name: 'Ouled Addouane',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1949',
		name: 'Ouled Sabor',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1950',
		name: 'Ouled Si Ahmed',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1951',
		name: 'Ouled Tebben',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1952',
		name: 'Rasfa',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1953',
		name: 'Salah Bey',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1954',
		name: 'Serdj El Ghoul',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1955',
		name: 'Sétif',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1956',
		name: 'Tachouda',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1957',
		name: 'Talaifacene',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1958',
		name: 'Taya',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1959',
		name: 'Tella',
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '1960',
		name: "Tizi N'Bechar",
		wilaya_link: '19',
		wilaya_name: 'Sétif',
		wilaya: '19'
	},
	{
		_id: '2001',
		name: 'Aïn El Hadjar',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2002',
		name: 'Aïn Sekhouna',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2003',
		name: 'Aïn Soltane',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2004',
		name: 'Doui Thabet',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2005',
		name: 'El Hassasna',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2006',
		name: 'Hounet',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2007',
		name: 'Maamora',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2008',
		name: 'Moulay Larbi',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2009',
		name: 'Ouled Brahim',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2010',
		name: 'Ouled Khaled',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2011',
		name: 'Saïda',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2012',
		name: 'Sidi Ahmed',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2013',
		name: 'Sidi Amar',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2014',
		name: 'Sidi Boubekeur',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2015',
		name: 'Tircine',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2016',
		name: 'Youb',
		wilaya_link: '20',
		wilaya_name: 'Saïda',
		wilaya: '20'
	},
	{
		_id: '2101',
		name: 'Aïn Bouziane',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2102',
		name: 'Aïn Charchar',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2103',
		name: 'Aïn Kechra',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2104',
		name: 'Aïn Zouit',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2105',
		name: 'Azzaba',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2106',
		name: 'Bekkouche Lakhdar',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2107',
		name: 'Bin El Ouiden',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2108',
		name: 'Ben Azzouz',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2109',
		name: 'Beni Bechir',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2110',
		name: 'Beni Oulbane',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2111',
		name: 'Beni Zid',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2112',
		name: 'Bouchtata',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2113',
		name: 'Cheraia',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2114',
		name: 'Collo',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2115',
		name: 'Djendel Saadi Mohamed',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2116',
		name: 'El Ghedir',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2117',
		name: 'El Hadaiek',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2118',
		name: 'El Harrouch',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2119',
		name: 'El Marsa',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2120',
		name: 'Emdjez Edchich',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2121',
		name: 'Es Sebt',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2122',
		name: 'Filfila',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2123',
		name: 'Hamadi Krouma',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2124',
		name: 'Kanoua',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2125',
		name: 'Kerkera',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2126',
		name: 'Kheneg Mayoum',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2127',
		name: 'Oued Zehour',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2128',
		name: 'Ouldja Boulballout',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2129',
		name: 'Ouled Attia',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2130',
		name: 'Ouled Hbaba',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2131',
		name: 'Oum Toub',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2132',
		name: 'Ramdane Djamel',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2133',
		name: 'Salah Bouchaour',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2134',
		name: 'Sidi Mezghiche',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2135',
		name: 'Skikda',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2136',
		name: 'Tamalous',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2137',
		name: 'Zerdaza',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2138',
		name: 'Zitouna',
		wilaya_link: '21',
		wilaya_name: 'Skikda',
		wilaya: '21'
	},
	{
		_id: '2201',
		name: 'Aïn Adden',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2202',
		name: 'Aïn El Berd',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2203',
		name: 'Aïn Kada',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2204',
		name: 'Aïn Thrid',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2205',
		name: 'Aïn Tindamine',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2206',
		name: 'Amarnas',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2207',
		name: 'Badredine El Mokrani',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2208',
		name: 'Belarbi',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2209',
		name: 'Ben Badis',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2210',
		name: 'Benachiba Chelia',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2211',
		name: 'Bir El Hammam',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2212',
		name: 'Boudjebaa El Bordj',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2213',
		name: 'Boukhanafis',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2214',
		name: 'Chettouane Belaila',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2215',
		name: 'Dhaya',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2216',
		name: 'El Haçaiba',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2217',
		name: 'Hassi Dahou',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2218',
		name: 'Hassi Zehana',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2219',
		name: 'Lamtar',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2220',
		name: 'Makedra',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2221',
		name: 'Marhoum',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2222',
		name: "M'Cid",
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2223',
		name: 'Merine',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2224',
		name: 'Mezaourou',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2225',
		name: 'Mostefa Ben Brahim',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2226',
		name: 'Moulay Slissen',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2227',
		name: 'Oued Sebaa',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2228',
		name: 'Oued Sefioun',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2229',
		name: 'Oued Taourira',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2230',
		name: 'Ras El Ma',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2231',
		name: 'Redjem Demouche',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2232',
		name: 'Sehala Thaoura',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2233',
		name: 'Sfisef',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2234',
		name: 'Sidi Ali Benyoub',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2235',
		name: 'Sidi Ali Boussidi',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2236',
		name: 'Sidi Bel Abbes',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2237',
		name: 'Sidi Brahim',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2238',
		name: 'Sidi Chaib',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2239',
		name: 'Sidi Daho des Zairs',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2240',
		name: 'Sidi Hamadouche',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2241',
		name: 'Sidi Khaled',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2242',
		name: 'Sidi Lahcene',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2243',
		name: 'Sidi Yacoub',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2244',
		name: 'Tabia',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2245',
		name: 'Tafissour',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2246',
		name: 'Taoudmout',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2247',
		name: 'Teghalimet',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2248',
		name: 'Telagh',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2249',
		name: 'Tenira',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2250',
		name: 'Tessala',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2251',
		name: 'Tilmouni',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2252',
		name: 'Zerouala',
		wilaya_link: '22',
		wilaya_name: 'Sidi Bel Abbès',
		wilaya: '22'
	},
	{
		_id: '2301',
		name: 'Annaba',
		wilaya_link: '23',
		wilaya_name: 'Annaba',
		wilaya: '23'
	},
	{
		_id: '2302',
		name: 'Berrahal',
		wilaya_link: '23',
		wilaya_name: 'Annaba',
		wilaya: '23'
	},
	{
		_id: '2303',
		name: 'El Hadjar',
		wilaya_link: '23',
		wilaya_name: 'Annaba',
		wilaya: '23'
	},
	{
		_id: '2304',
		name: 'Eulma',
		wilaya_link: '23',
		wilaya_name: 'Annaba',
		wilaya: '23'
	},
	{
		_id: '2305',
		name: 'El Bouni',
		wilaya_link: '23',
		wilaya_name: 'Annaba',
		wilaya: '23'
	},
	{
		_id: '2306',
		name: 'Oued El Aneb',
		wilaya_link: '23',
		wilaya_name: 'Annaba',
		wilaya: '23'
	},
	{
		_id: '2307',
		name: 'Cheurfa',
		wilaya_link: '23',
		wilaya_name: 'Annaba',
		wilaya: '23'
	},
	{
		_id: '2308',
		name: 'Seraïdi',
		wilaya_link: '23',
		wilaya_name: 'Annaba',
		wilaya: '23'
	},
	{
		_id: '2309',
		name: 'Aïn Berda',
		wilaya_link: '23',
		wilaya_name: 'Annaba',
		wilaya: '23'
	},
	{
		_id: '2310',
		name: 'Chetaïbi',
		wilaya_link: '23',
		wilaya_name: 'Annaba',
		wilaya: '23'
	},
	{
		_id: '2311',
		name: 'Sidi Amar',
		wilaya_link: '23',
		wilaya_name: 'Annaba',
		wilaya: '23'
	},
	{
		_id: '2312',
		name: 'Treat',
		wilaya_link: '23',
		wilaya_name: 'Annaba',
		wilaya: '23'
	},
	{
		_id: '2401',
		name: 'Aïn Ben Beida',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2402',
		name: 'Aïn Larbi',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2403',
		name: 'Aïn Makhlouf',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2404',
		name: 'Aïn Reggada',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2405',
		name: 'Aïn Sandel',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2406',
		name: 'Belkheir',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2407',
		name: 'Ben Djerrah',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2408',
		name: 'Beni Mezline',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2409',
		name: 'Bordj Sabath',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2410',
		name: 'Bouhachana',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2411',
		name: 'Bouhamdane',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2412',
		name: 'Bouati Mahmoud',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2413',
		name: 'Bouchegouf',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2414',
		name: 'Boumahra Ahmed',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2415',
		name: 'Dahouara',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2416',
		name: 'Djeballah Khemissi',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2417',
		name: 'El Fedjoudj',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2418',
		name: 'Guellat Bou Sbaa',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2419',
		name: 'Guelma',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2420',
		name: 'Hammam Debagh',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2421',
		name: "Hammam N'Bail",
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2422',
		name: 'Héliopolis',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2423',
		name: 'Houari Boumédiène',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2424',
		name: 'Khezarra',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2425',
		name: 'Medjez Amar',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2426',
		name: 'Medjez Sfa',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2427',
		name: 'Nechmaya',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2428',
		name: 'Oued Cheham',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2429',
		name: 'Oued Fragha',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2430',
		name: 'Oued Zenati',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2431',
		name: 'Ras El Agba',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2432',
		name: 'Roknia',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2433',
		name: 'Sellaoua Announa',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2434',
		name: 'Tamlouka',
		wilaya_link: '24',
		wilaya_name: 'Guelma',
		wilaya: '24'
	},
	{
		_id: '2501',
		name: 'Aïn Abid',
		wilaya_link: '25',
		wilaya_name: 'Constantine',
		wilaya: '25'
	},
	{
		_id: '2502',
		name: 'Aïn Smara',
		wilaya_link: '25',
		wilaya_name: 'Constantine',
		wilaya: '25'
	},
	{
		_id: '2503',
		name: 'Beni Hamiden',
		wilaya_link: '25',
		wilaya_name: 'Constantine',
		wilaya: '25'
	},
	{
		_id: '2504',
		name: 'Constantine',
		wilaya_link: '25',
		wilaya_name: 'Constantine',
		wilaya: '25'
	},
	{
		_id: '2505',
		name: 'Didouche Mourad',
		wilaya_link: '25',
		wilaya_name: 'Constantine',
		wilaya: '25'
	},
	{
		_id: '2506',
		name: 'El Khroub',
		wilaya_link: '25',
		wilaya_name: 'Constantine',
		wilaya: '25'
	},
	{
		_id: '2507',
		name: 'Hamma Bouziane',
		wilaya_link: '25',
		wilaya_name: 'Constantine',
		wilaya: '25'
	},
	{
		_id: '2508',
		name: 'Ibn Badis',
		wilaya_link: '25',
		wilaya_name: 'Constantine',
		wilaya: '25'
	},
	{
		_id: '2509',
		name: 'Ibn Ziad',
		wilaya_link: '25',
		wilaya_name: 'Constantine',
		wilaya: '25'
	},
	{
		_id: '2510',
		name: 'Messaoud Boudjriou',
		wilaya_link: '25',
		wilaya_name: 'Constantine',
		wilaya: '25'
	},
	{
		_id: '2511',
		name: 'Ouled Rahmoune',
		wilaya_link: '25',
		wilaya_name: 'Constantine',
		wilaya: '25'
	},
	{
		_id: '2512',
		name: 'Zighoud Youcef',
		wilaya_link: '25',
		wilaya_name: 'Constantine',
		wilaya: '25'
	},
	{
		_id: '2601',
		name: 'Aïn Boucif',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2602',
		name: 'Aïn Ouksir',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2603',
		name: 'Aissaouia',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2604',
		name: 'Aziz',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2605',
		name: 'Baata',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2606',
		name: 'Benchicao',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2607',
		name: 'Beni Slimane',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2608',
		name: 'Berrouaghia',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2609',
		name: 'Bir Ben Laabed',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2610',
		name: 'Boghar',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2611',
		name: 'Bou Aiche',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2612',
		name: 'Bouaichoune',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2613',
		name: 'Bouchrahil',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2614',
		name: 'Boughezoul',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2615',
		name: 'Bouskene',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2616',
		name: 'Chahbounia',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2617',
		name: 'Chellalet El Adhaoura',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2618',
		name: 'Cheniguel',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2619',
		name: 'Derrag',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2620',
		name: 'Deux Bassins',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2621',
		name: 'Djouab',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2622',
		name: 'Draa Essamar',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2623',
		name: 'El Azizia',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2624',
		name: 'El Guelb El Kebir',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2625',
		name: 'El Hamdania',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2626',
		name: 'El Omaria',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2627',
		name: 'El Ouinet',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2628',
		name: 'Hannacha',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2629',
		name: 'Kef Lakhdar',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2630',
		name: 'Khams Djouamaa',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2631',
		name: 'Ksar Boukhari',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2632',
		name: 'Meghraoua',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2633',
		name: 'Médéa',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2634',
		name: 'Moudjbar',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2635',
		name: 'Meftaha',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2636',
		name: 'Mezerana',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2637',
		name: 'Mihoub',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2638',
		name: 'Ouamri',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2639',
		name: 'Oued Harbil',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2640',
		name: 'Ouled Antar',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2641',
		name: 'Ouled Bouachra',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2642',
		name: 'Ouled Brahim',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2643',
		name: 'Ouled Deide',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2644',
		name: 'Ouled Hellal',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2645',
		name: 'Ouled Maaref',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2646',
		name: 'Oum El Djalil',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2647',
		name: 'Ouzera',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2648',
		name: 'Rebaia',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2649',
		name: 'Saneg',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2650',
		name: 'Sedraia',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2651',
		name: 'Seghouane',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2652',
		name: 'Si Mahdjoub',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2653',
		name: 'Sidi Damed',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2654',
		name: 'Sidi Errabia',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2655',
		name: 'Sidi Naamanez',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2656',
		name: 'Sidi Zahar',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2657',
		name: 'Sidi Ziane',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2658',
		name: 'Souagui',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2659',
		name: 'Tablat',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2660',
		name: 'Tafraout',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2661',
		name: 'Tamesguida',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2662',
		name: 'Tizi Mahdi',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2663',
		name: 'Tlatet Eddouar',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2664',
		name: 'Zoubiria',
		wilaya_link: '26',
		wilaya_name: 'Médéa',
		wilaya: '26'
	},
	{
		_id: '2701',
		name: 'Abdelmalek Ramdane',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2702',
		name: 'Achaacha',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2703',
		name: 'Aïn Boudinar',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2704',
		name: 'Aïn Nouissy',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2705',
		name: 'Aïn Sidi Cherif',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2706',
		name: 'Aïn Tedles',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2707',
		name: 'Blad Touahria',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2708',
		name: 'Bouguirat',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2709',
		name: 'El Hassaine',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2710',
		name: 'Fornaka',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2711',
		name: 'Hadjadj',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2712',
		name: 'Hassi Mameche',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2713',
		name: 'Khadra',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2714',
		name: 'Kheireddine',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2715',
		name: 'Mansourah',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2716',
		name: 'Mesra',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2717',
		name: 'Mazagran',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2718',
		name: 'Mostaganem',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2719',
		name: 'Nekmaria',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2720',
		name: 'Oued El Kheir',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2721',
		name: 'Ouled Boughalem',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2722',
		name: 'Ouled Maallah',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2723',
		name: 'Safsaf',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2724',
		name: 'Sayada',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2725',
		name: 'Sidi Ali',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2726',
		name: 'Sidi Belattar',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2727',
		name: 'Sidi Lakhdar',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2728',
		name: 'Sirat',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2729',
		name: 'Souaflia',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2730',
		name: 'Sour',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2731',
		name: 'Stidia',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2732',
		name: 'Tazgait',
		wilaya_link: '27',
		wilaya_name: 'Mostaganem',
		wilaya: '27'
	},
	{
		_id: '2801',
		name: 'Aïn El Hadjel',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2802',
		name: 'Aïn El Melh',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2803',
		name: 'Aïn Errich',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2804',
		name: 'Aïn Fares',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2805',
		name: 'Aïn Khadra',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2806',
		name: 'Belaiba',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2807',
		name: 'Ben Srour',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2808',
		name: 'Beni Ilmane',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2809',
		name: 'Benzouh',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2810',
		name: 'Berhoum',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2811',
		name: 'Bir Foda',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2812',
		name: 'Bou Saâda',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2813',
		name: 'Bouti Sayah',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2814',
		name: 'Chellal',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2815',
		name: 'Dehahna',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2816',
		name: 'Djebel Messaad',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2817',
		name: 'El Hamel',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2818',
		name: 'El Houamed',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2819',
		name: 'Hammam Dhalaa',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2820',
		name: 'Khettouti Sed El Djir',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2821',
		name: 'Khoubana',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2822',
		name: 'Maadid',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2823',
		name: 'Maarif',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2824',
		name: 'Magra',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2825',
		name: "M'Cif",
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2826',
		name: 'Medjedel',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2827',
		name: 'Mohammed Boudiaf',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2828',
		name: "M'Sila",
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2829',
		name: "M'Tarfa",
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2830',
		name: 'Ouanougha',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2831',
		name: 'Ouled Addi Guebala',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2832',
		name: 'Ouled Atia',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2833',
		name: 'Ouled Derradj',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2834',
		name: 'Ouled Madhi',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2835',
		name: 'Ouled Mansour',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2836',
		name: 'Ouled Sidi Brahim',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2837',
		name: 'Ouled Slimane',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2838',
		name: 'Oultem',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2839',
		name: 'Sidi Aïssa',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2840',
		name: 'Sidi Ameur',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2841',
		name: 'Sidi Hadjeres',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2842',
		name: "Sidi M'Hamed",
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2843',
		name: 'Slim',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2844',
		name: 'Souamaa',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2845',
		name: 'Tamsa',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2846',
		name: 'Tarmount',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2847',
		name: 'Zarzour',
		wilaya_link: '28',
		wilaya_name: "M'Sila",
		wilaya: '28'
	},
	{
		_id: '2901',
		name: 'Aïn Fares',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2902',
		name: 'Aïn Fekan',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2903',
		name: 'Aïn Ferah',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2904',
		name: 'Aïn Fras',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2905',
		name: 'Alaïmia',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2906',
		name: 'Aouf',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2907',
		name: 'Beniane',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2908',
		name: 'Bou Hanifia',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2909',
		name: 'Bou Henni',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2910',
		name: 'Chorfa',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2911',
		name: 'El Bordj',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2912',
		name: 'El Gaada',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2913',
		name: 'El Ghomri',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2914',
		name: 'El Guettana',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2915',
		name: 'El Keurt',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2916',
		name: 'El Menaouer',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2917',
		name: 'Ferraguig',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2918',
		name: 'Froha',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2919',
		name: 'Gharrous',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2920',
		name: 'Guerdjoum',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2921',
		name: 'Ghriss',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2922',
		name: 'Hachem',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2923',
		name: 'Hacine',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2924',
		name: 'Khalouia',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2925',
		name: 'Makdha',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2926',
		name: 'Mamounia',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2927',
		name: 'Maoussa',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2928',
		name: 'Mascara',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2929',
		name: 'Matemore',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2930',
		name: 'Mocta Douz',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2931',
		name: 'Mohammadia',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2932',
		name: 'Nesmoth',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2933',
		name: 'Oggaz',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2934',
		name: 'Oued El Abtal',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2935',
		name: 'Oued Taria',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2936',
		name: 'Ras El Aïn Amirouche',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2937',
		name: 'Sedjerara',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2938',
		name: 'Sehailia',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2939',
		name: 'Sidi Abdeldjebar',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2940',
		name: 'Sidi Abdelmoumen',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2941',
		name: 'Sidi Kada',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2942',
		name: 'Sidi Boussaid',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2943',
		name: 'Sig',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2944',
		name: 'Tighennif',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2945',
		name: 'Tizi',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2946',
		name: 'Zahana',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '2947',
		name: 'Zelmata',
		wilaya_link: '29',
		wilaya_name: 'Mascara',
		wilaya: '29'
	},
	{
		_id: '3001',
		name: 'Aïn Beida',
		wilaya_link: '30',
		wilaya_name: 'Ouargla',
		wilaya: '30'
	},
	{
		_id: '3007',
		name: 'Hassi Ben Abdellah',
		wilaya_link: '30',
		wilaya_name: 'Ouargla',
		wilaya: '30'
	},
	{
		_id: '3008',
		name: 'Hassi Messaoud',
		wilaya_link: '30',
		wilaya_name: 'Ouargla',
		wilaya: '30'
	},
	{
		_id: '3012',
		name: "N'Goussa",
		wilaya_link: '30',
		wilaya_name: 'Ouargla',
		wilaya: '30'
	},
	{
		_id: '3013',
		name: 'Ouargla',
		wilaya_link: '30',
		wilaya_name: 'Ouargla',
		wilaya: '30'
	},
	{
		_id: '3014',
		name: 'Rouissat',
		wilaya_link: '30',
		wilaya_name: 'Ouargla',
		wilaya: '30'
	},
	{
		_id: '3015',
		name: 'Sidi Khouiled',
		wilaya_link: '30',
		wilaya_name: 'Ouargla',
		wilaya: '30'
	},
	{
		_id: '3101',
		name: 'Oran',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3102',
		name: 'Gdyel',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3103',
		name: 'Bir El Djir',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3104',
		name: 'Hassi Bounif',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3105',
		name: 'Es Senia',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3106',
		name: 'Arzew',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3107',
		name: 'Bethioua',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3108',
		name: 'Marsat El Hadjadj',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3109',
		name: 'Aïn El Turk',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3110',
		name: 'El Ançor',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3111',
		name: 'Oued Tlelat',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3112',
		name: 'Tafraoui',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3113',
		name: 'Sidi Chami',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3114',
		name: 'Boufatis',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3115',
		name: 'Mers El Kébir',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3116',
		name: 'Bou Sfer',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3117',
		name: 'El Kerma',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3118',
		name: 'El Braya',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3119',
		name: 'Hassi Ben Okba',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3120',
		name: 'Ben Freha',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3121',
		name: 'Hassi Mefsoukh',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3122',
		name: 'Sidi Benyebka',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3123',
		name: 'Misserghin',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3124',
		name: 'Boutlelis',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3125',
		name: 'Aïn El Kerma',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3126',
		name: 'Aïn El Bia',
		wilaya_link: '31',
		wilaya_name: 'Oran',
		wilaya: '31'
	},
	{
		_id: '3201',
		name: 'El Bayadh',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3202',
		name: 'Rogassa',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3203',
		name: 'Stitten',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3204',
		name: 'Brezina',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3205',
		name: 'Ghassoul',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3206',
		name: 'Boualem',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3207',
		name: 'El Abiodh Sidi Cheikh',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3208',
		name: 'Aïn El Orak',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3209',
		name: 'Arbaouat',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3210',
		name: 'Bougtoub',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3211',
		name: 'El Kheiter',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3212',
		name: 'Kef El Ahmar',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3213',
		name: 'Boussemghoun',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3214',
		name: 'Chellala',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3215',
		name: 'Kraakda',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3216',
		name: 'El Bnoud',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3217',
		name: 'Cheguig',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3218',
		name: 'Sidi Ameur',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3219',
		name: 'El Mehara',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3220',
		name: 'Tousmouline',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3221',
		name: 'Sidi Slimane',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3222',
		name: 'Sidi Tifour',
		wilaya_link: '32',
		wilaya_name: 'El Bayadh',
		wilaya: '32'
	},
	{
		_id: '3301',
		name: 'Illizi',
		wilaya_link: '33',
		wilaya_name: 'Illizi',
		wilaya: '33'
	},
	{
		_id: '3303',
		name: 'Debdeb',
		wilaya_link: '33',
		wilaya_name: 'Illizi',
		wilaya: '33'
	},
	{
		_id: '3304',
		name: 'Bordj Omar Driss',
		wilaya_link: '33',
		wilaya_name: 'Illizi',
		wilaya: '33'
	},
	{
		_id: '3306',
		name: 'In Amenas',
		wilaya_link: '33',
		wilaya_name: 'Illizi',
		wilaya: '33'
	},
	{
		_id: '3401',
		name: 'Aïn Taghrout',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3402',
		name: 'Aïn Tesra',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3403',
		name: 'Belimour',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3404',
		name: 'Ben Daoud',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3405',
		name: 'Bir Kasdali',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3406',
		name: 'Bordj Bou Arreridj',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3407',
		name: 'Bordj Ghédir',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3408',
		name: 'Bordj Zemoura',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3409',
		name: 'Colla',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3410',
		name: 'Djaafra',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3411',
		name: 'El Ach',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3412',
		name: 'El Achir',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3413',
		name: 'El Anseur',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3414',
		name: 'El Hamadia',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3415',
		name: 'El Main',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3416',
		name: "El M'hir",
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3417',
		name: 'Ghilassa',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3418',
		name: 'Haraza',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3419',
		name: 'Hasnaoua',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3420',
		name: 'Khelil',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3421',
		name: 'Ksour',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3422',
		name: 'Mansoura',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3423',
		name: 'Medjana',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3424',
		name: 'Ouled Brahem',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3425',
		name: 'Ouled Dahmane',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3426',
		name: 'Ouled Sidi Brahim',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3427',
		name: 'Rabta',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3428',
		name: 'Ras El Oued',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3429',
		name: 'Sidi Embarek',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3430',
		name: 'Tefreg',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3431',
		name: 'Taglait',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3432',
		name: 'Teniet En Nasr',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3433',
		name: 'Tassameurt',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3434',
		name: 'Tixter',
		wilaya_link: '34',
		wilaya_name: 'Bordj Bou Arreridj',
		wilaya: '34'
	},
	{
		_id: '3501',
		name: 'Boumerdes',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3502',
		name: 'Boudouaou',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3504',
		name: 'Afir',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3505',
		name: 'Bordj Menaiel',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3506',
		name: 'Baghlia',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3507',
		name: 'Sidi Daoud',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3508',
		name: 'Naciria',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3509',
		name: 'Djinet',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3510',
		name: 'Issers',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3511',
		name: 'Zemmouri',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3512',
		name: 'Si Mustapha',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3513',
		name: 'Tidjelabine',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3514',
		name: 'Chabet el Ameur',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3515',
		name: 'Thenia',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3518',
		name: 'Timezrit',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3519',
		name: 'Corso',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3520',
		name: 'Ouled Moussa',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3521',
		name: 'Larbatache',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3522',
		name: 'Bouzegza Keddara',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3525',
		name: 'Taourga',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3526',
		name: 'Ouled Aissa',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3527',
		name: 'Ben Choud',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3528',
		name: 'Dellys',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3529',
		name: 'Ammal',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3530',
		name: 'Beni Amrane',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3531',
		name: 'Souk El Had',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3532',
		name: 'Boudouaou El Bahri',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3533',
		name: 'Ouled Hedadj',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3535',
		name: 'Leghata',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3536',
		name: 'Hammedi',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3537',
		name: 'Khemis El Khechna',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3538',
		name: 'El Kharrouba',
		wilaya_link: '35',
		wilaya_name: 'Boumerdès',
		wilaya: '35'
	},
	{
		_id: '3601',
		name: 'Aïn El Assel',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3602',
		name: 'Aïn Kerma',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3603',
		name: 'Asfour',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3604',
		name: 'Ben Mehidi',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3605',
		name: 'Berrihane',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3606',
		name: 'Besbes',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3607',
		name: 'Bougous',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3608',
		name: 'Bouhadjar',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3609',
		name: 'Bouteldja',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3610',
		name: 'Chebaita Mokhtar',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3611',
		name: 'Chefia',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3612',
		name: 'Chihani',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3613',
		name: 'Dréan',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3614',
		name: 'Echatt',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3615',
		name: 'El Aioun',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3616',
		name: 'El Kala',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3617',
		name: 'El Tarf',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3618',
		name: 'Hammam Beni Salah',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3619',
		name: 'Lac des Oiseaux',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3620',
		name: 'Oued Zitoun',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3621',
		name: 'Raml Souk',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3622',
		name: 'Souarekh',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3623',
		name: 'Zerizer',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3624',
		name: 'Zitouna',
		wilaya_link: '36',
		wilaya_name: 'El Tarf',
		wilaya: '36'
	},
	{
		_id: '3701',
		name: 'Oum el Assel',
		wilaya_link: '37',
		wilaya_name: 'Tindouf',
		wilaya: '37'
	},
	{
		_id: '3702',
		name: 'Tindouf',
		wilaya_link: '37',
		wilaya_name: 'Tindouf',
		wilaya: '37'
	},
	{
		_id: '3801',
		name: 'Ammari',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3802',
		name: 'Beni Chaib',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3803',
		name: 'Beni Lahcene',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3804',
		name: 'Boucaid',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3805',
		name: 'Bordj Bou Naama',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3806',
		name: 'Bordj El Emir Abdelkader',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3807',
		name: 'Khemisti',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3808',
		name: 'Larbaa',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3809',
		name: 'Lardjem',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3810',
		name: 'Layoune',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3811',
		name: 'Lazharia',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3812',
		name: 'Maacem',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3813',
		name: 'Melaab',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3814',
		name: 'Ouled Bessem',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3815',
		name: 'Sidi Abed',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3816',
		name: 'Sidi Boutouchent',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3817',
		name: 'Sidi Lantri',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3818',
		name: 'Sidi Slimane',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3819',
		name: 'Tamalaht',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3820',
		name: 'Theniet El Had',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3821',
		name: 'Tissemsilt',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3822',
		name: 'Youssoufia',
		wilaya_link: '38',
		wilaya_name: 'Tissemsilt',
		wilaya: '38'
	},
	{
		_id: '3901',
		name: 'El Oued',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3902',
		name: 'Robbah',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3903',
		name: 'Oued El Alenda',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3904',
		name: 'Bayadha',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3905',
		name: 'Nakhla',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3906',
		name: 'Guemar',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3907',
		name: 'Kouinine',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3908',
		name: 'Reguiba',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3909',
		name: 'Hamraia',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3910',
		name: 'Taghzout',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3911',
		name: 'Debila',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3912',
		name: 'Hassani Abdelkrim',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3913',
		name: 'Hassi Khalifa',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3914',
		name: 'Taleb Larbi',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3915',
		name: 'Douar El Ma',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3916',
		name: 'Sidi Aoun',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3917',
		name: 'Trifaoui',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3918',
		name: 'Magrane',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3919',
		name: 'Beni Guecha',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3920',
		name: 'Ourmas',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3925',
		name: 'El Ogla',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '3926',
		name: 'Mih Ouansa',
		wilaya_link: '39',
		wilaya_name: 'El Oued',
		wilaya: '39'
	},
	{
		_id: '4001',
		name: 'Aïn Touila',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4002',
		name: 'Babar',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4003',
		name: 'Baghai',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4004',
		name: 'Bouhmama',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4005',
		name: 'Chechar',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4006',
		name: 'Chelia',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4007',
		name: 'Djellal',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4008',
		name: 'El Hamma',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4009',
		name: 'El Mahmal',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4010',
		name: 'El Oueldja',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4011',
		name: 'Ensigha',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4012',
		name: 'Kais',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4013',
		name: 'Khenchela',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4014',
		name: 'Khirane',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4015',
		name: "M'Sara",
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4016',
		name: "M'Toussa",
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4017',
		name: 'Ouled Rechache',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4018',
		name: 'Remila',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4019',
		name: 'Tamza',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4020',
		name: 'Taouzient',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4021',
		name: 'Yabous',
		wilaya_link: '40',
		wilaya_name: 'Khenchela',
		wilaya: '40'
	},
	{
		_id: '4101',
		name: 'Souk Ahras',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4102',
		name: 'Sedrata',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4103',
		name: 'Hanancha',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4104',
		name: 'Mechroha',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4105',
		name: 'Ouled Driss',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4106',
		name: 'Tiffech',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4107',
		name: 'Zaarouria',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4108',
		name: 'Taoura',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4109',
		name: 'Drea',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4110',
		name: 'Heddada',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4111',
		name: 'Khedara',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4112',
		name: 'Merahna',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4113',
		name: 'Ouled Moumene',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4114',
		name: 'Bir Bou Haouch',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4115',
		name: "M'daourouch",
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4116',
		name: 'Oum El Adhaim',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4117',
		name: 'Aïn Zana',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4118',
		name: 'Aïn Soltane',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4119',
		name: 'Ouillen',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4120',
		name: 'Sidi Fredj',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4121',
		name: 'Safel El Ouiden',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4122',
		name: 'Ragouba',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4123',
		name: 'Khemissa',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4124',
		name: 'Oued Keberit',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4125',
		name: 'Terraguelt',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4126',
		name: 'Zouabi',
		wilaya_link: '41',
		wilaya_name: 'Souk Ahras',
		wilaya: '41'
	},
	{
		_id: '4201',
		name: 'Tipaza',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4202',
		name: 'Menaceur',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4203',
		name: 'Larhat',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4204',
		name: 'Douaouda',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4205',
		name: 'Bourkika',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4206',
		name: 'Khemisti',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4210',
		name: 'Aghbal',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4212',
		name: 'Hadjout',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4213',
		name: 'Sidi Amar',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4214',
		name: 'Gouraya',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4215',
		name: 'Nador',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4216',
		name: 'Chaiba',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4217',
		name: 'Aïn Tagourait',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4222',
		name: 'Cherchell',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4223',
		name: 'Damous',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4224',
		name: 'Merad',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4225',
		name: 'Fouka',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4226',
		name: 'Bou Ismaïl',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4227',
		name: 'Ahmar El Aïn',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4230',
		name: 'Bouharoun',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4232',
		name: 'Sidi Ghiles',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4233',
		name: 'Messelmoun',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4234',
		name: 'Sidi Rached',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4235',
		name: 'Koléa',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4236',
		name: 'Attatba',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4240',
		name: 'Sidi Semiane',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4241',
		name: 'Beni Milleuk',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4242',
		name: 'Hadjeret Ennous',
		wilaya_link: '42',
		wilaya_name: 'Tipaza',
		wilaya: '42'
	},
	{
		_id: '4301',
		name: 'Ahmed Rachedi',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4302',
		name: 'Aïn Beida Harriche',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4303',
		name: 'Aïn Mellouk',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4304',
		name: 'Aïn Tine',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4305',
		name: 'Amira Arrès',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4306',
		name: 'Benyahia Abderrahmane',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4307',
		name: 'Bouhatem',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4308',
		name: 'Chelghoum Laid',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4309',
		name: 'Chigara',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4310',
		name: 'Derradji Bousselah',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4311',
		name: 'El Mechira',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4312',
		name: 'Elayadi Barbes',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4313',
		name: 'Ferdjioua',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4314',
		name: 'Grarem Gouga',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4315',
		name: 'Hamala',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4316',
		name: 'Mila',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4317',
		name: 'Minar Zarza',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4318',
		name: 'Oued Athmania',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4319',
		name: 'Oued Endja',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4320',
		name: 'Oued Seguen',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4321',
		name: 'Ouled Khalouf',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4322',
		name: 'Rouached',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4323',
		name: 'Sidi Khelifa',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4324',
		name: 'Sidi Merouane',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4325',
		name: 'Tadjenanet',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4326',
		name: 'Tassadane Haddada',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4327',
		name: 'Teleghma',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4328',
		name: 'Terrai Bainen',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4329',
		name: 'Tessala Lemtaï',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4330',
		name: 'Tiberguent',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4331',
		name: 'Yahia Beni Guecha',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4332',
		name: 'Zeghaia',
		wilaya_link: '43',
		wilaya_name: 'Mila',
		wilaya: '43'
	},
	{
		_id: '4401',
		name: 'Aïn Defla',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4402',
		name: 'Aïn Bouyahia',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4403',
		name: 'Aïn Benian',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4404',
		name: 'Aïn Lechiekh',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4405',
		name: 'Aïn Soltane',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4406',
		name: 'Aïn Torki',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4407',
		name: 'Arib',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4408',
		name: 'Bathia',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4409',
		name: 'Belaas',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4410',
		name: 'Ben Allal',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4411',
		name: 'Birbouche',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4412',
		name: 'Bir Ould Khelifa',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4413',
		name: 'Bordj Emir Khaled',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4414',
		name: 'Boumedfaa',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4415',
		name: 'Bourached',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4416',
		name: 'Djelida',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4417',
		name: 'Djemaa Ouled Cheikh',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4418',
		name: 'Djendel',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4419',
		name: 'El Abadia',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4420',
		name: 'El Amra',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4421',
		name: 'El Attaf',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4422',
		name: 'El Hassania',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4423',
		name: 'El Maine',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4424',
		name: 'Hammam Righa',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4425',
		name: 'Hoceinia',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4426',
		name: 'Khemis Miliana',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4427',
		name: 'Mekhatria',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4428',
		name: 'Miliana',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4429',
		name: 'Oued Chorfa',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4430',
		name: 'Oued Djemaa',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4431',
		name: 'Rouina',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4432',
		name: 'Sidi Lakhdar',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4433',
		name: 'Tacheta Zougagha',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4434',
		name: 'Tarik Ibn Ziad',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4435',
		name: 'Tiberkanine',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4436',
		name: 'Zeddine',
		wilaya_link: '44',
		wilaya_name: 'Aïn Defla',
		wilaya: '44'
	},
	{
		_id: '4501',
		name: 'Naâma',
		wilaya_link: '45',
		wilaya_name: 'Naâma',
		wilaya: '45'
	},
	{
		_id: '4502',
		name: 'Mecheria',
		wilaya_link: '45',
		wilaya_name: 'Naâma',
		wilaya: '45'
	},
	{
		_id: '4503',
		name: 'Aïn Sefra',
		wilaya_link: '45',
		wilaya_name: 'Naâma',
		wilaya: '45'
	},
	{
		_id: '4504',
		name: 'Tiout',
		wilaya_link: '45',
		wilaya_name: 'Naâma',
		wilaya: '45'
	},
	{
		_id: '4505',
		name: 'Sfissifa',
		wilaya_link: '45',
		wilaya_name: 'Naâma',
		wilaya: '45'
	},
	{
		_id: '4506',
		name: 'Moghrar',
		wilaya_link: '45',
		wilaya_name: 'Naâma',
		wilaya: '45'
	},
	{
		_id: '4507',
		name: 'Assela',
		wilaya_link: '45',
		wilaya_name: 'Naâma',
		wilaya: '45'
	},
	{
		_id: '4508',
		name: 'Djeniene Bourezg',
		wilaya_link: '45',
		wilaya_name: 'Naâma',
		wilaya: '45'
	},
	{
		_id: '4509',
		name: 'Aïn Ben Khelil',
		wilaya_link: '45',
		wilaya_name: 'Naâma',
		wilaya: '45'
	},
	{
		_id: '4510',
		name: 'Makman Ben Amer',
		wilaya_link: '45',
		wilaya_name: 'Naâma',
		wilaya: '45'
	},
	{
		_id: '4511',
		name: 'Kasdir',
		wilaya_link: '45',
		wilaya_name: 'Naâma',
		wilaya: '45'
	},
	{
		_id: '4512',
		name: 'El Biod',
		wilaya_link: '45',
		wilaya_name: 'Naâma',
		wilaya: '45'
	},
	{
		_id: '4601',
		name: 'Aghlal',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4602',
		name: 'Aïn El Arbaa',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4603',
		name: 'Aïn Kihal',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4604',
		name: 'Aïn Témouchent',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4605',
		name: 'Aïn Tolba',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4606',
		name: 'Aoubellil',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4607',
		name: 'Beni Saf',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4608',
		name: 'Bouzedjar',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4609',
		name: 'Chaabat El Leham',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4610',
		name: 'Chentouf',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4611',
		name: 'El Amria',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4612',
		name: 'El Emir Abdelkader',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4613',
		name: 'El Malah',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4614',
		name: 'El Messaid',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4615',
		name: 'Hammam Bouhadjar',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4616',
		name: 'Hassasna',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4617',
		name: 'Hassi El Ghella',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4618',
		name: 'Oued Berkeche',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4619',
		name: 'Oued Sabah',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4620',
		name: 'Ouled Boudjemaa',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4621',
		name: 'Ouled Kihal',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4622',
		name: 'Oulhaça El Gheraba',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4623',
		name: 'Sidi Ben Adda',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4624',
		name: 'Sidi Boumedienne',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4625',
		name: 'Sidi Ouriache',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4626',
		name: 'Sidi Safi',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4627',
		name: 'Tamzoura',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4628',
		name: 'Terga',
		wilaya_link: '46',
		wilaya_name: 'Aïn Témouchent',
		wilaya: '46'
	},
	{
		_id: '4701',
		name: 'Berriane',
		wilaya_link: '47',
		wilaya_name: 'Ghardaïa',
		wilaya: '47'
	},
	{
		_id: '4702',
		name: 'Bounoura',
		wilaya_link: '47',
		wilaya_name: 'Ghardaïa',
		wilaya: '47'
	},
	{
		_id: '4703',
		name: 'Dhayet Bendhahoua',
		wilaya_link: '47',
		wilaya_name: 'Ghardaïa',
		wilaya: '47'
	},
	{
		_id: '4704',
		name: 'El Atteuf',
		wilaya_link: '47',
		wilaya_name: 'Ghardaïa',
		wilaya: '47'
	},
	{
		_id: '4705',
		name: 'El Guerrara',
		wilaya_link: '47',
		wilaya_name: 'Ghardaïa',
		wilaya: '47'
	},
	{
		_id: '4707',
		name: 'Ghardaïa',
		wilaya_link: '47',
		wilaya_name: 'Ghardaïa',
		wilaya: '47'
	},
	{
		_id: '4710',
		name: 'Mansoura',
		wilaya_link: '47',
		wilaya_name: 'Ghardaïa',
		wilaya: '47'
	},
	{
		_id: '4711',
		name: 'Metlili',
		wilaya_link: '47',
		wilaya_name: 'Ghardaïa',
		wilaya: '47'
	},
	{
		_id: '4712',
		name: 'Sebseb',
		wilaya_link: '47',
		wilaya_name: 'Ghardaïa',
		wilaya: '47'
	},
	{
		_id: '4713',
		name: 'Zelfana',
		wilaya_link: '47',
		wilaya_name: 'Ghardaïa',
		wilaya: '47'
	},
	{
		_id: '4801',
		name: 'Aïn Rahma',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4802',
		name: 'Aïn Tarek',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4803',
		name: 'Ammi Moussa',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4804',
		name: 'Belassel Bouzegza',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4805',
		name: 'Bendaoud',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4806',
		name: 'Beni Dergoun',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4807',
		name: 'Beni Zentis',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4808',
		name: 'Dar Ben Abdellah',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4809',
		name: 'Djidioua',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4810',
		name: 'El Guettar',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4811',
		name: 'El Hamadna',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4812',
		name: 'El Hassi',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4813',
		name: 'El Matmar',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4814',
		name: 'El Ouldja',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4815',
		name: 'Had Echkalla',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4816',
		name: 'Hamri',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4817',
		name: 'Kalaa',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4818',
		name: 'Lahlef',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4819',
		name: 'Mazouna',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4820',
		name: 'Mediouna',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4821',
		name: 'Mendes',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4822',
		name: 'Merdja Sidi Abed',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4823',
		name: 'Ouarizane',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4824',
		name: 'Oued Essalem',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4825',
		name: 'Oued Rhiou',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4826',
		name: 'Ouled Aiche',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4827',
		name: 'Oued El Djemaa',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4828',
		name: 'Ouled Sidi Mihoub',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4829',
		name: 'Ramka',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4830',
		name: 'Relizane',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4831',
		name: 'Sidi Khettab',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4832',
		name: 'Sidi Lazreg',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4833',
		name: "Sidi M'Hamed Ben Ali",
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4834',
		name: "Sidi M'Hamed Benaouda",
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4835',
		name: 'Sidi Saada',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4836',
		name: 'Souk El Had',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4837',
		name: 'Yellel',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4838',
		name: 'Zemmora',
		wilaya_link: '48',
		wilaya_name: 'Relizane',
		wilaya: '48'
	},
	{
		_id: '4903',
		name: 'Charouine',
		wilaya_link: '49',
		wilaya_name: 'Timimoun',
		wilaya: '49'
	},
	{
		_id: '4907',
		name: 'Ksar Kaddour',
		wilaya_link: '49',
		wilaya_name: 'Timimoun',
		wilaya: '49'
	},
	{
		_id: '4909',
		name: 'Timimoun',
		wilaya_link: '49',
		wilaya_name: 'Timimoun',
		wilaya: '49'
	},
	{
		_id: '4910',
		name: 'Ouled Saïd',
		wilaya_link: '49',
		wilaya_name: 'Timimoun',
		wilaya: '49'
	},
	{
		_id: '4916',
		name: 'Tinerkouk',
		wilaya_link: '49',
		wilaya_name: 'Timimoun',
		wilaya: '49'
	},
	{
		_id: '4917',
		name: 'Deldoul',
		wilaya_link: '49',
		wilaya_name: 'Timimoun',
		wilaya: '49'
	},
	{
		_id: '4920',
		name: 'Metarfa',
		wilaya_link: '49',
		wilaya_name: 'Timimoun',
		wilaya: '49'
	},
	{
		_id: '4923',
		name: 'Aougrout',
		wilaya_link: '49',
		wilaya_name: 'Timimoun',
		wilaya: '49'
	},
	{
		_id: '4924',
		name: 'Talmine',
		wilaya_link: '49',
		wilaya_name: 'Timimoun',
		wilaya: '49'
	},
	{
		_id: '4927',
		name: 'Ouled Aïssa',
		wilaya_link: '49',
		wilaya_name: 'Timimoun',
		wilaya: '49'
	},
	{
		_id: '5025',
		name: 'Bordj Badji Mokhtar',
		wilaya_link: '50',
		wilaya_name: 'Bordj Badji Mokhtar',
		wilaya: '50'
	},
	{
		_id: '5028',
		name: 'Timiaouine',
		wilaya_link: '50',
		wilaya_name: 'Bordj Badji Mokhtar',
		wilaya: '50'
	},
	{
		_id: '5103',
		name: 'Besbes',
		wilaya_link: '51',
		wilaya_name: 'Ouled Djellal',
		wilaya: '51'
	},
	{
		_id: '5110',
		name: 'Doucen',
		wilaya_link: '51',
		wilaya_name: 'Ouled Djellal',
		wilaya: '51'
	},
	{
		_id: '5111',
		name: 'Ech Chaïba',
		wilaya_link: '51',
		wilaya_name: 'Ouled Djellal',
		wilaya: '51'
	},
	{
		_id: '5126',
		name: 'Ouled Djellal',
		wilaya_link: '51',
		wilaya_name: 'Ouled Djellal',
		wilaya: '51'
	},
	{
		_id: '5129',
		name: 'Ras El Miaad',
		wilaya_link: '51',
		wilaya_name: 'Ouled Djellal',
		wilaya: '51'
	},
	{
		_id: '5130',
		name: 'Sidi Khaled',
		wilaya_link: '51',
		wilaya_name: 'Ouled Djellal',
		wilaya: '51'
	},
	{
		_id: '5203',
		name: 'Ouled Khoudir',
		wilaya_link: '52',
		wilaya_name: 'Béni Abbès',
		wilaya: '52'
	},
	{
		_id: '5205',
		name: 'Timoudi',
		wilaya_link: '52',
		wilaya_name: 'Béni Abbès',
		wilaya: '52'
	},
	{
		_id: '5207',
		name: 'Béni Abbès',
		wilaya_link: '52',
		wilaya_name: 'Béni Abbès',
		wilaya: '52'
	},
	{
		_id: '5208',
		name: 'Beni Ikhlef',
		wilaya_link: '52',
		wilaya_name: 'Béni Abbès',
		wilaya: '52'
	},
	{
		_id: '5211',
		name: 'Igli',
		wilaya_link: '52',
		wilaya_name: 'Béni Abbès',
		wilaya: '52'
	},
	{
		_id: '5212',
		name: 'Tabelbala',
		wilaya_link: '52',
		wilaya_name: 'Béni Abbès',
		wilaya: '52'
	},
	{
		_id: '5214',
		name: 'El Ouata',
		wilaya_link: '52',
		wilaya_name: 'Béni Abbès',
		wilaya: '52'
	},
	{
		_id: '5218',
		name: 'Kerzaz',
		wilaya_link: '52',
		wilaya_name: 'Béni Abbès',
		wilaya: '52'
	},
	{
		_id: '5219',
		name: 'Ksabi',
		wilaya_link: '52',
		wilaya_name: 'Béni Abbès',
		wilaya: '52'
	},
	{
		_id: '5220',
		name: 'Tamtert',
		wilaya_link: '52',
		wilaya_name: 'Béni Abbès',
		wilaya: '52'
	},
	{
		_id: '5303',
		name: 'In Ghar',
		wilaya_link: '53',
		wilaya_name: 'In Salah',
		wilaya: '53'
	},
	{
		_id: '5308',
		name: 'In Salah',
		wilaya_link: '53',
		wilaya_name: 'In Salah',
		wilaya: '53'
	},
	{
		_id: '5310',
		name: 'Foggaret Ezzaouia',
		wilaya_link: '53',
		wilaya_name: 'In Salah',
		wilaya: '53'
	},
	{
		_id: '5404',
		name: 'In Guezzam',
		wilaya_link: '54',
		wilaya_name: 'In Guezzam',
		wilaya: '54'
	},
	{
		_id: '5407',
		name: 'Tin Zaouatine',
		wilaya_link: '54',
		wilaya_name: 'In Guezzam',
		wilaya: '54'
	},
	{
		_id: '5502',
		name: 'Benaceur',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5503',
		name: 'Blidet Amor',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5504',
		name: 'El Allia',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5505',
		name: 'El Borma',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5506',
		name: 'El Hadjira',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5509',
		name: 'Megarine',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5510',
		name: "M'Naguer",
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5511',
		name: 'Nezla',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5516',
		name: 'Sidi Slimane',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5517',
		name: 'Taibet',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5518',
		name: 'Tamacine',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5519',
		name: 'Tebesbest',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5520',
		name: 'Touggourt',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5521',
		name: 'Zaouia El Abidia',
		wilaya_link: '55',
		wilaya_name: 'Touggourt',
		wilaya: '55'
	},
	{
		_id: '5602',
		name: 'Djanet',
		wilaya_link: '56',
		wilaya_name: 'Djanet',
		wilaya: '56'
	},
	{
		_id: '5605',
		name: 'Bordj El Haouas',
		wilaya_link: '56',
		wilaya_name: 'Djanet',
		wilaya: '56'
	},
	{
		_id: '5721',
		name: 'Still',
		wilaya_link: '57',
		wilaya_name: "El M'Ghair",
		wilaya: '57'
	},
	{
		_id: '5722',
		name: "M'Rara",
		wilaya_link: '57',
		wilaya_name: "El M'Ghair",
		wilaya: '57'
	},
	{
		_id: '5723',
		name: 'Sidi Khellil',
		wilaya_link: '57',
		wilaya_name: "El M'Ghair",
		wilaya: '57'
	},
	{
		_id: '5724',
		name: 'Tendla',
		wilaya_link: '57',
		wilaya_name: "El M'Ghair",
		wilaya: '57'
	},
	{
		_id: '5727',
		name: "El M'Ghair",
		wilaya_link: '57',
		wilaya_name: "El M'Ghair",
		wilaya: '57'
	},
	{
		_id: '5728',
		name: 'Djamaa',
		wilaya_link: '57',
		wilaya_name: "El M'Ghair",
		wilaya: '57'
	},
	{
		_id: '5729',
		name: 'Oum Touyour',
		wilaya_link: '57',
		wilaya_name: "El M'Ghair",
		wilaya: '57'
	},
	{
		_id: '5730',
		name: 'Sidi Amrane',
		wilaya_link: '57',
		wilaya_name: "El M'Ghair",
		wilaya: '57'
	},
	{
		_id: '5806',
		name: 'El Menia',
		wilaya_link: '58',
		wilaya_name: 'El Menia',
		wilaya: '58'
	},
	{
		_id: '5808',
		name: 'Hassi Fehal',
		wilaya_link: '58',
		wilaya_name: 'El Menia',
		wilaya: '58'
	},
	{
		_id: '5809',
		name: 'Hassi Gara',
		wilaya_link: '58',
		wilaya_name: 'El Menia',
		wilaya: '58'
	}
];

export { WILAYAS, CITIES };
