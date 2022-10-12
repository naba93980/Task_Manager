const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "name must be added"],
    maxLength: [20, "name cannot be more than 20 words"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports.TaskCollection = mongoose.model("TaskCollection", TaskSchema);
