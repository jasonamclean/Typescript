// // Optional & Default Arguments

// function printAddress (street: string, streetTwo?: string, state = 'AZ') {
// 	// '?' above makes the second parameter optional
// 	// 'state =' is a constant value or a default argument
// 	// you can't place another value after an optional value (ending in '?')
// 	console.log(street);
// 		if(streetTwo) {
// 			console.log(streetTwo);
// 		}
// 		console.log(state);
// }

// printAddress('123 Any St');
// printAddress('123 Any St', 'Suite 540');
// printAddress('123 Any St', 'Suite 540', 'UT');
// printAddress('123 Any St', 'UT', "85251");


// Rest Argument (splat)
function lineupCard(team: string, ...players: string[]) {
	console.log('Team: ' + team);
	for(let player of players) {
		console.log(player);
	}
}

lineupCard('Astros', 'Partyman', 'Smith', 'Halo');