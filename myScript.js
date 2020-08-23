function clock(){


    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var ampm = "AM";
    if(h > 12){
        ampm = "PM";
    }
    if(h > 12){
        ampm = "PM";
        h = h - 12;
    }
    if(h == 0) {
        h=12;
    }

    if(h < 10){
        h = "0" + h;
    }

    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }
    document.getElementById('clock').innerHTML = h + ' : ' + m + ' : ' + s + ' ' + ampm;

    }

    setInterval(clock, 0);
    alert("I am Bulbul");
