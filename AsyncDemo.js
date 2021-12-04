function showTime() {
    let date = new Date();
    return date.getHours() + "Hrs " + date.getMinutes() + "Minutes: " + date.getSeconds() + "Seconds";
}

function showSessionExpire() {
    console.log("Activity-b: Your Session expired at: " + showTime());
}

console.log("Activity A : Triggering Activity B at " + showTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A: Trigerred Activity-b at" + showTime() + "will execute after 5 sec");