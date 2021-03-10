setInterval(()=>{
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let am_pm = "AM";
    if(hours > 12){
        am_pm = "PM"
        hours = hours - 12;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(minutes < 10){
        seconds = "0" + seconds;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + am_pm;
})