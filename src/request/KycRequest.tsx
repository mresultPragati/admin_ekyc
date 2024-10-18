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
import { Search, Clear } from "@mui/icons-material";
import { getAllRequests, getDataByRequestId } from "../api/ApiServices";
import CircleLoader from "../reusableComponet/loader/CircleLoader";
import { statusColors, StatusTag } from "./SummaryStyled";
import { allStatus, createdDate, sortByCreatedAt } from "./constants";
import { RequestDialog } from "./requsrDialog/RequestDialog";
import PaginationElement from "../reusableComponet/pagination/PaginationElement";
import { SearchFilterKyc } from "./SearchFilterKyc";

export const KycRequest = () => {
  const [requestData, setRequestData] = useState<unknown[]>([]);
  const [filteredData, setFilteredData] = useState<unknown[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showLoader, setShowLoader] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState({
    isDialogOpen: false,
    item: {},
  });

  useEffect(() => {
    getSummaryList();
  }, []);

  const getSummaryList = async () => {
    setShowLoader(true);
    const summaryList = await getAllRequests();
    if (summaryList) {
      setShowLoader(false);
      setRequestData(summaryList);
      setFilteredData(sortByCreatedAt(summaryList));
    } else {
      setShowLoader(false);
    }
  };

  const handleRequestedData = async (reqId: string) => {
    const resp = await getDataByRequestId(reqId);
    setShowLoader(true);
    if (resp) {
      setShowLoader(false);
      setSelectedRequest({ isDialogOpen: true, item: resp });
    }
  };

  return (
    <>
      {showLoader && <CircleLoader />}

      <Box sx={{ marginTop: 3, padding: 3 }}>
        <Typography className="mb-5" variant="h4" align="center" gutterBottom>
          Request Summary
        </Typography>

        <SearchFilterKyc
          requestData={requestData}
          setFilteredData={setFilteredData}
        />

        {/* Table Section */}
        <Box sx={{ width: "100%", marginTop: "3rem" }}>
          <TableContainer component={Paper}>
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
                    Created On
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Workflow Name
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
                {filteredData
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((item: any, index: number) => (
                    <TableRow hover key={index}>
                      <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                      <TableCell>
                        <Typography variant="subtitle1">
                          {item?.customerIdentifier}
                        </Typography>
                        <Typography variant="caption" display="block">
                          {item?.id}
                        </Typography>
                        <Typography variant="caption" display="block">
                          {item?.referenceId}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {createdDate(item?.accessToken?.createdAt)}
                      </TableCell>
                      <TableCell>
                        {item?.workflowName}
                      </TableCell>
                      <TableCell>
                        {item?.status === "requested" ? (
                          <StatusTag status={statusColors?.verificationPending}>
                            {allStatus?.verificationPending}
                          </StatusTag>
                        ) : item?.status === "Approved" ? (
                          <StatusTag status={statusColors?.approved}>
                            {allStatus?.approved}
                          </StatusTag>
                        ) : item?.status === "Rejected" ? (
                          <StatusTag status={statusColors?.rejected}>
                            {allStatus?.rejected}
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
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          {filteredData?.length > 0 && (
            <PaginationElement
              count={filteredData?.length}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              page={page}
              setPage={setPage}
            />
          )}
        </Box>
      </Box>

      <RequestDialog
        data={selectedRequest}
        setSelectedRequest={setSelectedRequest}
        selectedRequest={selectedRequest}
      />
    </>
  );
};
