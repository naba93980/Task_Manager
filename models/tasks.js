const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: { type: String },
  completed: { type: Boolean },
});

module.exports.TaskCollection = mongoose.model("TaskCollection", TaskSchema);
