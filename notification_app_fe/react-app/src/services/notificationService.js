import axios from "axios";

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJndXJ1cmF2dXRsYUBnbWFpbC5jb20iLCJleHAiOjE3ODA2NDE4NDAsImlhdCI6MTc4MDY0MDk0MCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjkzMWZlZmMwLTRjNGEtNGNlZi05MDNkLWFmNWFjNWQ2ZmFkYSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InJhdnV0bGEgZ3VydSBicmFobWEgY2hhcmkiLCJzdWIiOiIxZTY1ODVlNC1jMzE1LTQ0N2QtOTg1MC04NTAxODk1MTZmMjMifSwiZW1haWwiOiJndXJ1cmF2dXRsYUBnbWFpbC5jb20iLCJuYW1lIjoicmF2dXRsYSBndXJ1IGJyYWhtYSBjaGFyaSIsInJvbGxObyI6IjIzYnExYTEyYTUiLCJhY2Nlc3NDb2RlIjoiUVFkRVl5IiwiY2xpZW50SUQiOiIxZTY1ODVlNC1jMzE1LTQ0N2QtOTg1MC04NTAxODk1MTZmMjMiLCJjbGllbnRTZWNyZXQiOiJDekZKZ2VDVEpwdnBKQ2FHIn0.1VNyZjeMeuHy1XkLpeTYlzIZWVDQHXsZZ6n2-jh5GI8';

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export const fetchNotifications = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data.notifications;
};