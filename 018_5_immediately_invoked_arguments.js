// Function Expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Henry', 'Jumpmaster'));
// Immediately Invoked version 
(function (first, last) {
    console.log(first + " " + last);
})('Bob', 'Hammer');
//# sourceMappingURL=018_5_immediately_invoked_arguments.js.map