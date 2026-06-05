import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

function NotificationCard({
  notification,
  viewed,
  markAsViewed,
}) {
  return (
    <Card
      onClick={() => markAsViewed(notification.ID)}
      sx={{
        mb: 2,
        cursor: "pointer",
        backgroundColor: viewed
          ? "#f5f5f5"
          : "#ffffff",
      }}
    >
      <CardContent>
        <Chip
          label={notification.Type}
          sx={{ mb: 2 }}
        />

        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {notification.Timestamp}
        </Typography>

        <Typography
          variant="caption"
          color={viewed ? "text.secondary" : "primary"}
        >
          {viewed ? "Viewed" : "New"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;