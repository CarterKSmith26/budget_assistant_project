let startupName = "Carter Corporation"; 
let initialCapital = 1000000; 
let monthlyRevenue = 50000; 
let monthlyExpenses = 30000; 

let netCashFlow = monthlyRevenue - monthlyExpenses; 
let currenceBalance = initialCapital + netCashFlow; 
let isProfitable = netCashFlow > 0; 

console.log("Startup Name: " + startupName); 
console.log("Net Monthly Cash Flow: $" + netCashFlow); 
console.log("Current Balance: $" + currenceBalance); 
console.log("Profitability Status: " + isProfitable);
