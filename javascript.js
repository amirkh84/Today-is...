
var todayis = new Date().getDay();
var todayname;
switch (todayis) {
    case 0: todayname = "یکشنبه";
    break;
    case 1: todayname = "دوشنبه";
    break;
    case 2: todayname = "سه شنبه";
    break;
    case 3: todayname = "چهارشنبه";
    break;
    case 4: todayname = "پنجشنبه";
    break;
    case 5: todayname = "جمعه";
    break;
    case 6: todayname = "شنبه";
    break;
    default: "مشکلی در دریافت اطلاعات پیش آمده";
    break;
}
var body = document.body;
var hournow = new Date().getHours();
var shabroz;
if (hournow >= 6 & hournow <= 19) {
    var shabroz = "روز";
    body.style.backgroundColor="#ffcf70";
}
else {
    var shabroz = "شب";
    body.style.backgroundColor="#02021d";
}
function myTime() {
    var nhour = new Date().getHours();
    var nminute = new Date().getMinutes();
    var nsecond = new Date().getSeconds();
    document.getElementById("day").innerHTML = todayname;
    document.getElementById("sha").innerHTML = shabroz;
    document.getElementById("ffs").innerHTML = nhour;
    document.getElementById("ffm").innerHTML = nminute;
    document.getElementById("ffh").innerHTML = nsecond;
}
myTime();
setInterval (myTime , 1000);
