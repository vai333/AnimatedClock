const hoursElement = document.getElementById("hour_hand");
const minutesElement = document.getElementById("minute_hand");
const secondsElement = document.getElementById("second_hand");      // here we are accessing the DOM elements in variables for further 
const textElement = document.getElementById("text_element");        // manipulations.
let sound = document.getElementById("tick");

setInterval(function(){sound.play();},10);                          // ticking sound is given using this function

let showdate=true;
function animate()
{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    ampm = date.gethours>12? "AM":"PM";
    const hour = date.getHours() + date.getMinutes() / 60;
    const minute = date.getMinutes() + date.getSeconds() / 60; 
    const second = date.getSeconds();
    textElement.textContent = showdate ? `${day}-${month}-${year}`: `---${ampm}----`;
  hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);  // this how you rotate the hands of the clocks.
  secondsElement.setAttribute("transform", `rotate(${(360 / 60) * second})`);
    requestAnimationFrame(animate);                                            // we request the animate recursively here.
}
requestAnimationFrame(animate);         
textElement.addEventListener( "click" ,() =>{ showdate=!showdate; });