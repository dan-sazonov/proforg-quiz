const compareDate = new Date();
// Time of countdown. Year, month, date, hours, minutes, seconds, ms
const dateEntered = compareDate.setMinutes(compareDate.getMinutes() + 10, compareDate.getSeconds() + 20);

const timer = setInterval(function () {
  timeBetweenDates(compareDate);
}, 1000);

let timeFuckedup = false;

function timeBetweenDates(toDate) {
  const now = new Date();
  const difference = new Date(toDate).getTime() - now.getTime();

  if (difference <= 0) {
    clearInterval(timer);
  } else {
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);

    minutes %= 60;
    seconds %= 60;

    document.getElementById("minutes").innerHTML = `${minutes}`;
    document.getElementById("seconds").innerHTML = `${seconds}`;

    if (minutes === 0 && seconds === 0) {
      timeFuckedup = true;
    }
  }
}
