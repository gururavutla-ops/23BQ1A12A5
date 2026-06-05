const logs = [];

const logger = {
  info(message) {
    logs.push({
      level: "INFO",
      message
    });
  },

  error(message) {
    logs.push({
      level: "ERROR",
      message
    });
  },

  getLogs() {
    return logs;
  }
};

module.exports = logger;