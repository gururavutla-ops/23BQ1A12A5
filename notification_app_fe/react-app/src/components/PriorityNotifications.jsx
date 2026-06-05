import { Typography } from "@mui/material";
import NotificationCard from "./NotificationCard";
import { calculatePriority } from "../utils/priorityCalculator";

function PriorityNotifications({ notifications }) {
  const top10 = [...notifications]
    .map(calculatePriority)
    .sort((a, b) => b.priorityScore - a.priorityScore)
    .slice(0, 10);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Priority Notifications ({top10.length})
      </Typography>

      {top10.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </>
  );
}

export default PriorityNotifications;