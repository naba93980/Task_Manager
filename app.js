const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const { tasks } = require('./routes/tasks');
const { connectDB } = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/handleError')
require("dotenv").config();

app.use(express.static('./public'));

app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);

app.use(errorHandler);

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



