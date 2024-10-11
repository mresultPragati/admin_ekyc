import {
  TextField,
  MenuItem,
  Grid,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SearchIcon from "@mui/icons-material/Search";

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
      filtered = filtered.filter((item: any) => {
        const searchLower = searchTerm.toLowerCase();
        const customerIdentifier =
          item?.customerIdentifier?.toLowerCase() || "";
        const referenceId = item?.referenceId?.toLowerCase() || "";
        const id = item?.id?.toLowerCase() || "";

        return (
          customerIdentifier.includes(searchLower) ||
          referenceId.includes(searchLower) ||
          id.includes(searchLower)
        );
      });
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
    setFilteredData(requestData); // Reset to the original unfiltered data
  };

  return (
    <>
      {/* Search and Filter Section */}
      <Grid container spacing={3}>
        {/* Search Input */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Search by Customer, Reference or ID"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Status Filter */}
        <Grid item xs={12} sm={6} md={4}>
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
            <MenuItem value="approved">Approved</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
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
        <Grid item xs={12} sm={6} md={1} display="flex" alignItems="center">
          <Tooltip title="Clear Filters">
            <IconButton size="medium" onClick={handleClearFilters}>
              <CancelOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};
