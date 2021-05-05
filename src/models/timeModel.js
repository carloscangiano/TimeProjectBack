const logger = require("../utils/logger");

class TimeModel {
  constructor() {
    this.time = {
      properties: {
        epoch: {
          description: "The current server time, in epoch seconds, at time of processing the request.",
          type: "number",
          value: ""
        }
      },
      required: ["epoch"],
      type: "object"
     }
     
  }
  
  getServerTime = async () => {
    this.time.properties.epoch.value = Math.floor(new Date().getTime() / 1000);
    const response = {
      status: 200,
      result: this.time
    }
    return response;
  }
}

module.exports = new TimeModel();