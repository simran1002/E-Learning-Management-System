const errorHandlingMiddleware = (err, req, res, next) => {
    console.error(err.stack);
  
    // Send meaningful error response to clients
    res.status(500).json({
      error: 'Internal Server Error',
      message: err.message
    });
  };
  
  module.exports = errorHandlingMiddleware;
  