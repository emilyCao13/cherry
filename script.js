function openNav() {
    document.getElementById("toDo").style.width = "300px";
}
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("toDo").style.width = "0";
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
var timeLimitInMinutes = 1;
var timeLimitInSeconds = timeLimitInMinutes * 60;
var timerElement = document.getElementById("time");
var startButton = document.getElementById("startBtn");
var stopButton = document.getElementById("stopBtn");
var timerInterval;

function countdown() {
    startButton.onclick = alertMe();
    startButton.hidden = true;
    stopButton.hidden = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    startButton.hidden = false;
    stopButton.hidden = true;
}

function alertMe() {
    timerInterval = setInterval(function(){
        timeLimitInSeconds--;
    var minutes = Math.floor(timeLimitInSeconds / 60);
    var seconds = timeLimitInSeconds % 60;

    if (timeLimitInSeconds < 0) {
        timerElement.textContent = '00:00';
        clearInterval(timerInterval);
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
}

