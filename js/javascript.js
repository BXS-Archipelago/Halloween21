const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links')
})


// Countdown Timer

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const smlhdr = document.querySelector('.sml-hdr');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4')

// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 10, 31, 00, 01, .0);
//const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 15, 0)
let futureDate = new Date("October 31, 2021 00:01:01")
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

smlhdr.textContent =`Halloween : ${weekday} ${date} ${month} ${year} 0${hours}:0${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
const today = new Date().getTime();
const t = futureTime -today;

// 1s = 1000s
//1m = 60s
//1hr = 60min
//1d = 24hr

// value in ms
 const oneDay = 24*60*60*1000
 const oneHour = 60*60*1000
 const oneMinute = 60*1000
// calculate all values
let days = t / oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour)/ oneMinute)
let seconds = Math.floor((t % oneMinute)/ 1000)

// set values array;
const values = [days, hours, minutes, seconds];
function format(item) {
    if(item < 10){
        return item = `0${item}`
    }
    return item
}

items.forEach(function(item, index){
    item.innerHTML = values[index]
    })

if(t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Halloween is now dead like a Zombie</h4>`
}
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime()