const axios = require("axios");
const logger = require("../logging_middleware/logger");

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJndXJ1cmF2dXRsYUBnbWFpbC5jb20iLCJleHAiOjE3ODA2MzgwMjcsImlhdCI6MTc4MDYzNzEyNywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjA5MzQ1MTc5LTdlZmEtNDEyYy04ZjgzLTZhZDE5N2U0NGE5ZSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InJhdnV0bGEgZ3VydSBicmFobWEgY2hhcmkiLCJzdWIiOiIxZTY1ODVlNC1jMzE1LTQ0N2QtOTg1MC04NTAxODk1MTZmMjMifSwiZW1haWwiOiJndXJ1cmF2dXRsYUBnbWFpbC5jb20iLCJuYW1lIjoicmF2dXRsYSBndXJ1IGJyYWhtYSBjaGFyaSIsInJvbGxObyI6IjIzYnExYTEyYTUiLCJhY2Nlc3NDb2RlIjoiUVFkRVl5IiwiY2xpZW50SUQiOiIxZTY1ODVlNC1jMzE1LTQ0N2QtOTg1MC04NTAxODk1MTZmMjMiLCJjbGllbnRTZWNyZXQiOiJDekZKZ2VDVEpwdnBKQ2FHIn0.fnaeZFKzIpoqfC2T4QQDGS-cMqRDM-VkOVsb10HJcvQ';

const TYPE_WEIGHT = {
  Placement: 3,
  Result: 2,
  Event: 1
};

async function fetchNotifications() {
  try {
    logger.info("Fetching notifications");

    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      }
    );

    return response.data.notifications;
  } catch (error) {
    logger.error(error.message);
    return [];
  }
}

function calculatePriority(notification) {
  const weight = TYPE_WEIGHT[notification.Type] || 0;

  const timestamp = new Date(notification.Timestamp).getTime();

  return {
    ...notification,
    priorityScore: weight * 10000000000000 + timestamp
  };
}

async function getTop10Notifications() {
  const notifications = await fetchNotifications();

  const prioritized = notifications.map(calculatePriority);

  prioritized.sort(
    (a, b) => b.priorityScore - a.priorityScore
  );

  return prioritized.slice(0, 10);
}

(async () => {
  const top10 = await getTop10Notifications();

  console.table(
    top10.map(n => ({
      Type: n.Type,
      Message: n.Message,
      Timestamp: n.Timestamp
    }))
  );
})();