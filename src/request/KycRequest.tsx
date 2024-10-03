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
} from "@mui/material";
import React, { useEffect, useState } from "react";

const data: any = [
  {
    custIdentifier: "test@gamil.com",
    kid: "KID1234564556",
    cnr: "CNR4566907778",
    cratedDate: "12/10/24",
    status: "pending",
  },
];

export const KycRequest = () => {
  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    setRequestData(data);
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <TableContainer style={{ marginTop: "5rem", width: "100%" }}>
        <Table
          sx={{
            width: "100%",
            th: { border: 1, borderCollapse: "collapse", color: "gray" },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Sr. No.</TableCell>
              <TableCell align="center" style={{ width: "4rem" }}>
                Customer Detail
              </TableCell>
              <TableCell align="center">Created At</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requestData?.map((item: any, index: number) => {
              return (
                <TableRow key={index} sx={{ " td,  th": { border: 1 } }}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell style={{ width: "4rem" }}>
                    <h6>{item?.custIdentifier}</h6>
                    <small>{item?.kid}</small>
                    <br />
                    <small>{item?.cnr}</small>
                  </TableCell>
                  <TableCell>{item?.cratedDate}</TableCell>
                  <TableCell>{item?.status}</TableCell>
                  <TableCell>
                    <Button>Click</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
