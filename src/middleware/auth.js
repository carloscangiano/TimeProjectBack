const logger = require('../utils/logger');

class Auth {
  verify = async(req, res, next) => {
    logger.info('verifying authentication')
    if(req.headers.authorization === 'mysecrettoken'){
      return next();
    } else {
      const err = new Error(403);
      err.status = 403;
      err.message = 'Unauthorized';
      return res.status(err.status).json(err.message);
    }
  }
}

module.exports = new Auth();