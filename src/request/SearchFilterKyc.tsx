import {
  TextField,
  MenuItem,
  Grid,
  InputAdornment,
  IconButton,
  Card,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export const SearchFilterKyc = ({ requestData, setFilteredData }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    filterData();
  }, [requestData, searchTerm, statusFilter, dateFilter]);

  const filterData = () => {
    let filtered = requestData;

    // Search filtering
    if (searchTerm) {
      filtered = filtered.filter(
        (item: any) =>
          item?.customerIdentifier
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item?.referenceId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item?.id?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filtering
    if (statusFilter) {
      filtered = filtered.filter((item: any) => item?.status === statusFilter);
    }

    // Date filtering
    if (dateFilter) {
      filtered = filtered.filter(
        (item: any) =>
          new Date(item?.accessToken?.createdAt).toLocaleDateString() ===
          new Date(dateFilter).toLocaleDateString()
      );
    }

    setFilteredData(filtered);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
    setDateFilter("");
    setFilteredData(requestData);
  };

  return (
    <>
      {/* Search and Filter Section */}
      {/* <Card sx={{ padding: 3, marginBottom: 3 }}> */}
      <Grid container spacing={2}>
        {/* Search Input */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Search by Customer, Reference or ID"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <Search />
            //     </InputAdornment>
            //   ),
            // }}
          />
        </Grid>

        {/* Status Filter */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            label="Filter by Status"
            InputLabelProps={{ shrink: true }}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            fullWidth
          >
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="requested">Verification Pending</MenuItem>
            <MenuItem value="reviewed">Review Pending</MenuItem>
          </TextField>
        </Grid>

        {/* Date Filter */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            type="date"
            label="Filter by Date"
            InputLabelProps={{ shrink: true }}
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Clear Filters Button */}
        <Grid item xs={12} sm={6} md={2} display="flex" alignItems="center">
          <Button
            variant="contained"
            fullWidth
            // startIcon={<Clear />}
            onClick={handleClearFilters}
          >
            Clear Filters
          </Button>
        </Grid>
      </Grid>
      {/* </Card> */}
    </>
  );
};
