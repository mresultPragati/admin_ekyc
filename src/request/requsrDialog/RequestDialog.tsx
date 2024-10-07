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
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getDataByRequestId, sendStatusRequest } from "../../api/ApiServices";
import { AlertMessage } from "../../reusableComponet/ALertMessage";
import { allStatus } from "../constants";

export const RequestDialog = ({
  data,
  setSelectedRequest,
}: // open,
  // setOpen,
  any) => {
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });

  const handleClose = () => {
    setSelectedRequest({});
    // setOpen(false);
  };

  const manageRequest = async (status: string) => {
    const resp: any = sendStatusRequest(data?.item?.id, status);
    console.log("RESP", resp);
    if (resp) {
      await getDataByRequestId(data?.item?.id)
      setAlertMsg({
        msg: "Status changed successfully",
        severity: "success",
      });
    }
  };
  console.log("data?.item", data);

  return (
    <>
      <AlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />

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
                      <TableCell>{data?.item?.reference_id}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Customer Name</TableCell>
                      <TableCell>{data?.item?.customer_name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Customer Identifier</TableCell>
                      <TableCell>{data?.item?.customer_identifier}</TableCell>
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
                      <TableCell>Aadhaar Number</TableCell>
                      <TableCell>
                        {data?.item?.request_details?.["aadhar number"]}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Workflow Name</TableCell>
                      <TableCell>{data?.item?.workflow_name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Created At</TableCell>
                      <TableCell>
                        {new Date(data?.item?.created_at).toLocaleString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Status</TableCell>
                      <TableCell>
                        {
                          data?.item?.status === "requested"
                            ? allStatus?.verificationPending :
                            data?.item?.status === "approved" ?
                              allStatus.approved :
                              data?.item?.status === "rejected" ?
                                allStatus.rejected
                                : allStatus?.reviewPending}
                      </TableCell>
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
                  onClick={() => manageRequest("APPROVED")}
                  // disabled={data?.item?.status === "requested"}
                  variant="contained"
                  className="mt-5 me-3"
                >
                  Approve
                </Button>
                <Button
                  onClick={() => manageRequest("REJECTED")}
                  // disabled={data?.item?.status === "requested"}
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
    </>
  );
};
