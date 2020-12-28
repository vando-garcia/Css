const day = document.getElementById("day");
const mon = document.getElementById("mon");
var d = new Date();
var month = d.getMonth()+1;
day.innerHTML = d.getUTCDay();
switch(month) {
    case 1:mon.innerHTML = "JAN " + d.getFullYear();
    break;
    case 2:mon.innerHTML = "FEV " + d.getFullYear();
    break;
    case 3:mon.innerHTML = "MAR " + d.getFullYear();
    break;
    case 4:mon.innerHTML = "ABR " + d.getFullYear();
    break;
    case 5:mon.innerHTML = "MAI " + d.getFullYear();
    break;
    case 6:mon.innerHTML = "JUN " + d.getFullYear();
    break;
    case 7:mon.innerHTML = "JUL " + d.getFullYear();
    break;
    case 8:mon.innerHTML = "AGO " + d.getFullYear();
    break;
    case 9:mon.innerHTML = "SET " + d.getFullYear();
    break;
    case 10:mon.innerHTML = "OUT " + d.getFullYear();
    break;
    case 11:mon.innerHTML = "NOV " + d.getFullYear();
    break;
    case 12:mon.innerHTML = "DEZ " + d.getFullYear();
    break;
}

var interval = setInterval(disp,500);

function disp() {
    var date = new Date();
    var t = date.toLocaleTimeString();
    document.getElementById("time").innerHTML = t;
}