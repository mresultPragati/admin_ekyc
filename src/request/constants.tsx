export const createdDate = (timestamp: string) => {
  const date = new Date(timestamp);

  // Format the date as desired
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
};

export const allStatus = {
  verificationPending: "Verification pending",
  reviewPending: "Review pending",
  approved: "Approved",
  rejected: "Rejected",
};
