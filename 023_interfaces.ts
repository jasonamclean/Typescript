interface User {
	email : string;
	firstName : string;
	lastName : string;
}

function profile(user: User) : string {
	return `Welcome, ${user.firstName} ${user.lastName}`;
}

var realUser = {
	email: 'test@test.com',
	firstName: 'Henry',
	lastName: 'Jumpmaster'
};

console.log(profile(realUser));
console.log(realUser.email);


// // How to change the interface to make it have optional items
// interface User {
// 	email : string;
// 	firstName? : string;
// 	lastName? : string;
// }

// function profile(user: User) : string {
// 	return `Welcome, ${user.email}`;
// }

// var realUser = {
// 	email: 'test@test.com'
// };

// console.log(profile(realUser));