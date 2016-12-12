class Post {
	@processOne()
	@processTwo()
	someFunction() {}
}

function processOne() {
	console.log("processOne has run");
	return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
		console.log("processOne has been called");
	}
}

function processTwo() {
	console.log("processTwo has run");
	return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
		console.log("processTwo has been called");
	}
}

// Terminal Results:

// processOne has run
// processTwo has run
// processTwo has been called
// processOne has been called




// Real life example where we can verify user before performing a specified action:

// class RealPost {
// 	@admin()
// 	delete() {}
// }