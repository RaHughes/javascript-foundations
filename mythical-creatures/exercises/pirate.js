class Pirate {
	constructor(name, job) {
		this.name = name
		this.job = job || 'Scallywag'
		// if(this.job === undefined) {
		// 	this.job = 'Scallywag'
		// }
		this.cursed = false
		this.counter = 0
		this.booty = 0
		}

	commitHeinousAct() {
		this.counter++
		if(this.counter > 2) {
			this.cursed = true;
		}
	}
	robShip() {
		this.booty = 100;
		return('YAARRR!')
	}

}
module.exports = Pirate;