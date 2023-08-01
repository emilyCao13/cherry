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

var mins = document.getElementById("minutes");
var secs = document.getElementById("seconds");

function countdown() {
    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const total = 25;

    const interval = setInterval(() => {
        var seconds = 0;
        var minutes = 0;
        while (minutes <= 25) {
            
        }
        mins.innerText = formatNums(Math.floor(total));
        secs.innerText = formatNums(second % 60);
    },1000)
}

function formatNums(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}

countdown()