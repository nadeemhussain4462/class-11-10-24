// Assignment no 13 DATE METHODS
// chapter 31 to 34 

// Question no 1 
var currentDate = new Date();
document.write(currentDate +  "<br>");

// Question no 2
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
alert(months[currentDate.getMonth()]);

// Question no 3
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert("Today is " + days[currentDate.getDay()]);

// Question no 4
if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
    alert("It's Fun day!");
} else {
    alert("It's not Fun day!");
}
// Question no 5
if (currentDate.getDate() < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// Question no 6
var millisecondsSince1970 = currentDate.getTime();
var minutesSince1970 = millisecondsSince1970 / (1000 * 60);
document.write("Current Date: " + currentDate + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + millisecondsSince1970 + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + minutesSince1970 + "<br>");

// Question no 7
var hours = currentDate.getHours();
if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// Question no 8
var laterDate = new Date("Dec 31, 2023");
var remainingDays = laterDate.getTime() - currentDate.getTime();
var daysRemaining = Math.ceil(remainingDays / (1000 * 60 * 60 * 24));
document.write("Days remaining until the end of 2023: " + daysRemaining +  "<br>");

// Question no 9
var ramadanStartDate = new Date("March 12, 2024");
var daysSinceStart = currentDate.getTime() - ramadanStartDate.getTime();
var daysPassed = Math.ceil(daysSinceStart / (1000 * 60 * 60 * 24));
document.write("Days passed since 1st Ramadan: " + daysPassed);
document.write("<br>");

// Question no 10
var referenceDate = new Date("January 1, 2015");
var secondsSinceReference = currentDate.getTime() - referenceDate.getTime();
var secondsPassed = Math.ceil(secondsSinceReference / 1000);
document.write("Seconds elapsed since the beginning of 2015: " + secondsPassed + "<br>");
document.write("<br>");

// Question no 11
var currentHour = currentDate.getHours();
document.write("Current Date: " + currentDate + "<br>");
currentDate.setHours(currentHour - 1);
document.write("1 hour ago, it was " + currentDate + "<br>");
document.write("<br>");

// Question no 12
// var currentYear = currentDate.getFullYear();
// document.write("Current Date: " + currentDate + "<br>");
// currentDate.setFullYear(currentYear - 100);
// document.write("100 years back, it was " + currentDate + "<br>");
// document.write("<br>");

// Question no 13
var age = prompt("Enter your age:");
var currentYear = currentDate.getFullYear();
var birthYear = currentYear - age ;
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear + "<br>");
document.write("<br>");

// Question no 14
var customerName = prompt("Enter customer name:");
var currentMonth = currentDate.getMonth();
var numberOfUnits = prompt("Enter number of units consumed:");
var chargesPerUnit = prompt("Enter charges per unit:");
var latePaymentSurcharge = prompt("Enter late payment surcharge:");
var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePayment = latePaymentSurcharge * 0.1;
var grossAmountPayable = netAmountPayable + latePayment;
document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + months[currentMonth] + "<br>");
document.write("Number of units: " + numberOfUnits + "<br>");
document.write("Charges per unit: " + chargesPerUnit + "<br>");
document.write("<br>");
document.write("Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePayment.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "<br>");
