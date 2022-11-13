const Counter = require("../models/Counter");

var record;

const getCount = async (counterType) => {

  if (!Counter) {
    console.log("The counter model cannot be found.");
    return "Error: counter not found";
  }
  console.log(`Counter type: ${counterType}`);

  if (counterType === "user") {
    record = "6370899a43779d0c6b5dc7d4";
  } else if (counterType === "link") {
    record = "635a98d4b233907564ff06ae";
  }

  console.log(`Record: ${record}`);


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