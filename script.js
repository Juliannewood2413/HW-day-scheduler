//VARIABLES//
var taskInput = document.querySelectorAll(".task-text");
var taskSave = document.querySelectorAll(".btn");
var taskForm = document.getElementById("task-form");
var id = document.querySelectorAll("#save");
var hour =  document.querySelectorAll("#text");
var current = document.querySelector("#currentDay")
var currentHour = moment().format('HH'); //gives us the hour variable to use for checkTime
var hourEl = document.querySelectorAll("#hour");

//FUNCTIONS//
//CURRENT DATE AND TIME//

let m = moment().format('LLLL') //uses the moment.js CDN to display current date content
// console.log(m)
current.textContent = m
    
hourEl.forEach( element => { // for each hour element, check if the time is past, present, or future, and change color of row accordingly
    var checkTime = $(element).attr("data-id")
    if (checkTime < parseInt(currentHour)){
        element.setAttribute("class", "past")
    }else if(checkTime === currentHour){
        element.setAttribute("class", "present")
    }else {
        element.setAttribute("class", "future")
    }

 
})
//USER TASKS FUNCTIONS//
function userFormInput() { //pull user input from HTML
 var infoToSave = this.parentElement.previousElementSibling.children[0].children[0].value
 localStorage.setItem(this.parentElement.previousElementSibling.previousElementSibling.textContent, infoToSave)
}
  
id.forEach( button => {
    button.addEventListener("click", userFormInput) //on click, run the function userFormInput
})

function loadUserDate() { //for each hour, data will be the text value of the form content
    hour.forEach( text => {
        console.log(text.parentElement.parentElement.previousElementSibling.textContent)
        var data = localStorage.getItem(text.parentElement.parentElement.previousElementSibling.textContent)
        console.log(data)
        if (data){
            text.value = data
        }
    })
}
loadUserDate();

