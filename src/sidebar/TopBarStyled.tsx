import { Button } from "@mui/material";
import styled from "styled-components";

export const TopBarButton = styled(Button)({
  backgroundColor: "#fff", // Initial background color
  color: "#000", // Initial text color
  "&:hover": {
    boxShadow: "0 5px 0 -1px #84c14b", // Color on hover
    color: "#84c14b", // Text color on hover
    borderRadius: 0,
  },
});

export const BostonTopBar = styled.div`
  padding: 8rem 5rem 0 5rem;
`;

export const SummaryContainer = styled.div`
  /* padding: 10rem 5rem 0 5rem; */
  /* background-color: aqua; */
`;
