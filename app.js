const express = require('express');
const app = express();
const PORT = 5000;
const { tasks } = require('./routes/tasks');
const { connectDB } = require('./db/connect');
require("dotenv").config();

app.use(express.static('./public'));

//routes
app.get('/', (req, res) => {
  res.status(200);
})

app.use(express.json());
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT);
    return `server started at ${PORT} :)` ;
  } catch (error) {
    return new Error(error);
  }
}

start()
  .then((res => console.log(res)))



