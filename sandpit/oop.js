"use strict";

let Citizen = {
	setCitizen: function (name, country) {
		this.name = name;
		this.country = country;
		return this;
	},
	printDetails: function () {
		console.log(`Citizen ${this.name} from ${this.country}`);
	}
};



let Winner = Object.create(Citizen);

Winner.setWinner = function (name, country, category, year) {
	this.setCitizen(name, country);
	this.category = category;
	this.year = year;
	return this;
};

Winner.printDetails = function () {
	console.log(`Academy Award winner ${this.name} from ${this.country}, category ${this.category}, year ${this.year}`);
};

let adele = Object.create(Winner).setWinner('Adele', 'England', 'Best Original Song', 2013);

adele.printDetails();