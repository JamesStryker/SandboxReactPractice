import React from "react";

var greeting = "";
var dt = new Date();
var h = dt.getHours(),
  m = dt.getMinutes();
var time = h > 12 ? h - 12 + ":" + m + " PM" : h + ":" + m + " AM";
//day
if (h < 12) {
  greeting = "Good Morning";
}
//afternoon
else if (h < 18) {
  greeting = "Good Afternoon";
}
//night
else {
  greeting = "Good Night";
}

function Heading() {
  return (
    <div>
      <h1>{greeting}</h1>
      <h2>It is now {time}</h2>
    </div>
  );
}

export default Heading;
