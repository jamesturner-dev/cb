const Counter = require("../models/Counter");

const getCount = async () => {
  const record = "635a98d4b233907564ff06ae";
  const counter = await Counter.findById(record);

  if (!counter) {
    console.log("No counter found.");
    return "Error: counter not found";
  }

  let { count } = counter;
  count += 1;
  const update = { count: count };
  let result = await Counter.findByIdAndUpdate(record, update);

  if (!result) {
    console.log("Counter not updated.");
    return "Error - Update failed";
  }

  return count;
};

module.exports = getCount;