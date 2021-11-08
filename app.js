function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();


// const getCurrentTimeDate = () => {
//     let currentTimeDate = new Date();

//     var weekday = new Array(7);
//     weekday[0] = "SUN";
//     weekday[1] = "MON";
//     weekday[2] = "TUE";
//     weekday[3] = "WED";
//     weekday[4] = "THU";
//     weekday[5] = "FRI";
//     weekday[6] = "SAT";

//     var month = new Array();
//     month[0] = "JAN";
//     month[1] = "FEB";
//     month[2] = "MAR";
//     month[3] = "APR";
//     month[4] = "May";
//     month[5] = "JUN";
//     month[6] = "JUL";
//     month[7] = "AUG";
//     month[8] = "SEP";
//     month[9] = "OCT";
//     month[10] = "NOV";
//     month[11] = "DEC";

//     var hours   =  currentTimeDate.getHours();

//     var minutes =  currentTimeDate.getMinutes();
//     minutes = minutes < 10 ? '0'+minutes : minutes;

//      var AMPM = hours >= 12 ? 'PM' : 'AM';

//     if(hours === 12){
//         hours=12;

//     }else{

//         hours = hours%12;

//     }

//     var currentTime = `${hours}:${minutes}${AMPM}`;
//     var currentDay = weekday[currentTimeDate.getDay()];

//     var currentDate  = currentTimeDate.getDate();
//     var currentMonth = month[currentTimeDate.getMonth()];
//     var CurrentYear = currentTimeDate.getFullYear();

//     var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`;


//     document.getElementById("time").innerHTML = currentTime;
//     document.getElementById("day").innerHTML = currentDay;
//     document.getElementById("date").innerHTML = fullDate;

//     setTimeout(getCurrentTimeDate, 500);

// }
// getCurrentTimeDate();



//   Task#2 - სლაიდერები

const slides = document.querySelectorAll('.slide-item');
const slidesLength = slides.length;
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const stopBtn = document.querySelector('#stop-sliding');
const startBtn = document.querySelector('#start-sliding');
let activeIndex = 0;

function renderSlider() {
    slides.forEach((element, index) => {
      element.style.transform = `translateX(${100 * (index - activeIndex % slidesLength)}%)`;
    })
  };

  function nextSlide(){
    if (activeIndex=== (slidesLength - 1)){
        activeIndex = 0;
    }else {
        activeIndex = activeIndex + 1;
    }
    renderSlider();
};
function prevSlide(){
    if (activeIndex=== 0){
        activeIndex = slidesLength - 1;
    }else {
        activeIndex = activeIndex - 1;
    }
    renderSlider();
};
renderSlider();

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// იგივე გადმოტანილი
document.addEventListener('keydown', (e) => {
    // console.log(e.code);
if(e.code === 'ArrowRight'){
    nextSlide();
}
if(e.code === 'ArrowLeft'){
    prevSlide();
}
});
    
// IntervalID

let intervalId = null;
function startAutoSliding() {
if(!intervalId){
    intervalId = setInterval(() => {
    nextSlide();
    }, 3000);
}
}

// ავტოსლაიდინგის დამატება 
const mouseMove = document.querySelector(".slide-area");
function stopAutoSliding (){
    console.log(stopAutoSliding)
    if (startAutoSliding) {
        clearInterval(intervalId);
        intervalId = null;
    }
}


mouseMove.addEventListener('mouseenter', stopAutoSliding);
mouseMove.addEventListener('mouseleave', startAutoSliding);

// Task #3