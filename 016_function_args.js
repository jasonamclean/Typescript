// function printAddress (street: string, streetTwo?: string, state = 'AZ') {
// 	// '?' above makes the second parameter optional
// 	// 'state =' is a constant value
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
// Rest argument (splat)
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('Team: ' + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
lineupCard('Astros', 'Partyman', 'Smith', 'Halo');
//# sourceMappingURL=016_function_args.js.map