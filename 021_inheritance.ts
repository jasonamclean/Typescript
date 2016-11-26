class Report {
	companyProfile : string;

	constructor(public name : string) {
		this.companyProfile = name;
	}
}

class Invoice extends Report {
	constructor(public name : string, public total : number) { super(name); }

	printInvoice() {
		return this.name + ", " + this.total;
	}
}

class BillOfLading extends Report {
	constructor(public name : string, public city : string, public state : string) { super(name); }

	printBol() {
		return this.name + ", " + this.city + ", " + this.state;
	}
}

var invoice = new Invoice('Google', 200);
var bol = new BillOfLading('Google', 'Seattle', 'WA');
// var invoiceTwo = new Invoice('Yahoo', 2000);
// console.log(invoice.companyProfile);
console.log(invoice.printInvoice());
console.log(bol.printBol());
