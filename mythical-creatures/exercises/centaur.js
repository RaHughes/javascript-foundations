class Centaur {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.layingDown = false;
		this.counter = 0;
	}
	shoot() {
		this.counter++
		if (this.layingDown || this.counter >=3) {
			this.cranky = true;
			return 'NO!';
		}else{
			return 'Twang!!!'
		}
	}
	run() {
		this.counter++
		if (this.layingDown || this.counter > 3) {
			this.cranky = true;
			return 'NO!';
		}else{
		return 'Clop clop clop clop!!!'
	   }
	}
	sleep() {
		if (this.standing === true) {
			return 'NO!';
		}else{
			this.counter = 0;
			this.cranky = false;
			return 'ZZZZ';
		}
	}
	layDown() {
		this.standing = false;
		this.layingDown = true;
	}
	standUp() {
		this.layingDown = false;
		this.standing = true;
	}
	drinkPotion() {
		this.cranky = false;
		if(this.layingDown === true) {
			return 'Not while I\'m laying down!'
		}
		if (this.counter < 1) {
			this.cranky = true;
		}
}
}
module.exports = Centaur;