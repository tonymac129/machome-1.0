

setInterval(function(){
  var time = new Date();
  const text = document.getElementById("text");
  const date = document.getElementById("date");
  const greeting = document.getElementById("greeting");
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var sdate = time.getDate().toString();
  var month = time.getMonth()+1;
  var smonth = month.toString();
  var day = time.getDay();
  var syear = time.getFullYear().toString();
  var sday = smonth+"-"+sdate+"-"+syear;
  var ssecond = second.toString().padStart(2,"0");
  var shour = hour.toString().padStart(2, "0"); // Add leading zero if hour is single digit
  var sminute = minute.toString().padStart(2, "0"); // Add leading zero if minute is single digit
  var current = shour + ":" + sminute+":"+ssecond;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let sgreeting; 
  if (shour>=12) {
    sgreeting = "Good afternoon, Tony!";
  } else {
    sgreeting = "Good morning, Tony!";
  }

var dayName = days[day];

  text.innerText = current;
  greeting.innerText = sgreeting;
  date.innerText = sday+", "+dayName;
}, 1000);

