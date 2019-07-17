class Vampire {
	constructor(name, pet,) {
		this.name = name;
		this.pet = pet || 'bat';
		this.thirsty = true
};
	thirsty() {
	this.thirsty === true
	return 'true'
	};

	drink() {
	this.thirsty = false
	};
};


module.exports = Vampire;