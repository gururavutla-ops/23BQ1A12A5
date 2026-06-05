import { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Pagination,
} from "@mui/material";
import { fetchNotifications } from "../services/notificationService";
import NotificationCard from "../components/NotificationCard";
import PriorityNotifications from "../components/PriorityNotifications";
import FilterBar from "../components/FilterBar";

function Dashboard() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [viewed, setViewed] = useState(new Set());

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  const markAsViewed = (id) => {
    setViewed((prev) => new Set([...prev, id]));
  };

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (notification) => notification.Type === filter
        );

  const notificationsPerPage = 5;

  const startIndex =
    (page - 1) * notificationsPerPage;

  const paginatedNotifications =
    filteredNotifications.slice(
      startIndex,
      startIndex + notificationsPerPage
    );

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {/* All Notifications */}
      <Grid size={8}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom>
            All Notifications ({filteredNotifications.length})
          </Typography>

          <FilterBar
            filter={filter}
            setFilter={setFilter}
          />

          {paginatedNotifications.map((notification) => (
            <NotificationCard
              key={notification.ID}
              notification={notification}
              viewed={viewed.has(notification.ID)}
              markAsViewed={markAsViewed}
            />
          ))}

          <Pagination
            sx={{ mt: 2 }}
            count={Math.ceil(
              filteredNotifications.length /
                notificationsPerPage
            )}
            page={page}
            onChange={(event, value) =>
              setPage(value)
            }
          />
        </Paper>
      </Grid>

      {/* Priority Notifications */}
      <Grid size={4}>
        <Paper sx={{ p: 2 }}>
          <PriorityNotifications
            notifications={notifications}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;