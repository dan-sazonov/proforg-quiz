const compareDate = new Date();
// Time of countdown. Year, month, date, hours, minutes, seconds, ms

const timer = setInterval(function () {
  timeBetweenDates(compareDate);
}, 1000);


function timeBetweenDates(toDate) {
  const dateEntered = toDate.setMinutes(50, 30);
  console.log(dateEntered);
  const now = new Date();
  const difference = new Date(dateEntered).getTime() - now.getTime();

  if (difference <= 0) {
    clearInterval(timer);
  } else {
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);

    minutes %= 60;
    seconds %= 60;

    document.getElementById("minutes").innerHTML = `${minutes}`;
    document.getElementById("seconds").innerHTML = `${seconds}`;
  }
}
