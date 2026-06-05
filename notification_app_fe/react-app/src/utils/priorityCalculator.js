export const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const calculatePriority = (notification) => {
  const weight = weights[notification.Type] || 0;

  return {
    ...notification,
    priorityScore:
      weight * 10000000000000 +
      new Date(notification.Timestamp).getTime(),
  };
};