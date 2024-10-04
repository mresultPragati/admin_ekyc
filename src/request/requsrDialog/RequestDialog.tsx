import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const RequestDialog = ({
  data,
  setSelectedRequest,
}: // open,
// setOpen,
any) => {
  const handleClose = () => {
    setSelectedRequest({});
    // setOpen(false);
  };

  return (
    <Dialog
      maxWidth="xl"
      //   PaperProps={{
      //     style: {
      //       overflowX: "hidden",
      //     },
      //   }}
      open={data?.isDialogOpen}
      onClose={handleClose}
    >
      <DialogTitle className="mb-3">
        <IconButton onClick={handleClose}>
          <ArrowBackIcon />
        </IconButton>
        KYC Request Details
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {/* Left Side Table */}
          <Grid item xs={7}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead></TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Request ID</TableCell>
                    <TableCell>{data?.item?.id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Reference ID</TableCell>
                    <TableCell>{data?.item?.referenceId}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>{data?.item?.customerName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Customer Identifier</TableCell>
                    <TableCell>{data?.item?.customerIdentifier}</TableCell>
                  </TableRow>

                  {/* <TableRow>
                    <TableCell>Auditor Remarks</TableCell>
                    <TableCell>{data?.item?.auditorRemarks || "N/A"}</TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* Right Side Table */}
          <Grid item xs={5}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead></TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Workflow Name</TableCell>
                    <TableCell>{data?.item?.workflowName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Created At</TableCell>
                    <TableCell>
                      {new Date(
                        data?.item?.accessToken?.createdAt
                      ).toLocaleString()}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>{data?.item?.status}</TableCell>
                  </TableRow>
                  {/* <TableRow>
                    <TableCell>Requested Actions</TableCell>
                    <TableCell>Digilocker x 1</TableCell>
                  </TableRow> */}
                  {/* <TableRow>
                    <TableCell>Data Analysis By Digio</TableCell>
                    <TableCell>Not Done</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ids Found</TableCell>
                    <TableCell>{data?.item?.idsFound || "N/A"}</TableCell>
                  </TableRow> */}
                  {/* <TableRow>
                    <TableCell>Face Matches</TableCell>
                    <TableCell>Matched: 0, Not Matched: 0</TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </TableContainer>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                disabled={data?.item?.status === "requested"}
                variant="contained"
                className="mt-5 me-3"
              >
                Approve
              </Button>
              <Button
                disabled={data?.item?.status === "requested"}
                variant="contained"
                color="error"
                className="mt-5"
              >
                Reject
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      {/* <DialogActions>
        <Button className="m-3" onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

// import {
//   Box,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Typography,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";

// export const RequestDialog = ({
//   data,
//   setSelectedRequest,
//   open,
//   setOpen,
// }: any) => {
//   const handleClose = () => {
//     setSelectedRequest({});
//     setOpen(false);
//   };

//   console.log("setSelectedRequest", setSelectedRequest);

//   return (
//     <>
//       <Dialog maxWidth={"lg"} open={open} onClose={handleClose}>
//         <DialogTitle>Review Request</DialogTitle>
//         <DialogContent>
//           {/* <DialogContentText>Review Request</DialogContentText> */}
//           <Box>
//             <Typography variant="body1">
//               <strong>ID:</strong> {data?.item?.id}
//             </Typography>
//             <Typography variant="body1">
//               <strong>Customer Identifier:</strong> {data?.item?.customerIdentifier}
//             </Typography>
//             <Typography variant="body1">
//               <strong>Status:</strong> {data?.item?.status}
//             </Typography>
//             <Typography variant="body1">
//               <strong>Reference ID:</strong> {data?.item?.referenceId}
//             </Typography>
//             <Typography variant="body1">
//               <strong>Customer Name:</strong> {data?.item?.customerName}
//             </Typography>
//             <Typography variant="body1">
//               <strong>Workflow Name:</strong> {data?.item?.workflowName}
//             </Typography>
//             <Typography variant="body1">
//               <strong>Created At:</strong>{" "}
//               {new Date(data?.item?.accessToken?.createdAt).toLocaleString()}
//             </Typography>
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };
