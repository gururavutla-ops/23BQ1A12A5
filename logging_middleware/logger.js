const logs = [];

const logger = {
  info(message) {
    logs.push({
      level: "INFO",
      message,
      timestamp: new Date().toISOString(),
    });
  },

  error(message) {
    logs.push({
      level: "ERROR",
      message,
      timestamp: new Date().toISOString(),
    });
  },

  getLogs() {
    return logs;
  },
};

export default logger;