const mongoose = require("mongoose");

const connectionString =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000";

mongoose
  .connect(connectionString)
  .then(() => console.log("connected"))
  .catch((err) => console.log("connection failed -  " + err));

mongoose.disconnect();
