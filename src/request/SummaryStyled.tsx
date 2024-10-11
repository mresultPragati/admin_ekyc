import styled from "styled-components";

// Define your colors
export const statusColors: any = {
  verificationPending: "#FF9800",
  reviewPending: "#face01",
  kycPending: "#03A9F4",
  approved: "#4CAF50",
  rejected: "#F44336",
};

// Create a styled component that accepts a 'status' prop
export const StatusTag = styled.div<{ status: string }>`
  color: ${(props) =>
    props.status || "#9E9E9E"}; // default to grey if no status found
  font-weight: bold;
`;
