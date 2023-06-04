let clicker = document.getElementById("clicker");
let counter = document.getElementById("clicks");
let clicks = 0;

clicker.addEventListener("click", function () {
    clicks++;
    //update the counter
    counter.innerHTML = 'coins:' + clicks;

}
);


//TODO create a function that will update a CPS realtime