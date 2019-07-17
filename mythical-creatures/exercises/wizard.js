class Wizard {
	constructor(obj) {
		this.name = obj.name
		this.bearded = obj.bearded
		this.isRested = true || obj.isRested
		this.counter = 0
		if(this.bearded === undefined) {
			this.bearded = true
		}
		// if(this.isRested === undefined) {
		// 	this.isRested = true
		// }
	}
	incantation(spell) {
		return spell.toUpperCase()
	}
	cast() {
		this.counter++
		if (this.counter >= 3) {
			this.isRested = false
			return 'I SHALL NOT CAST!'
		}
		return 'MAGIC BULLET'
	}
}
module.exports = Wizard;