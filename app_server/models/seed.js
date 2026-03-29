const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

mongoose.connect("mongodb://127.0.0.1:27017/travlr");

require("./travlr");
const Trip = mongoose.model("trips");

const trips = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../data/trips.json"), "utf8"),
);

const seedDB = async () => {
  try {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    console.log("Database seeded!");
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
};

seedDB();
