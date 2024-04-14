const batteryBatches = [4, 5, 3, 9, 10]; 

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); // Should log the sum of all the assembled batteries

