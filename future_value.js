
var futureValue;
var investment = prompt("Enter the investment amount as xxxxx.xx", 10000);
investment = parseFloat(investment);
var rate = prompt("Enter interest rate as xx.xx", 7.5);
rate = parseFloat(rate);
var years = prompt("Enter the number of years", 10);
years = parseInt(years);

futureValue = investment;
for (var i = 1; i <= years; i++ ){
  futureValue = futureValue + (futureValue * rate / 100);  
}
futureValue = parseInt(futureValue);
document.write(" Investment amount = " + investment);
document.write(" Interest rate = " + rate);
document.write(" Years = " + years);
document.write(" Future Value is = $" + futureValue.toFixed(2) + "<br><br>");
