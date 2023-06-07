console.log("main.js loaded");

// Get DOM elements
let clicker = document.getElementById("clicker-button");
let counter = document.getElementById("coins");

// Initialize click counter
let clicks = 0;

// Increment click counter and update display
function increment() {
    clicks++;
    counter.innerHTML = 'coins:' + clicks;
}

//add clicking sound

let audio = new Audio('./mixkit-arcade-game-jump-coin-216.wav');

clicker.addEventListener('click', function () {
    audio.play();
});




// Define upgrades
let upgrades = [
    {
        name: "upgrade1",
        cost: 10,
        coinsPerSecond: 1,
        owned: 0,
        originalCost: 10
    },
    {
        name: "upgrade2",
        cost: 100,
        coinsPerSecond: 10,
        owned: 0,
        originalCost: 100
    },
    {
        name: "upgrade3",
        cost: 1000,
        coinsPerSecond: 100,
        owned: 0,
        originalCost: 1000
    },
    {
        name: "upgrade4",
        cost: 10000,
        coinsPerSecond: 1000,
        owned: 0,
        originalCost: 10000
    },
    {
        name: "upgrade5",
        cost: 100000,
        coinsPerSecond: 10000,
        owned: 0,
        originalCost: 100000
    },
    {
        name: "upgrade6",
        cost: 1000000,
        coinsPerSecond: 100000,
        owned: 0,
        originalCost: 1000000
    },
    {
        name: "upgrade7",
        cost: 10000000,
        coinsPerSecond: 1000000,
        owned: 0,
        originalCost: 10000000
    },
    {
        name: "upgrade8",
        cost: 100000000,
        coinsPerSecond: 10000000,
        owned: 0,
        originalCost: 100000000
    }
];
// Buy an upgrade
function buyUpgrade(index) {
    let upgrade = upgrades[index];
    if (clicks >= upgrade.cost) {
        // Deduct coins and increase owned count
        clicks -= upgrade.cost;
        upgrade.owned++;
        // Increase upgrade cost
        upgrade.cost = Math.round(upgrade.cost * 1.1);
        updateUpgradeDisplay(index);
        audio.play();
    }
}

// Update the display of a specific upgrade
function updateUpgradeDisplay(index) {
    let upgrade = upgrades[index];
    let upgradeButton = document.getElementById(`upgrade${index + 1}-button`);
    let costDisplay = document.getElementById(`upgrade${index + 1}-cost`);
    let ownedDisplay = document.getElementById(`upgrade${index + 1}-owned`);
    let cpsDisplay = document.getElementById(`upgrade${index + 1}-cps`);

    // Assign click event to upgrade button
    upgradeButton.onclick = function () {
        buyUpgrade(index);
    };

    // Update display text
    costDisplay.innerHTML = "Cost: " + upgrade.cost;
    ownedDisplay.innerHTML = "Owned: " + upgrade.owned;
    cpsDisplay.innerHTML = "Coins per second: " + upgrade.coinsPerSecond;
}

// Update the display of all upgrades
function updateAllUpgradesDisplay() {
    for (let i = 0; i < upgrades.length; i++) {
        updateUpgradeDisplay(i);
    }
}

// Update the total coins per second
function getTotalCPS() {
    let totalCPS = 0;
    for (let i = 0; i < upgrades.length; i++) {
        totalCPS += upgrades[i].coinsPerSecond * upgrades[i].owned;
    }
    return totalCPS;
}

// Update the click counter every second
setInterval(function () {
    clicks += getTotalCPS();
    counter.innerHTML = "coins: " + clicks;
}, 1000);

// Initial display update
updateAllUpgradesDisplay();