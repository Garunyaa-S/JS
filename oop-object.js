let bike = {
	model: 'R15 V3',
	company: 'Yamaha',

	getFunction: function () {
		return (`The name of the bike is ${bike.company} ${bike.model}`)
	},

	specs: {
		color: 'Black',
		cc: '150'
	}
}
console.log(bike.getFunction());
console.log(bike.specs.color, bike.specs.cc);