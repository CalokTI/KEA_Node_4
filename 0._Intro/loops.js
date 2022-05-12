//don't use for loops because...
//overly verbose
//error prone (index out of bounds in java)
//is not functional

//----

const carBatteries = [0.322332, 0.6343, 0.23232, 0.6543]

//task add a charge to each battery

const chargedCarBatteries = carBatteries.map(battery => battery + 1);

console.log(carBatteries);
console.log(chargedCarBatteries);

//place each car and its battery in a separate indexed charger
//no need to return a new array so forEach is allowed
//task how do I get index

carBatteries.forEach((battery, index) => {
    console.log(battery, "you go in charger ", index + 1)
})

//filter out the batteries that have more than 50% charge

const drainedBatteries = carBatteries.filter(battery => battery < 0.5)
console.log(drainedBatteries);