let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

let removefirst=companies.shift();
let rem_add=companies.splice(2,1,"Ola");
let add_end=companies.push("Amazon");
console.log(companies);