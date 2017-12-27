var today = new Date();

function dateWithSuffix(date) {
  switch (date % 10) {
    case 1:
      return String(date) + "st";
    case 2:
      return String(date) + "nd";
    case 3:
      return String(date) + "rd";
    default:
      return String(date) + "th";
  }
}

function formattedMonth(month) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month];
}

function formattedDay(day) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[day];
}

function formattedDate(today) {
  var day = formattedDay(today.getDay());
  var date = dateWithSuffix(today.getDate());
  var month = formattedMonth(today.getMonth());

  console.log("Today's date is " + day + ", " + month + " " + date);
}

function padZero(num) {
  return "0" + String(num);
}

function formatTime(date) {
  var hour = date.getHours();
  var mins = date.getMinutes();

  if (hour < 10) { hour = padZero(hour); }
  if (mins < 10) { mins = padZero(mins); }

  return String(hour) + ":" + String(mins);
}

formattedDate(today);

console.log(formatTime(today));
