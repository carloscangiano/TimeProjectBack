const TimeSV = require("../models/timeModel");
const logger = require('../utils/logger');

class TimeController {
  /**
   * @description The current server time, in epoch
   *  seconds, at time of processing the request.
   * @return {object} Current server time
   **/
   getServerTime = async (req, res) => {
    logger.info('GET: /time');
    let response = await TimeSV.getServerTime();
    return res.status(response.status).json(response.result);
  };
}

module.exports = new TimeController();