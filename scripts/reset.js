console.log("reset.js loaded");

let resetButton = document.querySelector(".reset");
let resetCountLabel = document.getElementById("reset-count");
let boostPercentageLabel = document.getElementById("boost-percentage");
let resetCount = 0;
let boostPercentage = 0;

resetButton.addEventListener("click", function () {
    if (confirm("Are you sure you want to reset?")) {
        // Reset clicks
        clicks = 0;
        counter.innerHTML = "coins:" + clicks;

        // Reset upgrades
        for (let i = 0; i < upgrades.length; i++) {
            upgrades[i].cost = upgrades[i].originalCost;
            upgrades[i].owned = 0;
            updateAllUpgradesDisplay();
        }

        // apply boost
        resetCount++;
        boostPercentage = resetCount * 0.1;
        boostPercentageLabel.innerHTML = "Boost: " + boostPercentage + "%";
        resetCountLabel.innerHTML = "Reset Count: " + resetCount;

        alert("Reset complete. You have gained a " + boostPercentage + "% boost!");
    } else {
        alert("Reset canceled. Your progress remains unchanged.");
    }
});

// the idea of reseting works. but im not sure if the reset is applying. and also the CPS display is not updating.
//TODO: fix reset button