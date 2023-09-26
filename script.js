//variables for timer
var pomodoros = 0;
var timerState = 0; //0 means full task length, 1 is short break, 2 is long break
var fullTimer = 0;
//variables for settings
var taskTime = 1;
var shortBreakTime = 1;
var longBreakTime = 1;


function openNav() {
    document.getElementById("toDo").style.width = "300px";
    document.getElementById("openbtn").hidden = true;
}
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("toDo").style.width = "0";
    document.getElementById("openbtn").hidden = false;
}

function openSet() {
    document.getElementById("settings").style.height = "200px";
}

function closeSet() {
    document.getElementById("settings").style.height = "0px";
}

function reset() {
    var resetAmount = 0;
    if (timerState == 0) {
        resetAmount = fullTimer;
    } else if (timerState == 1) {
        resetAmount = shortBreakTime;
    } else {
        resetAmount = longBreakTime;
    }
    timeLimitInSeconds = resetAmount*60;
    clearInterval(timerInterval);
    if (resetAmount < 10) {
        resetAmount = '0' + resetAmount;
    }
    timerElement.textContent = resetAmount + ':00';
    startButton.hidden = false;
    stopButton.hidden = true;
    
}
function newTask() {
    const task = document.getElementById("inputTask");
    const listHold = document.getElementById("listContainer");
    /*check if nothing is written */
    let li = document.createElement("li");
    li.innerHTML = task.value;
    listHold.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    task.value = "";
}

document.getElementById("listContainer").addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
         /* add the item to the finished list too */
    }
});

//Figured out just reword and whatever
var timeLimitInMinutes = taskTime;
var timeLimitInSeconds = timeLimitInMinutes * 60;
var timerElement = document.getElementById("time");
var startButton = document.getElementById("startBtn");
var stopButton = document.getElementById("stopBtn");
var timerInterval;

function countdown() {
    timerInterval = setInterval(function(){
        fullTimer = timeLimitInMinutes;
        timeLimitInSeconds--;
        var minutes = Math.floor(timeLimitInSeconds / 60);
        var seconds = timeLimitInSeconds % 60;

        if (timeLimitInSeconds < 0) {
            timerElement.textContent = '00:00';
            startButton.hidden = false;
            stopButton.hidden = true;
            clearInterval(timerInterval);
            if (timerState == 0) { //just finished a pomodoro
                pomodoros += 1;
                if (pomodoros == 1) {   //when finished first pomodoro
                    if (shortBreakTime < 10) {
                        timerElement.textContent = '0' + shortBreakTime + ':00';
                    } else {
                        timerElement.textContent = shortBreakTime + ':00';
                    }

                    timeLimitInSeconds = shortBreakTime*60;
                    timerState = 1;
                    document.getElementById("progress").style.width = "25%";
                    document.getElementById("progress").innerHTML = "25%";
                    document.getElementById("pomoLabel").hidden = true;
                    document.getElementById("shortLabel").hidden = false;
                } else if (pomodoros == 2) { //when finished second pomodoro
                    if (shortBreakTime < 10) {
                        timerElement.textContent = '0' + shortBreakTime + ':00';
                    } else {
                        timerElement.textContent = shortBreakTime + ':00';
                    }

                    timeLimitInSeconds = shortBreakTime*60;
                    timerState = 1;
                    document.getElementById("pomoLabel").hidden = true;
                    document.getElementById("shortLabel").hidden = false;
                    document.getElementById("progress").style.width = "50%";
                    document.getElementById("progress").innerHTML = "50%";
                } else if (pomodoros == 3) { //when finished third pomodoro
                    if (shortBreakTime < 10) {
                        timerElement.textContent = '0' + shortBreakTime + ':00';
                    } else {
                        timerElement.textContent = shortBreakTime + ':00';
                    }

                    timeLimitInSeconds = shortBreakTime*60;
                    timerState = 1;
                    document.getElementById("pomoLabel").hidden = true;
                    document.getElementById("shortLabel").hidden = false;
                    document.getElementById("progress").style.width = "75%";
                    document.getElementById("progress").innerHTML = "75%";
                } else if (pomodoros== 4) { //if finished a full cycle, do long break
                    if (longBreakTime < 10) {
                        timerElement.textContent = '0' + longBreakTime + ':00';
                    } else {
                        timerElement.textContent = longBreakTime + ':00';
                    }

                    timeLimitInSeconds = longBreakTime*60;
                    document.getElementById("progress").style.width = "100%";
                    document.getElementById("progress").innerHTML = "100%";
                    document.getElementById("pomoLabel").hidden = true;
                    document.getElementById("longLabel").hidden = false;
                    timerState = 2;
                    pomodoros = 0;
                } 
            } else if (timerState == 1) {
                if (taskTime < 10) {
                    timerElement.textContent = '0' + taskTime + ':00';
                } else {
                    timerElement.textContent = taskTime + ':00';
                }

                timeLimitInSeconds = taskTime*60;
                document.getElementById("pomoLabel").hidden = false;
                document.getElementById("shortLabel").hidden = true;
                timerState = 0;
            } else if (timerState == 2) { //just took a break, go back to pomodor time
                if (taskTime < 10) {
                    timerElement.textContent = '0' + taskTime + ':00';
                } else {
                    timerElement.textContent = taskTime + ':00';
                }

                timeLimitInSeconds = taskTime*60;
                document.getElementById("pomoLabel").hidden = false;
                document.getElementById("longLabel").hidden = true;
                timerState = 0;
                document.getElementById("progress").style.width = "0%";
                document.getElementById("progress").innerHTML = "0%";
            }
            //add code to check what stage we're at and switch minutes to break time
            //add code to check how many pomodoros have been completed, then update the progress bar
            return;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        timerElement.textContent = minutes + ':' + seconds;
    },1000);
    startButton.hidden = true;
    stopButton.hidden = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    startButton.hidden = false;
    stopButton.hidden = true;
}

