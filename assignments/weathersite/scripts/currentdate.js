function setCurrentDate()
{
var d = new Date();

var day = d.getUTCDate();
//get Name of the days
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[d.getDay()];

//get Name of the Month
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthName = months[d.getMonth()];


//get number of the year
var year = d.getFullYear();

//Date format: ex: Monday, 6 April 2020
document.getElementById("currentdate").innerHTML = dayName + "," + " " + day + " " + monthName + " " + year;
}