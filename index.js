setInterval(() => {
    d = new date ();
    hour = d.gethour();
    min = d.getminute();
    sec = d.getsecond();
    hrotaion = 30 * hour + min/2;
    mrotation = 6 * min;
    srotation = 6 * sec;
     
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);