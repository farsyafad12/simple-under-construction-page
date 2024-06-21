endDate = new Date("January 01, 2050 00:00:00").getTime();
const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = endDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
    document.getElementById("hours").innerHTML = hours
        .toString()
        .padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes
        .toString()
        .padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds
        .toString()
        .padStart(2, "0");

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Waktu sudah habis!";
    }
}, 1000);
