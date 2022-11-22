let userName = prompt('Adınız: ');
let text = document.querySelector("#myName");
text.innerHTML = userName;

function showTime() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartes"];
    const g = new Date();
    let gun = gunler[g.getDay()];

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + gun
    document.getElementById(myClock).innerHTML = dateTime;

}
setInterval(saatGoster, 1000);
