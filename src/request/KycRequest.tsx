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
import { getAllRequests } from "../api/ApiServices";
import CircleLoader from "../reusableComponet/loader/CircleLoader";
import { statusColors, StatusTag } from "./SummaryStyled";
import { createdDate } from "./constants";
import { RequestDialog } from "./requsrDialog/RequestDialog";
import PaginationElement from "../reusableComponet/pagination/PaginationElement";

const data: any = [
  {
    number: 1,
    id: "KID241003172435158W8IO39TUX7E5RG",
    status: "requested",
    customerIdentifier: "raja.soni@mresult.com",
    referenceId: "CRN241003172435157YY",
    transactionId: "CRN241003172435157YY",
    customerName: "",
    expireInDays: 10,
    reminderRegistered: false,
    workflowName: "AADHAR_VARIFICATION",
    autoApproved: false,
    templateId: "KTP240925153829472IIR9ZUDHHPMVAP",
    accessToken: {
      entityId: "KID241003172435158W8IO39TUX7E5RG",
      accessTokenId: "GWT241003172435201XADFSTQNEL7J9S",
      validTill: "2024-10-04T17:24:35",
      createdAt: "2024-10-03T17:24:35",
    },
  },
  {
    number: 2,
    id: "KID241003172638119KDMZ4VA7SQUUIW",
    status: "requested",
    customerIdentifier: "raja.soni@mresult.com",
    referenceId: "CRN241003172638119JI",
    transactionId: "CRN241003172638119JI",
    customerName: "",
    expireInDays: 10,
    reminderRegistered: false,
    workflowName: "AADHAR_VARIFICATION",
    autoApproved: false,
    templateId: "KTP240925153829472IIR9ZUDHHPMVAP",
    accessToken: {
      entityId: "KID241003172638119KDMZ4VA7SQUUIW",
      accessTokenId: "GWT241003172638165LD6H4BGXVF1DOS",
      validTill: "2024-10-04T17:26:38",
      createdAt: "2024-10-03T17:26:38",
    },
  },
  {
    number: 3,
    id: "KID241003172746381S6ZAW44FSPUWHV",
    status: "requested",
    customerIdentifier: "raja.soni@mresult.com",
    referenceId: "CRN241003172746381AU",
    transactionId: "CRN241003172746381AU",
    customerName: "",
    expireInDays: 10,
    reminderRegistered: false,
    workflowName: "AADHAR_VARIFICATION",
    autoApproved: false,
    templateId: "KTP240925153829472IIR9ZUDHHPMVAP",
    accessToken: {
      entityId: "KID241003172746381S6ZAW44FSPUWHV",
      accessTokenId: "GWT241003172746423642GDF7WBIMTUS",
      validTill: "2024-10-04T17:27:46",
      createdAt: "2024-10-03T17:27:46",
    },
  },
  {
    number: 4,
    id: "KID241003173219486YPFZK2TDVW2ZHQ",
    status: "requested",
    customerIdentifier: "raja.soni@mresult.com",
    referenceId: "CRN241003173219486SU",
    transactionId: "CRN241003173219486SU",
    customerName: "",
    expireInDays: 10,
    reminderRegistered: false,
    workflowName: "AADHAR_VARIFICATION",
    autoApproved: false,
    templateId: "KTP240925153829472IIR9ZUDHHPMVAP",
    accessToken: {
      entityId: "KID241003173219486YPFZK2TDVW2ZHQ",
      accessTokenId: "GWT241003173219534GD474LCXNAOX7S",
      validTill: "2024-10-04T17:32:19",
      createdAt: "2024-10-03T17:32:19",
    },
  },
];

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
      setRequestData(data);
    } else {
      setShowLoader(false);
    }
  };

  const handleRequestedData = (item: any) => {
    setSelectedRequest({ isDialogOpen: true, item: item });
    // setOpen(true);
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
                              Verification pending{" "}
                            </StatusTag>
                          ) : (
                            <StatusTag status={statusColors?.reviewPending}>
                              Verification pending{" "}
                            </StatusTag>
                          )}
                        </TableCell>
                        <TableCell>
                          <Button onClick={() => handleRequestedData(item)}>
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
