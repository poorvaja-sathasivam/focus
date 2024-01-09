// Variables
let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 1;
let breakTime = 5;

let seconds = "00"

// Display 
window.onload = ( ) =>{
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active')
}


// Start timer 
function start(){

    // Change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;

    // Change the time
    let workMinutes = workTime - 1;
    let breakMinuttes = breakTime - 1;

    breakCount = 0;

    // Countdown
    let timerFunction = () =>{
        // Change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // Start 
        seconds = seconds -1 ;

        if(seconds === 0){
            workMinutes = workMinutes - 1;
            if(workMinutes === -1){
                if(breakCount % 2 === 0){
                    //Start break
                    workMinutes = breakMinuttes;
                    breakCount++

                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                }
                else{
                    workMinutes = workTime;
                    breakCount++;
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                    
                }
            }
            seconds = 59;
        }

    }

    setInterval(timerFunction, 1000) // 1000 = 1s

    
}

document.getElementById('start').addEventListener('click', start);