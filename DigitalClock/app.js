const showClock = ()=>{
    let date = new Date();
    let hr = hourFormat(date.getHours());
    let min = hourFormat(date.getMinutes());
    let sec = hourFormat(date.getSeconds());
    document.getElementById("hour").innerHTML = `${hr}:${min}:${sec}`

    const months = ["Ene", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayOfWeek = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dateText = `${dayOfWeek}, ${day} ${month}, ${year} `;

    document.getElementById("date").innerHTML = dateText;

    document.getElementById("container").classList.toggle("animate");
}

const hourFormat = (hour)=>{
    if(hour < 10)
        hour = "0" + hour;
    return hour;
}
setInterval(showClock, 1000);