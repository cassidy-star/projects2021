function showTime(){ // here im creating my function with the name showTime
    var date = new Date();
    var h = date.getHours(); // this is my variable for my hours and below variabls for my min and seconds
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM"; // ths will show as my session on my clock
    // my  conditions for when time is displayed
    if (h == 0){
        h = 12;
    }

    if (h > 12){
        h = h - 12;
        session = "PM";
    }
    // this is how it should be displayed when it is displayed
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // this the order in which way it should when it displays
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myclockdisplay").innerText = time;
    document.getElementById("myclockdisplay").innerContent = time;

    setTimeout(showTime, 1000);
}
 showTime();
