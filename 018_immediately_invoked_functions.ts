var names : string[] = ['Henry', 'Porter', 'Donnie'];
var counter : number = 0;

(function() {
	for (let name in names) {
		counter++;
	}
})();

console.log(counter);