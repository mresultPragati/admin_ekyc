import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllRequests, getDataByRequestId } from "../api/ApiServices";
import CircleLoader from "../reusableComponet/loader/CircleLoader";
import { statusColors, StatusTag } from "./SummaryStyled";
import { allStatus, createdDate } from "./constants";
import { RequestDialog } from "./requsrDialog/RequestDialog";
import PaginationElement from "../reusableComponet/pagination/PaginationElement";


export const KycRequest = () => {
  const [requestData, setRequestData] = useState<unknown[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showLoader, setShowLoader] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState({
    isDialogOpen: false,
    item: {},
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // setRequestData(data);
    getSummaryList();
  }, []);

  const getSummaryList = async () => {
    setShowLoader(true);
    const summaryList = await getAllRequests();
    console.log("getLsit", summaryList);
    if (summaryList) {
      setShowLoader(false);
      setRequestData(summaryList);
    } else {
      setShowLoader(false);
    }
  };

  const handleRequestedData = async (reqId: string) => {
    const resp = await getDataByRequestId(reqId);
    if (resp) setSelectedRequest({ isDialogOpen: true, item: resp });
  };

  return (
    <>
      {showLoader && <CircleLoader />}

      <div className="mt-5">
        <Typography className="mb-5" variant="h4" align="center" gutterBottom>
          Request Summary
        </Typography>

        <Box sx={{ width: "100%" }}>
          <TableContainer className="p5">
            <Table aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    Sr. No.
                  </TableCell>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    Customer Detail
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Created At
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Status
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requestData
                  // ?.reverse()
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((item: any, index: number) => {
                    return (
                      <TableRow hover key={index}>
                        <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                        <TableCell>
                          <h6>{item?.customerIdentifier}</h6>
                          <small>{item?.id}</small>
                          <br />
                          <small>{item?.referenceId}</small>
                        </TableCell>
                        <TableCell>
                          {createdDate(item?.accessToken?.createdAt)}
                        </TableCell>
                        {/* <TableCell>{item?.accessToken?.createdAt}</TableCell> */}
                        <TableCell>
                          {item?.status === "requested" ? (
                            <StatusTag
                              status={statusColors?.verificationPending}
                            >
                              {allStatus?.verificationPending}
                            </StatusTag>
                          ) : (
                            <StatusTag status={statusColors?.reviewPending}>
                              {allStatus?.reviewPending}
                            </StatusTag>
                          )}
                        </TableCell>
                        <TableCell>
                          <Button onClick={() => handleRequestedData(item?.id)}>
                            Review
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          {(requestData || (requestData as unknown[])?.length > 0) && (
            <PaginationElement
              count={requestData?.length}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              page={page}
              setPage={setPage}
            />
          )}
        </Box>
      </div>

      <RequestDialog
        data={selectedRequest}
        setSelectedRequest={setSelectedRequest}
        // selectedRequest={selectedRequest}
        // open={open}
        // setOpen={setOpen}
      />
    </>
  );
};
