console.log(fullName('Henry', 'Jumpmaster'));
// console.log(otherFullName('Henry', 'Jumpmaster'));
// console.log(thirdFullName('Henry', 'Jumpmaster'));
// Putting these console.logs at the top instead of the bottom is an example of Javascript hoisting

// Function declaration
function fullName(first : string, last : string) : string {
	return first + " " + last;
}

// Function expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
	return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
	return first + " " + last;
}

