/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let days = 0;
let weekly_cost = 0;
let daily_rate = 35;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function day_clicked(){
    if (this.classList.contains("clicked")){
        // this.classList.remove("clicked");
        // days--;
    } else {
        this.classList.add("clicked");
        days++;
    }
    calculate();
}


document.getElementById("monday").addEventListener("click",day_clicked)
document.getElementById("tuesday").addEventListener("click",day_clicked)
document.getElementById("wednesday").addEventListener("click",day_clicked)
document.getElementById("thursday").addEventListener("click",day_clicked)
document.getElementById("friday").addEventListener("click",day_clicked)


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearSelection = function(){
    let monday = document.getElementById("monday");
    monday.classList.remove("clicked");
    let tuesday = document.getElementById("tuesday");
    tuesday.classList.remove("clicked");
    let wednesday = document.getElementById("wednesday");
    wednesday.classList.remove("clicked");
    let thursday = document.getElementById("thursday");
    thursday.classList.remove("clicked");
    let friday = document.getElementById("friday");
    friday.classList.remove("clicked");
    days = 0;
    calculate();
}
clear_button = document.getElementById("clear-button");
document.getElementById("clear-button").addEventListener("click",clearSelection)




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_day = function(){
    daily_rate = 20;
    document.getElementById("half").classList.add("clicked");
    document.getElementById("full").classList.remove("clicked");
    calculate();
}
document.getElementById("half").addEventListener("click",half_day)

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full_day = function(){
    daily_rate = 35;
    document.getElementById("full").classList.add("clicked");
    document.getElementById("half").classList.remove("clicked");
    calculate();
}
document.getElementById("full").addEventListener("click",full_day)


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculate(){
    weekly_cost = daily_rate * days;
    document.getElementById("calculated-cost").innerHTML = weekly_cost;
}
