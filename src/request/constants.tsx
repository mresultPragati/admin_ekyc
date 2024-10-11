export const createdDate = (timestamp: string) => {
  const date = new Date(timestamp);

  // Format the date as desired
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return formattedDate;
};

export const allStatus = {
  verificationPending: "Verification pending",
  reviewPending: "Review pending",
  approved: "Approved",
  rejected: "Rejected",
};

export const sortByCreatedAt = (data: any[]) => {
  return data.sort((a, b) => {
    const dateA = new Date(a?.accessToken?.createdAt).getTime();
    const dateB = new Date(b?.accessToken?.createdAt).getTime();
    return dateB - dateA; // Sort in descending order
  });
};
