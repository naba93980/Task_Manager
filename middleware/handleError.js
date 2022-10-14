const { CustomError } = require("../error/custom-error");


const errorHandler = (error, req, res, next) => {
  if (error instanceof CustomError) {
    res.status(error.statusCode).json({ mssg: error.message });
    return;
  }
  res.status(500).json({ mssg: 'something went wrong' });
};

module.exports = errorHandler;
